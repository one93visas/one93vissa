
"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, GraduationCap, Star, Trophy, Users } from "lucide-react";
import { CtaSection } from "@/components/layout/cta-section";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const stats = [
  {
    icon: <Users className="h-12 w-12 text-primary" />,
    value: "10,000+",
    label: "Students Guided",
    description: "Successfully guided students to their dream universities.",
  },
  {
    icon: <GraduationCap className="h-12 w-12 text-primary" />,
    value: "98%",
    label: "Visa Success Rate",
    description: "Maintaining one of the highest success rates in the industry.",
  },
  {
    icon: <Globe className="h-12 w-12 text-primary" />,
    value: "500+",
    label: "Partner Institutions",
    description: "Strong partnerships with universities across the globe.",
  },
  {
    icon: <Trophy className="h-12 w-12 text-primary" />,
    value: "$5M+",
    label: "Scholarships Secured",
    description: "Helping students secure funding for their education.",
  },
];

const allSuccessStories = [
  {
    name: "Kola Karishma",
    university: "University of East London, UK",
    program: "Master of Business Administration",
    image: "/images/achievements/WhatsApp Image 2025-08-22 at 11.55.52 AM (1).jpeg",
    story: "One93 Global Pathways made my dream of studying in the UK a reality. Their expert guidance on my application and visa was invaluable.",
  },
  {
    name: "Alisha Khan",
    university: "Stanford University, USA",
    program: "MS in Computer Science",
    image: "/images/achievements/WhatsApp Image 2025-08-22 at 11.55.52 AM.jpeg",
    story: "One93 helped me build a strong profile and navigate the competitive application process for my dream school.",
  },
  {
    name: "Ben Carter",
    university: "University of Oxford, UK",
    program: "MSc in Financial Economics",
    image: "/images/achievements/WhatsApp Image 2025-08-22 at 11.55.53 AM (1).jpeg",
    story: "The guidance on my SOP and LORs was exceptional. I also received a significant scholarship thanks to their help.",
  },
  {
    name: "Chloe Garcia",
    university: "University of Melbourne, Australia",
    program: "Master of Marketing",
    image: "/images/achievements/WhatsApp Image 2025-08-22 at 11.55.53 AM.jpeg",
    story: "As a first-generation international student, their support was crucial. They made the entire journey stress-free.",
  },
   {
    name: "David Lee",
    university: "University of British Columbia, Canada",
    program: "MBA",
    image: "/images/achievements/WhatsApp Image 2025-08-22 at 11.55.54 AM (1).jpeg",
    story: "Their test preparation modules were top-notch and significantly boosted my GMAT score.",
  },
   {
    name: "Emily Wang",
    university: "TU Munich, Germany",
    program: "MS in Mechanical Engineering",
    image: "/images/achievements/WhatsApp Image 2025-08-22 at 11.55.54 AM.jpeg",
    story: "From university selection to visa interviews, the team at One93 was with me every step of the way.",
  },
   {
    name: "Fatima Ahmed",
    university: "National University of Singapore",
    program: "MSc in Business Analytics",
    image: "/images/achievements/WhatsApp Image 2025-08-22 at 11.55.55 AM (1).jpeg",
    story: "Their dedicated support was incredible. They found niche scholarships that I would have never discovered on my own.",
  },
  {
    name: "George Kim",
    university: "ETH Zurich, Switzerland",
    program: "PhD in Robotics",
    image: "/images/achievements/WhatsApp Image 2025-08-22 at 11.55.55 AM (2).jpeg",
    story: "The detailed feedback on my research proposal was a game-changer. Truly grateful for their mentorship.",
  },
  {
    name: "Hannah Patel",
    university: "University of Toronto, Canada",
    program: "Master of Public Health",
    image: "/images/achievements/WhatsApp Image 2025-08-22 at 11.55.55 AM.jpeg",
    story: "They helped me find the perfect program that aligned with my career goals. The visa process was seamless.",
  },
  {
    name: "Ivan Petrov",
    university: "University of Amsterdam, Netherlands",
    program: "MA in International Relations",
    image: "/images/achievements/WhatsApp Image 2025-08-22 at 11.55.56 AM (1).jpeg",
    story: "Their expertise in European universities is unmatched. I couldn't have done it without them.",
  },
  {
    name: "Jasmine Kaur",
    university: "New York University, USA",
    program: "MFA in Film Production",
    image: "/images/achievements/WhatsApp Image 2025-08-22 at 11.55.56 AM.jpeg",
    story: "One93's team helped me craft a portfolio that stood out. So thrilled to be at my dream film school!",
  },
  {
    name: "Leo Martinez",
    university: "Imperial College London, UK",
    program: "MSc in Advanced Materials",
    image: "/images/achievements/WhatsApp Image 2025-08-22 at 11.55.57 AM (1).jpeg",
    story: "The technical interview prep sessions were incredibly helpful. Felt confident and prepared.",
  },
  {
    name: "Maria Rodriguez",
    university: "University of Sydney, Australia",
    program: "Master of Physiotherapy",
    image: "/images/achievements/WhatsApp Image 2025-08-22 at 11.55.57 AM.jpeg",
    story: "They made a complex and long process feel simple and achievable. Highly recommended!",
  },
  {
    name: "Nikhil Sharma",
    university: "Purdue University, USA",
    program: "MS in Aerospace Engineering",
    image: "/images/achievements/WhatsApp Image 2025-08-22 at 11.55.58 AM.jpeg",
    story: "Their scholarship assistance was amazing. I received funding that made my studies possible.",
  },
  {
    name: "Olivia Chen",
    university: "University of Hong Kong",
    program: "Bachelor of Social Sciences",
    image: "/images/achievements/WhatsApp Image 2025-08-22 at 11.55.59 AM (1).jpeg",
    story: "As an undergraduate applicant, their guidance was crucial in navigating the different university systems.",
  },
  {
    name: "Priya Singh",
    university: "London School of Economics, UK",
    program: "MSc in Economics",
    image: "/images/achievements/WhatsApp Image 2025-08-22 at 11.55.59 AM.jpeg",
    story: "Their insights into what top economics programs look for were invaluable.",
  },
  {
    name: "Quinn Davis",
    university: "University of Auckland, New Zealand",
    program: "Master of Environmental Science",
    image: "/images/achievements/WhatsApp Image 2025-08-22 at 11.56.01 AM (1).jpeg",
    story: "I appreciated their focus on finding a program that matched my passion for sustainability.",
  },
  {
    name: "Ravi Kumar",
    university: "Georgia Institute of Technology, USA",
    program: "MS in Cybersecurity",
    image: "/images/achievements/WhatsApp Image 2025-08-22 at 11.56.01 AM (2).jpeg",
    story: "The mock interviews for both university admission and the visa were incredibly realistic and helpful.",
  },
  {
    name: "Sofia Rossi",
    university: "Bocconi University, Italy",
    program: "MSc in Finance",
    image: "/images/achievements/WhatsApp Image 2025-08-22 at 11.56.01 AM.jpeg",
    story: "Their team's knowledge of European business schools is top-tier. I got into my first choice!",
  },
  {
    name: "Tom Harris",
    university: "University College Dublin, Ireland",
    program: "Master of Architecture",
    image: "/images/achievements/WhatsApp Image 2025-08-22 at 11.56.02 AM (1).jpeg",
    story: "They helped me with my portfolio and connected me with alumni. An amazing support system.",
  },
  {
    name: "Uma Devi",
    university: "University of Tokyo, Japan",
    program: "Research Student Program",
    image: "/images/achievements/WhatsApp Image 2025-08-22 at 11.56.02 AM.jpeg",
    story: "Navigating the Japanese university system was tough, but One93's expertise made it possible.",
  },
  {
    name: "New Student 1",
    university: "University Name",
    program: "Program Name",
    image: "/images/achievements/WhatsApp Image 2025-08-22 at 11.56.03 AM (1).jpeg",
    story: "Placeholder story.",
  },
  {
    name: "New Student 2",
    university: "University Name",
    program: "Program Name",
    image: "/images/achievements/WhatsApp Image 2025-08-22 at 11.56.03 AM.jpeg",
    story: "Placeholder story.",
  },
  {
    name: "New Student 3",
    university: "University Name",
    program: "Program Name",
    image: "/images/achievements/WhatsApp Image 2025-08-22 at 11.56.04 AM (2).jpeg",
    story: "Placeholder story.",
  },
  {
    name: "New Student 4",
    university: "University Name",
    program: "Program Name",
    image: "/images/achievements/WhatsApp Image 2025-08-22 at 11.56.04 AM (3).jpeg",
    story: "Placeholder story.",
  },
  {
    name: "New Student 5",
    university: "University Name",
    program: "Program Name",
    image: "/images/achievements/WhatsApp Image 2025-08-22 at 11.56.05 AM (1).jpeg",
    story: "Placeholder story.",
  },
  {
    name: "New Student 6",
    university: "University Name",
    program: "Program Name",
    image: "/images/achievements/WhatsApp Image 2025-08-22 at 11.56.05 AM.jpeg",
    story: "Placeholder story.",
  },
  {
    name: "New Student 7",
    university: "University Name",
    program: "Program Name",
    image: "/images/achievements/WhatsApp Image 2025-08-22 at 11.56.06 AM (1).jpeg",
    story: "Placeholder story.",
  },
  {
    name: "New Student 8",
    university: "University Name",
    program: "Program Name",
    image: "/images/achievements/WhatsApp Image 2025-08-22 at 11.56.06 AM.jpeg",
    story: "Placeholder story.",
  },
  {
    name: "New Student 9",
    university: "University Name",
    program: "Program Name",
    image: "/images/achievements/WhatsApp Image 2025-08-22 at 11.56.07 AM (1).jpeg",
    story: "Placeholder story.",
  },
  {
    name: "New Student 10",
    university: "University Name",
    program: "Program Name",
    image: "/images/achievements/WhatsApp Image 2025-08-22 at 11.56.07 AM (2).jpeg",
    story: "Placeholder story.",
  },
  {
    name: "New Student 11",
    university: "University Name",
    program: "Program Name",
    image: "/images/achievements/WhatsApp Image 2025-08-22 at 11.56.07 AM.jpeg",
    story: "Placeholder story.",
  },
  {
    name: "New Student 12",
    university: "University Name",
    program: "Program Name",
    image: "/images/achievements/WhatsApp Image 2025-08-22 at 11.56.08 AM (1).jpeg",
    story: "Placeholder story.",
  },
  {
    name: "New Student 13",
    university: "University Name",
    program: "Program Name",
    image: "/images/achievements/WhatsApp Image 2025-08-22 at 11.56.08 AM (2).jpeg",
    story: "Placeholder story.",
  },
  {
    name: "New Student 14",
    university: "University Name",
    program: "Program Name",
    image: "/images/achievements/WhatsApp Image 2025-08-22 at 11.56.08 AM.jpeg",
    story: "Placeholder story.",
  },
  {
    name: "New Student 15",
    university: "University Name",
    program: "Program Name",
    image: "/images/achievements/WhatsApp Image 2025-08-22 at 11.56.09 AM (1).jpeg",
    story: "Placeholder story.",
  },
  {
    name: "New Student 16",
    university: "University Name",
    program: "Program Name",
    image: "/images/achievements/WhatsApp Image 2025-08-22 at 11.56.09 AM.jpeg",
    story: "Placeholder story.",
  },
  {
    name: "New Student 17",
    university: "University Name",
    program: "Program Name",
    image: "/images/achievements/WhatsApp Image 2025-08-22 at 11.56.10 AM (1).jpeg",
    story: "Placeholder story.",
  },
  {
    name: "New Student 18",
    university: "University Name",
    program: "Program Name",
    image: "/images/achievements/WhatsApp Image 2025-08-22 at 11.56.10 AM.jpeg",
    story: "Placeholder story.",
  },
  {
    name: "New Student 19",
    university: "University Name",
    program: "Program Name",
    image: "/images/achievements/WhatsApp Image 2025-08-22 at 11.56.11 AM (1).jpeg",
    story: "Placeholder story.",
  },
  {
    name: "New Student 20",
    university: "University Name",
    program: "Program Name",
    image: "/images/achievements/WhatsApp Image 2025-08-22 at 11.56.11 AM (2).jpeg",
    story: "Placeholder story.",
  },
  {
    name: "New Student 21",
    university: "University Name",
    program: "Program Name",
    image: "/images/achievements/WhatsApp Image 2025-08-22 at 11.56.11 AM.jpeg",
    story: "Placeholder story.",
  },
  {
    name: "New Student 22",
    university: "University Name",
    program: "Program Name",
    image: "/images/achievements/WhatsApp Image 2025-08-22 at 11.56.12 AM (1).jpeg",
    story: "Placeholder story.",
  },
  {
    name: "New Student 23",
    university: "University Name",
    program: "Program Name",
    image: "/images/achievements/WhatsApp Image 2025-08-22 at 11.56.12 AM (2).jpeg",
    story: "Placeholder story.",
  },
  {
    name: "New Student 24",
    university: "University Name",
    program: "Program Name",
    image: "/images/achievements/WhatsApp Image 2025-08-22 at 11.56.12 AM.jpeg",
    story: "Placeholder story.",
  },
  {
    name: "New Student 25",
    university: "University Name",
    program: "Program Name",
    image: "/images/achievements/WhatsApp Image 2025-08-22 at 11.56.13 AM (1).jpeg",
    story: "Placeholder story.",
  },
  {
    name: "New Student 26",
    university: "University Name",
    program: "Program Name",
    image: "/images/achievements/WhatsApp Image 2025-08-22 at 11.56.13 AM (2).jpeg",
    story: "Placeholder story.",
  },
  {
    name: "New Student 27",
    university: "University Name",
    program: "Program Name",
    image: "/images/achievements/WhatsApp Image 2025-08-22 at 11.56.13 AM.jpeg",
    story: "Placeholder story.",
  }
];

