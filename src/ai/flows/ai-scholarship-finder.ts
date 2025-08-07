'use server';

/**
 * @fileOverview AI-powered scholarship finder flow.
 *
 * - findScholarships - A function that takes student's qualifications and preferences and returns a list of relevant masters scholarships.
 * - ScholarshipFinderInput - The input type for the findScholarships function.
 * - ScholarshipFinderOutput - The return type for the findScholarships function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ScholarshipFinderInputSchema = z.object({
  academicProfile: z.string().describe('Description of academic qualifications.'),
  testScores: z.string().describe('Standardized test scores (e.g., GRE, GMAT, IELTS).'),
  desiredFieldOfStudy: z.string().describe('The desired field of study for masters program.'),
  universityPreferences: z.string().optional().describe('Preferred universities (if any).'),
  demographicInfo: z.string().optional().describe('Demographic information that might affect scholarship eligibility.'),
  otherRelevantInfo: z.string().optional().describe('Any other information relevant to scholarship search.'),
});
export type ScholarshipFinderInput = z.infer<typeof ScholarshipFinderInputSchema>;

const ScholarshipFinderOutputSchema = z.object({
  scholarships: z.array(
    z.object({
      name: z.string().describe('The name of the scholarship.'),
      description: z.string().describe('A brief description of the scholarship.'),
      amount: z.string().describe('The amount of the scholarship.'),
      deadline: z.string().describe('The application deadline for the scholarship.'),
      eligibilityCriteria: z.string().describe('The eligibility criteria for the scholarship.'),
      applicationLink: z.string().describe('Link to the scholarship application.'),
    })
  ).describe('A list of relevant scholarships.'),
});
export type ScholarshipFinderOutput = z.infer<typeof ScholarshipFinderOutputSchema>;

export async function findScholarships(input: ScholarshipFinderInput): Promise<ScholarshipFinderOutput> {
  return scholarshipFinderFlow(input);
}

const scholarshipFinderPrompt = ai.definePrompt({
  name: 'scholarshipFinderPrompt',
  input: {schema: ScholarshipFinderInputSchema},
  output: {schema: ScholarshipFinderOutputSchema},
  prompt: `You are an AI assistant specialized in finding masters scholarships for students.

  Based on the student's academic qualifications, test scores, desired field of study, and any other relevant information provided, you will compile a list of relevant scholarships.

  Consider factors such as university, degree, field, demographics, and other eligibility criteria when identifying suitable scholarships.

  Student Academic Profile: {{{academicProfile}}}
  Test Scores: {{{testScores}}}
  Desired Field of Study: {{{desiredFieldOfStudy}}}
  University Preferences: {{{universityPreferences}}}
  Demographic Info: {{{demographicInfo}}}
  Other Relevant Info: {{{otherRelevantInfo}}}

  Return a JSON object containing a list of scholarships, with each scholarship including name, description, amount, deadline, eligibility criteria, and application link.
  `,
});

const scholarshipFinderFlow = ai.defineFlow(
  {
    name: 'scholarshipFinderFlow',
    inputSchema: ScholarshipFinderInputSchema,
    outputSchema: ScholarshipFinderOutputSchema,
  },
  async input => {
    const {output} = await scholarshipFinderPrompt(input);
    return output!;
  }
);
