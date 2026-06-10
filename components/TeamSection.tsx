"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionTitle, FadeInSection } from "@/components/ui/animations";

const team = [
  {
    name: "Lic. Ana Rodríguez",
    role: "Bioanalista Jefe & Directora",
    specialty: "Hematología, Química Clínica, Microbiología",
    experience: "15 años",
    image: "/team-ana.png",
    instagram: "@unicatia",
    imagePosition: "object-top",
  },
  {
    name: "Lic. Keismary Griman",
    role: "Bioanalista Jefa de Laboratorio",
    specialty: "Urianálisis, Parasitología, Cultivos",
    experience: "4 años",
    image: "/naomi.png",
    instagram: "@unicatia",
    imagePosition: "object-top",
  },
  {
    name: "Lic. Carlos Mendoza",
    role: "Bioanalista Especialista",
    specialty: "Serología, Inmunología, Perfil Hormonal",
    experience: "10 años",
    image: "/team-carlos.png",
    instagram: "@unicatia",
    imagePosition: "object-top",
  },

];

export default function TeamSection() {
  return (
    <section
      id="equipo"
      className="section-padding bg-[#E8F4FD] relative overflow-hidden"
      aria-label="Nuestro equipo de bioanalistas"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0DB4C3]/40 to-transparent" />
      <div className="absolute top-20 right-0 w-64 h-64 rounded-full bg-[#0DB4C3]/8 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionTitle
          badge="Nuestros profesionales"
          title="El Equipo"
          subtitle="Bioanalistas certificados con años de experiencia. Comprometidos con la precisión diagnóstica y la salud de nuestra comunidad en Catia."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative"
            >
              {/* Card */}
              <div className="bg-white border border-[#C8E4F5] rounded-2xl overflow-hidden transition-all duration-300 group-hover:border-[#0DB4C3]/60 group-hover:shadow-[0_8px_40px_rgba(13,180,195,0.15)]">
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role} en Centro Médico UNICATIA Catia`}
                    fill
                    className={`object-cover transition-transform duration-700 group-hover:scale-105 ${member.imagePosition ?? "object-top"}`}
                    sizes=" 100vw, 33vw"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />

                  {/* Experience badge */}
                  <div className="absolute top-4 right-4 bg-[#0DB4C3] text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    {member.experience}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-[#06274A] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#0DB4C3] text-sm font-semibold mb-3">
                    {member.role}
                  </p>
                  <div className="w-10 h-0.5 bg-[#0DB4C3]/40 mb-3 transition-all duration-300 group-hover:w-full group-hover:bg-[#0DB4C3]/70" />
                  <p className="text-[#2A5A8A] text-sm leading-relaxed mb-4">
                    <span className="text-[#5A8AB0] text-xs block mb-1">
                      Especialidades:
                    </span>
                    {member.specialty}
                  </p>

                  {/* Instagram */}
                  <a
                    href={`https://www.instagram.com/${member.instagram.replace("@", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#5A8AB0] text-xs hover:text-[#0DB4C3] transition-colors duration-200"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    {member.instagram}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join team CTA */}
        <FadeInSection className="mt-12 text-center" delay={0.3}>
          <p className="text-[#2A5A8A] text-sm">
            ¿Eres profesional de la salud?{" "}
            <a
              href="mailto:info@centromedicounicatia.com"
              className="text-[#0DB4C3] hover:text-[#0A8A96] transition-colors underline"
            >
              Únete a nuestro equipo
            </a>
          </p>
        </FadeInSection>
      </div>
    </section>
  );
}
