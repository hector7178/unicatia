"use client";
import React from "react";
import { SectionTitle, FadeInSection } from "@/components/ui/animations";
import { 
  Baby, 
  Activity, 
  Stethoscope, 
  Heart, 
  HeartPulse, 
  User, 
  Bone, 
  Brain, 
  Droplet, 
  Eye, 
  Volume2, 
  Droplets, 
  Wind, 
  Gauge, 
  Zap, 
  Sparkles,
  CalendarCheck
} from "lucide-react";
import { WHATSAPP_NUMBER, whatsappUrl, WA_MSG } from "@/lib/constants";

interface Specialty {
  name: string;
  icon: React.ReactNode;
}

const specialties: Specialty[] = [
  { name: "Pediatría", icon: <Baby className="w-5 h-5" /> },
  { name: "Ecografía", icon: <Activity className="w-5 h-5" /> },
  { name: "Medicina General", icon: <Stethoscope className="w-5 h-5" /> },
  { name: "Medicina Interna", icon: <Heart className="w-5 h-5" /> },
  { name: "Cardiología", icon: <HeartPulse className="w-5 h-5" /> },
  { name: "Ginecología", icon: <User className="w-5 h-5" /> },
  { name: "Traumatología", icon: <Bone className="w-5 h-5" /> },
  { name: "Psicología", icon: <Brain className="w-5 h-5" /> },
  { name: "Gastroenterología", icon: <Droplet className="w-5 h-5" /> },
  { name: "Flebología", icon: <Eye className="w-5 h-5" /> },
  { name: "Otorrinolaringología", icon: <Volume2 className="w-5 h-5" /> },
  { name: "Urología", icon: <Droplets className="w-5 h-5" /> },
  { name: "Neumología", icon: <Wind className="w-5 h-5" /> },
  { name: "Espirometría", icon: <Gauge className="w-5 h-5" /> },
  { name: "Neurología", icon: <Zap className="w-5 h-5" /> },
  { name: "Cirugía Plástica", icon: <Sparkles className="w-5 h-5" /> },
];

export default function SpecialtiesSection() {
  return (
    <section
      id="especialidades"
      className="section-padding bg-[#FFFFFF] relative overflow-hidden"
      aria-label="Especialidades médicas"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0DB4C3]/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#0DB4C3]/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <SectionTitle
          badge="Especialistas a tu servicio"
          title="Nuestras Especialidades"
          subtitle="Consulta médica especializada con profesionales certificados y dedicados a tu bienestar integral."
        />

        {/* Specialties Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {specialties.map((spec, index) => (
            <FadeInSection
              key={index}
              delay={(index % 4) * 0.05}
            >
              <div
                className="bg-[#F8FBFC] border border-[#E8F2F7] rounded-2xl p-5 hover:border-[#0DB4C3]/40 hover:bg-[#F3F9FB] hover:shadow-[0_8px_20px_rgba(13,180,195,0.06)] transition-all duration-300 flex items-center gap-4 group cursor-pointer"
                onClick={() => {
                  const message = `Hola Centro Medico Unicatia, me gustaría agendar una cita para la especialidad de ${spec.name}.`;
                  window.open(whatsappUrl(message), "_blank");
                }}
              >
                <div className="p-3 bg-white border border-[#E8F2F7] rounded-xl text-[#0DB4C3] group-hover:bg-[#0DB4C3] group-hover:text-white group-hover:border-[#0DB4C3] transition-all duration-300 shadow-sm flex items-center justify-center">
                  {spec.icon}
                </div>
                <div>
                  <h3 className="font-serif text-[#06274A] font-bold text-sm md:text-base group-hover:text-[#0DB4C3] transition-colors">
                    {spec.name}
                  </h3>
                  <span className="text-[10px] text-[#5A8AB0] font-semibold flex items-center gap-1 mt-0.5 group-hover:underline">
                    <CalendarCheck className="w-3 h-3" />
                    Agendar
                  </span>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* CTA bottom info */}
        <FadeInSection className="text-center mt-12">
          <p className="text-[#5A8AB0] text-sm mb-4">
            ¿No encuentras la especialidad que necesitas o deseas consultar horarios?
          </p>
          <a
            href={whatsappUrl(WA_MSG.especialidades)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold"
          >
            <span>Consultar Disponibilidad</span>
            <CalendarCheck className="w-4 h-4" />
          </a>
        </FadeInSection>

      </div>
    </section>
  );
}
