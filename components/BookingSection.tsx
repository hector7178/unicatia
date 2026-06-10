"use client";
import { motion } from "framer-motion";
import { FadeInSection } from "@/components/ui/animations";
import { CheckCircle, MapPin, Phone, Mail } from "lucide-react";
import {
  whatsappUrl, WA_MSG,
  PHONE_DISPLAY, PHONE_LINK,
  EMAIL, EMAIL_LINK,
  ADDRESS_LINE1, ADDRESS_LINE2,
  SCHEDULE,
} from "@/lib/constants";

const features = [
  "Atención personalizada desde el primer contacto",
  "Resultados disponibles en el mismo día",
  "Bioanalistas certificados con años de experiencia",
  "Equipos de última generación calibrados",
  "Sin largas esperas con cita previa",
  "Resultados seguros por WhatsApp o en físico",
];

export default function BookingSection() {

  return (
    <section
      id="reservar"
      className="section-padding bg-[#F0F8FF] relative overflow-hidden"
      aria-label="Solicitar análisis clínicos"
    >
      {/* Teal gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(13,180,195,0.06)_0%,transparent_70%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0DB4C3]/40 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <FadeInSection>
            <div className="inline-flex items-center gap-2 text-[#0DB4C3] text-xs font-semibold tracking-[0.2em] uppercase mb-6 border border-[#0DB4C3]/40 rounded-full px-4 py-1.5 bg-[#0DB4C3]/5">
              <span className="w-1 h-1 rounded-full bg-[#0DB4C3]" />
              Consulta Rápida y Sencilla
              <span className="w-1 h-1 rounded-full bg-[#0DB4C3]" />
            </div>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#06274A] leading-tight mb-6">
              Tus Análisis,{" "}
              <span className="text-gradient-gold">Sin Complicaciones</span>
            </h2>

            <p className="text-[#2A5A8A] text-base md:text-lg leading-relaxed mb-8">
              Consulta disponibilidad y precios de tus análisis clínicos de
              forma rápida y sencilla a través de WhatsApp. Nuestro equipo te
              responderá a la brevedad posible.
            </p>

            {/* Features list */}
            <ul className="space-y-3 mb-10">
              {features.map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle
                    size={18}
                    className="text-[#0DB4C3] shrink-0"
                  />
                  <span className="text-[#2A5A8A] text-sm">{feature}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href={whatsappUrl(WA_MSG.general)}
              target="_blank"
              rel="noopener noreferrer"
              id="booking-whatsapp-btn"
              className="btn-teal inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-semibold shadow-gold"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Consultar por WhatsApp
            </a>
          </FadeInSection>

          {/* Right - Info card */}
          <FadeInSection delay={0.3}>
            <div className="bg-white border border-[#C8E4F5] rounded-2xl p-8 relative overflow-hidden shadow-sm">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#0DB4C3]/10 to-transparent rounded-bl-full" />

              <h3 className="font-serif text-2xl font-bold text-[#06274A] mb-6">
                Horario de Atención
              </h3>

              {/* Schedule */}
              <div className="space-y-3 mb-8">
                {SCHEDULE.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-3 border-b border-[#E8F4FD] last:border-0"
                  >
                    <span className="text-[#2A5A8A] text-sm">{item.day}</span>
                    <span
                      className={`text-sm font-semibold ${item.open ? "text-[#0DB4C3]" : "text-[#5A8AB0]"}`}
                    >
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>

              {/* Contact info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#0DB4C3]/10 flex items-center justify-center">
                    <MapPin size={15} className="text-[#0DB4C3]" />
                  </div>
                  <div>
                    <p className="text-[#06274A] text-sm font-medium">{ADDRESS_LINE1}</p>
                    <p className="text-[#5A8AB0] text-xs">{ADDRESS_LINE2}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#0DB4C3]/10 flex items-center justify-center">
                    <Phone size={15} className="text-[#0DB4C3]" />
                  </div>
                  <a
                    href={PHONE_LINK}
                    className="text-[#06274A] text-sm font-medium hover:text-[#0DB4C3] transition-colors"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#0DB4C3]/10 flex items-center justify-center">
                    <Mail size={15} className="text-[#0DB4C3]" />
                  </div>
                  <a
                    href={EMAIL_LINK}
                    className="text-[#06274A] text-sm font-medium hover:text-[#0DB4C3] transition-colors"
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
