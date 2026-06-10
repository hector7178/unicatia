"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextReveal = ({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: delay },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={cn(" flex justify-center flex-nowrap gap-x-6 gap-y-1", className)}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span key={index} variants={child} >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export const FadeInSection = ({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const SectionTitle = ({
  badge,
  title,
  subtitle,
  className,
  dark = false,
}: {
  badge?: string;
  title: string;
  subtitle?: string;
  className?: string;
  dark?: boolean;
}) => {
  return (
    <FadeInSection className={cn("text-center mb-12 md:mb-16", className)}>
      {badge && (
        <div className="inline-flex items-center gap-2 text-[#0DB4C3] text-xs font-semibold tracking-[0.2em] uppercase mb-4 border border-[#0DB4C3]/40 rounded-full px-4 py-1.5 bg-[#0DB4C3]/10">
          <span className="w-1 h-1 rounded-full bg-[#0DB4C3]" />
          {badge}
          <span className="w-1 h-1 rounded-full bg-[#0DB4C3]" />
        </div>
      )}
      <h2 className={cn(
        "font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight",
        dark ? "text-white" : "text-[#06274A]"
      )}>
        {title}
      </h2>
      <div className="divider-gold mt-4 mb-0" />
      {subtitle && (
        <p className={cn(
          "mt-4 text-base md:text-lg max-w-2xl mx-auto leading-relaxed",
          dark ? "text-blue-200/80" : "text-[#2A5A8A]"
        )}>
          {subtitle}
        </p>
      )}
    </FadeInSection>
  );
};
