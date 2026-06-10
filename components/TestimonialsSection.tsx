"use client";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { SectionTitle, FadeInSection } from "@/components/ui/animations";

const testimonials = [
  {
    quote:
      "Llevo años usando el laboratorio UNICATIA y siempre me sorprende la rapidez y precisión de los resultados. Los bioanalistas son muy profesionales y atentos. Totalmente recomendado.",
    name: "María Fernández",
    title: "Paciente frecuente",
  },
  {
    quote:
      "Me realizaron un perfil hormonal completo y quedé muy satisfecha. Explicaron cada resultado con mucho detalle y me orientaron perfectamente. Excelente atención en Catia.",
    name: "Laura Mejías",
    title: "Paciente de endocrinología",
  },
  {
    quote:
      "Muy buenos profesionales. Los resultados llegaron el mismo día y son muy organizados. El ambiente es limpio y cómodo. Sin duda el mejor laboratorio de la zona.",
    name: "Jorge Salazar",
    title: "Paciente satisfecho",
  },
  {
    quote:
      "Vine por referencia de mi médico y quedé encantada. Atienden con mucho respeto, los precios son accesibles y los resultados son muy confiables. Gracias al equipo de UNICATIA.",
    name: "Ana Rodríguez",
    title: "Paciente desde 2021",
  },
  {
    quote:
      "Excelente laboratorio clínico. Me realizaron cultivos y el antibiograma y tuvieron los resultados antes de lo esperado. Profesionalismo y calidez humana en un solo lugar.",
    name: "Carlos Briceño",
    title: "Paciente de microbiología",
  },
  {
    quote:
      "Lo que más me gusta de UNICATIA es que explican todo con paciencia. Nunca me había sentido tan bien atendida en un laboratorio. Voy siempre con confianza.",
    name: "Gabriela Torres",
    title: "Paciente especial",
  },
  {
    quote:
      "Hice mis exámenes preoperatorios aquí y la atención fue impecable. Resultados listos al día siguiente, muy organizados y el personal siempre amable. Los recomiendo al 100%.",
    name: "Ricardo Montilla",
    title: "Paciente de cirugía",
  },
  {
    quote:
      "Mi familia entera se hace los análisis en UNICATIA. La atención es rápida, el lugar muy limpio y los resultados siempre confiables. No cambiaría de laboratorio por nada.",
    name: "Yolanda Pérez",
    title: "Paciente familiar",
  },
];

const stats = [
  { value: "4.9/5", label: "Valoración en Google" },
  { value: "180+", label: "Pacientes satisfechos" },
  { value: "99%", label: "Precisión diagnóstica" },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonios"
      className="section-padding bg-[#E8F4FD] relative overflow-hidden"
      aria-label="Testimonios de pacientes"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#0DB4C3]/8 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionTitle
          badge="Lo que dicen nuestros pacientes"
          title="Opiniones Reales"
          subtitle="La confianza de nuestros pacientes es nuestra mayor recompensa. Más de 180 testimonios verificados avalan nuestra calidad."
        />

        {/* Stats */}
        <FadeInSection className="grid grid-cols-3 gap-4 mb-14 max-w-xl mx-auto">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center p-4 bg-white rounded-xl border border-[#C8E4F5] shadow-sm"
            >
              <div className="text-[#0DB4C3] font-serif text-2xl font-bold">
                {stat.value}
              </div>
              <div className="text-[#5A8AB0] text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </FadeInSection>

        {/* Infinite carousel — two rows */}
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
          pauseOnHover
          doubleRow
        />
      </div>
    </section>
  );
}
