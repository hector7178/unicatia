"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/animations";

const galleryItems = [
  { src: "/gallery-lab1.png", alt: "Equipos de análisis clínico y centrifugas", span: "col-span-1 row-span-2" },
  { src: "/gallery-lab2.png", alt: "Bioanalista examinando muestras bajo microscopio", span: "col-span-1 row-span-1" },
  { src: "/gallery-equipment1.png", alt: "Equipo automatizado de diagnóstico clínico con tubos de muestras", span: "col-span-1 row-span-1" },
  { src: "/gallery-lab3.png", alt: "Sala de espera y recepción del centro médico", span: "col-span-1 row-span-1" },
  { src: "/gallery-lab4.png", alt: "Analizadores hematológicos automatizados", span: "col-span-1 row-span-2" },
  { src: "/gallery-equipment2.png", alt: "Preparación de cultivos microbiológicos en laboratorio", span: "col-span-1 row-span-1" },
];

export default function GallerySection() {
  return (
    <section
      id="galeria"
      className="section-padding bg-[#F0F8FF] relative overflow-hidden"
      aria-label="Galería de instalaciones y equipos"
    >
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0DB4C3]/40 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <SectionTitle
          badge="Nuestras instalaciones"
          title="Equipos de Diagnóstico"
          subtitle="Contamos con equipos de última generación y un laboratorio completamente equipado para ofrecer resultados precisos y oportunos."
        />

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`${item.span} relative overflow-hidden rounded-xl group cursor-pointer shadow-sm`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#06274A]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-sm font-medium">{item.alt}</p>
                <div className="w-8 h-0.5 bg-[#0DB4C3] mt-1" />
              </div>
              {/* Teal border on hover */}
              <div className="absolute inset-0 border-2 border-[#0DB4C3]/0 group-hover:border-[#0DB4C3]/60 rounded-xl transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="https://www.instagram.com/unicatia"
            target="_blank"
            rel="noopener noreferrer"
            id="gallery-instagram-btn"
            className="btn-outline-gold inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Ver más en Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
