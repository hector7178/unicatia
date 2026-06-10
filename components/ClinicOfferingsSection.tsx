"use client";
import React from "react";
import { SectionTitle, FadeInSection } from "@/components/ui/animations";
import { 
  Activity, 
  FlaskConical, 
  HeartPulse, 
  Clock, 
  CreditCard, 
  CalendarDays, 
  ArrowRight,
  MessageSquare
} from "lucide-react";
import { WHATSAPP_NUMBER, whatsappUrl, WA_MSG } from "@/lib/constants";

interface OfferingItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  badge?: string;
  whatsappMessage: string;
}

const mainOfferings: OfferingItem[] = [
  {
    title: "Rayos X (Imagenología)",
    description: "Equipos de radiología de última generación para diagnósticos precisos y rápidos con la menor exposición posible.",
    icon: <Activity className="w-8 h-8 text-[#0DB4C3]" />,
    badge: "Alta Precisión",
    whatsappMessage: WA_MSG.rayosx,
  },
  {
    title: "Laboratorio Clínico",
    description: "Gama completa de análisis clínicos con el respaldo de nuestros bioanalistas altamente calificados.",
    icon: <FlaskConical className="w-8 h-8 text-[#0DB4C3]" />,
    badge: "Automatizado",
    whatsappMessage: WA_MSG.general,
  },
  {
    title: "Quirófano Equipado",
    description: "Salas de operaciones modernas equipadas con tecnología médica avanzada y estrictos controles de esterilización.",
    icon: <HeartPulse className="w-8 h-8 text-[#0DB4C3]" />,
    badge: "Seguridad Garantizada",
    whatsappMessage: WA_MSG.quirofano,
  },
];

const secondaryOfferings: OfferingItem[] = [
  {
    title: "Emergencia 24 Horas",
    description: "Atención médica inmediata disponible las 24 horas del día, los 7 días de la semana, para cualquier emergencia de salud.",
    icon: <Clock className="w-6 h-6 text-[#1B6FCA]" />,
    whatsappMessage: WA_MSG.emergencia,
  },
  {
    title: "Cirugía a Crédito",
    description: "Planes de financiamiento y facilidades de pago para tus intervenciones quirúrgicas sin detener tu cuidado médico.",
    icon: <CreditCard className="w-6 h-6 text-[#1B6FCA]" />,
    whatsappMessage: WA_MSG.cirugiaCredito,
  },
  {
    title: "Jornadas Quirúrgicas",
    description: "Organizamos jornadas especiales con tarifas preferenciales para cirugías programadas comunes.",
    icon: <CalendarDays className="w-6 h-6 text-[#1B6FCA]" />,
    whatsappMessage: WA_MSG.jornadas,
  },
];

export default function ClinicOfferingsSection() {
  return (
    <section
      id="clinica"
      className="section-padding bg-gradient-to-b from-[#F0F8FF] to-[#E8F4FD] relative overflow-hidden"
      aria-label="Qué ofrece nuestra clínica"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0DB4C3]/30 to-transparent" />
      <div className="absolute top-1/4 -left-40 w-96 h-96 rounded-full bg-[#0DB4C3]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 rounded-full bg-[#1B6FCA]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Section Title */}
        <SectionTitle
          badge="Servicios Médicos"
          title="Qué Ofrece Nuestro Centro Médico"
          subtitle="Equipamiento moderno y atención especializada para cuidar de ti y de tu familia en todo momento."
        />

        {/* Main Services (Rayos X, Laboratorio, Quirófano) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {mainOfferings.map((item, index) => (
            <FadeInSection
              key={index}
              delay={index * 0.1}
              className="bg-white/80 backdrop-blur-sm border border-[#C8E4F5] rounded-3xl p-8 hover:border-[#0DB4C3]/50 hover:shadow-[0_12px_40px_rgba(13,180,195,0.12)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-[#0DB4C3]/10 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  {item.badge && (
                    <span className="text-[10px] font-bold text-[#0DB4C3] bg-[#0DB4C3]/10 px-3 py-1 rounded-full border border-[#0DB4C3]/20 uppercase tracking-wider">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Content */}
                <h3 className="font-serif text-2xl font-bold text-[#06274A] mb-3 group-hover:text-[#0DB4C3] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#2A5A8A] text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Action */}
              <a
                href={whatsappUrl(item.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0DB4C3] hover:text-[#06274A] transition-colors mt-auto group/btn"
              >
                <span>Consultar por WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </FadeInSection>
          ))}
        </div>

        {/* Section Divider/Subtitle for Secondary Services */}
        <FadeInSection className="text-center mb-10">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#06274A]">
            También Contamos Con
          </h3>
          <div className="w-16 h-0.5 bg-[#0DB4C3]/60 mx-auto mt-3" />
        </FadeInSection>

        {/* Secondary Services (Emergencia, Crédito, Jornadas) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {secondaryOfferings.map((item, index) => (
            <FadeInSection
              key={index}
              delay={index * 0.1 + 0.3}
              className="bg-white/60 backdrop-blur-sm border border-[#C8E4F5]/70 rounded-2xl p-6 hover:border-[#1B6FCA]/50 hover:shadow-[0_8px_30px_rgba(27,111,202,0.08)] transition-all duration-300 flex items-start gap-4 group"
            >
              <div className="p-2.5 bg-[#1B6FCA]/10 rounded-xl group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div className="flex-1 flex flex-col justify-between h-full">
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#06274A] mb-1 group-hover:text-[#1B6FCA] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[#2A5A8A] text-xs leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>
                <a
                  href={whatsappUrl(item.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1B6FCA] hover:text-[#06274A] transition-colors group/btn"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Consultar</span>
                </a>
              </div>
            </FadeInSection>
          ))}
        </div>

      </div>
    </section>
  );
}
