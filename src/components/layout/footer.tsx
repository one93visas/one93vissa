import Link from "next/link";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export function Footer() {
  const supportLinks = [
    { name: "Contact Us", href: "/contact" },
    { name: "About Us", href: "/about" },
    { name: "FAQs", href: "/faq" },
  ];

  const serviceLinks = NAV_LINKS.filter(
    (link) =>
      link.name !== "Home" &&
      link.name !== "Contact Us" &&
      link.name !== "About Us"
  );

  return (
    <footer className="bg-secondary text-foreground">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4 md:col-span-1">
            <Logo />
            <p className="text-sm text-foreground/80">
              Your partner in global education and career opportunities.
            </p>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-6 w-6 text-foreground/70 transition-colors hover:text-primary" />
              </Link>
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-6 w-6 text-foreground/70 transition-colors hover:text-primary" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-6 w-6 text-foreground/70 transition-colors hover:text-primary" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6 text-foreground/70 transition-colors hover:text-primary" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-3 md:grid-cols-3">
            <div>
              <h3 className="font-headline text-sm font-semibold uppercase tracking-wider text-primary">
                Services
              </h3>
              <ul className="mt-4 space-y-2">
                {serviceLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/80 transition-colors hover:text-primary"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-headline text-sm font-semibold uppercase tracking-wider text-primary">
                Support
              </h3>
              <ul className="mt-4 space-y-2">
                {supportLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/80 transition-colors hover:text-primary"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
                <h3 className="font-headline text-sm font-semibold uppercase tracking-wider text-primary">Contact Info</h3>
                <ul className="mt-4 space-y-2 text-sm text-foreground/80">
                    <li>123 Education Lane,</li>
                    <li>Knowledge City, 54321</li>
                    <li><a href="tel:+1234567890" className="hover:text-primary">+1 (234) 567-890</a></li>
                    <li><a href="mailto:info@one93.com" className="hover:text-primary">info@one93.com</a></li>
                </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-foreground/60">
          <p>
            &copy; {new Date().getFullYear()} One93 Global Pathways. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
