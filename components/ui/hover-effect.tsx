"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface HoverEffectItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  price: string;
  whatsappMessage?: string;
}

export const HoverEffect = ({
  items,
  className,
  whatsappNumber = "584121234567",
}: {
  items: HoverEffectItem[];
  className?: string;
  whatsappNumber?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const buildWhatsAppUrl = (message: string) => {
    const encoded = encodeURIComponent(message);
    return `https://wa.me/${whatsappNumber}?text=${encoded}`;
  };

  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full w-full cursor-pointer"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {hoveredIndex === idx && (
            <motion.span
              className="absolute inset-0 h-full w-full bg-gradient-to-br from-[#0DB4C3]/8 to-[#1B6FCA]/5 block rounded-3xl"
              layoutId="hoverBackground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.15 } }}
              exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
            />
          )}
          <Card>
            <div className="flex flex-col h-full">
              <div className="flex items-start justify-between mb-4">
                <div className="text-[#0DB4C3] mb-2">{item.icon}</div>

                {/* Price badge — doubles as WhatsApp CTA */}
                {item.whatsappMessage ? (
                  <a
                    href={buildWhatsAppUrl(item.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`whatsapp-badge-${idx}`}
                    onClick={(e) => e.stopPropagation()}
                    title="Consultar por WhatsApp"
                    className={
                      "group/badge inline-flex items-center gap-1.5 " +
                      "text-[#0DB4C3] font-semibold text-sm " +
                      "bg-[#0DB4C3]/10 hover:bg-[#0DB4C3]/20 " +
                      "px-3 py-1 rounded-full " +
                      "border border-[#0DB4C3]/20 hover:border-[#0DB4C3]/60 " +
                      "transition-all duration-200 cursor-pointer " +
                      "hover:scale-105 hover:shadow-[0_2px_12px_rgba(13,180,195,0.25)] " +
                      "active:scale-95"
                    }
                  >
                    {/* WhatsApp icon — only visible on hover */}
                    <svg
                      className="w-3 h-3 flex-shrink-0 opacity-0 group-hover/badge:opacity-100 -ml-0.5 transition-opacity duration-200"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    {item.price}
                  </a>
                ) : (
                  <span className="text-[#0DB4C3] font-semibold text-sm bg-[#0DB4C3]/10 px-3 py-1 rounded-full border border-[#0DB4C3]/20">
                    {item.price}
                  </span>
                )}
              </div>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
              <div className="mt-auto pt-4">
                <div className="w-8 h-0.5 bg-gradient-to-r from-[#0DB4C3] to-transparent transition-all duration-300 group-hover:w-full" />
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-6 overflow-hidden bg-white border border-[#C8E4F5]",
        "transition-all duration-300 group-hover:border-[#0DB4C3]/50 group-hover:shadow-[0_8px_30px_rgba(13,180,195,0.12)]",
        "relative z-20",
        className
      )}
    >
      <div className="relative z-50 h-full">{children}</div>
    </div>
  );
};

const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h3
      className={cn(
        "font-serif text-xl font-semibold text-[#06274A] mb-2 tracking-wide",
        className
      )}
    >
      {children}
    </h3>
  );
};

const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p className={cn("text-[#2A5A8A] text-sm leading-relaxed", className)}>
      {children}
    </p>
  );
};
