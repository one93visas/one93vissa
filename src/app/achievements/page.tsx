import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, GraduationCap, Star, Trophy, Users } from "lucide-react";

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

const successStories = [
  {
    name: "Alisha Khan",
    university: "Stanford University, USA",
    program: "MS in Computer Science",
    image: "https://placehold.co/400x300",
    story: "One93 helped me build a strong profile and navigate the competitive application process for my dream school.",
  },
  {
    name: "Ben Carter",
    university: "University of Oxford, UK",
    program: "MSc in Financial Economics",
    image: "https://placehold.co/400x300",
    story: "The guidance on my SOP and LORs was exceptional. I also received a significant scholarship thanks to their help.",
  },
  {
    name: "Chloe Garcia",
    university: "University of Melbourne, Australia",
    program: "Master of Marketing",
    image: "https://placehold.co/400x300",
    story: "As a first-generation international student, their support was crucial. They made the entire journey stress-free.",
  },
   {
    name: "David Lee",
    university: "University of British Columbia, Canada",
    program: "MBA",
    image: "https://placehold.co/400x300",
    story: "Their test preparation modules were top-notch and significantly boosted my GMAT score.",
  },
   {
    name: "Emily Wang",
    university: "TU Munich, Germany",
    program: "MS in Mechanical Engineering",
    image: "https://placehold.co/400x300",
    story: "From university selection to visa interviews, the team at One93 was with me every step of the way.",
  },
   {
    name: "Fatima Ahmed",
    university: "National University of Singapore",
    program: "MSc in Business Analytics",
    image: "https://placehold.co/400x300",
    story: "The AI scholarship finder is a game-changer! It found niche scholarships that I would have never discovered on my own.",
  },
];

const awards = [
    { name: "Best Education Consultancy", year: "2023", issuer: "Global Education Summit" },
    { name: "Excellence in Student Support", year: "2022", issuer: "International Education Awards" },
    { name: "Top-Performing Partner", year: "2021", issuer: "University of Canada West" },
]

export default function AchievementsPage() {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-secondary py-24 text-center sm:py-32">
        <div className="container relative z-10 mx-auto">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
            Our Legacy of Success
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/80">
            Celebrating the milestones and success stories that define our
            journey.
          </p>
        </div>
        <div className="absolute inset-0 z-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05]" />
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
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
                  <p className="mt-1 text-sm text-foreground/70">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold text-primary">
              Student Success Stories
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-foreground/80">
              Our pride lies in the achievements of our students. Here are just a few of them.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {successStories.map((story) => (
              <Card key={story.name} className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl">
                <Image
                  src={story.image}
                  alt={`Portrait of ${story.name}`}
                  data-ai-hint="happy student portrait"
                  width={400}
                  height={300}
                  className="h-auto w-full object-cover"
                />
                <CardHeader>
                  <CardTitle className="font-headline text-xl">{story.name}</CardTitle>
                  <p className="text-sm text-primary">{story.university}</p>
                   <p className="text-sm text-foreground/70">{story.program}</p>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-foreground/80">"{story.story}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
       <section className="py-16 md:py-24">
        <div className="container mx-auto text-center">
           <h2 className="font-headline text-3xl font-bold text-primary">
              Awards & Recognition
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-foreground/80">
              Honored for our commitment to excellence in educational consulting.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
                {awards.map(award => (
                    <Card key={award.name} className="bg-primary/5">
                        <CardHeader>
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                                <Star className="h-8 w-8 text-accent"/>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <h3 className="font-headline text-lg font-bold">{award.name}</h3>
                            <p className="text-primary">{award.issuer}</p>
                            <Badge variant="secondary" className="mt-4">{award.year}</Badge>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
}
