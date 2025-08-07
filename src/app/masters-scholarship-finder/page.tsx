import ScholarshipClient from "./scholarship-client";

export default function MastersScholarshipFinderPage() {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-secondary py-24 text-center sm:py-32">
        <div className="container relative z-10 mx-auto">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
            AI-Powered Scholarship Finder
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/80">
            Fill in your details below, and our AI will find the best masters
            scholarships for you from around the globe.
          </p>
        </div>
        <div className="absolute inset-0 z-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05]" />
      </section>
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-4xl">
            <ScholarshipClient />
        </div>
      </section>
    </div>
  );
}
