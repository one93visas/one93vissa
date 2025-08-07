import ScholarshipClient from "./scholarship-client";

export default function MastersScholarshipFinderPage() {
  return (
    <div className="bg-background">
      <section className="bg-secondary py-20 text-center">
        <div className="container mx-auto">
          <h1 className="font-headline text-4xl font-bold text-primary md:text-5xl">
            AI-Powered Scholarship Finder
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/80">
            Fill in your details below, and our AI will find the best masters
            scholarships for you from around the globe.
          </p>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-4xl">
            <ScholarshipClient />
        </div>
      </section>
    </div>
  );
}
