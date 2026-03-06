"use client";
import React, { useEffect, useRef, useState } from "react";

const items = [
  { title: "Mengatasi Krisis Konstitusi", desc: "Mengakhiri kebuntuan Konstituante yang tidak kunjung menghasilkan UUD baru untuk negara." },
  { title: "Menstabilkan Negara", desc: "Memulihkan stabilitas nasional yang terganggu akibat pergolakan politik berkepanjangan." },
  { title: "Menjamin Pemerintahan Berjalan", desc: "Memastikan roda pemerintahan tidak berhenti dan dapat berfungsi secara efektif dan berkelanjutan." },
  { title: "Mengakhiri Kebuntuan Politik", desc: "Memberikan solusi tegas atas deadlock politik yang telah berlangsung lama dan menguras energi bangsa." },
];

function HoverItem({ item, index }: { item: typeof items[0]; index: number }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding: "1.25rem",
        border: `1px solid ${hov ? "#D1FAE5" : "#F3F4F6"}`,
        borderRadius: "12px",
        background: hov ? "#F0FDF4" : "#FFFFFF",
        transition: "all 0.2s ease",
        cursor: "default",
        transform: hov ? "translateY(-2px)" : "translateY(0)",
        display: "flex", gap: "1rem", alignItems: "flex-start",
      }}
    >
      <div style={{
        width: "24px", height: "24px", borderRadius: "50%",
        background: hov ? "#059669" : "#D1FAE5",
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0, marginTop: "1px",
        transition: "all 0.2s ease",
      }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
          stroke={hov ? "#fff" : "#059669"} strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 12.75l6 6 9-13.5"/>
        </svg>
      </div>
      <div>
        <p style={{
          fontFamily: "var(--ff-body)", fontSize: "0.86rem",
          fontWeight: 600, color: "#111111", marginBottom: "0.3rem",
        }}>
          {item.title}
        </p>
        <p style={{
          fontFamily: "var(--ff-body)", fontSize: "0.8rem",
          lineHeight: 1.6, color: "#6B7280",
        }}>
          {item.desc}
        </p>
      </div>
    </div>
  );
}

export default function Tujuan() {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="snap-section" style={{
      background: "#FAFAFA",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "5rem 2rem",
    }}>
      <div style={{
        maxWidth: "760px", width: "100%",
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}>
        <p style={{
          fontFamily: "var(--ff-body)", fontSize: "0.7rem", fontWeight: 600,
          letterSpacing: "0.18em", color: "#B45309",
          textTransform: "uppercase", marginBottom: "1.25rem",
        }}>
          04 — Tujuan
        </p>
        <h2 style={{
          fontFamily: "var(--ff-display)",
          fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
          fontWeight: 700, letterSpacing: "-0.02em",
          color: "#111111", marginBottom: "0.75rem", lineHeight: 1.15,
        }}>
          Tujuan Dikeluarkannya Dekrit
        </h2>
        <p style={{
          fontFamily: "var(--ff-display)", fontSize: "0.98rem",
          fontStyle: "italic", color: "#6B7280",
          marginBottom: "2.5rem", lineHeight: 1.6,
        }}>
          "Dekrit bertujuan memulihkan keadaan negara agar pemerintahan kembali berjalan efektif."
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.85rem", marginBottom: "1.75rem" }}>
          {items.map((item, i) => <HoverItem key={i} item={item} index={i} />)}
        </div>

        <p style={{
          fontFamily: "var(--ff-body)", fontSize: "0.72rem",
          color: "#9CA3AF", fontStyle: "italic",
        }}>
          Sumber: Asshiddiqie
        </p>
      </div>
    </section>
  );
}
