"use client";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const beams = [
    { delay: 0, duration: 7, left: "10%" },
    { delay: 1.5, duration: 9, left: "25%" },
    { delay: 3, duration: 6, left: "40%" },
    { delay: 0.5, duration: 8, left: "55%" },
    { delay: 2, duration: 10, left: "70%" },
    { delay: 4, duration: 7, left: "85%" },
  ];

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {beams.map((beam, i) => (
        <div
          key={i}
          className="absolute top-0 h-full w-[1px] opacity-0"
          style={{
            left: beam.left,
            background: "linear-gradient(to bottom, transparent, rgba(201, 168, 76, 0.6), transparent)",
            animation: `beamAnim ${beam.duration}s ${beam.delay}s ease-in-out infinite alternate`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes beamAnim {
          0% { opacity: 0; transform: scaleY(0.3) translateY(-30%); }
          50% { opacity: 0.4; }
          100% { opacity: 0; transform: scaleY(0.3) translateY(30%); }
        }
      `}</style>
    </div>
  );
};
