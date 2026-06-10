"use client";
import { SectionTitle, FadeInSection } from "@/components/ui/animations";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import {
  PHONE_DISPLAY, PHONE_LINK,
  EMAIL, EMAIL_LINK,
  ADDRESS_FULL, MAPS_LINK, MAPS_EMBED_SRC,
  SCHEDULE_DISPLAY, SOCIAL,
} from "@/lib/constants";

export default function ContactSection() {
  return (
    <section
      id="contacto"
      className="section-padding bg-[#E8F4FD] relative overflow-hidden"
      aria-label="Contacto y ubicación"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0DB4C3]/40 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <SectionTitle
          badge="Encuéntranos"
          title="Visítanos en Catia"
          subtitle="Estamos ubicados en Catia, Distrito Capital, Caracas, Venezuela. Fácil acceso en transporte público."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Map - takes 3 cols */}
          <FadeInSection className="lg:col-span-3">
            <div className="relative rounded-2xl overflow-hidden border border-[#C8E4F5] h-80 md:h-96 shadow-sm">
              {/* Google Maps con coordenadas exactas de UNICATIA: 10.515453551733637, -66.94514688650861 */}
              <iframe
                src={MAPS_EMBED_SRC}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Centro Médico UNICATIA en Catia, Caracas, Venezuela"
              />
            </div>
          </FadeInSection>

          {/* Contact info - takes 2 cols */}
          <FadeInSection delay={0.2} className="lg:col-span-2 flex flex-col gap-4">
            {[
              {
                icon: <MapPin size={20} />,
                title: "Dirección",
                content: ADDRESS_FULL,
                link: MAPS_LINK,
                linkText: "Abrir en Maps",
              },
              {
                icon: <Phone size={20} />,
                title: "Teléfono / WhatsApp",
                content: PHONE_DISPLAY,
                link: PHONE_LINK,
                linkText: "Llamar ahora",
              },
              {
                icon: <Mail size={20} />,
                title: "Email",
                content: EMAIL,
                link: EMAIL_LINK,
                linkText: "Enviar email",
              },
              {
                icon: <Clock size={20} />,
                title: "Horario",
                content: SCHEDULE_DISPLAY,
                link: null,
                linkText: null,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 p-5 bg-white rounded-xl border border-[#C8E4F5] hover:border-[#0DB4C3]/50 transition-all duration-300 group shadow-sm"
              >
                <div className="w-10 h-10 rounded-full bg-[#0DB4C3]/10 flex items-center justify-center text-[#0DB4C3] shrink-0 group-hover:bg-[#0DB4C3]/20 transition-colors">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-[#5A8AB0] text-xs mb-1">{item.title}</p>
                  <p className="text-[#06274A] text-sm whitespace-pre-line font-medium">
                    {item.content}
                  </p>
                  {item.link && (
                    <a
                      href={item.link}
                      target={item.link.startsWith("http") ? "_blank" : undefined}
                      rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-[#0DB4C3] text-xs mt-1 inline-block hover:text-[#0A8A96] transition-colors font-semibold"
                    >
                      {item.linkText} →
                    </a>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Social media */}
            <div className="flex gap-3 pt-2">
              {[
                { icon: "instagram", href: SOCIAL.instagram, label: "Instagram" },
                { icon: "facebook",  href: SOCIAL.facebook,  label: "Facebook" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-[#C8E4F5] bg-white flex items-center justify-center text-[#5A8AB0] hover:border-[#0DB4C3] hover:text-[#0DB4C3] transition-all duration-200 shadow-sm"
                >
                  {social.icon === "instagram" ? (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
