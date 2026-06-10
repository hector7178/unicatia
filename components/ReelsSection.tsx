"use client";
import { motion, AnimatePresence } from "framer-motion";
import { SectionTitle } from "@/components/ui/animations";
import { SOCIAL } from "@/lib/constants";
import { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";

const reels = [
  {
    src: "/igsnapinsta.com-www.instagram.com-reel-DNIs5mnN8Fe-.mp4",
    label: "Reel 1",
  },
  {
    src: "/igsnapinsta.com-www.instagram.com-reel-DNq01zQp4BM-.mp4",
    label: "Reel 2",
  },
  {
    src: "/igsnapinsta.com-www.instagram.com-reel-DOgjVuzjhhs-.mp4",
    label: "Reel 3",
  },
];

// ── Instagram / WhatsApp SVG paths ─────────────────────────────────────────
const INSTAGRAM_PATH =
  "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z";

// ── Video Modal ────────────────────────────────────────────────────────────
function VideoModal({
  src,
  onClose,
}: {
  src: string;
  onClose: () => void;
}) {
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  // Auto-play when modal opens
  useEffect(() => {
    const v = modalVideoRef.current;
    if (v) {
      v.currentTime = 0;
      v.play().catch(() => {});
    }
    // Lock body scroll
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const handleBackdropClick = () => {
    modalVideoRef.current?.pause();
    onClose();
  };

  return createPortal(
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        key="modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={handleBackdropClick}
        className="fixed inset-0 z-[9999] flex items-center justify-center"
        style={{ backdropFilter: "blur(18px)", backgroundColor: "rgba(6,39,74,0.75)" }}
        aria-modal="true"
        role="dialog"
      >
        {/* Modal content — stop propagation so clicking the video doesn't close */}
        <motion.div
          key="modal-content"
          initial={{ scale: 0.7, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.75, opacity: 0, y: 30 }}
          transition={{ type: "spring", damping: 22, stiffness: 260 }}
          onClick={(e) => e.stopPropagation()}
          className="relative flex flex-col items-center"
        >
          {/* Glow ring */}
          <div className="absolute -inset-3 rounded-[2.8rem] bg-gradient-to-b from-[#0DB4C3]/50 to-[#1B6FCA]/35 blur-xl pointer-events-none" />

          {/* Phone frame */}
          <div className="relative rounded-[2.5rem] border-2 border-[#0DB4C3]/70 bg-[#06274A] shadow-[0_40px_100px_rgba(6,39,74,0.6)] overflow-hidden"
            style={{ width: "min(85vw, 360px)" }}
          >
            {/* Notch */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-[#0A3A6E] rounded-full z-20" />

            <video
              ref={modalVideoRef}
              src={src}
              loop
              playsInline
              controls
              className="w-full aspect-[9/16] object-cover"
              style={{ maxHeight: "82vh" }}
            />

            {/* Bottom gradient */}
            <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#06274A]/60 to-transparent pointer-events-none" />

            {/* Instagram badge */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center pointer-events-none">
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1">
                <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d={INSTAGRAM_PATH} />
                </svg>
                <span className="text-white text-[11px] font-semibold tracking-wide">@unicatia</span>
              </div>
            </div>
          </div>

          {/* Close button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            onClick={onClose}
            aria-label="Cerrar video"
            className="mt-5 flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white text-sm font-medium hover:bg-white/20 hover:border-white/40 transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            Cerrar
          </motion.button>

          {/* Hint */}
          <p className="text-white/40 text-xs mt-3 tracking-wide">
            Clic en el fondo o <kbd className="font-mono bg-white/10 px-1.5 py-0.5 rounded text-[10px]">Esc</kbd> para salir
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}

// ── Reel Card (thumbnail) ──────────────────────────────────────────────────
function ReelCard({
  src,
  index,
  onOpen,
}: {
  src: string;
  index: number;
  onOpen: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.15 }}
      className="relative group cursor-pointer select-none"
      onClick={onOpen}
      id={`reel-card-${index}`}
      role="button"
      tabIndex={0}
      aria-label={`Abrir reel ${index + 1}`}
      onKeyDown={(e) => e.key === "Enter" && onOpen()}
    >
      {/* Phone-style frame */}
      <div className="relative mx-auto w-[220px] sm:w-[240px]">
        {/* Outer glow ring */}
        <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-b from-[#0DB4C3]/40 to-[#1B6FCA]/30 blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Phone border */}
        <div className="relative rounded-[2.2rem] border-2 border-[#0DB4C3]/40 bg-[#06274A] shadow-[0_25px_60px_rgba(6,39,74,0.35)] overflow-hidden group-hover:border-[#0DB4C3]/80 transition-all duration-300 group-hover:scale-[1.02]">
          {/* Notch */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-[#0A3A6E] rounded-full z-20" />

          {/* Thumbnail video (muted, no controls) */}
          <video
            src={src}
            muted
            playsInline
            preload="metadata"
            className="w-full aspect-[9/16] object-cover pointer-events-none"
          />

          {/* Always-visible play overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-[#06274A]/30 group-hover:bg-[#06274A]/10 transition-colors duration-300">
            <div className="w-16 h-16 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center border border-white/40 shadow-lg group-hover:scale-110 group-hover:bg-white/35 transition-all duration-300">
              <svg className="w-7 h-7 text-white ml-1 drop-shadow" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          {/* Bottom gradient */}
          <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#06274A]/80 to-transparent pointer-events-none" />

          {/* Instagram badge */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center pointer-events-none">
            <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1">
              <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d={INSTAGRAM_PATH} />
              </svg>
              <span className="text-white text-[11px] font-semibold tracking-wide">@unicatia</span>
            </div>
          </div>
        </div>
      </div>

      {/* Label below */}
      <p className="text-center text-[#5A8AB0] text-xs mt-4 tracking-wide group-hover:text-[#0DB4C3] transition-colors duration-200">
        Toca para ver
      </p>
    </motion.div>
  );
}

// ── Main Section ───────────────────────────────────────────────────────────
export default function ReelsSection() {
  const [activeReel, setActiveReel] = useState<string | null>(null);

  const closeModal = useCallback(() => setActiveReel(null), []);

  return (
    <section
      id="reels"
      className="section-padding bg-[#06274A] relative overflow-hidden"
      aria-label="Reels de Instagram UNICATIA"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(13,180,195,0.12)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0DB4C3]/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0DB4C3]/30 to-transparent" />
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#0DB4C3]/6 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#1B6FCA]/8 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionTitle
          badge="Síguenos en Instagram"
          title="Nuestros Reels"
          subtitle="Conoce de cerca nuestro laboratorio, equipo y servicios a través de nuestros videos en Instagram."
          dark
        />

        {/* Reels grid */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-4">
          {reels.map((reel, i) => (
            <ReelCard
              key={i}
              src={reel.src}
              index={i}
              onOpen={() => setActiveReel(reel.src)}
            />
          ))}
        </div>

        {/* CTA to Instagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <a
            href={SOCIAL.instagram}
            target="_blank"
            rel="noopener noreferrer"
            id="reels-instagram-btn"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-sm font-semibold text-white border border-[#0DB4C3]/50 bg-[#0DB4C3]/10 hover:bg-[#0DB4C3]/20 hover:border-[#0DB4C3] transition-all duration-300 backdrop-blur-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d={INSTAGRAM_PATH} />
            </svg>
            Ver más en @unicatia
          </a>
        </motion.div>
      </div>

      {/* Video Modal — mounted via portal into document.body */}
      {activeReel && (
        <VideoModal src={activeReel} onClose={closeModal} />
      )}
    </section>
  );
}
