
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle, Lightbulb, Rocket, Users } from "lucide-react";
import { CtaSection } from "@/components/layout/cta-section";

const teamMembers = [
  {
    name: "Venkateswara Reddy Pulusu",
    role: "Co-Founder",
    image: "/Screenshot 2025-09-03 165515.png",
    bio: "Co-founder of One93 Global Pathways, leading the vision for global education.",
  },
  {
    name: "Sruthi pulusu",
    role: "Founder & CEO",
    image: "/Screenshot 2025-09-03 165408.png",
    bio: "Founder of One93 Global Pathways, dedicated to student success and operational excellence.",
  },
];

const values = [
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Integrity",
      description: "We uphold the highest standards of integrity in all of our actions.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Student-Centric",
      description: "Our students' success is at the core of everything we do.",
    },
    {
      icon: <Rocket className="h-8 w-8 text-primary" />,
      title: "Excellence",
      description: "We are committed to providing outstanding services and achieving the best outcomes.",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Innovation",
      description: "We constantly seek innovative solutions to meet the evolving needs of our students.",
    },
  ];

export default function AboutUsPage() {
  return (
    <div className="bg-background">
      <section className="w-full bg-gradient-to-r from-primary/10 via-background to-primary/10">
        <div className="container mx-auto px-4 py-24 text-center sm:py-32 md:px-8">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-foreground sm:text-5xl lg:text-6xl" style={{color: "#1946e6"}}>
            About One93 Global Pathways
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Pioneering global education opportunities for ambitious students
            worldwide.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:px-8">
          <div>
            <Image
              src="/our-story.jpg"
              alt="A team of professionals in a meeting at One93 Global Pathways"
              data-ai-hint="team meeting"
              width={600}
              height={450}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6 text-center md:text-left">
            <h2 className="font-headline text-3xl font-bold" style={{color: "#1946e6"}}>
              Our Story
            </h2>
            <p className="text-muted-foreground">
              Founded in 2008, One93 Global Pathways was born from a desire to
              simplify the complex process of studying abroad. We saw the
              challenges students faced—navigating applications, securing
              visas, and finding funding—and we knew there had to be a better
              way.
            </p>
            <p className="text-muted-foreground">
              Today, we are a leading education consultancy, renowned for our
              ethical, professional, and student-focused approach. Our
              experienced team is dedicated to providing personalized guidance
              and unwavering support to each student, ensuring they not only
              reach their destination but also thrive there.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto grid grid-cols-1 gap-12 px-4 md:grid-cols-2 md:px-8 text-center md:text-left">
          <div className="space-y-4">
            <h3 className="font-headline text-2xl font-bold" style={{color: "#1946e6"}}>
              Our Mission
            </h3>
            <p className="text-muted-foreground">
              To empower students to access the best global education
              opportunities by providing comprehensive, ethical, and
              personalized guidance.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-headline text-2xl font-bold" style={{color: "#1946e6"}}>
              Our Vision
            </h3>
            <p className="text-muted-foreground">
              To be the most trusted and respected international education
              consultancy, making a positive impact on the lives of students and
              the global community.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center md:px-8">
            <h2 className="font-headline text-3xl font-bold text-foreground" style={{color: "#1946e6"}}>Our Core Values</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                The principles that guide our work and define our character.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {values.map((value) => (
                    <div key={value.title} className="flex flex-col items-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                            {value.icon}
                        </div>
                        <h4 className="mt-4 font-headline text-xl font-semibold">{value.title}</h4>
                        <p className="mt-2 text-muted-foreground">{value.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center md:px-8">
          <h2 className="font-headline text-3xl font-bold text-foreground" style={{color: "#1946e6"}}>
            Meet Our Founders
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            The experienced professionals dedicated to your success.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {teamMembers.map((member) => (
              <Card key={member.name} className="overflow-visible border-none bg-transparent shadow-none">
                <CardContent className="flex flex-col items-center p-6 text-center">
                   <div className="relative mb-4 h-48 w-48">
                    <Image
                        src={member.image}
                        alt={member.name}
                        data-ai-hint="professional headshot"
                        fill
                        className="rounded-full object-cover object-top shadow-lg"
                    />
                   </div>
                  <h3 className="font-headline text-xl font-bold">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary">{member.role}</p>
                  <p className="mt-4 text-sm text-muted-foreground">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 text-center md:py-24 md:px-8">
        <h2 className="font-headline text-3xl font-bold" style={{color: "#1946e6"}}>
          Join Us on Your Journey
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Ready to take the next step? We're here to help you navigate your
          path to a successful future.
        </p>
        <Button asChild size="lg" className="mt-8 font-bold bg-accent text-accent-foreground hover:bg-accent/90">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </section>

      <CtaSection />
    </div>
  );
}
