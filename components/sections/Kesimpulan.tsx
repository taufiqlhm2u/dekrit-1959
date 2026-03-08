"use client";
import React, { useEffect, useRef, useState } from "react";

const tags = ["5 Juli 1959", "Soekarno", "UUD 1945", "Demokrasi Terpimpin"];

const RADIUS = 160;

function ContentLayer({ dark }: { dark: boolean }) {
  return (
    <div style={{ maxWidth: "680px", width: "100%", textAlign: "center" }}>
      <p style={{
        fontFamily: "var(--ff-body)", fontSize: "0.7rem",
        fontWeight: 600, letterSpacing: "0.18em",
        color: dark ? "#FCD34D" : "#B45309",
        textTransform: "uppercase", marginBottom: "1.25rem",
      }}>
        06 — Kesimpulan
      </p>

      <h2 style={{
        fontFamily: "var(--ff-display)",
        fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
        fontWeight: 700, letterSpacing: "-0.02em",
        color: dark ? "#FFFFFF" : "#111111",
        marginBottom: "2rem", lineHeight: 1.15,
      }}>
        Sebuah Langkah Darurat Bersejarah
      </h2>

      <div style={{
        width: "32px", height: "2px",
        background: dark ? "#FCD34D" : "#B45309",
        margin: "0 auto 2rem",
      }} />

      <p style={{
        fontFamily: "var(--ff-body)", fontSize: "1.05rem",
        fontWeight: 400, lineHeight: 1.85,
        color: dark ? "#E5E7EB" : "#374151",
        marginBottom: "1.5rem",
      }}>
        Dekrit Presiden 5 Juli 1959 merupakan langkah darurat untuk mengatasi
        krisis ketatanegaraan Indonesia. Kebijakan ini berhasil mengakhiri
        kebuntuan politik dalam jangka pendek, namun juga membawa dampak penting
        terhadap perkembangan demokrasi di Indonesia.
      </p>

      <p style={{
        fontFamily: "var(--ff-body)", fontSize: "1.05rem",
        fontWeight: 400, lineHeight: 1.85,
        color: dark ? "#E5E7EB" : "#374151",
      }}>
        Keputusan ini diambil oleh Presiden Soekarno untuk menyelesaikan krisis
        politik dan mengembalikan negara kepada UUD 1945.
      </p>

      <div style={{
        display: "flex", gap: "0.75rem", justifyContent: "center",
        marginTop: "2.5rem", flexWrap: "wrap",
      }}>
        {tags.map((tag) => (
          <span key={tag} style={{
            fontFamily: "var(--ff-body)", fontSize: "0.75rem",
            fontWeight: 500,
            color: dark ? "#FFFFFF" : "#B45309",
            background: dark ? "rgba(180,83,9,0.55)" : "#FEF3C7",
            padding: "0.35rem 0.85rem",
            borderRadius: "999px",
            border: `1px solid ${dark ? "rgba(253,230,138,0.5)" : "#FDE68A"}`,
          }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Kesimpulan() {
  const sectionRef = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);
  const [mouse, setMouse] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const spotMask = mouse
    ? `radial-gradient(circle ${RADIUS}px at ${mouse.x}px ${mouse.y}px, black 60%, transparent 100%)`
    : "none";

  return (
    <section
      ref={sectionRef}
      className="snap-section"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMouse(null)}
      style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "6rem 2rem",
        minHeight: "100vh",
        background: "#FAFAFA",
        cursor: "none",
      }}
    >
      {/* ── Base: background image revealed only near cursor ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          maskImage: spotMask,
          WebkitMaskImage: spotMask,
        }}
      >
        <img
          src="https://akcdn.detik.net.id/community/media/visual/2019/01/18/07d4c3d5-ba69-4c2f-ac50-299944e439cb_43.jpeg"
          alt=""
          style={{
            width: "100%", height: "100%",
            objectFit: "cover", objectPosition: "center",
            filter: "brightness(0.52)",
          }}
        />
      </div>

      {/* ── Layer 1: light content (always visible, base) ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "6rem 2rem",
          opacity: vis ? 1 : 0,
          transform: vis ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <ContentLayer dark={false} />
      </div>

      {/* ── Layer 2: dark content — only visible near cursor via mask ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "6rem 2rem",
          maskImage: spotMask,
          WebkitMaskImage: spotMask,
          opacity: vis ? 1 : 0,
          transform: vis ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
          pointerEvents: "none",
        }}
      >
        <ContentLayer dark={true} />
      </div>

      {/* ── Custom cursor dot ── */}
      {mouse && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: mouse.x,
            top: mouse.y,
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "#B45309",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
            pointerEvents: "none",
            boxShadow: "0 0 0 3px rgba(180,83,9,0.25)",
          }}
        />
      )}
    </section>
  );
}