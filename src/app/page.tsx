import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import {
  GraduationCap,
  Star,
  Phone,
  Mail,
  BookOpenCheck,
  Globe,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    icon: <BookOpenCheck className="h-10 w-10 text-primary" />,
    title: "Exam Preparation",
    description: "Master IELTS, TOEFL, GRE, and SAT with our expert guidance",
    link: "/test-preparations",
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: "Study in UK",
    description: "Your gateway to top UK universities and vibrant culture",
    link: "/study-abroad",
  },
  {
    icon: <GraduationCap className="h-10 w-10 text-primary" />,
    title: "Study in US",
    description: "Navigate US college applications and campus life with ease",
    link: "/study-abroad",
  },
];

const stats = [
  { value: "8.1K+", label: "Positive Reviews" },
  { value: "11 Years", label: "Of Experience" },
];

const whyChooseUsStats = [
    { value: "9000+", description: "Students trained for IELTS" },
    { value: "7000+", description: "Students with 7+ band score in IELTS" },
    { value: "3000+", description: "Students trained for GRE" },
    { value: "1800+", description: "Students with 300+ score in GRE" },
    { value: "4500+", description: "Successful visas" },
    { value: "80%", description: "Students with Scholarships" },
    { value: "11+", description: "Years of Experience" },
];

const countries = [
  { name: "USA", flag: "🇺🇸" },
  { name: "UK", flag: "🇬🇧" },
  { name: "Australia", flag: "🇦🇺" },
  { name: "Ireland", flag: "🇮🇪" },
  { name: "Canada", flag: "🇨🇦" },
];

export default function Home() {
  return (
    <div className="flex w-full flex-col bg-background">
      {/* Hero Section */}
      <section className="w-full bg-secondary">
        <div className="container mx-auto px-4 py-16 md:px-8 lg:py-24">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Making your future brighter
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                One93 Global Pathways guides students aspiring for international
                education. Our expert team provides preparation for IELTS,
                TOEFL, GRE, and SAT exams. We assist learners in achieving
                their academic goals through personalised mentoring and focused
                instruction in Hyderabad, Uppal.
              </p>
              <Button asChild size="lg" className="font-bold">
                <Link href="/about">Learn More</Link>
              </Button>
              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex items-center space-x-2">
                  <div className="flex text-accent">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                   <p className="text-sm text-muted-foreground">5-Star ratings on G2, Discord and More</p>
                </div>
                 <div className="mt-6 grid grid-cols-2 gap-8">
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="font-headline text-3xl font-bold text-primary">{stat.value}</p>
                      <p className="text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative h-auto w-full">
              <Image
                src="https://placehold.co/600x600"
                alt="Student with headphones"
                data-ai-hint="student headphones"
                width={600}
                height={600}
                className="mx-auto rounded-xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Company Section */}
      <section className="bg-background py-16 md:py-24">
         <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
                 <div className="relative h-auto w-full order-last md:order-first">
                   <Image
                    src="https://placehold.co/600x700"
                    alt="Student studying"
                    data-ai-hint="student studying"
                    width={600}
                    height={700}
                    className="mx-auto rounded-xl object-cover shadow-2xl"
                    />
                </div>
                <div className="space-y-6">
                    <Badge variant="outline">About Company</Badge>
                    <h2 className="font-headline text-3xl font-bold md:text-4xl">Take The Next Step Toward Your Education</h2>
                    <p className="text-muted-foreground">
                       At One93 Global Pathways, we give students the support they need to do well in IELTS, TOEFL, GRE, and SAT. We know every student learns differently, so we make sure to help them in a way that fits them best. We're based in Uppal, and our goal is to help students get the scores they need to go to top universities around the world.
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2 text-primary"/>Expert coaching</li>
                        <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2 text-primary"/>Personalized support</li>
                        <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2 text-primary"/>Clear teaching methods</li>
                        <li className="flex items-center"><CheckCircle className="h-5 w-5 mr-2 text-primary"/>Progress tracking</li>
                    </ul>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-border">
                        <div>
                            <p className="font-semibold">Call us now:</p>
                            <a href="tel:+918919767632" className="text-primary hover:underline flex items-center"><Phone className="h-4 w-4 mr-2"/>+91 8919767632</a>
                        </div>
                         <div>
                            <p className="font-semibold">Get in touch:</p>
                            <a href="mailto:contact@one93global.com" className="text-primary hover:underline flex items-center"><Mail className="h-4 w-4 mr-2"/>contact@one93global.com</a>
                        </div>
                    </div>
                </div>
            </div>
         </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold text-foreground md:text-4xl">
              Empowering your international education journey
            </h2>
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
                  <CardTitle className="font-headline pt-4 text-xl">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Study Abroad Section */}
       <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
                 <h2 className="font-headline text-3xl font-bold md:text-4xl">STUDY ABROAD</h2>
                 <Button asChild variant="link" className="font-bold text-lg mt-2">
                    <Link href="/study-abroad">Know More <ArrowRight className="ml-2 h-5 w-5" /></Link>
                  </Button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-center">
                {countries.map(country => (
                    <div key={country.name} className="flex flex-col items-center space-y-3">
                        <span className="text-6xl">{country.flag}</span>
                        <p className="font-headline text-lg font-semibold">{country.name}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Government Scholarship Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                 <div className="grid grid-cols-2 gap-4">
                    <Image src="https://placehold.co/400x500" data-ai-hint="student studying" alt="Student studying" width={400} height={500} className="rounded-lg object-cover" />
                    <Image src="https://placehold.co/400x500" data-ai-hint="student desk" alt="Student at desk" width={400} height={500} className="rounded-lg object-cover mt-8" />
                </div>
                <div className="space-y-6">
                    <h2 className="font-headline text-3xl font-bold md:text-4xl">GOVERNMENT Scholarship</h2>
                    <p className="text-muted-foreground italic">Important: Provide photocopies of academic documents and community certificate when joining.</p>
                    <div className="space-y-4">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Education Status</CardTitle>
                            </CardHeader>
                            <CardContent><p className="text-muted-foreground">Pursuing 4-1 or completed graduation</p></CardContent>
                        </Card>
                         <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">GPA Requirement</CardTitle>
                            </CardHeader>
                            <CardContent><p className="text-muted-foreground">Must have a GPA of 6.5 or above</p></CardContent>
                        </Card>
                         <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Backlogs Limit</CardTitle>
                            </CardHeader>
                            <CardContent><p className="text-muted-foreground">Backlogs should not exceed 10</p></CardContent>
                        </Card>
                         <Card className="bg-primary/10 border-primary">
                            <CardHeader>
                                <CardTitle className="text-lg text-primary">Free Consultancy</CardTitle>
                            </CardHeader>
                            <CardContent><p className="text-primary/90">IELTS score of 6.5, GPA of 7, max 5 backlogs</p></CardContent>
                        </Card>
                    </div>
                     <Button asChild size="lg" variant="outline">
                        <Link href="/sc-st-scholarship">Explore More</Link>
                    </Button>
                </div>
            </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="bg-background py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
              <div className="text-center mb-12">
                  <h2 className="font-headline text-3xl font-bold md:text-4xl">Why Choose Us</h2>
                  <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">We offer immersive language courses tailored to meet diverse learning needs, fostering fluency and cultural understanding in a supportive environment.</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {whyChooseUsStats.map(stat => (
                      <div key={stat.description} className="text-center p-4 rounded-lg bg-secondary">
                          <p className="font-headline text-4xl font-bold text-primary">{stat.value}</p>
                          <p className="mt-2 text-muted-foreground">{stat.description}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

    </div>
  );
}
