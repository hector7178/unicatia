"use client";
import React from "react";
import { SectionTitle, FadeInSection } from "@/components/ui/animations";
import { ShieldCheck, Building2, Briefcase, HeartHandshake, ArrowRight } from "lucide-react";
import { whatsappUrl, WA_MSG } from "@/lib/constants";

interface CorporateBenefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const benefits: CorporateBenefit[] = [
  {
    title: "Evaluaciones Pre-empleo",
    description: "Evaluaciones de aptitud médica completas y perfiles de laboratorio para tu nuevo talento.",
    icon: <Briefcase className="w-6 h-6 text-[#0DB4C3]" />,
  },
  {
    title: "Salud Ocupacional",
    description: "Programas preventivos y chequeos anuales obligatorios adaptados a las normativas de salud laboral.",
    icon: <Building2 className="w-6 h-6 text-[#0DB4C3]" />,
  },
  {
    title: "Planes para Colectivos",
    description: "Cobertura de salud preventiva integral y descuentos exclusivos en servicios clínicos para tus empleados.",
    icon: <HeartHandshake className="w-6 h-6 text-[#0DB4C3]" />,
  },
];

export default function CorporatePlansSection() {
  return (
    <section
      id="corporativo"
      className="section-padding bg-gradient-to-b from-[#E8F4FD] to-[#F8FBFC] relative overflow-hidden"
      aria-label="Planes de salud corporativos"
    >
      {/* Background patterns */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1B6FCA]/20 to-transparent" />
      <div className="absolute -bottom-20 right-0 w-96 h-96 rounded-full bg-[#1B6FCA]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <SectionTitle
          badge="Soluciones para Empresas"
          title="Planes de Salud Corporativo"
          subtitle="Protege a tu activo más valioso. Ofrecemos planes médicos preventivos y ocupacionales diseñados a la medida de tu empresa o colectivo."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Side: Call to action card */}
          <FadeInSection className="lg:col-span-5 bg-gradient-to-br from-[#06274A] to-[#0A3D73] rounded-3xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500 pointer-events-none" />
            
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0DB4C3] bg-[#0DB4C3]/10 border border-[#0DB4C3]/30 px-3 py-1.5 rounded-full uppercase tracking-wider mb-6">
                <ShieldCheck className="w-3.5 h-3.5" />
                Bienestar Empresarial
              </span>
              
              <h3 className="font-serif text-3xl font-bold leading-tight mb-4">
                Planes Médicos a la Medida
              </h3>
              
              <p className="text-blue-100/80 text-sm leading-relaxed mb-8">
                Diseñamos propuestas personalizadas según el sector y tamaño de tu organización. Optimiza la productividad de tu equipo con un control de salud oportuno.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-xs text-blue-100">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0DB4C3]" />
                  Precios corporativos preferenciales
                </div>
                <div className="flex items-center gap-3 text-xs text-blue-100">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0DB4C3]" />
                  Resultados rápidos y entrega digitalizada
                </div>
                <div className="flex items-center gap-3 text-xs text-blue-100">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0DB4C3]" />
                  Atención preferente y sin filas para tus colaboradores
                </div>
              </div>

              <a
                href={whatsappUrl(WA_MSG.planesCorporativos)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full justify-center btn-primary bg-white text-[#06274A] hover:bg-[#0DB4C3] hover:text-white inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold transition-all shadow-md"
              >
                <span>Cotizar Plan Corporativo</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </FadeInSection>

          {/* Right Side: Benefits list */}
          <div className="lg:col-span-7 space-y-6">
            {benefits.map((benefit, index) => (
              <FadeInSection
                key={index}
                delay={index * 0.1}
                className="bg-white border border-[#C8E4F5]/60 hover:border-[#0DB4C3]/40 rounded-2xl p-6 hover:shadow-[0_8px_30px_rgba(13,180,195,0.05)] transition-all duration-300 flex gap-5"
              >
                <div className="p-3.5 bg-[#0DB4C3]/10 rounded-2xl h-fit flex items-center justify-center">
                  {benefit.icon}
                </div>
                <div>
                  <h4 className="font-serif text-xl font-bold text-[#06274A] mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-[#2A5A8A] text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
