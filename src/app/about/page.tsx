import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle, Lightbulb, Rocket, Users } from "lucide-react";

const teamMembers = [
  {
    name: "John Doe",
    role: "Founder & CEO",
    image: "https://placehold.co/400x400",
    bio: "With over 20 years of experience, John leads our team with a passion for helping students achieve their dreams.",
  },
  {
    name: "Jane Smith",
    role: "Head of Counseling",
    image: "https://placehold.co/400x400",
    bio: "Jane has guided thousands of students to top universities worldwide, specializing in profile building.",
  },
  {
    name: "Sam Wilson",
    role: "Visa & Immigration Head",
    image: "https://placehold.co/400x400",
    bio: "Sam's expertise in visa processes ensures a smooth and successful application for our students.",
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
      <section className="bg-secondary py-20 text-center">
        <div className="container mx-auto">
          <h1 className="font-headline text-4xl font-bold text-primary md:text-5xl">
            About One93 Global Pathways
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/80">
            Pioneering global education opportunities for ambitious students
            worldwide.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <Image
              src="https://placehold.co/600x450"
              alt="Our team collaborating"
              data-ai-hint="team collaboration office"
              width={600}
              height={450}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <h2 className="font-headline text-3xl font-bold text-primary">
              Our Story
            </h2>
            <p className="text-foreground/80">
              Founded in 2008, One93 Global Pathways was born from a desire to
              simplify the complex process of studying abroad. We saw the
              challenges students faced—navigating applications, securing
              visas, and finding funding—and we knew there had to be a better
              way.
            </p>
            <p className="text-foreground/80">
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
        <div className="container mx-auto grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="font-headline text-2xl font-bold text-primary">
              Our Mission
            </h3>
            <p className="text-foreground/80">
              To empower students to access the best global education
              opportunities by providing comprehensive, ethical, and
              personalized guidance.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-headline text-2xl font-bold text-primary">
              Our Vision
            </h3>
            <p className="text-foreground/80">
              To be the most trusted and respected international education
              consultancy, making a positive impact on the lives of students and
              the global community.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto text-center">
            <h2 className="font-headline text-3xl font-bold text-primary">Our Core Values</h2>
            <p className="mx-auto mt-4 max-w-2xl text-foreground/80">
                The principles that guide our work and define our character.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {values.map((value) => (
                    <div key={value.title} className="flex flex-col items-center">
                        {value.icon}
                        <h4 className="mt-4 font-headline text-xl font-semibold">{value.title}</h4>
                        <p className="mt-2 text-foreground/80">{value.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto text-center">
          <h2 className="font-headline text-3xl font-bold text-primary">
            Meet Our Team
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-foreground/80">
            The experienced professionals dedicated to your success.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <Card key={member.name} className="overflow-hidden">
                <CardHeader className="p-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    data-ai-hint="professional headshot"
                    width={400}
                    height={400}
                    className="h-auto w-full object-cover"
                  />
                </CardHeader>
                <CardContent className="p-6 text-center">
                  <h3 className="font-headline text-xl font-bold">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary">{member.role}</p>
                  <p className="mt-4 text-sm text-foreground/80">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto py-16 text-center md:py-24">
        <h2 className="font-headline text-3xl font-bold text-primary">
          Join Us on Your Journey
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-foreground/80">
          Ready to take the next step? We're here to help you navigate your
          path to a successful future.
        </p>
        <Button asChild size="lg" className="mt-8 font-bold">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </section>
    </div>
  );
}
