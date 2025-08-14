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
    <footer className="bg-secondary">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4 md:col-span-1 text-center md:text-left">
            <Logo className="h-24 object-contain mx-auto md:mx-0" />
            <p className="text-sm text-muted-foreground">
             One93 Visas ensures a smooth and hassle-free experience for various countries like the USA, Canada, Australia, and the UK.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
              </Link>
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:col-span-3 text-center sm:text-left">
            <div>
              <h3 className="font-headline text-sm font-semibold uppercase tracking-wider text-foreground">
                Services
              </h3>
              <ul className="mt-4 space-y-2">
                {serviceLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-headline text-sm font-semibold uppercase tracking-wider text-foreground">
                Support
              </h3>
              <ul className="mt-4 space-y-2">
                {supportLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
                <h3 className="font-headline text-sm font-semibold uppercase tracking-wider text-foreground">Contact Info</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li>#304, 3rd Floor, Padmaja,s Raja Enclave,</li>
                    <li>Beside KS Backers, KPHB, Kukatpally,</li>
                     <li>Hyderabad-72, Telangana, INDIA</li>
                    <li><a href="tel:9121225066" className="hover:text-primary">9121225066</a>/<a href="tel:9121225067" className="hover:text-primary">67</a>/<a href="tel:9121225068" className="hover:text-primary">68</a></li>
                    <li><a href="tel:+914048502636" className="hover:text-primary">+91-40-48502636</a></li>
                    <li><a href="mailto:info@one93visas.com" className="hover:text-primary">info@one93visas.com</a></li>
                    <li><a href="mailto:one93visas@gmail.com" className="hover:text-primary">one93visas@gmail.com</a></li>
                </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} One93 Global Pathways. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
