"use client";
import { HoverEffect } from "@/components/ui/hover-effect";
import { SectionTitle } from "@/components/ui/animations";
import { Microscope, FlaskConical, Droplets, HeartPulse, TestTube2, Stethoscope, ActivitySquare, Shield } from "lucide-react";
import { WHATSAPP_NUMBER, WA_MSG } from "@/lib/constants";

const services = [
  {
    title: "Hematología Completa",
    description:
      "Hemograma completo con diferencial de leucocitos, plaquetas, hematocrito y hemoglobina. Detección temprana de anemias y trastornos hematológicos.",
    icon: <Droplets size={28} />,
    price: "Consultar",
    whatsappMessage: WA_MSG.hematologia,
  },
  {
    title: "Química Sanguínea",
    description:
      "Glucosa, colesterol, triglicéridos, urea, creatinina, ácido úrico y perfil hepático completo. Resultados en el mismo día.",
    icon: <FlaskConical size={28} />,
    price: "Consultar",
    whatsappMessage: WA_MSG.quimicaSanguinea,
  },
  {
    title: "Urianálisis",
    description:
      "Análisis físico, químico y microscópico de orina. Detección de infecciones urinarias, glucosuria, proteinuria y más.",
    icon: <TestTube2 size={28} />,
    price: "Consultar",
    whatsappMessage: WA_MSG.urinalisis,
  },
  {
    title: "Microbiología",
    description:
      "Cultivos bacteriológicos, antibiogramas, exudados, coprocultivos y análisis de parásitos. Diagnóstico preciso de infecciones.",
    icon: <Microscope size={28} />,
    price: "Consultar",
    whatsappMessage: WA_MSG.microbiologia,
  },
  {
    title: "Serología e Inmunología",
    description:
      "VDRL, prueba de embarazo, VIH, hepatitis B y C, toxoplasma, rubeola y panel de enfermedades infecciosas.",
    icon: <Shield size={28} />,
    price: "Consultar",
    whatsappMessage: WA_MSG.serologia,
  },
  {
    title: "Perfil Hormonal",
    description:
      "TSH, T3, T4, insulina, testosterona, estradiol, prolactina y más. Evaluación endocrinológica completa para diagnóstico hormonal.",
    icon: <ActivitySquare size={28} />,
    price: "Consultar",
    whatsappMessage: WA_MSG.perfilHormonal,
  },
  {
    title: "Perfil Cardíaco",
    description:
      "CPK, troponina, LDH, electroforesis de proteínas y marcadores cardíacos. Evaluación integral del riesgo cardiovascular.",
    icon: <HeartPulse size={28} />,
    price: "Consultar",
    whatsappMessage: WA_MSG.perfilCardiaco,
  },
  {
    title: "Consulta Médica",
    description:
      "Atención médica general, interpretación de resultados, orientación diagnóstica y referencia a especialistas cuando sea necesario.",
    icon: <Stethoscope size={28} />,
    price: "Consultar",
    whatsappMessage: WA_MSG.consultaMedica,
  },
];

export default function ServicesSection() {
  return (
    <section
      id="servicios"
      className="section-padding bg-[#F0F8FF] relative overflow-hidden"
      aria-label="Nuestros servicios clínicos"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0DB4C3]/40 to-transparent" />
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#0DB4C3]/8 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-[#1B6FCA]/6 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionTitle
          badge="Lo que ofrecemos"
          title="Nuestros Servicios"
          subtitle="Análisis de alta precisión con equipos de última generación. Nuestros bioanalistas certificados garantizan resultados confiables para tu diagnóstico."
        />

        <HoverEffect items={services} whatsappNumber={WHATSAPP_NUMBER} />

        {/* Bottom note */}
        <p className="text-center text-[#5A8AB0] text-sm mt-8">
          * Los precios pueden variar. Consulta directamente o escríbenos por WhatsApp para información actualizada.
        </p>
      </div>
    </section>
  );
}
