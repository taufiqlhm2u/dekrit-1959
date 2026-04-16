"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const pustaka = [
  {
    image: "/photos/sejarah-hukum.jpg",
    cite: "Sjahdeini, S. R. (2021). Sejarah hukum Indonesia. Jakarta: Kencana.",
  },
  {
    image: "/photos/tatanegara.png",
    cite: "Asshiddiqie, J. Pengantar ilmu hukum tata negara Indonesia. Jakarta: Rajawali Press.",
  },
  {
    image: "/photos/jurnal.jpg",
    cite: "Hermawan, S., & Rizal, M. (2022). Pengaruh Dekrit Presiden Terhadap Demokratisasi Di Indonesia. Veritas et Justitia, 8(2), 287–314.",
  },
];

export default function DaftarPustaka() {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => setVis(e.isIntersecting), { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="snap-section" style={{
      background: "#FFFFFF",
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
          fontFamily: "var(--ff-body)", fontSize: "0.7rem",
          fontWeight: 600, letterSpacing: "0.18em",
          color: "#B45309", textTransform: "uppercase", marginBottom: "1.25rem",
        }}>
          08 — Daftar Pustaka
        </p>
        <h2 style={{
          fontFamily: "var(--ff-display)",
          fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
          fontWeight: 700, letterSpacing: "-0.02em",
          color: "#111111", marginBottom: "2.5rem", lineHeight: 1.15,
        }}>
          Referensi
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {pustaka.map((p, i) => (
            <div key={i} style={{
              display: "flex", gap: "1.25rem", alignItems: "center",
              padding: "1rem",
              border: "1px solid #F3F4F6",
              borderRadius: "12px",
              background: "#FAFAFA",
            }}>
              {/* Book thumbnail */}
              <div style={{
                width: "56px", height: "76px",
                borderRadius: "6px", overflow: "hidden",
                position: "relative", flexShrink: 0,
                background: "#E5E7EB",
                boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
              }}>
                <Image
                  src={p.image}
                  alt={`Referensi ${i + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Citation text */}
              <p style={{
                fontFamily: "var(--ff-body)", fontSize: "0.83rem",
                lineHeight: 1.7, color: "#374151",
              }}>
                {p.cite}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
