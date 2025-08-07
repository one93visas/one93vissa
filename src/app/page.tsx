import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import {
  GraduationCap,
  Globe,
  BookOpenCheck,
  Trophy,
  Star,
  Users,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: <GraduationCap className="h-10 w-10 text-primary" />,
    title: "Study Abroad",
    description: "Explore top universities and programs across the globe.",
    link: "/study-abroad",
  },
  {
    icon: <BookOpenCheck className="h-10 w-10 text-primary" />,
    title: "Test Preparations",
    description: "Ace your standardized tests with our expert guidance.",
    link: "/test-preparations",
  },
  {
    icon: <Trophy className="h-10 w-10 text-primary" />,
    title: "Scholarship Finder",
    description: "Find and apply for scholarships that match your profile.",
    link: "/masters-scholarship-finder",
  },
];

const achievements = [
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    value: "10,000+",
    label: "Students Counselled",
  },
  {
    icon: <GraduationCap className="h-10 w-10 text-primary" />,
    value: "98%",
    label: "Visa Success Rate",
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    value: "20+",
    label: "Countries",
  },
  {
    icon: <Star className="h-10 w-10 text-primary" />,
    value: "15+",
    label: "Years of Experience",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    avatar: "PS",
    image: "https://placehold.co/100x100",
    title: "Student, University of Toronto",
    quote:
      "One93 Global Pathways made my dream of studying in Canada a reality. Their guidance was invaluable throughout the entire process.",
  },
  {
    name: "Rahul Verma",
    avatar: "RV",
    image: "https://placehold.co/100x100",
    title: "Software Engineer, UK",
    quote:
      "The team is extremely professional and knowledgeable. They helped me secure a scholarship that I didn't even know I was eligible for!",
  },
  {
    name: "Anika Reddy",
    avatar: "AR",
    image: "https://placehold.co/100x100",
    title: "Masters Student, Australia",
    quote:
      "From test prep to visa application, everything was seamless. I highly recommend their services to any aspiring student.",
  },
];

export default function Home() {
  return (
    <div className="flex w-full flex-col">
      <section className="w-full bg-background">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 py-24 md:grid-cols-2 md:px-8 lg:py-32">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="font-headline text-4xl font-bold tracking-tighter text-foreground sm:text-5xl lg:text-6xl">
              Your Global Future Starts Here
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:mx-0">
              One93 Global Pathways is your trusted partner for studying abroad,
              test preparation, and finding scholarships. Let us guide you on
              your journey to success.
            </p>
            <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:justify-center md:justify-start">
              <Button asChild size="lg" className="font-bold">
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-bold">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-auto w-full">
            <Image
              src="https://placehold.co/600x450"
              alt="Happy students celebrating graduation"
              data-ai-hint="happy students graduation"
              width={600}
              height={450}
              className="mx-auto rounded-xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section id="services" className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-12 text-center">
            <Badge variant="outline">Our Services</Badge>
            <h2 className="mt-2 font-headline text-3xl font-bold text-foreground md:text-4xl">
              What We Offer
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              We provide a comprehensive range of services to help you achieve
              your academic and career goals.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card
                key={service.title}
                className="transform overflow-hidden rounded-lg bg-card transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <CardHeader className="items-center text-center">
                  <div className="rounded-full bg-primary/10 p-4">
                    {service.icon}
                  </div>
                  <CardTitle className="font-headline text-xl pt-4">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
                <div className="px-6 pb-6">
                  <Button asChild variant="link" className="font-bold w-full">
                    <Link href={service.link}>Explore <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-12 text-center">
             <Badge variant="outline">Our Achievements</Badge>
            <h2 className="font-headline text-3xl font-bold md:text-4xl">
              Proven Success
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Decades of experience and thousands of success stories.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {achievements.map((achievement) => (
              <div key={achievement.label}>
                 <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-2">
                    {achievement.icon}
                  </div>
                <div className="text-4xl font-bold text-primary">
                  {achievement.value}
                </div>
                <p className="text-muted-foreground">
                  {achievement.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-12 text-center">
            <Badge variant="outline">Testimonials</Badge>
            <h2 className="mt-2 font-headline text-3xl font-bold text-foreground md:text-4xl">
              From Our Successful Students
            </h2>
          </div>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1 h-full">
                    <Card className="h-full flex flex-col">
                      <CardContent className="flex flex-col items-center justify-center p-6 text-center flex-grow">
                        <Avatar className="mb-4 h-20 w-20">
                          <AvatarImage
                            src={testimonial.image}
                            alt={testimonial.name}
                            data-ai-hint="person portrait"
                          />
                          <AvatarFallback>
                            {testimonial.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <p className="italic text-muted-foreground">
                          "{testimonial.quote}"
                        </p>
                      </CardContent>
                       <CardHeader className="pt-0 text-center">
                        <p className="mt-4 font-bold font-headline text-foreground">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-primary">
                          {testimonial.title}
                        </p>
                      </CardHeader>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="ml-8"/>
            <CarouselNext className="mr-8"/>
          </Carousel>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16 text-center md:py-24 md:px-8">
          <h2 className="font-headline text-3xl font-bold md:text-4xl">
            Ready to Start Your Journey?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Contact us today for a free consultation and take the first step
            towards your global education.
          </p>
          <Button asChild size="lg" className="mt-8 font-bold bg-background text-primary hover:bg-background/90">
            <Link href="/contact">Contact Us Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