const awards = [
    { name: "Best Education Consultancy", year: "2023", issuer: "Global Education Summit" },
    { name: "Excellence in Student Support", year: "2022", issuer: "International Education Awards" },
    { name: "Top-Performing Partner", year: "2021", issuer: "University of Canada West" },
]

const STORIES_PER_PAGE = 9;

export default function AchievementsPage() {
  const [visibleStories, setVisibleStories] = useState(STORIES_PER_PAGE);

  const loadMoreStories = () => {
    setVisibleStories(prev => prev + STORIES_PER_PAGE);
  };

  const successStories = allSuccessStories.slice(0, visibleStories);


  return (
    <div className="bg-background">
      <section className="w-full bg-gradient-to-r from-primary/10 via-background to-primary/10">
        <div className="container mx-auto px-4 py-24 text-center sm:py-32 md:px-8">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-foreground sm:text-5xl lg:text-6xl" style={{color: "#1946e6"}}>
            Our Legacy of Success
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Celebrating the milestones and success stories that define our
            journey.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <Card key={stat.label} className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                    {stat.icon}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-headline text-4xl font-bold text-primary">{stat.value}</p>
                  <p className="mt-2 text-lg font-semibold">{stat.label}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold text-foreground" style={{color: "#1946e6"}}>
              Student Success Stories
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Our pride lies in the achievements of our students. Here are just a few of them.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {successStories.map((story) => (
              <Card key={story.image} className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl">
                <Image
                  src={story.image}
                  alt={`Portrait of ${story.name}`}
                  data-ai-hint="happy student portrait"
                  width={400}
                  height={300}
                  className="h-auto w-full object-cover"
                />
              </Card>
            ))}
          </div>
           {visibleStories < allSuccessStories.length && (
            <div className="mt-12 text-center">
              <Button onClick={loadMoreStories} size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Load More Success Stories
              </Button>
            </div>
          )}
        </div>
      </section>
       <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center md:px-8">
           <h2 className="font-headline text-3xl font-bold text-foreground" style={{color: "#1946e6"}}>
              Awards & Recognition
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Honored for our commitment to excellence in educational consulting.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
                {awards.map(award => (
                    <Card key={award.name} className="bg-card">
                        <CardHeader>
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                <Star className="h-8 w-8 text-primary"/>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="font-semibold text-primary">{award.issuer}</p>
                            <Badge variant="secondary" className="mt-2">{award.year}</Badge>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
