
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Banknote,
  BookCheck,
  Building,
  CalendarClock,
  Check,
  FileText,
  GraduationCap,
  Lightbulb,
  Map,
  MessageSquareQuote,
  Search,
  Users,
  Home,
  Zap,
  Euro,
  University,
  Languages,
  Landmark,
  Briefcase,
  Plane,
} from "lucide-react";
import { CtaSection } from "@/components/layout/cta-section";

const idealJourneySteps = [
  { title: "Education Counselling", icon: <Users className="h-8 w-8 text-primary" /> },
  { title: "SOP & LOR Preparation", icon: <FileText className="h-8 w-8 text-primary" /> },
  { title: "Profile Evaluation", icon: <Search className="h-8 w-8 text-primary" /> },
  { title: "College Shortlisting", icon: <Building className="h-8 w-8 text-primary" /> },
  { title: "Application Assistance", icon: <BookCheck className="h-8 w-8 text-primary" /> },
  { title: "Financial Planning", icon: <Banknote className="h-8 w-8 text-primary" /> },
  { title: "Visa Mock Interviews", icon: <MessageSquareQuote className="h-8 w-8 text-primary" /> },
  { title: "Accommodation Assistance", icon: <Map className="h-8 w-8 text-primary" /> },
];

const usaProcessFeatures = [
    { icon: <CalendarClock className="h-10 w-10 text-accent" />, title: "Admission within 7 working days", description: "Fast-tracked admission process ensures students receive confirmation within 7 working days." },
    { icon: <Banknote className="h-10 w-10 text-accent" />, title: "College fee around 12-40 Lakhs", description: "Guidance to universities with tuition fees ranging from 12 to 40 Lakhs INR." },
    { icon: <GraduationCap className="h-10 w-10 text-accent" />, title: "Bank loan assistance", description: "Dedicated support to secure education loans with guidance on documentation." },
    { icon: <FileText className="h-10 w-10 text-accent" />, title: "SOP Preparation", description: "Expert assistance to craft compelling Statement of Purpose aligned with university expectations." },
    { icon: <Award className="h-10 w-10 text-accent" />, title: "Assured scholarships", description: "Help students apply for and secure scholarships to reduce studying abroad costs." },
    { icon: <Check className="h-10 w-10 text-accent" />, title: "Assured VISA", description: "Guidance through visa application process with expert advice ensuring high success rate." },
    { icon: <Users className="h-10 w-10 text-accent" />, title: "One-One VISA mock interview for 10 days", description: "Personalized mock visa interviews over 10 days to prepare students confidently." },
    { icon: <Lightbulb className="h-10 w-10 text-accent" />, title: "College shortlisting based on student priority", description: "Universities shortlisted based on student preferences and career goals." },
];

const ukSpecializations = [
    { icon: <Zap className="h-8 w-8 text-primary" />, title: "72-Hour Admission", description: "Rapid university acceptance within 72 hours" },
    { icon: <FileText className="h-8 w-8 text-primary" />, title: "No IELTS Needed", description: "Alternative qualifications accepted" },
    { icon: <Banknote className="h-8 w-8 text-primary" />, title: "Affordable Fees", description: "Quality education for only 15 Lakhs" },
    { icon: <GraduationCap className="h-8 w-8 text-primary" />, title: "Assured Support", description: "Scholarships and visa assistance" },
    { icon: <Home className="h-8 w-8 text-primary" />, title: "Housing Help", description: "Complete accommodation assistance" },
    { icon: <Award className="h-8 w-8 text-primary" />, title: "Loan Guidance", description: "Expert education loan assistance" },
    { icon: <Lightbulb className="h-8 w-8 text-primary" />, title: "Start Now", description: "Begin without proof of funds" },
    { icon: <BookCheck className="h-8 w-8 text-primary" />, title: "Free Applications", description: "No cost for applications" },
];

const europeFeatures = [
    { icon: <Euro className="h-8 w-8 text-primary" />, title: "Affordable Tuition", description: "Access world-class education at a fraction of the cost." },
    { icon: <University className="h-8 w-8 text-primary" />, title: "Top-Ranked Institutions", description: "Study at globally recognized and historic universities." },
    { icon: <Languages className="h-8 w-8 text-primary" />, title: "English-Taught Programs", description: "Wide range of courses offered entirely in English." },
    { icon: <Landmark className="h-8 w-8 text-primary" />, title: "Cultural Diversity", description: "Immerse yourself in a rich tapestry of cultures and languages." },
    { icon: <Briefcase className="h-8 w-8 text-primary" />, title: "Post-Study Work Visas", description: "Excellent opportunities for career growth after graduation." },
    { icon: <Plane className="h-8 w-8 text-primary" />, title: "Simplified Visa Process", description: "Streamlined visa procedures for students in many countries." },
    { icon: <Award className="h-8 w-8 text-primary" />, title: "Generous Scholarships", description: "Numerous scholarship options for international students." },
    { icon: <Map className="h-8 w-8 text-primary" />, title: "Explore Schengen Area", description: "Travel freely across 27 European countries with one visa." },
]


