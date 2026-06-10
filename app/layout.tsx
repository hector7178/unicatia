import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://unicatia.vercel.app"),
  title: {
    default: "Centro Médico UNICATIA | Laboratorio Clínico en Catia, Caracas",
    template: "%s | Centro Médico UNICATIA",
  },
  description:
    "Centro Médico y Laboratorio Clínico UNICATIA en Catia, Distrito Capital, Venezuela. Especialistas en bioanalísis, hematología, química clínica, urianálisis y más. Resultados confiables y atención personalizada.",
  keywords: [
    "laboratorio clínico Catia",
    "centro médico Catia",
    "bioanalistas Venezuela",
    "análisis de sangre Caracas",
    "hematología Catia",
    "química clínica Venezuela",
    "laboratorio clínico Caracas",
    "UNICATIA laboratorio",
    "análisis clínicos Catia",
    "centro médico Distrito Capital",
  ],
  authors: [{ name: "Centro Médico UNICATIA" }],
  creator: "Centro Médico UNICATIA",
  publisher: "Centro Médico UNICATIA",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_VE",
    url: "https://unicatia.vercel.app",
    siteName: "Centro Médico UNICATIA",
    title: "Centro Médico UNICATIA | Laboratorio Clínico en Catia, Caracas",
    description:
      "Laboratorio Clínico y Centro Médico en Catia, Venezuela. Resultados precisos, bioanalistas certificados y atención de calidad.",
    images: [
      {
        url: "/hero-clinico.png",
        width: 1200,
        height: 630,
        alt: "Centro Médico UNICATIA - Laboratorio Clínico en Catia, Caracas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Centro Médico UNICATIA | Laboratorio Clínico en Catia",
    description:
      "Laboratorio Clínico en Catia, Caracas, Venezuela. Bioanalistas certificados y resultados confiables.",
    images: ["/hero-clinico.png"],
    creator: "@unicatia",
  },
  alternates: {
    canonical: "https://unicatia.vercel.app",
    languages: {
      "es-VE": "https://unicatia.vercel.app",
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["MedicalClinic", "LocalBusiness"],
  name: "Centro Médico UNICATIA",
  description:
    "Laboratorio Clínico y Centro Médico en Catia, Distrito Capital, Venezuela. Especialistas en bioanalísis, hematología, química clínica y diagnóstico.",
  url: "https://unicatia.vercel.app",
  telephone: "+58 412 822 0099",
  email: "info@centromedicounicatia.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Catia",
    addressLocality: "Caracas",
    addressRegion: "Distrito Capital",
    addressCountry: "VE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "10.5069",
    longitude: "-67.0081",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "07:00",
      closes: "12:00",
    },
  ],
  priceRange: "Bs",
  medicalSpecialty: "Laboratorio Clínico, Bioanalísis, Hematología",
  hasMap: "https://maps.google.com/?q=Catia+Caracas+Venezuela",
  image: "https://unicatia.vercel.app/hero-clinico.png",
  sameAs: [
    "https://www.instagram.com/unicatia",
    "https://www.facebook.com/unicatia",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "180",
    bestRating: "5",
    worstRating: "1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <Script
          id="json-ld-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#F0F8FF] text-[#06274A] antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
