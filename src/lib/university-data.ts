
import { University } from "@/types";
import { convertToUniversities } from "@/lib/utils/dataConverter";

// Raw US universities data in the requested format
const usUniversitiesRaw = [
  {
  "university": "John hopkins university",
  "IELTS": 7,
  "TOEFL": 100,
  "IELTS\/DET": 120,
  "GRE": "--",
  "Academic percentage": "7.2\/70",
  "Backlogs": "0-4",
  "Scholarship": "upto 5000 - 10000"
 },
 {
  "university": "Arizona state university",
  "IELTS": 7,
  "TOEFL": 80,
  "IELTS\/DET": 115,
  "GRE": "--",
  "Academic percentage": "7.2\/70",
  "Backlogs": "0-5",
  "Scholarship": "upto 50% merit based"
 },
 {
  "university": "Northern arizona university",
  "IELTS": 6.5,
  "TOEFL": 80,
  "IELTS\/DET": 105,
  "GRE": "--",
  "Academic percentage": "7.2\/70",
  "Backlogs": "0-4",
  "Scholarship": "25000 USD"
 },
 {
  "university": "Dallas baptist university",
  "IELTS": 6,
  "TOEFL": 79,
  "IELTS\/DET": 110,
  "GRE": "--",
  "Academic percentage": "6.5\/65",
  "Backlogs": "0-20",
  "Scholarship": "5000-10000 USD"
 },
 {
  "university": "University of bridgeport",
  "IELTS": 6,
  "TOEFL": 80,
  "IELTS\/DET": 90,
  "GRE": 300,
  "Academic percentage": "6.5\/65",
  "Backlogs": "0-15",
  "Scholarship": "12000 USD"
 },
 {
  "university": "university of arizona",
  "IELTS": 6,
  "TOEFL": 79,
  "IELTS\/DET": "NA",
  "GRE": "--",
  "Academic percentage": "6.8- \/70",
  "Backlogs": "0-5",
  "Scholarship": "10000 USD"
 },
 {
  "university": "Wright state university",
  "IELTS": 6,
  "TOEFL": 79,
  "IELTS\/DET": 120,
  "GRE": "--",
  "Academic percentage": "6.8\/70",
  "Backlogs": "0-6",
  "Scholarship": "10000 USD"
 },
 {
  "university": "Texas state university",
  "IELTS": 6,
  "TOEFL": 78,
  "IELTS\/DET": 110,
  "GRE": 286,
  "Academic percentage": "6.8- \/70",
  "Backlogs": "0-20",
  "Scholarship": "5000 USD-10000 USD"
 },
 {
  "university": "Montana state university",
  "IELTS": 6.5,
  "TOEFL": 80,
  "IELTS\/DET": 120,
  "GRE": "--",
  "Academic percentage": "6.8\/70",
  "Backlogs": "0-10",
  "Scholarship": "5000 USD"
 },
 {
  "university": "Sacred heart university",
  "IELTS": 6,
  "TOEFL": 80,
  "IELTS\/DET": 105,
  "GRE": "--",
  "Academic percentage": "6.8- \/70",
  "Backlogs": "0-2",
  "Scholarship": "5000 USD"
 },
 {
  "university": "Central michigan university",
  "IELTS": 6.5,
  "TOEFL": 79,
  "IELTS\/DET": 100,
  "GRE": "--",
  "Academic percentage": "6.8\/70",
  "Backlogs": "0-8",
  "Scholarship": "6000 USD"
 },
 {
  "university": "Florida institute of technology",
  "IELTS": 6.5,
  "TOEFL": 80,
  "IELTS\/DET": 105,
  "GRE": "--",
  "Academic percentage": "6.8- \/70",
  "Backlogs": "0-4",
  "Scholarship": "10-20 % of Tution Fee"
 },
 {
  "university": "seattle university",
  "IELTS": 6.5,
  "TOEFL": 86,
  "IELTS\/DET": 120,
  "GRE": "--",
  "Academic percentage": "6.8\/70",
  "Backlogs": "0-10",
  "Scholarship": "10000 USD"
 },
 {
  "university": "University of Cincinnati",
  "IELTS": 6.5,
  "TOEFL": 80,
  "IELTS\/DET": 110,
  "GRE": "--",
  "Academic percentage": "6.8- \/70",
  "Backlogs": "0-4",
  "Scholarship": "upto 20% Tution Fee"
 },
 {
  "university": "New jersey institute of technology",
  "IELTS": 6.5,
  "TOEFL": 79,
  "IELTS\/DET": 120,
  "GRE": 305,
  "Academic percentage": "6.8\/70",
  "Backlogs": "0-5",
  "Scholarship": "16000 USD merit based"
 },
 {
  "university": "virginia tech",
  "IELTS": 6.5,
  "TOEFL": 74,
  "IELTS\/DET": 115,
  "GRE": "--",
  "Academic percentage": "6.8 \/70",
  "Backlogs": "0-4",
  "Scholarship": "upto 5000 USD- 10000 USD"
 },
 {
  "university": "University of New Haven",
  "IELTS": 6,
  "TOEFL": 75,
  "IELTS\/DET": 105,
  "GRE": "--",
  "Academic percentage": "6.8\/70",
  "Backlogs": "0-6",
  "Scholarship": "30% of Tution Fee"
 },
 {
  "university": "cleveland state university",
  "IELTS": 6,
  "TOEFL": 78,
  "IELTS\/DET": 105,
  "GRE": "--",
  "Academic percentage": "6.8- \/70",
  "Backlogs": "0-15",
  "Scholarship": "4000 USD"
 },
 {
  "university": "webster university missouri",
  "IELTS": 6,
  "TOEFL": 80,
  "IELTS\/DET": 110,
  "GRE": "--",
  "Academic percentage": "6.8\/70",
  "Backlogs": "0-14",
  "Scholarship": "4000 USD - 6000 USD"
 },
 {
  "university": "(INTO) Saint Louis University",
  "IELTS": 6.5,
  "TOEFL": 80,
  "IELTS\/DET": 110,
  "GRE": "--",
  "Academic percentage": "6.8- \/70",
  "Backlogs": "0-5",
  "Scholarship": "8000 USD - 12000 USD"
 },
 {
  "university": "University of the Potomac",
  "IELTS": 6.5,
  "TOEFL": 79,
  "IELTS\/DET": 90,
  "GRE": "--",
  "Academic percentage": "5.8\/55",
  "Backlogs": "0-40",
  "Scholarship": "20000 USD"
 },
 {
  "university": "Auburn University at Montgomery",
  "IELTS": 5.5,
  "TOEFL": 61,
  "IELTS\/DET": 100,
  "GRE": "--",
  "Academic percentage": "5.8\/55",
  "Backlogs": "0-40",
  "Scholarship": "5000 USD - 10000 USD"
 },
 {
  "university": "(Study Group) Long Island University Brooklyn (LIU Brooklyn)",
  "IELTS": 6,
  "TOEFL": 65,
  "IELTS\/DET": 100,
  "GRE": "--",
  "Academic percentage": "6.5\/65",
  "Backlogs": "0-14",
  "Scholarship": "6000 USD -  8000 USD"
 },
 {
  "university": "University of north texas",
  "IELTS": 6,
  "TOEFL": 79,
  "IELTS\/DET": 100,
  "GRE": 303,
  "Academic percentage": "3.0",
  "Backlogs": "0-6",
  "Scholarship": "upto 80% of Tution Fee"
 },
 {
  "university": "Bay atlantic university",
  "IELTS": 6.5,
  "TOEFL": 80,
  "IELTS\/DET": 90,
  "GRE": "--",
  "Academic percentage": "Jun-60",
  "Backlogs": "0-14",
  "Scholarship": "22000 USD"
 },
 {
  "university": "Lewis university",
  "IELTS": 6.5,
  "TOEFL": 79,
  "IELTS\/DET": 105,
  "GRE": "--",
  "Academic percentage": "2.75",
  "Backlogs": "0-50",
  "Scholarship": "10000 USD"
 },
 {
  "university": "(INTO) University of Alabama at Birmingham",
  "IELTS": 6.5,
  "TOEFL": 80,
  "IELTS\/DET": 120,
  "GRE": "--",
  "Academic percentage": "6.8\/70",
  "Backlogs": "0-4",
  "Scholarship": "5000 USD - 10000 USD"
 },
 {
  "university": "Robert morris",
  "IELTS": 6,
  "TOEFL": 80,
  "IELTS\/DET": 95,
  "GRE": 296,
  "Academic percentage": "6.8\/70",
  "Backlogs": "0-4",
  "Scholarship": "10000 USD"
 },
 {
  "university": "(Shorelight) University of the Pacific",
  "IELTS": 6.5,
  "TOEFL": 80,
  "IELTS\/DET": 105,
  "GRE": "--",
  "Academic percentage": "6.8\/70",
  "Backlogs": "0-20",
  "Scholarship": "4000 USD"
 },
 {
  "university": "Pace university",
  "IELTS": 6.5,
  "TOEFL": 78,
  "IELTS\/DET": 115,
  "GRE": "--",
  "Academic percentage": "6.8\/70",
  "Backlogs": "0-6",
  "Scholarship": "4000 USD"
 },
 {
  "university": "UMASS boston",
  "IELTS": 6.5,
  "TOEFL": 90,
  "IELTS\/DET": 110,
  "GRE": 300,
  "Academic percentage": "6.8\/70",
  "Backlogs": "0-4",
  "Scholarship": "5000-8000 USD"
 },
 {
  "university": "(INTO) George Mason University",
  "IELTS": 6.5,
  "TOEFL": 80,
  "IELTS\/DET": 120,
  "GRE": "--",
  "Academic percentage": "6.8\/70",
  "Backlogs": "0-4",
  "Scholarship": "upto 10000 USD"
 },
 {
  "university": "Lawrence Technological University",
  "IELTS": 6,
  "TOEFL": 79,
  "IELTS\/DET": 105,
  "GRE": "--",
  "Academic percentage": "6.8\/70",
  "Backlogs": "0-10",
  "Scholarship": "5000 USD"
 },
 {
  "university": "Stevens university",
  "IELTS": 6,
  "TOEFL": 74,
  "IELTS\/DET": 105,
  "GRE": 300,
  "Academic percentage": "7.5\/75",
  "Backlogs": "0-20",
  "Scholarship": "10000 USD"
 },
 {
  "university": "Western New England University",
  "IELTS": 6,
  "TOEFL": 80,
  "IELTS\/DET": 100,
  "GRE": "--",
  "Academic percentage": "6.5\/65",
  "Backlogs": "0-25",
  "Scholarship": "6000 USD"
 },
 {
  "university": "Oregon state university",
  "IELTS": 6.5,
  "TOEFL": 80,
  "IELTS\/DET": 110,
  "GRE": "--",
  "Academic percentage": "7.5\/75",
  "Backlogs": "0-4",
  "Scholarship": "6000 - 12000 USD"
 },
 {
  "university": "University of Albany, The State University of New York, Albany (SUNY Albany)",
  "IELTS": 6.5,
  "TOEFL": 79,
  "IELTS\/DET": 110,
  "GRE": "--",
  "Academic percentage": "6.8\/70",
  "Backlogs": "0-15",
  "Scholarship": "5000 USD"
 },
 {
  "university": "DePaul University",
  "IELTS": 7,
  "TOEFL": 96,
  "IELTS\/DET": 115,
  "GRE": "--",
  "Academic percentage": "6.5\/65",
  "Backlogs": "0-12",
  "Scholarship": "upto 15000 USD"
 },
 {
  "university": "(INTO) Hofstra University",
  "IELTS": 6.5,
  "TOEFL": 80,
  "IELTS\/DET": 120,
  "GRE": "--",
  "Academic percentage": "6.8\/70",
  "Backlogs": "--",
  "Scholarship": "4000 USD"
 },
 {
  "university": "Drexel University",
  "IELTS": 6.5,
  "TOEFL": 90,
  "IELTS\/DET": 110,
  "GRE": "--",
  "Academic percentage": "6.8\/70",
  "Backlogs": "0-25",
  "Scholarship": "upto 12000 USD"
 },
 {
  "university": "San Jose State University",
  "IELTS": 7.5,
  "TOEFL": 100,
  "IELTS\/DET": 120,
  "GRE": "--",
  "Academic percentage": "6.8\/70",
  "Backlogs": "0-2",
  "Scholarship": "upto 10000 USD"
 },
 {
  "university": "university of Dayton",
  "IELTS": 6.5,
  "TOEFL": 80,
  "IELTS\/DET": 110,
  "GRE": "--",
  "Academic percentage": "6.5\/65",
  "Backlogs": "0-10",
  "Scholarship": "4000 USD"
 },
 {
  "university": "webster university San antonio",
  "IELTS": 6.5,
  "TOEFL": 80,
  "IELTS\/DET": 110,
  "GRE": "--",
  "Academic percentage": "6.5\/65",
  "Backlogs": "0-14",
  "Scholarship": "4000 USD -6000 USD"
 },
 {
  "university": "Colorado state university",
  "IELTS": 6.5,
  "TOEFL": 80,
  "IELTS\/DET": "NA",
  "GRE": "--",
  "Academic percentage": "6.8\/70",
  "Backlogs": "0-5",
  "Scholarship": "4000 USD -6000 USD"
 },
 {
  "university": "university of maryland baltimore",
  "IELTS": 7,
  "TOEFL": 99,
  "IELTS\/DET": 120,
  "GRE": "--",
  "Academic percentage": "7.2\/70",
  "Backlogs": "0-2",
  "Scholarship": "upto 10000 USD"
 }
];

