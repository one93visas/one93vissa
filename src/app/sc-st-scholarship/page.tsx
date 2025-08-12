import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle, Info, UserCheck, BookOpen, Star, GraduationCap, ArrowRight, TrendingUp, BarChart } from "lucide-react";
import Link from "next/link";
import { CtaSection } from "@/components/layout/cta-section";

const aboutCards = [
    {
        title: "About",
        description: "Learn everything you need to know about SC/ST scholarships.",
        icon: <Info className="h-8 w-8 text-primary" />,
        href: "#about"
    },
    {
        title: "Eligibility",
        description: "Learn everything you need to know about the eligibility criteria for SC/ST scholarships.",
        icon: <UserCheck className="h-8 w-8 text-primary" />,
        href: "#eligibility"
    },
    {
        title: "Registration Steps",
        description: "Learn how to register for this scholarship.",
        icon: <BookOpen className="h-8 w-8 text-primary" />,
        href: "/contact"
    },
]

const whatWeOffer = [
    "Free GRE and IELTS preparation",
    "Application assistance",
    "Career counseling",
    "Mentorship support"
]

const eligibility = [
    "Pursuing 4-1 or completed graduation",
    "GPA of 6.5 or above",
    "Not more than 10 backlogs",
]

const one93visasFeatures = [
    "Based in Uppal",
    "Expert in IELTS, TOEFL, GRE, and SAT",
    "Personalized coaching strategies"
]

const eligibilityCriteria = [
    {
        icon: <GraduationCap className="h-10 w-10 text-accent" />,
        title: "Education Level",
        description: "Student should be pursuing 4-1 or completed graduation"
    },
    {
        icon: <TrendingUp className="h-10 w-10 text-accent" />,
        title: "GPA Requirement",
        description: "Must have a GPA of 6.5 or above"
    },
    {
        icon: <BarChart className="h-10 w-10 text-accent" />,
        title: "Backlog Limit",
        description: "Backlogs should not exceed 10"
    }
]

export default function SCSTScholarshipPage() {
  return (
    <div className="bg-background">
      <section className="w-full bg-gradient-to-b from-primary/10 to-background py-20 md:py-32">
        <div className="container mx-auto px-4 text-center md:px-8">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight text-primary sm:text-5xl lg:text-6xl" style={{color: "#1946e6"}}>
            SC/ST Scholarships
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-muted-foreground font-semibold">
            Free GRE and IELTS will be provided
          </p>
          <Button asChild size="lg" className="mt-8 font-bold">
            <Link href="/contact">Apply Now <ArrowRight className="ml-2 h-5 w-5"/></Link>
          </Button>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {aboutCards.map(card => (
                 <Link href={card.href} key={card.title}>
                    <Card className="text-left h-full transition-shadow hover:shadow-xl cursor-pointer">
                        <CardHeader className="flex flex-row items-start gap-4">
                            <div className="flex-shrink-0 bg-primary/10 p-3 rounded-md">
                                {card.icon}
                            </div>
                            <div>
                                <CardTitle className="font-headline text-xl">{card.title}</CardTitle>
                                <CardDescription className="mt-1">{card.description}</CardDescription>
                            </div>
                        </CardHeader>
                    </Card>
                 </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-8">
            <div className="text-center">
                <h2 className="font-headline text-3xl font-bold text-primary" style={{color: "#1946e6"}}>About Scholarship</h2>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle className="font-headline text-xl">Overview</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Empowering SC/ST students to pursue higher education abroad through comprehensive support and guidance.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline text-xl">What We Offer</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2">
                            {whatWeOffer.map(item => (
                                <li key={item} className="flex items-center">
                                    <CheckCircle className="h-4 w-4 mr-2 text-primary flex-shrink-0"/>
                                    <span className="text-muted-foreground">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle className="font-headline text-xl">Eligibility</CardTitle>
                    </CardHeader>
                    <CardContent>
                         <ul className="space-y-2">
                            {eligibility.map(item => (
                                <li key={item} className="flex items-center">
                                    <CheckCircle className="h-4 w-4 mr-2 text-primary flex-shrink-0"/>
                                    <span className="text-muted-foreground">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
                 <Card className="lg:col-span-4 bg-gradient-to-r from-primary/80 to-primary text-primary-foreground">
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl">One93 VISAS</CardTitle>
                        <CardDescription className="text-primary-foreground/80 text-lg">🌟 Experience Exceptional Results! 🌟</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2 md:columns-3">
                             {one93visasFeatures.map(item => (
                                <li key={item} className="flex items-center mb-2">
                                    <Star className="h-4 w-4 mr-2 text-accent flex-shrink-0"/>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
      </section>

      <section id="eligibility" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
            <div className="text-center">
                <h2 className="font-headline text-3xl font-bold text-primary" style={{color: "#1946e6"}}>Eligibility Criteria</h2>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {eligibilityCriteria.map((item) => (
                    <Card key={item.title} className="text-center p-6">
                        <div className="flex justify-center items-center mb-4 bg-accent/10 p-4 rounded-full w-fit mx-auto">
                            {item.icon}
                        </div>
                        <h3 className="font-headline text-xl font-bold">{item.title}</h3>
                        <p className="mt-2 text-muted-foreground">{item.description}</p>
                    </Card>
                ))}
            </div>
             <div className="mt-12">
                <Card className="bg-accent/10 border-accent">
                    <CardHeader className="text-center">
                        <Star className="h-10 w-10 text-accent mx-auto mb-2"/>
                        <CardTitle className="font-headline text-2xl text-accent-foreground">🌟 Special Opportunity 🌟</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center px-2 sm:px-6">
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Students with an <strong className="text-primary">IELTS score of 6.5</strong> and <strong className="text-primary">GPA of 7</strong> with <strong className="text-primary">not more than 5 backlogs</strong> will be provided with free consultancy processing!
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
