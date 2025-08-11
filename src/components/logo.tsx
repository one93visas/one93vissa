import { cn } from "@/lib/utils";
import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="One93 VISAS Logo"
      width={250}
      height={150}
      className={cn("w-auto", className)}
    />
  );
}