// Raw UK universities data in the new format
const ukUniversitiesRaw = [
  {
   "College name": "Sheffield Hallam University",
   "MOI": "Yes",
   "Scholarship": "2000 GBP",
   "Percentage": "55 Above"
  },
  {
   "College name": "Heriot Watt University",
   "MOI": "Yes",
   "Scholarship": "1000 GBP",
   "Percentage": "60 Above"
  },
  {
   "College name": "University of Strathclyde",
   "MOI": "Yes",
   "Percentage": "60 Above"
  },
  {
   "College name": "Swansea University",
   "MOI": "Yes",
   "Scholarship": "500 GBP",
   "Percentage": "60 Above"
  },
  {
   "College name": "University of Portsmouth",
   "MOI": "Yes",
   "Percentage": "55 Above"
  },
  {
   "College name": "University of Portsmouth, London",
   "MOI": "Yes",
   "Scholarship": "2000 GBP",
   "Percentage": "55 Above"
  },
  {
   "College name": "University of East London",
   "MOI": "Yes",
   "Percentage": "60 Above"
  },
  {
   "College name": "University of Wolverhampton",
   "MOI": "Yes",
   "Scholarship": "500 GBP",
   "Percentage": "60 Above"
  },
  {
   "College name": "University of the West of Scotland",
   "MOI": "Yes",
   "Percentage": "60 Above"
  },
  {
   "College name": "University of the West of Scotland, London",
   "MOI": "Yes",
   "Percentage": "60 Above"
  },
  {
   "College name": "University of Roehampton",
   "MOI": "Yes",
   "Scholarship": "4000 GBP",
   "Percentage": "60 Above"
  },
  {
   "College name": "University of Wales Trinity Saint David, London",
   "MOI": "Yes",
   "Percentage": "60 Above"
  },
  {
   "College name": "Ravensbourne University London",
   "MOI": "Yes",
   "Scholarship": "3500 GBP",
   "Percentage": "60 Above"
  },
  {
   "College name": "University of Hertfordshire",
   "MOI": "Yes",
   "Scholarship": "3000 GBP",
   "Percentage": "55 Above"
  },
  {
   "College name": "BPP University",
   "MOI": "Yes",
   "Scholarship": "1000 GBP",
   "Percentage": "55 Above"
  },
  {
   "College name": "Birmingham City University",
   "MOI": "Yes",
   "Inter 1st and 2nd year marks": "65 or above",
   "Scholarship": "1000 GBP",
   "Percentage": "55 Above"
  },
  {
   "College name": "Coventry",
   "MOI": "No",
   "Inter 1st and 2nd year marks": "65 or above",
   "Scholarship": "1000 GBP",
   "Percentage": "60 Above"
  },
  {
   "College name": "De Montfort University",
   "MOI": "No",
   "Inter 1st and 2nd year marks": "65 or above",
   "Scholarship": "2000 GBP",
   "Percentage": "65 Above"
  },
  {
   "College name": "Anglia Ruskin University, London",
   "MOI": "No",
   "Inter 1st and 2nd year marks": "65 or above",
   "Scholarship": "2000 GBP",
   "Percentage": "50 Above"
  },
  {
   "College name": "Anglia Ruskin University (Cambridge)",
   "MOI": "No",
   "Inter 1st and 2nd year marks": "65 or above",
   "Scholarship": "2000 GBP",
   "Percentage": "50 Above"
  },
  {
   "College name": "Anglia Ruskin University (Chelmsford)",
   "MOI": "No",
   "Inter 1st and 2nd year marks": "65 or above",
   "Scholarship": "2000 GBP",
   "Percentage": "50 Above"
  },
  {
   "College name": "University College Birmingham",
   "MOI": "No",
   "Inter 1st and 2nd year marks": "65 or above",
   "Scholarship": "2000 GBP",
   "Percentage": "55 above"
  },
  {
   "College name": "University of South Wales",
   "MOI": "No",
   "Inter 1st and 2nd year marks": "65 or above",
   "Scholarship": "2000 GBP",
   "Percentage": "55 above"
  },
  {
   "College name": "Coventry University, London",
   "MOI": "No",
   "Inter 1st and 2nd year marks": "70 or above",
   "Scholarship": "2000 GBP - 4000 GBP",
   "Percentage": "60 Above"
  },
  {
   "College name": "Coventry University, Coventry",
   "MOI": "No",
   "Inter 1st and 2nd year marks": "70 or above",
   "Scholarship": "2000 GBP - 4000 GBP",
   "Percentage": "60 Above"
  },
  {
   "College name": "University of Wolverhampton",
   "MOI": "No",
   "Inter 1st and 2nd year marks": "70 or above",
   "Scholarship": "1000 GBP",
   "Percentage": "60 Above"
  },
  {
   "College name": "University of Hertfordshire",
   "MOI": "No",
   "Inter 1st and 2nd year marks": "70 or above",
   "Scholarship": "1000 GBP",
   "Percentage": "60 Above"
  },
  {
   "College name": "University of Greenwich",
   "MOI": "No",
   "Inter 1st and 2nd year marks": "70 or above",
   "Scholarship": "1000 GBP",
   "Percentage": "75 Above"
  },
  {
   "College name": "Northumbria University, Newcastle",
   "MOI": "No",
   "Inter 1st and 2nd year marks": "70 or above",
   "Scholarship": "2000GBP -7000 GBP",
   "Percentage": "60 Above"
  },
  {
   "College name": "Northumbria University, London",
   "MOI": "No",
   "Inter 1st and 2nd year marks": "70 or above",
   "Scholarship": "2000GBP -7000 GBP",
   "Percentage": "60 Above"
  },
  {
   "College name": "University of Bedfordshire",
   "MOI": "No",
   "Inter 1st and 2nd year marks": "70 or above",
   "Scholarship": "1000 GBP",
   "Percentage": "55 Above"
  },
  {
   "College name": "Queen Mary University of London",
   "MOI": "No",
   "Inter 1st and 2nd year marks": "70 or above",
   "Scholarship": "2000 GBP -5000 GBP",
   "Percentage": "60 Above"
  },
  {
   "College name": "University of Nottingham",
   "MOI": "No",
   "Inter 1st and 2nd year marks": "70 or above",
   "Percentage": "60 Above"
  },
  {
   "College name": "University of Leeds",
   "MOI": "No",
   "Inter 1st and 2nd year marks": "70 or above",
   "Percentage": "60 Above"
  },
  {
   "College name": "University of Birmingham",
   "MOI": "No",
   "Inter 1st and 2nd year marks": "70 or above",
   "Scholarship": "Upto 4000 GBP",
   "Percentage": "55 Above"
  },
  {
   "College name": "Cardiff University",
   "MOI": "No",
   "Inter 1st and 2nd year marks": "70 or above",
   "Scholarship": "2000 GBP",
   "Percentage": "60 Above"
  },
  {
   "College name": "Newcastle University",
   "MOI": "No",
   "Inter 1st and 2nd year marks": "70 or above",
   "Scholarship": "7000 GBP",
   "Percentage": "60 Above"
  },
  {
   "College name": "University of South Wales",
   "MOI": "No",
   "Inter 1st and 2nd year marks": "70 or above",
   "Scholarship": "1000 GBP",
   "Percentage": "60 Above"
  },
  {
   "College name": "University College Birmingham",
   "MOI": "No",
   "Inter 1st and 2nd year marks": "70 or above",
   "Scholarship": "2000 GBP",
   "Percentage": "60 Above"
  },
  {
   "College name": "University of Leicester",
   "MOI": "No",
   "Inter 1st and 2nd year marks": "70 or above",
   "Scholarship": "3000 GBP",
   "Percentage": "60 Above"
  },
  {
   "College name": "Teesside University (London)",
   "MOI": "No",
   "Inter 1st and 2nd year marks": "80 or above",
   "Scholarship": "2000 GBP",
   "Percentage": "55 Above"
  },
  {
   "College name": "Teesside University",
   "MOI": "No",
   "Inter 1st and 2nd year marks": "80 or above",
   "Scholarship": "2000 GBP",
   "Percentage": "55 Above"
  },
  {
   "College name": "Aston University, London",
   "MOI": "No",
   "Inter 1st and 2nd year marks": "80 or above",
   "Scholarship": "2000 GBP - 4000 GBP",
   "Percentage": "60 Above"
  }
];

// Convert the raw US universities data
export const usUniversities: University[] = convertToUniversities(usUniversitiesRaw, "USA");

// Convert the raw UK universities data using the converter
export const ukUniversities: University[] = convertToUniversities(ukUniversitiesRaw, "UK");

// Combine both arrays for the main export
export const universities: University[] = [
  ...usUniversities,
  ...ukUniversities
];

    