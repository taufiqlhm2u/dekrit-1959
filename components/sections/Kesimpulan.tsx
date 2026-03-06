"use client";
import React, { useEffect, useRef, useState } from "react";

export default function Kesimpulan() {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="snap-section" style={{
      background: "#FAFAFA",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "6rem 2rem",
    }}>
      <div style={{
        maxWidth: "680px", width: "100%", textAlign: "center",
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}>
        <p style={{
          fontFamily: "var(--ff-body)", fontSize: "0.7rem",
          fontWeight: 600, letterSpacing: "0.18em",
          color: "#B45309", textTransform: "uppercase", marginBottom: "1.25rem",
        }}>
          06 — Kesimpulan
        </p>

        <h2 style={{
          fontFamily: "var(--ff-display)",
          fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
          fontWeight: 700, letterSpacing: "-0.02em",
          color: "#111111", marginBottom: "2rem", lineHeight: 1.15,
        }}>
          Sebuah Langkah Darurat Bersejarah
        </h2>

        <div style={{ width: "32px", height: "2px", background: "#B45309", margin: "0 auto 2rem" }} />

        <p style={{
          fontFamily: "var(--ff-body)", fontSize: "1.05rem",
          fontWeight: 400, lineHeight: 1.85, color: "#374151",
          marginBottom: "1.5rem",
        }}>
          Dekrit Presiden 5 Juli 1959 merupakan langkah darurat untuk mengatasi
          krisis ketatanegaraan Indonesia. Kebijakan ini berhasil mengakhiri
          kebuntuan politik dalam jangka pendek, namun juga membawa dampak penting
          terhadap perkembangan demokrasi di Indonesia.
        </p>

        <p style={{
          fontFamily: "var(--ff-body)", fontSize: "1.05rem",
          fontWeight: 400, lineHeight: 1.85, color: "#374151",
        }}>
          Keputusan ini diambil oleh Presiden Soekarno untuk menyelesaikan krisis
          politik dan mengembalikan negara kepada UUD 1945.
        </p>

        {/* Fact chips */}
        <div style={{
          display: "flex", gap: "0.75rem", justifyContent: "center",
          marginTop: "2.5rem", flexWrap: "wrap",
        }}>
          {["5 Juli 1959", "Soekarno", "UUD 1945", "Demokrasi Terpimpin"].map((tag) => (
            <span key={tag} style={{
              fontFamily: "var(--ff-body)", fontSize: "0.75rem",
              fontWeight: 500, color: "#B45309",
              background: "#FEF3C7", padding: "0.35rem 0.85rem",
              borderRadius: "999px", border: "1px solid #FDE68A",
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
