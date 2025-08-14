
import { University } from "@/types";

export function convertToUniversities(
  rawUniversities: any[],
  country: "USA" | "UK"
): University[] {
  return rawUniversities.map((item) => {
    const { university, "College name": collegeName, Scholarship, ...requirements } = item;
    
    // Normalize university name
    const uniName = country === 'UK' ? collegeName : university;

    return {
      university: uniName,
      country: country,
      scholarship: Scholarship || "Not specified",
      requirements: requirements,
    };
  });
}

    