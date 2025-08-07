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
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  subject: z
    .string()
    .min(5, { message: "Subject must be at least 5 characters." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(data: ContactFormValues) {
    console.log(data);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We will get back to you shortly.",
    });
    form.reset();
  }

  return (
    <div className="bg-background">
      <section className="bg-secondary py-20 text-center">
        <div className="container mx-auto">
          <h1 className="font-headline text-4xl font-bold text-primary md:text-5xl">
            Get In Touch
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/80">
            We're here to help you with any questions. Reach out to us, and
            we'll respond as soon as we can.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto grid grid-cols-1 gap-12 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">
                Send us a Message
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
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="you@example.com"
                              {...field}
                            />
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
                          <FormLabel>Phone Number (Optional)</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="+1 (555) 123-4567"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Inquiry about..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Please describe your inquiry in detail."
                            className="min-h-[150px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full font-bold"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting
                      ? "Sending..."
                      : "Send Message"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="bg-primary/5">
              <CardContent className="p-6">
                <h3 className="font-headline text-2xl font-semibold text-primary">
                  Contact Information
                </h3>
                <p className="mt-2 text-foreground/80">
                  Find us at our office or get in touch via phone or email.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 flex-shrink-0 text-accent" />
                    <div>
                      <h4 className="font-semibold">Our Office</h4>
                      <p className="text-foreground/80">
                        123 Education Lane, Knowledge City, 54321
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 flex-shrink-0 text-accent" />
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <a
                        href="tel:+1234567890"
                        className="text-foreground/80 hover:text-primary"
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 flex-shrink-0 text-accent" />
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <a
                        href="mailto:info@one93.com"
                        className="text-foreground/80 hover:text-primary"
                      >
                        info@one93.com
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="h-80 w-full overflow-hidden rounded-lg">
                <Image src="https://placehold.co/600x400" alt="Map to our office" data-ai-hint="city map" width={600} height={400} className="w-full h-full object-cover"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
