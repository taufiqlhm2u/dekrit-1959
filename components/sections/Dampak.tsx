"use client";
import React, { useEffect, useRef, useState } from "react";

const positif = [
  { title: "Menyelamatkan Negara", desc: "Dekrit berhasil mencegah perpecahan lebih lanjut dan menyelamatkan keutuhan NKRI dari ancaman disintegrasi bangsa." },
  { title: "Mengakhiri Kebuntuan Politik", desc: "Memberikan kepastian hukum dan arah yang jelas bagi penyelenggaraan negara yang sebelumnya terkatung-katung." },
];
const negatif = [
  { title: "Demokrasi Melemah", desc: "Langkah ini membuka jalan menuju Demokrasi Terpimpin yang membatasi ruang gerak partai dan kebebasan berpolitik." },
  { title: "Kekuasaan Presiden Menguat", desc: "Kekuasaan eksekutif terpusat pada Presiden Soekarno sehingga keseimbangan antar lembaga negara terganggu." },
];

function ImpactCard({ item, type }: { item: { title: string; desc: string }; type: "pos" | "neg" }) {
  const [hov, setHov] = useState(false);
  const isPos = type === "pos";
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding: "1.1rem",
        border: `1px solid ${hov ? (isPos ? "#6EE7B7" : "#FCA5A5") : (isPos ? "#D1FAE5" : "#FEE2E2")}`,
        borderRadius: "10px",
        background: hov ? (isPos ? "#ECFDF5" : "#FEF2F2") : (isPos ? "#F0FDF4" : "#FFF5F5"),
        transition: "all 0.2s ease",
        cursor: "default",
        transform: hov ? "translateY(-2px)" : "translateY(0)",
      }}
    >
      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "0.4rem" }}>
        <span style={{
          fontSize: "0.95rem", fontWeight: 700,
          color: isPos ? "#059669" : "#DC2626",
        }}>
          {isPos ? "+" : "−"}
        </span>
        <p style={{
          fontFamily: "var(--ff-body)", fontSize: "0.85rem",
          fontWeight: 600, color: "#111111",
        }}>
          {item.title}
        </p>
      </div>
      <p style={{
        fontFamily: "var(--ff-body)", fontSize: "0.8rem",
        lineHeight: 1.6, color: "#6B7280",
      }}>
        {item.desc}
      </p>
    </div>
  );
}

export default function Dampak() {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.15 });
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
          fontFamily: "var(--ff-body)", fontSize: "0.7rem", fontWeight: 600,
          letterSpacing: "0.18em", color: "#B45309",
          textTransform: "uppercase", marginBottom: "1.25rem",
        }}>
          05 — Dampak
        </p>
        <h2 style={{
          fontFamily: "var(--ff-display)",
          fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
          fontWeight: 700, letterSpacing: "-0.02em",
          color: "#111111", marginBottom: "2.5rem", lineHeight: 1.15,
        }}>
          Dampak Positif &amp; Negatif
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "1.75rem" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.85rem" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10B981" }} />
              <p style={{
                fontFamily: "var(--ff-body)", fontSize: "0.7rem", fontWeight: 600,
                letterSpacing: "0.12em", color: "#059669", textTransform: "uppercase",
              }}>Dampak Positif</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {positif.map((item, i) => <ImpactCard key={i} item={item} type="pos" />)}
            </div>
          </div>

          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.85rem" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#EF4444" }} />
              <p style={{
                fontFamily: "var(--ff-body)", fontSize: "0.7rem", fontWeight: 600,
                letterSpacing: "0.12em", color: "#DC2626", textTransform: "uppercase",
              }}>Dampak Negatif</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {negatif.map((item, i) => <ImpactCard key={i} item={item} type="neg" />)}
            </div>
          </div>
        </div>

        <p style={{
          fontFamily: "var(--ff-body)", fontSize: "0.72rem",
          color: "#9CA3AF", fontStyle: "italic",
        }}>
          Catatan: Hermawan &amp; Rizal (2022)
        </p>
      </div>
    </section>
  );
}
