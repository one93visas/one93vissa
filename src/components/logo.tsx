import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-8 w-auto", className)}
      viewBox="0 0 200 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="One93 Global Pathways Logo"
    >
      <g clipPath="url(#clip0_10_2)">
        <text
          x="32"
          y="29"
          fontFamily="'Poppins', sans-serif"
          fontSize="24"
          fontWeight="600"
          fill="hsl(var(--primary))"
        >
          One93
          <tspan fill="hsl(var(--foreground))" dx="4">
            Global
          </tspan>
        </text>
        <path
          d="M20,10 C26.6274,10 32,15.3726 32,22 C32,28.6274 26.6274,34 20,34 C13.3726,34 8,28.6274 8,22 C8,15.3726 13.3726,10 20,10 Z M20,12 C14.4772,12 10,16.4772 10,22 C10,27.5228 14.4772,32 20,32 C25.5228,32 30,27.5228 30,22 C30,16.4772 25.5228,12 20,12 Z"
          fill="hsl(var(--primary))"
        />
        <path
          d="M19 14L19 19H14"
          stroke="hsl(var(--accent))"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.9999 28C14.9312 26.5415 15.5398 24.8461 15.75 23.06"
          stroke="hsl(var(--accent))"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_10_2">
          <rect width="200" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
