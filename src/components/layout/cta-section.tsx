"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ctaFormSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  interestedIn: z.string({
    required_error: "Please select an option.",
  }),
});

type CtaFormValues = z.infer<typeof ctaFormSchema>;

export function CtaSection() {
  const { toast } = useToast();
  const form = useForm<CtaFormValues>({
    resolver: zodResolver(ctaFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
    },
  });

  function onSubmit(data: CtaFormValues) {
    console.log(data);
    toast({
      title: "Enquiry Sent!",
      description: "Thank you for your interest. We will get back to you shortly.",
    });
    form.reset();
  }

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:px-8">
        <div className="space-y-6 text-center md:text-left">
          <Badge variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90">
            GET STARTED
          </Badge>
          <h2 className="font-headline text-4xl font-bold tracking-tight md:text-5xl" style={{color: "#1946e6"}}>
            Ready to Begin Your Journey?
          </h2>
          <p className="max-w-lg text-muted-foreground mx-auto md:mx-0">
            Interested in studying abroad? Fill out the form below and our
            experts will contact you for a personalized 1:1 counselling session.
          </p>
          <Button asChild size="lg" className="bg-accent font-bold text-accent-foreground hover:bg-accent/90">
            <Link href="/contact">
              Contact Our Experts <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        <Card className="rounded-xl shadow-2xl">
          <CardHeader>
            <CardTitle className="font-headline text-center text-2xl font-bold" style={{color: "#1946e6"}}>
              Book Your Free Counselling
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Your Full Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input type="email" placeholder="Your Email Address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input type="tel" placeholder="Your Phone Number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="interestedIn"
                  render={({ field }) => (
                    <FormItem>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Interested In" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="study-abroad">Study Abroad</SelectItem>
                          <SelectItem value="test-prep">Test Preparation</SelectItem>
                          <SelectItem value="scholarships">Scholarships</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full bg-accent font-bold text-accent-foreground hover:bg-accent/90"
                  size="lg"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting
                    ? "Submitting..."
                    : "Submit Now"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
