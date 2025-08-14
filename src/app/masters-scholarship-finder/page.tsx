
"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usUniversities, ukUniversities } from "@/lib/university-data";
import { University } from "@/types";
import { matchUniversities } from "@/lib/utils/scholarship-matcher";
import { CtaSection } from "@/components/layout/cta-section";
import { GraduationCap, Award } from "lucide-react";
import { cn } from "@/lib/utils";

type Country = "USA" | "UK";

export default function MastersScholarshipFinderPage() {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [suggestedUniversities, setSuggestedUniversities] = useState<University[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const usForm = useForm();
  const ukForm = useForm();

  const onUsSubmit = (data: any) => {
    const suggestions = matchUniversities("USA", data, usUniversities);
    setSuggestedUniversities(suggestions);
    setSubmitted(true);
  };

  const onUkSubmit = (data: any) => {
    const suggestions = matchUniversities("UK", data, ukUniversities);
    setSuggestedUniversities(suggestions);
    setSubmitted(true);
  };

  const handleCountryChange = (value: Country) => {
    setSelectedCountry(value);
    setSuggestedUniversities([]);
    setSubmitted(false);
    usForm.reset();
    ukForm.reset();
  };
  
  const resetFinder = () => {
    setSelectedCountry(null);
    setSuggestedUniversities([]);
    setSubmitted(false);
    usForm.reset();
    ukForm.reset();
  }

  const renderFormFields = (country: Country) => {
    const form = country === "USA" ? usForm : ukForm;
    const fields =
      country === "USA"
        ? ["IELTS", "TOEFL", "GRE", "Academic percentage", "Backlogs"]
        : ["MOI", "Inter 1st and 2nd year marks", "Percentage"];

    return fields.map((field) => (
      <div key={field}>
        <Label htmlFor={field} className="font-semibold">
          {field}
        </Label>
        <Controller
          name={field}
          control={form.control}
          defaultValue=""
          render={({ field: { onChange, value } }) => {
            if (field === 'MOI') {
              return (
                <Select onValueChange={onChange} defaultValue={value}>
                  <SelectTrigger id={field}>
                    <SelectValue placeholder="Select MOI status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Yes">Yes</SelectItem>
                    <SelectItem value="No">No</SelectItem>
                  </SelectContent>
                </Select>
              );
            }
            return (
              <Input
                id={field}
                placeholder={`Enter your ${field.toLowerCase()}`}
                onChange={onChange}
                value={value}
                type={
                  field.includes("IELTS") ||
                  field.includes("TOEFL") ||
                  field.includes("GRE") ||
                  field.includes("percentage") ||
                  field.includes("Backlogs") ||
                  field.includes("marks")
                    ? "number"
                    : "text"
                }
              />
            );
          }}
        />
      </div>
    ));
  };
  
  return (
    <div className="bg-background">
      <section className="w-full bg-gradient-to-r from-primary/10 via-background to-primary/10">
        <div className="container mx-auto px-4 py-16 text-center sm:py-24 md:px-8">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl lg:text-6xl" style={{color: "#1946e6"}}>
            Masters Scholarship Finder
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Discover your ideal university based on your academic profile.
            Select a country to begin.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:px-8">
        {!submitted ? (
          <Card className="mx-auto max-w-2xl">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary" style={{color: "#1946e6"}}>
                Find Your University
              </CardTitle>
              <CardDescription>
                Select a country and fill in your details to get personalized
                university suggestions.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="country" className="font-semibold">
                  Select Country
                </Label>
                <Select
                  onValueChange={(value: Country) => handleCountryChange(value)}
                  value={selectedCountry || ""}
                >
                  <SelectTrigger id="country">
                    <SelectValue placeholder="Choose a country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="USA">United States</SelectItem>
                    <SelectItem value="UK">United Kingdom</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {selectedCountry && (
                <form
                  onSubmit={
                    selectedCountry === "USA"
                      ? usForm.handleSubmit(onUsSubmit)
                      : ukForm.handleSubmit(onUkSubmit)
                  }
                  className="space-y-4"
                >
                  {renderFormFields(selectedCountry)}
                  <Button type="submit" className="w-full font-bold">
                    Find Universities
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        ) : (
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold text-primary" style={{color: "#1946e6"}}>
              Suggested Universities
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Based on your profile, here are some universities that could be a
              great fit for you.
            </p>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {suggestedUniversities.slice(0, 7).map((uni, index) => (
                <Card
                  key={index}
                  className={cn(
                    "flex flex-col text-left transition-all duration-300",
                    index >= 4 && "blur-sm"
                  )}
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <GraduationCap className="h-6 w-6" />
                            </div>
                        </div>
                        <div>
                            <CardTitle className="font-headline text-xl text-primary" style={{color: "#1946e6"}}>
                              {uni.university}
                            </CardTitle>
                            <CardDescription>{uni.country}</CardDescription>
                        </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow space-y-3">
                    {Object.entries(uni.requirements).map(([key, value]) => (
                      <div key={key} className="flex items-center text-sm">
                        <span className="w-1/2 font-semibold text-muted-foreground">
                          {key}:
                        </span>
                        <span className="w-1/2">{value || "N/A"}</span>
                      </div>
                    ))}
                    <div className="flex items-center text-sm">
                       <Award className="mr-2 h-4 w-4 text-accent"/>
                      <span className="font-semibold text-accent">
                        Scholarship: {uni.scholarship || "Available"}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {suggestedUniversities.length === 0 && (
                <p className="mt-8 text-lg text-muted-foreground">
                    No universities match your current criteria. Try adjusting your inputs.
                </p>
            )}

            <div className="mt-12">
                 <Button onClick={resetFinder} className="font-bold">
                    Start Over
                </Button>
            </div>
          </div>
        )}

        {submitted && (
             <div className="relative mt-16">
                 {suggestedUniversities.length > 4 && (
                     <div className="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-lg bg-background/80 backdrop-blur-sm">
                         <div className="text-center p-8">
                              <h3 className="font-headline text-2xl font-bold text-primary" style={{color: "#1946e6"}}>
                                 Want to see more options?
                             </h3>
                             <p className="mt-2 text-lg text-muted-foreground">
                                 Contact us for a free consultation to unlock your full list of matched universities.
                             </p>
                         </div>
                     </div>
                 )}
                <CtaSection />
             </div>
         )}
      </section>
    </div>
  );
}
