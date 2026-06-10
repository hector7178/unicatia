"use client";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface TestimonialItem {
  quote: string;
  name: string;
  title: string;
}

// ── Single infinite track ──────────────────────────────────────────────────
function MarqueeTrack({
  items,
  reverse = false,
  speed = 40,
  pauseOnHover = true,
}: {
  items: TestimonialItem[];
  reverse?: boolean;
  speed?: number;
  pauseOnHover?: boolean;
}) {
  // We duplicate items so the loop is seamless (2× original set)
  const duplicated = [...items, ...items];

  return (
    <div
      className={cn(
        "flex gap-5 w-max",
        reverse ? "animate-scroll-reverse" : "animate-scroll",
        pauseOnHover && "hover:[animation-play-state:paused]"
      )}
      style={{ "--animation-duration": `${speed}s` } as React.CSSProperties}
    >
      {duplicated.map((item, idx) => (
        <TestimonialCard key={idx} item={item} />
      ))}
    </div>
  );
}

// ── Card ──────────────────────────────────────────────────────────────────
function TestimonialCard({ item }: { item: TestimonialItem }) {
  return (
    <div className="w-[300px] md:w-[360px] flex-shrink-0 relative rounded-2xl border border-[#C8E4F5] bg-white px-7 py-6 shadow-sm group transition-all duration-300 hover:border-[#0DB4C3]/50 hover:shadow-[0_8px_30px_rgba(13,180,195,0.12)] hover:-translate-y-1">
      {/* Stars */}
      <div className="flex gap-0.5 mb-3">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-[#0DB4C3] text-sm">★</span>
        ))}
      </div>

      {/* Quote mark */}
      <div className="text-[#0DB4C3]/20 text-6xl font-serif leading-none select-none mb-1">"</div>

      <blockquote>
        <p className="text-[#2A5A8A] text-sm leading-relaxed mb-5 line-clamp-4">
          {item.quote}
        </p>
        <footer className="flex items-center gap-3">
          {/* Avatar */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0DB4C3] to-[#1B6FCA] flex items-center justify-center text-white font-bold text-sm shadow-sm flex-shrink-0">
            {item.name.charAt(0)}
          </div>
          <div>
            <p className="text-[#06274A] font-semibold text-sm leading-tight">{item.name}</p>
            <p className="text-[#0DB4C3] text-xs mt-0.5">{item.title}</p>
          </div>
        </footer>
      </blockquote>

      {/* Subtle corner glow on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0DB4C3]/0 to-[#1B6FCA]/0 group-hover:from-[#0DB4C3]/4 group-hover:to-[#1B6FCA]/3 transition-all duration-500 pointer-events-none" />
    </div>
  );
}

// ── Main exported component ───────────────────────────────────────────────
export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
  doubleRow = true,
}: {
  items: TestimonialItem[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  doubleRow?: boolean;
}) => {
  const speedMap = { fast: 20, normal: 35, slow: 50 };
  const duration = speedMap[speed];

  // Split items into two groups for the double row
  const half = Math.ceil(items.length / 2);
  const row1 = items.slice(0, half);
  const row2 = items.slice(half);

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        // Edge fade masks
        "[mask-image:linear-gradient(to_right,transparent,white_8%,white_92%,transparent)]",
        className
      )}
    >
      {/* Row 1 — moves in chosen direction */}
      <div className="mb-5 overflow-hidden">
        <MarqueeTrack
          items={row1.length >= 2 ? row1 : items}
          reverse={direction === "right"}
          speed={duration}
          pauseOnHover={pauseOnHover}
        />
      </div>

      {/* Row 2 — always moves opposite direction */}
      {doubleRow && (
        <div className="overflow-hidden">
          <MarqueeTrack
            items={row2.length >= 2 ? row2 : items}
            reverse={direction !== "right"}
            speed={duration * 1.2}
            pauseOnHover={pauseOnHover}
          />
        </div>
      )}
    </div>
  );
};
