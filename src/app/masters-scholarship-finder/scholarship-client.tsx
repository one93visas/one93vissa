"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  findScholarships,
  type ScholarshipFinderInput,
  type ScholarshipFinderOutput,
} from "@/ai/flows/ai-scholarship-finder";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Sparkles, ExternalLink, School, DollarSign, Calendar, Target } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const ScholarshipFinderSchema = z.object({
  academicProfile: z.string().min(10, "Please provide more details about your academic profile."),
  testScores: z.string().min(3, "Please enter your test scores."),
  desiredFieldOfStudy: z.string().min(3, "Please specify your desired field of study."),
  universityPreferences: z.string().optional(),
  demographicInfo: z.string().optional(),
  otherRelevantInfo: z.string().optional(),
});

function ScholarshipResults({ results }: { results: ScholarshipFinderOutput }) {
    if (results.scholarships.length === 0) {
        return (
            <Card className="mt-12">
                <CardHeader>
                    <CardTitle className="font-headline text-center">No Scholarships Found</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-center text-foreground/80">
                        We couldn't find any scholarships matching your specific criteria. Try broadening your search terms.
                    </p>
                </CardContent>
            </Card>
        )
    }

  return (
    <div className="mt-12 space-y-6">
        <h2 className="text-3xl font-headline font-bold text-primary text-center">Recommended Scholarships</h2>
      {results.scholarships.map((scholarship, index) => (
        <Card key={index} className="overflow-hidden transition-shadow duration-300 hover:shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-xl text-primary">{scholarship.name}</CardTitle>
            <CardDescription>{scholarship.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-accent" />
                    <div>
                        <p className="font-semibold">Amount</p>
                        <p className="text-sm text-foreground/80">{scholarship.amount}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-accent" />
                    <div>
                        <p className="font-semibold">Deadline</p>
                        <p className="text-sm text-foreground/80">{scholarship.deadline}</p>
                    </div>
                </div>
            </div>
            <div className="flex items-start gap-2">
                <Target className="h-5 w-5 flex-shrink-0 text-accent mt-1" />
                <div>
                    <p className="font-semibold">Eligibility</p>
                    <p className="text-sm text-foreground/80">{scholarship.eligibilityCriteria}</p>
                </div>
            </div>
          </CardContent>
          <CardFooter className="bg-secondary/50 p-4">
            <Button asChild>
              <a href={scholarship.applicationLink} target="_blank" rel="noopener noreferrer">
                Apply Now <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

function LoadingSkeleton() {
    return (
        <div className="mt-12 space-y-6">
            <Skeleton className="h-8 w-1/2 mx-auto" />
            {[...Array(3)].map((_, i) => (
                <Card key={i}>
                    <CardHeader>
                        <Skeleton className="h-6 w-3/4" />
                        <Skeleton className="h-4 w-full mt-2" />
                        <Skeleton className="h-4 w-5/6 mt-1" />
                    </CardHeader>
                    <CardContent className="space-y-4">
                       <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <Skeleton className="h-5 w-24 mb-1" />
                                <Skeleton className="h-4 w-32" />
                            </div>
                            <div>
                                <Skeleton className="h-5 w-24 mb-1" />
                                <Skeleton className="h-4 w-32" />
                            </div>
                        </div>
                        <div>
                            <Skeleton className="h-5 w-24 mb-1" />
                            <Skeleton className="h-4 w-full" />
                        </div>
                    </CardContent>
                    <CardFooter>
                         <Skeleton className="h-10 w-32" />
                    </CardFooter>
                </Card>
            ))}
        </div>
    )
}

export default function ScholarshipClient() {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<ScholarshipFinderOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<ScholarshipFinderInput>({
    resolver: zodResolver(ScholarshipFinderSchema),
  });

  const onSubmit: SubmitHandler<ScholarshipFinderInput> = async (data) => {
    setIsLoading(true);
    setResults(null);
    try {
      const scholarshipResults = await findScholarships(data);
      setResults(scholarshipResults);
    } catch (error) {
      console.error("Failed to find scholarships:", error);
      toast({
        variant: "destructive",
        title: "An error occurred",
        description: "Failed to fetch scholarship recommendations. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Card className="bg-secondary/50">
        <CardHeader>
            <CardTitle className="font-headline text-2xl">Your Profile</CardTitle>
            <CardDescription>The more details you provide, the better our AI can match you with scholarships.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="academicProfile"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Academic Profile</FormLabel>
                    <FormControl>
                      <Textarea placeholder="e.g., Bachelor of Engineering in Computer Science, 8.5/10 GPA from University of Delhi..." {...field} />
                    </FormControl>
                    <FormDescription>
                      Describe your degree, major, GPA, university, and any honors or awards.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="testScores"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Test Scores</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., GRE: 320, TOEFL: 110, IELTS: 7.5" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="desiredFieldOfStudy"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Desired Field of Study for Masters</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Artificial Intelligence, Data Science, MBA" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="universityPreferences"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>University Preferences (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Universities in Canada, MIT, Stanford" {...field} />
                    </FormControl>
                    <FormDescription>
                      List any preferred universities or countries.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="demographicInfo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Demographic Information (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Female in STEM, citizen of India" {...field} />
                    </FormControl>
                     <FormDescription>
                      Some scholarships are based on demographic criteria.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="otherRelevantInfo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Other Relevant Information (Optional)</FormLabel>
                    <FormControl>
                      <Textarea placeholder="e.g., Work experience, research papers, volunteer work..." {...field} />
                    </FormControl>
                     <FormDescription>
                      Include anything else that might be relevant for scholarships.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full font-bold">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Finding Scholarships...
                  </>
                ) : (
                    <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Find My Scholarships
                    </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      {isLoading && <LoadingSkeleton />}
      {results && <ScholarshipResults results={results} />}

    </div>
  );
}
