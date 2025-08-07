import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ExternalLink } from "lucide-react";
import Link from "next/link";

const eligibilityCriteria = [
  "Must be an Indian citizen belonging to SC/ST category.",
  "Must have completed higher secondary education (10+2).",
  "Must be enrolled in a full-time undergraduate or postgraduate course at a recognized university.",
  "Annual family income should not exceed the limit set by the government.",
  "Must not be availing any other scholarship for the same course.",
];

const requiredDocuments = [
    "Caste Certificate (issued by a competent authority).",
    "Income Certificate (issued by a competent authority).",
    "Mark sheets of all previous qualifying examinations.",
    "Proof of admission to the course.",
    "Aadhaar Card and Bank Passbook.",
    "Passport size photographs.",
];

const faqs = [
    {
        question: "Can I apply if I am in my second year of college?",
        answer: "Yes, students at any stage of their post-matric course are eligible to apply, provided they meet the other criteria."
    },
    {
        question: "Is there an income ceiling for parents/guardians?",
        answer: "Yes, there is an annual income limit for the student's family to be eligible for the scholarship. This limit is updated by the government periodically. Please check the latest guidelines on the National Scholarship Portal."
    },
    {
        question: "Where can I apply for these scholarships?",
        answer: "Applications are typically submitted online through the National Scholarship Portal (NSP). Some states may also have their own dedicated portals."
    },
    {
        question: "What does the scholarship cover?",
        answer: "The scholarship typically covers tuition fees, examination fees, and other 'non-refundable' compulsory fees. It may also include a maintenance allowance for hostellers and day scholars."
    }
]

export default function SCSTScholarshipPage() {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-secondary py-24 text-center sm:py-32">
        <div className="container relative z-10 mx-auto">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
            SC/ST Scholarships
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/80">
            Dedicated support for students from Scheduled Caste (SC) and
            Scheduled Tribe (ST) communities to pursue higher education.
          </p>
        </div>
        <div className="absolute inset-0 z-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05]" />
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
                <h2 className="font-headline text-3xl font-bold text-primary">About the Scholarship Scheme</h2>
                <p className="mt-4 text-foreground/80">
                    The Post-Matric Scholarship for SC/ST students is a Centrally Sponsored Scheme implemented by State Governments and Union Territory Administrations. The primary objective of the scheme is to provide financial assistance to Scheduled Caste and Scheduled Tribe students studying at post-matriculation or post-secondary stage to enable them to complete their education.
                </p>
                <p className="mt-4 text-foreground/80">
                    These scholarships are available for studies in India only and are awarded by the government of the State/Union Territory to which the applicant actually belongs i.e., permanently settled.
                </p>

                <h3 className="mt-12 font-headline text-2xl font-bold text-primary">General Eligibility Criteria</h3>
                 <ul className="mt-4 space-y-3">
                    {eligibilityCriteria.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-accent" />
                        <span className="text-foreground/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                
                <h3 className="mt-12 font-headline text-2xl font-bold text-primary">Required Documents</h3>
                 <ul className="mt-4 space-y-3">
                    {requiredDocuments.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-accent" />
                        <span className="text-foreground/80">{item}</span>
                      </li>
                    ))}
                  </ul>
            </div>
            <div className="lg:col-span-1">
                <Card className="sticky top-24 bg-primary/5">
                    <CardHeader>
                        <CardTitle className="font-headline">How to Apply</CardTitle>
                        <CardDescription>Follow these steps to apply for the scholarship.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p><strong>Step 1:</strong> Visit the National Scholarship Portal (NSP) or your state's scholarship portal.</p>
                        <p><strong>Step 2:</strong> Register and create a profile with accurate details.</p>
                        <p><strong>Step 3:</strong> Fill out the scholarship application form carefully.</p>
                        <p><strong>Step 4:</strong> Upload all the required documents in the specified format.</p>
                        <p><strong>Step 5:</strong> Submit the application before the deadline and save a copy for your records.</p>
                        <Button asChild className="w-full font-bold mt-4">
                            <a href="https://scholarships.gov.in/" target="_blank" rel="noopener noreferrer">
                                National Scholarship Portal <ExternalLink className="ml-2 h-4 w-4"/>
                            </a>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
      </section>

      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto max-w-4xl">
            <div className="text-center">
                <h2 className="font-headline text-3xl font-bold text-primary">Frequently Asked Questions</h2>
            </div>
            <Accordion type="single" collapsible className="mt-8 w-full">
                {faqs.map((faq, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                        <AccordionTrigger className="font-headline text-lg text-left">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-foreground/80">
                           {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
      </section>

    </div>
  );
}
