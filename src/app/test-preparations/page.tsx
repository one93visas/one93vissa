import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle, BookOpen, Target, BrainCircuit, MessageSquare, Laptop, GraduationCap } from "lucide-react";
import Image from "next/image";
import { CtaSection } from "@/components/layout/cta-section";

const tests = [
  {
    name: "IELTS",
    fullName: "International English Language Testing System",
    description: "The world's most popular English language proficiency test for higher education and global migration.",
    icon: <MessageSquare className="h-8 w-8 text-primary" />,
    features: ["Listening, Reading, Writing & Speaking", "Accepted by 11,000+ organizations", "Academic and General Training modules"],
  },
  {
    name: "TOEFL",
    fullName: "Test of English as a Foreign Language",
    description: "Measures your ability to use and understand English at the university level. Preferred by US universities.",
    icon: <Laptop className="h-8 w-8 text-primary" />,
    features: ["100% academic English", "Computer-based test", "Widely accepted in the USA & Canada"],
  },
  {
    name: "GRE",
    fullName: "Graduate Record Examinations",
    description: "A standardized test that is an admissions requirement for many graduate schools in the United States and Canada.",
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    features: ["Verbal Reasoning", "Quantitative Reasoning", "Analytical Writing"],
  },
  {
    name: "GMAT",
    fullName: "Graduate Management Admission Test",
    description: "A computer adaptive test intended to assess analytical, writing, quantitative, verbal, and reading skills for MBA programs.",
    icon: <Target className="h-8 w-8 text-primary" />,
    features: ["Analytical Writing Assessment", "Integrated Reasoning", "Quantitative and Verbal Reasoning"],
  },
  {
    name: "PTE",
    fullName: "Pearson Test of English Academic",
    description: "A computer-based academic English language test aimed at non-native English speakers wanting to study abroad.",
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    features: ["Fast results (typically within 48 hours)", "AI-based scoring", "Accepted for study & migration"],
  },
  {
    name: "SAT",
    fullName: "Scholastic Assessment Test",
    description: "A standardized test widely used for college admissions in the United States for undergraduate courses.",
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    features: ["Reading & Writing", "Math sections", "Digital test format available"],
  },
];

export default function TestPreparationsPage() {
  return (
    <div className="bg-background">
      <section className="w-full bg-gradient-to-r from-primary/10 via-background to-primary/10">
        <div className="container mx-auto px-4 py-24 text-center sm:py-32 md:px-8">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-foreground sm:text-5xl lg:text-6xl" style={{color: "#0f8a79"}}>
            Test Preparations
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Ace your exams with our expert-led, comprehensive preparation
            courses designed for your success.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {tests.map((test) => (
              <Card key={test.name} className="flex flex-col transition-shadow duration-300 hover:shadow-xl">
                <CardHeader className="flex flex-row items-center gap-4">
                   <div className="flex-shrink-0 rounded-md bg-primary/10 p-3 text-primary">
                      {test.icon}
                    </div>
                  <div>
                    <CardTitle className="font-headline text-2xl" style={{color: "#0f8a79"}}>{test.name}</CardTitle>
                    <CardDescription className="text-sm">{test.fullName}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{test.description}</p>
                  <ul className="mt-4 space-y-2">
                    {test.features.map(feature => (
                        <li key={feature} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                        </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="bg-secondary/50 p-4">
                  <Button asChild className="w-full font-bold">
                    <Link href={`/contact?inquiry=Prep_for_${test.name}`}>
                      Enroll Now
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:px-8">
            <div className="relative h-80 w-full">
                <Image src="https://placehold.co/600x400" alt="Student studying for an exam" data-ai-hint="student studying library" layout="fill" objectFit="cover" className="rounded-lg shadow-lg"/>
            </div>
            <div className="space-y-6">
                <h2 className="font-headline text-3xl font-bold text-primary" style={{color: "#0f8a79"}}>Why Choose Our Prep Courses?</h2>
                <p className="text-muted-foreground">Our courses are more than just study material. We provide a structured learning environment designed to maximize your potential.</p>
                <ul className="space-y-3">
                    <li className="flex items-start">
                        <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-primary" />
                        <span><strong>Expert Tutors:</strong> Learn from experienced instructors with proven track records.</span>
                    </li>
                    <li className="flex items-start">
                        <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-primary" />
                        <span><strong>Customized Study Plans:</strong> We tailor our curriculum to your strengths and weaknesses.</span>
                    </li>
                    <li className="flex items-start">
                        <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-primary" />
                        <span><strong>Extensive Practice Material:</strong> Access a vast library of mock tests and practice questions.</span>
                    </li>
                    <li className="flex items-start">
                        <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-primary" />
                        <span><strong>Proven Strategies:</strong> Master time management and question-solving techniques.</span>
                    </li>
                </ul>
                 <Button asChild size="lg" className="mt-4 font-bold">
                    <Link href="/contact">Start Your Preparation</Link>
                  </Button>
            </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
