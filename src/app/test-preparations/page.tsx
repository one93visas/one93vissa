"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  CheckCircle,
  BookOpen,
  Clock,
  Users,
  Trophy,
  PenTool,
  Mic,
  FileText,
  User,
  Monitor,
  ArrowRight,
} from "lucide-react"

export default function TestPreparationPage() {
  const courses = [
    {
      title: "IELTS",
      subtitle: "International English Language Testing System",
      description: "Assess English language proficiency for study, work, and migration.",
      sections: [
        "Listening (30 minutes): 4 sections, 40 questions",
        "Reading (60 minutes): 3 texts, 40 questions",
        "Writing (60 minutes): 2 tasks",
        "Speaking (11-14 minutes): Face-to-face interview",
      ],
    },
    {
      title: "PTE",
      subtitle: "Pearson Test of English Academic",
      description: "Computer-based English language test for international study and immigration.",
      sections: ["Speaking & Writing (54-67 minutes)", "Reading (29-30 minutes)", "Listening (30-43 minutes)"],
    },
    {
      title: "DET",
      subtitle: "Duolingo English Test",
      description: "Fast, affordable online test that can be taken from home.",
      sections: [
        "Reading: Fill in missing words, choose real English words",
        "Writing: Describe pictures, respond to prompts, write essays",
        "Speaking: Read aloud, describe images, give verbal responses",
        "Listening: Identify words, understand content through different accents",
      ],
    },
    {
      title: "GRE",
      subtitle: "Graduate Record Examination",
      description: "Required for admission to many graduate programs worldwide, particularly in the U.S.",
      sections: [
        "Analytical Writing (30 minutes): Argument task",
        "Verbal Reasoning (60 minutes): Two sections, 27 questions each",
        "Quantitative Reasoning (70 minutes): Two sections, 27 questions each",
      ],
    },
    {
      title: "SAT",
      subtitle: "Scholastic Assessment Test",
      description: "Critical exam for college admissions in the U.S. and other countries.",
      sections: [
        "Evidence-Based Reading and Writing:",
        "Reading (65 minutes): 52 questions",
        "Writing and Language (35 minutes): 44 questions",
        "Math: No Calculator (25 minutes): 20 questions",
        "Math: With Calculator (55 minutes): 38 questions",
      ],
    },
  ]

  const trainingProcess = [
    {
      step: 1,
      title: "Online Training",
      description:
        "Online training offers flexibility, allowing students to access classes and resources from any location. It typically includes live sessions, recorded lectures, and interactive tools for assessments, making it ideal for busy students or those in remote areas.",
      icon: Monitor,
    },
    {
      step: 2,
      title: "Offline Training",
      description:
        "Offline or in-person training provides a structured, classroom-based environment where students can directly interact with instructors and peers. It fosters better engagement through face-to-face discussions, immediate feedback, and hands-on activities.",
      icon: Users,
    },
    {
      step: 3,
      title: "Learning through Practice",
      description:
        "Students are encouraged to learn by actively engaging with practice exercises, improving their skills through hands-on application of concepts. This approach ensures better retention and understanding.",
      icon: BookOpen,
    },
    {
      step: 4,
      title: "Daily Assignments",
      description:
        "Daily assignments reinforce concepts taught during the sessions, helping students practice consistently and improve their skills gradually.",
      icon: FileText,
    },
    {
      step: 5,
      title: "Regular Assessments",
      description:
        "Continuous evaluations help track students' progress, identifying strengths and areas that need improvement, ensuring steady growth throughout the course.",
      icon: CheckCircle,
    },
    {
      step: 6,
      title: "Weekly Mocks and Evaluation",
      description:
        "Weekly mock exams simulate real test conditions, allowing students to gauge their readiness, while evaluations provide insights into performance.",
      icon: Clock,
    },
    {
      step: 7,
      title: "Grand Tests and Feedback",
      description:
        "Full-length grand tests offer a comprehensive review of the entire syllabus, followed by detailed feedback to enhance students' exam-taking strategies.",
      icon: Trophy,
    },
    {
      step: 8,
      title: "One-on-One Speaking Mocks",
      description:
        "Personalized speaking practice sessions allow students to receive direct feedback, enhancing fluency and confidence in real-life speaking scenarios.",
      icon: Mic,
    },
    {
      step: 9,
      title: "Writing Evaluation",
      description:
        "Individualized feedback on writing tasks helps students improve structure, coherence, and grammar, key components of high-scoring essays.",
      icon: PenTool,
    },
    {
      step: 10,
      title: "One-on-One Training",
      description:
        "Tailored one-on-one coaching provides personalized attention and guidance from our expert trainers.",
      icon: User,
    },
  ]

  const uniqueFeatures = [
    "Learning through Practice",
    "Regular Assessments",
    "Weekly Mocks and Evaluation",
    "Grand Tests and Feedback",
    "Daily Assignments",
    "One-on-One Speaking Mocks",
    "Writing Evaluation",
    "One-on-One Training",
    "Fast-track Batches",
    "Unique Practice Material",
    "50 Individual Module Tests",
    "Online and Offline Trainings",
    "Unique Teaching Strategies",
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 lg:py-40 bg-[#2853a0] text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-no-repeat bg-center"
          style={{ backgroundImage: "url('/background-pattern.svg')", opacity: 0.1 }}
        />
        <div className="container relative z-10 grid lg:grid-cols-2 items-center gap-10 px-4 md:px-6">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-[#facc15]">
              Test Preparation
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-white">Experience Exceptional Results!</p>
            <p className="max-w-[600px] text-lg md:text-xl text-gray-200 leading-relaxed mx-auto lg:mx-0">
              Master IELTS, PTE, DET, GRE, and SAT with One93 VISAS expert guidance and proven strategies.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#facc15] px-8 text-base font-semibold text-[#2853a0] shadow-lg transition-all hover:bg-yellow-400 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="relative w-full max-w-md mx-auto lg:max-w-none lg:mx-0 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-2.5 rounded-full bg-[#facc15]"/>
              <Image
                src="https://placehold.co/500x500"
                alt="Test Preparation"
                width={500}
                height={500}
                data-ai-hint="student smiling"
                className="relative rounded-full object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Courses Offered Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <span className="inline-block rounded-full bg-yellow-400 px-4 py-1 text-sm font-semibold text-blue-900 uppercase tracking-wide">
              Our Programs
            </span>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-blue-900">Courses Offered</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Comprehensive test preparation programs designed to help you achieve your target scores.
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl items-start gap-8 sm:grid-cols-1 lg:grid-cols-2">
            {courses.map((course, index) => (
              <Card
                key={index}
                className="flex flex-col p-8 shadow-lg rounded-xl border-t-4 border-blue-900 transform hover:scale-105 transition-transform duration-300"
              >
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-3xl font-bold text-blue-900 mb-2">{course.title}</CardTitle>
                  <p className="text-lg font-semibold text-yellow-500">{course.subtitle}</p>
                  <p className="text-base text-muted-foreground mt-2">{course.description}</p>
                </CardHeader>
                <CardContent className="space-y-2">
                  {course.sections.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground">{section}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Start Learning Today Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <span className="inline-block rounded-full bg-yellow-400 px-4 py-1 text-sm font-semibold text-blue-900 uppercase tracking-wide">
              Flexible Learning
            </span>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-blue-900">Start Learning Today!</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Learn anywhere, anytime with our flexible online and offline training options.
            </p>
          </div>
          <div className="mx-auto grid max-w-4xl items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-blue-900">Learn Anywhere, Anytime</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Monitor className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-blue-900">Online Learning Platform</h4>
                    <p className="text-muted-foreground">
                      Access classes and resources from any location with live sessions and recorded lectures.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-blue-900">Interactive Learning</h4>
                    <p className="text-muted-foreground">
                      Engage with interactive tools, assessments, and personalized learning experiences.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-blue-900">Flexible Schedule</h4>
                    <p className="text-muted-foreground">
                      Perfect for busy students with on-demand support and easy access to materials.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://placehold.co/600x400"
                alt="Online Learning"
                width={600}
                height={400}
                data-ai-hint="student online learning"
                className="rounded-xl object-cover shadow-2xl border-4 border-blue-900"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Training Process Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <span className="inline-block rounded-full bg-yellow-400 px-4 py-1 text-sm font-semibold text-blue-900 uppercase tracking-wide">
              Our Methodology
            </span>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-blue-900">Training Process</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A comprehensive approach to learning and development with our 10-step training process.
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl items-start gap-8 sm:grid-cols-1 lg:grid-cols-2">
            {trainingProcess.map((process, index) => (
              <Card
                key={index}
                className="flex flex-col p-6 shadow-lg rounded-xl border-l-4 border-yellow-500 transform hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-900 text-white rounded-full font-bold text-lg">
                      {process.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <process.icon className="h-6 w-6 text-yellow-500" />
                      <h3 className="text-xl font-bold text-blue-900">{process.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{process.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Unique Learning Approach Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-blue-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <span className="inline-block rounded-full bg-yellow-400 px-4 py-1 text-sm font-semibold text-blue-900 uppercase tracking-wide">
              What Makes Us Different
            </span>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-yellow-400">
              Our Unique Learning Approach
            </h2>
            <p className="max-w-[900px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Experience innovative teaching methods and comprehensive support designed for your success.
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {uniqueFeatures.map((feature, index) => (
              <Card
                key={index}
                className="flex flex-col items-center text-center p-6 shadow-lg bg-white text-blue-900 rounded-xl transform hover:scale-105 transition-transform duration-300"
              >
                <CheckCircle className="h-12 w-12 text-yellow-500 mb-4" />
                <CardTitle className="text-lg font-bold text-blue-900">{feature}</CardTitle>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-yellow-400 px-8 text-base font-semibold text-blue-900 shadow-lg transition-all hover:bg-yellow-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Start Your Journey Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
