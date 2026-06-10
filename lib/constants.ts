// ============================================================
//  UNICATIA — Constantes del Negocio
//  Edita este archivo para actualizar los datos en toda la app
// ============================================================

// -----------------------------------------------------------
// TELÉFONO / WHATSAPP
// Formato para wa.me: código de país + número sin espacios ni "+"
// Ejemplo Venezuela: 58 + 4128220099 → "584128220099"
// -----------------------------------------------------------
export const WHATSAPP_NUMBER = "584128220099";

/** Número de teléfono para mostrar en la UI */
export const PHONE_DISPLAY = "+58 412 822 0099";

/** Link para llamada directa */
export const PHONE_LINK = `tel:+${WHATSAPP_NUMBER}`;

/** Construye una URL de WhatsApp con texto pre-escrito */
export function whatsappUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// -----------------------------------------------------------
// DATOS DE LA EMPRESA
// -----------------------------------------------------------
export const BUSINESS_NAME = "Centro Medico UNICATIA";
export const BUSINESS_SHORT_NAME = "UNICATIA";

export const EMAIL = "info@centromedicounicatia.com";
export const EMAIL_LINK = `mailto:${EMAIL}`;

// -----------------------------------------------------------
// DIRECCIÓN / UBICACIÓN
// -----------------------------------------------------------
export const ADDRESS_LINE1 = "Catia, Caracas";
export const ADDRESS_LINE2 = "Distrito Capital, Venezuela";
export const ADDRESS_FULL = `${ADDRESS_LINE1}\n${ADDRESS_LINE2}`;

/** Coordenadas GPS */
export const LOCATION = {
  lat: 10.515453551733637,
  lng: -66.94514688650861,
} as const;

export const MAPS_LINK = `https://maps.google.com/?q=${LOCATION.lat},${LOCATION.lng}`;

export const MAPS_EMBED_SRC =
  `https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3922.8` +
  `!2d${LOCATION.lng}!3d${LOCATION.lat}` +
  `!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1` +
  `!3m2!1m1!2zMTDCsDMwJzU1LjYiTiA2NsKwNTYnNDIuNSJX` +
  `!5e0!3m2!1ses!2sve!4v1780000000000!5m2!1ses!2sve`;

// -----------------------------------------------------------
// HORARIO DE ATENCIÓN
// -----------------------------------------------------------
export const SCHEDULE = [
  { day: "Lunes – Viernes", hours: "07:00 – 17:00", open: true },
  { day: "Sábados", hours: "07:00 – 12:00", open: true },
  { day: "Domingos", hours: "Cerrado", open: false },
] as const;

/** Texto resumen del horario para mostrar en íconos / info cards */
export const SCHEDULE_DISPLAY = "L–V: 07:00 – 17:00\nSáb: 07:00 – 12:00";

// -----------------------------------------------------------
// REDES SOCIALES
// -----------------------------------------------------------
export const SOCIAL = {
  instagram: "https://www.instagram.com/cmunicatia/",
  facebook: "https://facebook.com/unicatia",
} as const;

// -----------------------------------------------------------
// MENSAJES DE WHATSAPP PREDEFINIDOS
// -----------------------------------------------------------
export const WA_MSG = {
  /** Mensaje genérico (Hero, Booking) */
  general:
    "Hola, me gustaría solicitar información sobre los análisis clínicos disponibles en el Centro Clínico UNICATIA.",

  /** Mensajes por servicio — se usan en ServicesSection */
  hematologia:
    "Hola Centro Medico Unicatia, quiero saber más sobre Hematología Completa. ¿Cuál es el precio y tiempo de entrega de resultados?",

  quimicaSanguinea:
    "Hola Centro Medico Unicatia, quiero saber más sobre Química Sanguínea. ¿Cuál es el precio y tiempo de entrega de resultados?",

  urinalisis:
    "Hola Centro Medico Unicatia, quiero saber más sobre el Urianálisis. ¿Cuál es el precio y tiempo de entrega de resultados?",

  microbiologia:
    "Hola Centro Medico Unicatia, quiero saber más sobre Microbiología ¿Cuál es el precio y tiempo de entrega de resultados?",

  serologia:
    "Hola Centro Medico Unicatia, quiero saber más sobre Serología e Inmunología. ¿Cuál es el precio y tiempo de entrega de resultados?",

  perfilHormonal:
    "Hola Centro Medico Unicatia, quiero saber más sobre el Perfil Hormonal. ¿Cuál es el precio y tiempo de entrega de resultados?",

  perfilCardiaco:
    "Hola Centro Medico Unicatia, quiero saber más sobre el Perfil Cardíaco. ¿Cuál es el precio y tiempo de entrega de resultados?",

  consultaMedica:
    "Hola Centro Medico Unicatia, quiero saber más sobre la Consulta Médica. ¿Cuál es el precio y disponibilidad?",
  rayosx:
    "Hola Centro Medico Unicatia, me interesa recibir información y precios sobre el servicio de Rayos X (Imagenología).",
  quirofano:
    "Hola Centro Medico Unicatia, me gustaría consultar la disponibilidad y costos de uso de Quirófano para un procedimiento quirúrgico.",
  emergencia:
    "Hola Centro Medico Unicatia, necesito información sobre el servicio de Emergencia 24 Horas y los médicos de guardia.",
  cirugiaCredito:
    "Hola Centro Medico Unicatia, quisiera solicitar información sobre el programa de Cirugía a Crédito y sus requisitos.",
  jornadas:
    "Hola Centro Medico Unicatia, deseo saber cuándo será la próxima Jornada Quirúrgica y qué especialidades cubrirá.",
  planesCorporativos:
    "Hola Centro Medico Unicatia, represento a una empresa/colectivo y me interesa conocer los planes de salud corporativo disponibles.",
  especialidades:
    "Hola Centro Medico Unicatia, me gustaría agendar una cita o conocer costos para una de sus especialidades médicas.",
} as const;
