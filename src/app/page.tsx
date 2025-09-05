
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
  BookOpen,
  Flag,
  School,
  ArrowRight,
  CheckCircle,
  Lightbulb,
  BookCopy,
  Scale,
  XCircle,
  Users,
  Trophy,
  Check,
  DollarSign,
  Calendar,
  Globe,
} from "lucide-react";
import { CtaSection } from "@/components/layout/cta-section";

const services = [
  {
    icon: <BookOpen className="h-10 w-10 text-accent" />,
    title: "Exam Preparation",
    description: "Master IELTS, TOEFL, GRE, and SAT with our expert guidance and proven strategies.",
    link: "/test-preparations",
  },
  {
    icon: <Flag className="h-10 w-10 text-accent" />,
    title: "Study in UK",
    description: "Your gateway to top UK universities and vibrant culture with comprehensive support.",
    link: "/study-abroad",
  },
  {
    icon: <School className="h-10 w-10 text-accent" />,
    title: "Study in US",
    description: "Navigate US college applications and campus life with ease, from admissions to visas.",
    link: "/study-abroad",
  },
  {
    icon: <Globe className="h-10 w-10 text-accent" />,
    title: "Study in Europe",
    description: "Explore diverse cultures and top-tier universities across Europe with our dedicated support.",
    link: "/study-abroad",
  },
];

const stats = [
  { value: "8.1K+", label: "Positive Reviews" },
  { value: "11 Years", label: "Of Experience" },
];

const whyChooseUsStats = [
    { value: "9000+", description: "Students trained for IELTS", icon: <Users className="h-10 w-10 text-accent" /> },
    { value: "7000+", description: "Students with 7+ band score in IELTS", icon: <Trophy className="h-10 w-10 text-accent" /> },
    { value: "3000+", description: "Students trained for GRE", icon: <Users className="h-10 w-10 text-accent" /> },
    { value: "1800+", description: "Students with 300+ score in GRE", icon: <Trophy className="h-10 w-10 text-accent" /> },
    { value: "4500+", description: "Successful visas", icon: <Check className="h-10 w-10 text-accent" /> },
    { value: "80%", description: "Students with Scholarships", icon: <DollarSign className="h-10 w-10 text-accent" /> },
    { value: "11+", description: "Years of Experience", icon: <Calendar className="h-10 w-10 text-accent" /> },
];

const countries = [
  { name: "USA", code: "US" },
  { name: "UK", code: "GB" },
  { name: "Australia", code: "AU" },
  { name: "Ireland", code: "IE" },
  { name: "Canada", code: "CA" },
];

const scholarshipItems = [
    {
        icon: <GraduationCap className="h-8 w-8 text-accent" />,
        title: "Education Status",
        description: "Pursuing 4-1 or completed graduation",
    },
    {
        icon: <Scale className="h-8 w-8 text-accent" />,
        title: "GPA Requirement",
        description: "Must have a GPA of 6.5 or above",
    },
    {
        icon: <BookCopy className="h-8 w-8 text-accent" />,
        title: "Backlogs Limit",
        description: "Backlogs should not exceed 10",
    },
    {
        icon: <Lightbulb className="h-8 w-8 text-accent" />,
        title: "Free Consultancy",
        description: "IELTS score of 6.5, GPA of 7, max 5 backlogs",
    },
];

