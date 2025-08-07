import ScholarshipClient from "./scholarship-client";

export default function MastersScholarshipFinderPage() {
  return (
    <div className="bg-background">
      <section className="bg-secondary text-center">
        <div className="container mx-auto px-4 py-24 sm:py-32 md:px-8">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-foreground sm:text-5xl lg:text-6xl">
            AI-Powered Scholarship Finder
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Fill in your details below, and our AI will find the best masters
            scholarships for you from around the globe.
          </p>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-4 md:px-8">
            <ScholarshipClient />
        </div>
      </section>
    </div>
  );
}
