
import { University } from "@/types";

function parseRange(rangeStr: string): [number, number] {
    if (typeof rangeStr !== 'string' || rangeStr.trim() === '--' || rangeStr.trim() === 'NA') {
        return [0, Infinity];
    }
    const numbers = rangeStr.match(/\d+(\.\d+)?/g);
    if (!numbers) return [0, Infinity];
    if (numbers.length === 1) {
        if (rangeStr.includes('Above')) {
             return [parseFloat(numbers[0]), Infinity];
        }
        return [parseFloat(numbers[0]), parseFloat(numbers[0])];
    }
    const sorted = numbers.map(n => parseFloat(n)).sort((a, b) => a - b);
    return [sorted[0], sorted[1]];
}

function parseAcademicPercentage(percentageStr: string): number {
    if (typeof percentageStr !== 'string' || percentageStr.trim() === '--' || percentageStr.trim() === 'NA') {
        return 0;
    }
    // Handle formats like "7.2/70" -> 70 or "65 Above" -> 65
    const parts = percentageStr.split('/');
    const lastPart = parts[parts.length - 1];
    const numbers = lastPart.match(/\d+(\.\d+)?/g);
    return numbers ? parseFloat(numbers[0]) : 0;
}


export function matchUniversities(
  country: "USA" | "UK",
  userInput: any,
  universityData: University[]
): University[] {
    
  const userScores = {
    IELTS: parseFloat(userInput.IELTS) || 0,
    TOEFL: parseFloat(userInput.TOEFL) || 0,
    GRE: parseFloat(userInput.GRE) || 0,
    "Academic percentage": parseFloat(userInput["Academic percentage"]) || 0,
    Backlogs: parseInt(userInput.Backlogs, 10),
    MOI: userInput.MOI,
    "Inter 1st and 2nd year marks": parseFloat(userInput["Inter 1st and 2nd year marks"]) || 0,
    Percentage: parseFloat(userInput.Percentage) || 0,
  };

  const scoredUniversities = universityData
    .map((uni) => {
      let score = 0;
      let conditionsMet = 0;
      let conditionsCount = 0;

      if (country === "USA") {
        const reqs = uni.requirements;
        
        // IELTS
        if (userScores.IELTS > 0) {
            conditionsCount++;
            const uniIELTS = typeof reqs.IELTS === 'number' ? reqs.IELTS : 0;
            if (userScores.IELTS >= uniIELTS) {
                score += 10;
                conditionsMet++;
            }
        }
        
        // TOEFL
        if (userScores.TOEFL > 0) {
            conditionsCount++;
            const uniTOEFL = typeof reqs.TOEFL === 'number' ? reqs.TOEFL : 0;
            if (userScores.TOEFL >= uniTOEFL) {
                score += 10;
                conditionsMet++;
            }
        }

        // GRE
        if (userScores.GRE > 0 && reqs.GRE && reqs.GRE !== '--') {
            conditionsCount++;
            if (userScores.GRE >= (reqs.GRE as number)) {
                score += 10;
                conditionsMet++;
            }
        }

        // Academic Percentage
        if (userScores["Academic percentage"] > 0) {
            conditionsCount++;
            const uniPercentage = parseAcademicPercentage(reqs["Academic percentage"] as string);
            if (userScores["Academic percentage"] >= uniPercentage) {
                score += 15;
                conditionsMet++;
            }
        }
        
        // Backlogs
        if (!isNaN(userScores.Backlogs)) {
             conditionsCount++;
             const [minBacklogs, maxBacklogs] = parseRange(reqs.Backlogs as string);
             if (userScores.Backlogs <= maxBacklogs) {
                 score += 5;
                 conditionsMet++;
             }
        }

      } else if (country === "UK") {
          const reqs = uni.requirements;
          
          // MOI
          if(userScores.MOI) {
              conditionsCount++;
              if (reqs.MOI === 'Yes' && userScores.MOI === 'Yes') {
                  score += 20; // High score if MOI is accepted and user has it
                  conditionsMet++;
              } else if (reqs.MOI !== 'Yes' || userScores.MOI !== 'Yes') {
                  // This branch handles cases where other scores are needed
              }
          }

          // Inter Marks
          if (userScores["Inter 1st and 2nd year marks"] > 0 && reqs["Inter 1st and 2nd year marks"]) {
              conditionsCount++;
              const uniInterMarks = parseAcademicPercentage(reqs["Inter 1st and 2nd year marks"] as string);
              if (userScores["Inter 1st and 2nd year marks"] >= uniInterMarks) {
                  score += 10;
                  conditionsMet++;
              }
          }

          // Percentage
          if (userScores.Percentage > 0) {
              conditionsCount++;
              const uniPercentage = parseAcademicPercentage(reqs.Percentage as string);
              if (userScores.Percentage >= uniPercentage) {
                  score += 15;
                  conditionsMet++;
              }
          }
      }

      // Add a bonus for having a scholarship
      if (uni.scholarship && uni.scholarship !== "Not specified") {
        score += 5;
      }
      
      // Only include universities that meet at least one condition
      return { ...uni, score: conditionsMet > 0 ? score : -1, conditionsMet, conditionsCount };
    })
    .filter(uni => uni.score > -1);

  // Sort by the number of conditions met, then by score
  scoredUniversities.sort((a, b) => {
      if (b.conditionsMet !== a.conditionsMet) {
          return b.conditionsMet - a.conditionsMet;
      }
      return b.score - a.score;
  });

  return scoredUniversities;
}
