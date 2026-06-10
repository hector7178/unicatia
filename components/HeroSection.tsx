"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TextReveal } from "@/components/ui/animations";
import { ChevronDown } from "lucide-react";
import { whatsappUrl, WA_MSG } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label="Inicio - Centro Médico UNICATIA"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-clinico.png"
          alt="Interior del laboratorio clínico Centro Médico UNICATIA en Catia, Caracas"
          fill
          priority
          quality={90}
          className="object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050E1A]/85 via-[#050E1A]/50 to-[#0A3A6E]/30" />
      </div>

      {/* Beams effect */}
      <BackgroundBeams className="z-10" />

      {/* Teal decorative lines */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#0DB4C3]/60 to-transparent z-10" />

      {/* Content */}
      <div className="relative flex items-center justify-center z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="max-w-3xl flex flex-col items-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="justify-center flex items-center gap-2 text-white text-xs font-semibold tracking-[0.25em] uppercase mb-6 border border-[#0DB4C3]/50 rounded-full px-4 py-1.5 bg-[#0DB4C3]/15 backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#0DB4C3] animate-pulse" />
            <span className="animate-pulse">Laboratorio Clínico · Catia, Caracas</span>
          </motion.div>

          {/* Main title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] mb-6 text-center">
            <TextReveal
              text="Tu Salud,"
              delay={0.3}
              className="text-gradient-gold"
            />
            <TextReveal
              text="Nuestro compromiso"
              delay={0.6}
              className="text-white"
            />
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-neutral-200 font-semibold text-base md:text-lg lg:text-xl leading-relaxed mb-10 max-w-3xl text-center"
          >
            En el Centro Médico Unicatia, convergen un equipo de especialistas altamente
            cualificados, tecnología de vanguardia y una gama integral de servicios diseñados con los
            más altos estándares de calidad para brindarle la atención que su salud merece.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-col justify-center sm:flex-row gap-4"
          >
            <a
              href={whatsappUrl(WA_MSG.general)}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-reservar-btn"
              className="btn-gold px-6 py-4 rounded-full text-base font-semibold flex items-center justify-center gap-2 shadow-gold"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Consultar por WhatsApp
            </a>
            <a
              href="#servicios"
              id="hero-servicios-btn"
              className="btn-outline-gold px-8 py-4 rounded-full text-base font-semibold flex items-center justify-center gap-2 text-white border-white/60 hover:bg-white hover:text-[#0DB4C3]"
            >
              Ver Servicios
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-neutral-400 text-xs tracking-widest uppercase">
          Descubrir
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="text-[#0DB4C3] w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
