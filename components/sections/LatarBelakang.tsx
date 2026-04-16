"use client";
import React, { useEffect, useRef, useState } from "react";

const items = [
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126Z"/><path d="M12 15.75h.007v.008H12v-.008Z"/></svg>,
    title: "Konstituante Gagal (1956)",
    desc: "Konstituante gagal menetapkan UUD baru sebagai pengganti UUDS 1950 sejak dibentuk tahun 1956.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"/></svg>,
    title: "Voting Tidak Kuorum",
    desc: "Setiap pemungutan suara gagal mencapai dua pertiga kuorum yang dibutuhkan untuk mengesahkan UUD baru.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"/></svg>,
    title: "Instabilitas Politik",
    desc: "Situasi politik nasional memburuk; ketegangan antar faksi memuncak dan mengancam persatuan bangsa.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"/></svg>,
    title: "Pergantian Kabinet Berulang",
    desc: "Kabinet sering berganti dalam waktu singkat, menghambat jalannya pemerintahan yang efektif.",
  },
];

function HoverCard({ item }: { item: typeof items[0] }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding: "1.25rem",
        border: `1px solid ${hov ? "rgba(180,83,9,0.6)" : "rgba(255,255,255,0.18)"}`,
        borderRadius: "14px",
        background: hov
          ? "rgba(255,251,235,0.16)"
          : "rgba(255,255,255,0.08)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        boxShadow: hov
          ? "0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.2)"
          : "0 2px 12px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.12)",
        transition: "all 0.25s ease",
        cursor: "default",
        transform: hov ? "translateY(-3px)" : "translateY(0)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.65rem" }}>
        <div style={{
          width: "32px", height: "32px", borderRadius: "8px",
          background: hov ? "#B45309" : "rgba(180,83,9,0.22)",
          border: "1px solid rgba(180,83,9,0.4)",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: hov ? "#fff" : "#B45309",
          transition: "all 0.25s ease", flexShrink: 0,
        }}>
          {item.icon}
        </div>
        <span style={{
          fontFamily: "var(--ff-body)", fontSize: "0.86rem",
          fontWeight: 600, color: "#F9FAFB",
        }}>
          {item.title}
        </span>
      </div>
      <p style={{
        fontFamily: "var(--ff-body)", fontSize: "0.82rem",
        lineHeight: 1.65, color: "#D1D5DB",
      }}>
        {item.desc}
      </p>
    </div>
  );
}

export default function LatarBelakang() {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => setVis(e.isIntersecting),
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="snap-section"
      style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "5rem 2rem",
        minHeight: "100vh",
      }}
    >
      {/* ── Background image — full cover ── */}
      <img
        aria-hidden="true"
        src="/photos/konstituante.jpeg"
        alt="konstituante.jpeg"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          filter: "brightness(0.35) saturate(1.1)",
          zIndex: 0,
        }}
      />

      {/* ── Subtle vignette for readability ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "radial-gradient(ellipse at center, transparent 25%, rgba(0,0,0,0.4) 100%)",
        }}
      />

      {/* ── Content ── */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "760px",
          width: "100%",
          opacity: vis ? 1 : 0,
          transform: vis ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <p style={{
          fontFamily: "var(--ff-body)", fontSize: "0.7rem", fontWeight: 600,
          letterSpacing: "0.18em", color: "#B45309",
          textTransform: "uppercase", marginBottom: "1.25rem",
        }}>
          02 — Latar Belakang
        </p>

        <h2 style={{
          fontFamily: "var(--ff-display)",
          fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
          fontWeight: 700, letterSpacing: "-0.02em",
          color: "#FFFFFF", marginBottom: "1.75rem", lineHeight: 1.15,
        }}>
          Mengapa Dekrit Diperlukan?
        </h2>

        {/* Blockquote — plain, no glass */}
        <blockquote style={{
          borderLeft: "3px solid #B45309",
          borderRadius: "0 8px 8px 0",
          marginBottom: "2rem",
          padding: "1.1rem 1.5rem",
          background: "transparent",
        }}>
          <p style={{
            fontFamily: "var(--ff-display)", fontSize: "0.95rem",
            fontStyle: "italic", lineHeight: 1.7, color: "#E5E7EB",
          }}>
            "Dekrit Presiden dilatarbelakangi oleh kegagalan Konstituante dalam menetapkan UUD baru pengganti UUDS 1950 serta situasi politik yang tidak stabil sehingga mengancam persatuan negara."
          </p>
          <p style={{
            fontFamily: "var(--ff-body)", fontSize: "0.72rem",
            color: "#9CA3AF", marginTop: "0.6rem", fontStyle: "italic",
          }}>
            — Sjahdeini (2021)
          </p>
        </blockquote>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.9rem" }}>
          {items.map((item, i) => (
            <HoverCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}