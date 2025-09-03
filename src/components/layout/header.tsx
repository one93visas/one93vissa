
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";
import { Logo } from "@/components/logo";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="w-full p-4">
        <header className="container mx-auto flex h-24 items-center justify-between rounded-2xl border border-border/40 bg-background/95 p-4 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-background/60 md:px-8">
            <Link href="/" className="flex items-center space-x-2">
            <Logo className="h-20 object-contain" />
            </Link>

            {/* Mobile Nav */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
                <Link
                href="/"
                className="flex items-center"
                onClick={() => setIsOpen(false)}
                >
                <Logo className="h-20 object-contain" />
                </Link>
                <div className="mt-8 flex flex-col space-y-2">
                {NAV_LINKS.map((link) => (
                    <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                        "p-3 rounded-l-md text-foreground/70 transition-colors hover:text-primary hover:bg-secondary",
                        pathname === link.href &&
                        "bg-secondary text-primary font-semibold"
                    )}
                    >
                    {link.name}
                    </Link>
                ))}
                </div>
            </SheetContent>
            </Sheet>

            {/* Desktop Nav */}
            <nav className="hidden md:flex md:items-center md:gap-x-1 lg:gap-x-2">
            {NAV_LINKS.map((link) => (
                <Link
                key={link.href}
                href={link.href}
                className={cn(
                    "rounded-full px-3 py-2 text-xs lg:px-4 lg:text-sm font-medium transition-colors",
                    pathname === link.href
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
                >
                {link.name}
                </Link>
            ))}
            </nav>
        </header>
    </div>
  );
}
