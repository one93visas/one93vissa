import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const destinations = [
  {
    name: "USA",
    image: "https://placehold.co/600x400",
    hint: "USA landmark",
    description: "Home to top-ranked universities and diverse cultural experiences. The USA offers unparalleled research opportunities and a flexible education system.",
    features: ["Top Universities", "Innovation Hub", "Cultural Diversity"],
  },
  {
    name: "United Kingdom",
    image: "https://placehold.co/600x400",
    hint: "UK landmark",
    description: "Experience world-renowned education with a rich history. UK degrees are highly respected globally, with shorter, more intensive courses.",
    features: ["Historic Universities", "Globally Recognized", "Multicultural"],
  },
  {
    name: "Canada",
    image: "https://placehold.co/600x400",
    hint: "Canada landscape",
    description: "Known for its high quality of life, welcoming environment, and excellent yet affordable education. Offers clear pathways to permanent residency.",
    features: ["High Quality of Life", "Work Opportunities", "Affordable"],
  },
  {
    name: "Australia",
    image: "https://placehold.co/600x400",
    hint: "Australia landmark",
    description: "Enjoy a vibrant lifestyle while studying in globally recognized institutions. Australia is a leader in research and offers a great student experience.",
    features: ["Vibrant Lifestyle", "Research Focus", "Beautiful Scenery"],
  },
  {
    name: "Germany",
    image: "https://placehold.co/600x400",
    hint: "Germany castle",
    description: "Benefit from world-class education with little to no tuition fees at public universities. Germany is an engineering and technology powerhouse.",
    features: ["Low/No Tuition Fees", "Engineering Hub", "High Standard of Living"],
  },
  {
    name: "New Zealand",
    image: "https://placehold.co/600x400",
    hint: "New Zealand landscape",
    description: "A safe and friendly country with a high-quality, UK-based education system. Famous for its stunning natural landscapes and work-life balance.",
    features: ["Safe & Friendly", "Stunning Nature", "Outdoor Activities"],
  },
];

export default function StudyAbroadPage() {
  return (
    <div className="bg-background">
      <section className="bg-secondary text-center">
        <div className="container mx-auto px-4 py-24 sm:py-32 md:px-8">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-foreground sm:text-5xl lg:text-6xl">
            Study Abroad Destinations
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Explore world-class education in the most sought-after countries.
            Your global adventure awaits.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {destinations.map((dest) => (
              <Card key={dest.name} className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl">
                <CardHeader className="p-0">
                  <Image
                    src={dest.image}
                    alt={`A scenic view of ${dest.name}`}
                    data-ai-hint={dest.hint}
                    width={600}
                    height={400}
                    className="h-56 w-full object-cover"
                  />
                </CardHeader>
                <div className="flex flex-grow flex-col p-6">
                    <CardTitle className="font-headline text-2xl text-primary">
                      {dest.name}
                    </CardTitle>
                    <CardDescription className="mt-2 flex-grow text-muted-foreground">
                      {dest.description}
                    </CardDescription>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {dest.features.map(feature => (
                            <Badge key={feature} variant="secondary">{feature}</Badge>
                        ))}
                    </div>
                </div>
                <CardFooter className="bg-secondary p-4">
                    <Button asChild variant="link" className="font-bold">
                        <Link href={`/contact?inquiry=Study_in_${dest.name}`}>Learn More &rarr;</Link>
                    </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