export default function Home() {
  return (
    <div className="flex w-full flex-col bg-background">
      {/* Hero Section */}
      <section className="w-full bg-secondary">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 py-16 md:grid-cols-2 md:px-8 lg:py-24">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl" style={{color: "#1946e6"}}>
              Making your future brighter
            </h1>
            <p className="mx-auto max-w-xl text-lg leading-relaxed text-muted-foreground md:mx-0">
              One93 Global Pathways guides students aspiring for international
              education. Our expert team provides preparation for IELTS,
              TOEFL, GRE, and SAT exams. We assist learners in achieving
              their academic goals through personalised mentoring and focused
              instruction in Hyderabad, Uppal.
            </p>
            <Button asChild size="lg" className="font-bold bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/about">Learn More</Link>
            </Button>
            <div className="mt-8 border-t border-border pt-6">
              <div className="flex items-center justify-center space-x-2 md:justify-start">
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
              src="/hero-student.jpg"
              alt="Smiling student with a backpack ready for her journey"
              data-ai-hint="smiling student"
              width={600}
              height={600}
              className="mx-auto rounded-xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* About Company Section */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
                <div className="relative order-last lg:order-first">
                    <div className="relative mx-auto w-full max-w-md">
                        <div className="absolute -inset-2 rounded-xl bg-gradient-to-tr from-primary/30 to-accent/30 blur-lg"></div>
                        <Image
                            src="/student-studying.jpg"
                            alt="Student studying with a book"
                            data-ai-hint="student reading book"
                            width={600}
                            height={700}
                            className="relative rounded-lg object-cover shadow-xl"
                        />
                    </div>
                </div>
                <div className="space-y-6 text-center lg:text-left">
                    <Badge variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90">
                        About Company
                    </Badge>
                    <h2 className="font-headline text-3xl font-bold md:text-4xl" style={{color: "#1946e6"}}>
                        Take The Next Step Toward Your Education
                    </h2>
                    <p className="mx-auto max-w-xl leading-relaxed text-muted-foreground lg:mx-0">
                        At One93 Global Pathways, we give students the support they need
                        to do well in IELTS, TOEFL, GRE, and SAT. We know every student
                        learns differently, so we make sure to help them in a way that
                        fits them best. We're based in Uppal, and our goal is to help
                        students get the scores they need to go to top universities
                        around the world.
                    </p>
                    <ul className="inline-block space-y-3 text-left">
                        <li className="flex items-center">
                            <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                            Expert coaching
                        </li>
                        <li className="flex items-center">
                            <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                            Personalized support
                        </li>
                        <li className="flex items-center">
                            <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                            Clear teaching methods
                        </li>
                        <li className="flex items-center">
                            <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                            Progress tracking
                        </li>
                    </ul>
                    <div className="grid grid-cols-1 gap-6 pt-4 sm:grid-cols-2">
                        <div className="flex items-center justify-center gap-4 sm:justify-start">
                            <div className="rounded-md bg-primary/10 p-3 text-primary">
                                <Phone className="h-6 w-6" />
                            </div>
                            <div>
                                <h4 className="font-semibold">Call us now:</h4>
                                <a href="tel:+918919767632" className="text-muted-foreground hover:text-primary">
                                    +91 8919767632
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-4 sm:justify-start">
                            <div className="rounded-md bg-primary/10 p-3 text-primary">
                                <Mail className="h-6 w-6" />
                            </div>
                            <div>
                                <h4 className="font-semibold">Get in touch:</h4>
                                <a href="mailto:one93visas@gmail.com" className="text-muted-foreground hover:text-primary">
                                    one93visas@gmail.com
                                </a>
                            </div>
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
            <Badge variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 mb-4">
              YOUR PATH TO SUCCESS
            </Badge>
            <h2 className="font-headline text-3xl font-bold text-foreground md:text-4xl" style={{color: "#1946e6"}}>
              Empowering Your International Education Journey
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              We provide specialized support to ensure you are fully prepared for your academic and visa endeavors.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="transform overflow-hidden rounded-lg bg-card p-8 text-center shadow-sm transition-shadow duration-300 hover:shadow-xl border-2 border-primary/20"
              >
                <div className="mb-6 inline-block rounded-full bg-accent/10 p-4">
                  {service.icon}
                </div>
                <h3 className="font-headline pt-4 text-xl font-bold" style={{color: '#1946e6'}}>
                  {service.title}
                </h3>
                <p className="mt-2 text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Study Abroad Section */}
       <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
                 <h2 className="font-headline text-3xl font-bold md:text-4xl" style={{color: "#1946e6"}}>STUDY ABROAD</h2>
                 <Button asChild variant="link" className="font-bold text-lg mt-2">
                    <Link href="/study-abroad">Know More <ArrowRight className="ml-2 h-5 w-5" /></Link>
                  </Button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-center">
                {countries.map(country => (
                    <div key={country.name} className="flex flex-col items-center space-y-2">
                        <Image src={`https://flagsapi.com/${country.code}/flat/64.png`} alt={`${country.name} flag`} width={64} height={64} className="h-16 w-16 object-contain"/>
                        <p className="font-headline text-lg font-bold text-foreground">{country.name}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Government Scholarship Section */}
      <section className="bg-secondary py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
              <div className="mb-12 text-center">
                  <Badge variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 mb-4">
                      SCHOLARSHIP OPPORTUNITIES
                  </Badge>
                  <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl" style={{color: "#1946e6"}}>
                      GOVERNMENT Scholarship Programs
                  </h2>
                  <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                      Unlock your potential with government-sponsored scholarships. Check the eligibility criteria below.
                  </p>
              </div>

              <div className="mx-auto max-w-4xl">
                  <Card className="border-2 border-primary/20 shadow-xl">
                      <CardContent className="p-6 md:p-8">
                          <div className="mb-6 flex items-start gap-3 rounded-md border border-red-500/30 bg-red-50/50 p-4 text-red-700">
                                <XCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                                <p className="text-sm font-medium">
                                    Important: Provide photocopies of academic documents and community certificate when joining.
                                </p>
                          </div>

                          <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
                              {scholarshipItems.map((item) => (
                                  <div key={item.title} className="flex items-start gap-4">
                                      <div className="flex-shrink-0 text-accent">
                                          {item.icon}
                                      </div>
                                      <div>
                                          <h3 className="font-headline text-lg font-semibold text-primary">{item.title}</h3>
                                          <p className="text-muted-foreground">{item.description}</p>
                                      </div>
                                  </div>
                              ))}
                          </div>
                      </CardContent>
                  </Card>
              </div>
              
              <div className="mt-12 text-center">
                  <Button asChild size="lg" className="bg-accent font-bold text-accent-foreground hover:bg-accent/90">
                      <Link href="/sc-st-scholarship">
                          Explore More Scholarships <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                  </Button>
              </div>
          </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="bg-background py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8">
              <div className="text-center mb-12">
                  <Badge variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 mb-4">
                      OUR STRENGTHS
                  </Badge>
                  <h2 className="font-headline text-3xl font-bold md:text-4xl" style={{color: "#1946e6"}}>Why Choose Us</h2>
                  <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">We offer immersive language courses tailored to meet diverse learning needs, fostering fluency and cultural understanding in a supportive environment.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {whyChooseUsStats.map(stat => (
                      <Card key={stat.description} className="text-center p-6 shadow-lg rounded-xl">
                        <div className="flex justify-center items-center mb-4">
                            {stat.icon}
                        </div>
                        <p className="font-headline text-4xl font-bold text-primary">{stat.value}</p>
                        <p className="mt-2 text-muted-foreground">{stat.description}</p>
                      </Card>
                  ))}
              </div>
          </div>
      </section>

      <CtaSection />
    </div>
  );
}
