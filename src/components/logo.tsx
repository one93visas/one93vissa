import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      className={cn("w-auto", className)}
      viewBox="0 0 250 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="One93 VISAS Logo"
    >
      <style>
        {`
          .one93-blue { fill: #0047FF; }
          .one93-orange { fill: #F9A825; }
          .one93-white { fill: #FFFFFF; }
          .font-title { font-family: 'Poppins', sans-serif; font-weight: 700; font-size: 32px; }
          .font-subtitle { font-family: 'Poppins', sans-serif; font-weight: 500; font-size: 16px; }
          .font-tagline { font-family: 'Poppins', sans-serif; font-weight: 500; font-size: 8px; }
        `}
      </style>
      
      {/* "9" shape - blue part */}
      <path d="M125.4,35.3c-15.6,0-28.7,6.3-36.8,16.5c-3,3.8-5.3,8.3-6.4,13.1c-1.3,5.4-0.4,11.2,2.6,15.9 c2.1,3.4,5,6.2,8.4,8.1c-12.7-5.5-20.9-18-20.9-32.4c0-19.9,16.2-36.1,36.1-36.1s36.1,16.2,36.1,36.1 c0,10.6-4.6,20.1-11.9,26.7C137.9,78,141,69,141,59.3C141,46,134.4,35.3,125.4,35.3z" className="one93-blue" />
      
      {/* "9" shape - orange part */}
      <path d="M120,83.1c-2,1.3-4.2,2.3-6.6,3.1c-14.7,4.6-26,17.4-26,32.8c0,18.8,15.3,34.1,34.1,34.1s34.1-15.3,34.1-34.1 C155.6,100.2,140,84.4,120,83.1z M85,59.3c0-22.1,17.9-40,40-40s40,17.9,40,40c0,12.3-5.6,23.2-14.1,30.3 c-2.3-3.6-5.1-6.8-8.2-9.4c-6.8-5.6-15.4-8.8-24.7-8.8C103.1,71.4,92.5,76,85,83.2V59.3z" className="one93-orange" />
      
      {/* Graduate Icon */}
      <g>
        <path d="M110.1,8.3c-6,0-10.9,4.9-10.9,10.9s4.9,10.9,10.9,10.9s10.9-4.9,10.9-10.9S116.1,8.3,110.1,8.3z" className="one93-orange" />
        <path d="M122.9,32.9c-2.1-1.3-4.6-2-7.2-2s-5.1,0.7-7.2,2c-4.4,2.7-7.2,7.5-7.2,12.8v10.3c3.7-4.4,8.8-7.2,14.4-7.2 s10.7,2.8,14.4,7.2V45.7C130.1,40.4,127.3,35.6,122.9,32.9z" className="one93-orange" />
        <path d="M123.8,12.5l-13.7-5.2l-13.7,5.2l13.7,5.2L123.8,12.5z M100.1,14.6v6.5c0,0.8,2.7,4.1,10,4.1s10-3.3,10-4.1v-6.5 l-10,3.8L100.1,14.6z" className="one93-blue" />
      </g>
      
      {/* Airplane */}
      <g>
        <path d="m142.3,47.5 14.8-14.8c1.2-1.2,3.1-1.2,4.2,0l5.8,5.8c1.2,1.2,1.2,3.1,0,4.2l-14.8,14.8c-0.6,0.6-1.4,0.9-2.1,0.9l-8.2,0c-1.7,0-3.1-1.4-3.1-3.1v-8.2c0-0.8,0.3-1.5,0.9-2.1l2.5-2.5z" className="one93-orange"/>
        <path d="M140.2,56.7c-2.5,2.5-5.8,4-9.3,4h-10.3c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5h10.3c2.7,0,5.2-1,7.1-2.9L140.2,56.7z" className="one93-blue"/>
      </g>
      
      {/* Tagline "fly any where with us" */}
      <path id="taglinePath" d="M 94 70 A 30 30 0 0 1 128 78" fill="transparent"/>
      <text className="one93-white font-tagline">
        <textPath href="#taglinePath" startOffset="50%" textAnchor="middle">
          fly any where with us
        </textPath>
      </text>

      {/* Text: "One93 VISAS" */}
      <text x="35" y="120" className="one93-blue font-title">One93 VISAS</text>
      
      {/* Text: "Overseas Edu Consultants" */}
      <text x="30" y="140" className="one93-orange font-subtitle">Overseas Edu Consultants</text>
    </svg>
  );
}