export default function StudyAbroadPage() {
  return (
    <div className="bg-background">
      <section className="w-full bg-gradient-to-r from-primary/10 via-background to-primary/10">
        <div className="container mx-auto px-4 py-24 text-center sm:py-32 md:px-8">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-foreground sm:text-5xl lg:text-6xl" style={{color: "#1946e6"}}>
            Study Abroad with One93 VISAS
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Your complete guide to international education. From counseling to accommodation, we're with you at every step.
          </p>
        </div>
      </section>

      {/* Ideal Student Journey Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <h2 className="font-headline text-3xl font-bold" style={{color: "#1946e6"}}>Ideal Student Journey</h2>
              <p className="mt-4 text-lg text-muted-foreground">We provide comprehensive support for your entire study abroad journey.</p>
              <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4">
                {idealJourneySteps.map((step) => (
                  <div key={step.title} className="flex flex-col items-center text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                        {step.icon}
                    </div>
                    <p className="mt-2 font-semibold text-sm sm:text-base">{step.title}</p>
                  </div>
                ))}
              </div>
                <Button asChild size="lg" className="mt-12 font-bold bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="/contact">View Details <ArrowRight className="ml-2 h-5 w-5"/></Link>
                </Button>
            </div>
            <div className="relative h-auto w-full order-first lg:order-last">
                <Image
                    src="/ideal-student-journey.jpg"
                    alt="An illustration of a calm student sitting on luggage, representing a smooth study abroad journey"
                    data-ai-hint="student journey illustration"
                    width={600}
                    height={600}
                    className="mx-auto rounded-xl object-cover shadow-lg"
                />
            </div>
          </div>
        </div>
      </section>

      {/* USA Process Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
            <div className="text-center">
                <h2 className="font-headline text-3xl font-bold text-foreground" style={{color: "#1946e6"}}>USA Process - Study Abroad</h2>
                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                    We assist you with comprehensive support for a smooth study abroad journey to the United States.
                </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {usaProcessFeatures.map((feature) => (
                    <Card key={feature.title} className="text-center">
                        <CardHeader>
                            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
                                {feature.icon}
                            </div>
                        </CardHeader>
                        <CardContent>
                            <h3 className="text-lg font-bold text-primary">{feature.title}</h3>
                            <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>

       {/* UK Specialization Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
            <div className="text-center">
                <h2 className="font-headline text-3xl font-bold text-foreground" style={{color: "#1946e6"}}>UK - We Are Specialized In</h2>
                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                    Our expertise in the UK admission process ensures a fast, affordable, and successful journey for our students.
                </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
                {ukSpecializations.map((item) => (
                     <div key={item.title} className="flex flex-col items-center text-center p-4 rounded-lg bg-card shadow-sm border">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                           {item.icon}
                        </div>
                        <h4 className="font-headline text-lg font-semibold text-primary">{item.title}</h4>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Europe Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
            <div className="text-center">
                <h2 className="font-headline text-3xl font-bold text-foreground" style={{color: "#1946e6"}}>Study in Europe</h2>
                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                    Discover the benefits of studying in Europe, from top-tier education to rich cultural experiences.
                </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
                {europeFeatures.map((item) => (
                     <div key={item.title} className="flex flex-col items-center text-center p-4 rounded-lg bg-card shadow-sm border">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                           {item.icon}
                        </div>
                        <h4 className="font-headline text-lg font-semibold text-primary">{item.title}</h4>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
      
      {/* Requirements Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
             <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl" style={{color: "#1946e6"}}>Academic Requirements</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <h4 className="font-semibold">Bachelor's Degree</h4>
                            <p className="text-muted-foreground">Recognized degree in a relevant field (usually 3-4 years).</p>
                        </div>
                        <div>
                            <h4 className="font-semibold">Minimum GPA/Percentage</h4>
                            <p className="text-muted-foreground">Often 6.0-6.5 CGPA or 50%.</p>
                        </div>
                         <div>
                            <h4 className="font-semibold">Competitive Universities</h4>
                            <p className="text-muted-foreground">May require 7.0+ CGPA or equivalent.</p>
                        </div>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl" style={{color: "#1946e6"}}>Language Proficiency</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <h4 className="font-semibold">IELTS</h4>
                            <p className="text-muted-foreground">Usually 6.0 to 7.5 overall.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold">TOEFL</h4>
                            <p className="text-muted-foreground">Minimum 80-100+ on the iBT.</p>
                        </div>
                         <div>
                            <h4 className="font-semibold">PTE</h4>
                            <p className="text-muted-foreground">Scores between 50-60+.</p>
                        </div>
                    </CardContent>
                </Card>
             </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
