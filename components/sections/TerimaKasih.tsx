"use client";
import React, { useEffect, useRef, useState } from "react";

export default function TerimaKasih() {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="snap-section" style={{
      background: "#111111",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "6rem 2rem", position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%,-50%)",
        width: "60vw", height: "60vw", borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(180,83,9,0.1) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{
        textAlign: "center", position: "relative", zIndex: 1,
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
      }}>
        <p style={{
          fontFamily: "var(--ff-body)", fontSize: "0.7rem",
          fontWeight: 600, letterSpacing: "0.18em",
          color: "#B45309", textTransform: "uppercase", marginBottom: "2rem",
        }}>
          07 — Penutup
        </p>

        <h2 style={{
          fontFamily: "var(--ff-display)",
          fontSize: "clamp(3rem, 8vw, 6rem)",
          fontWeight: 700, fontStyle: "italic",
          letterSpacing: "-0.03em", color: "#FFFFFF",
          lineHeight: 1, marginBottom: "2rem",
        }}>
          Terima Kasih
        </h2>

        <div style={{ width: "32px", height: "1px", background: "#B45309", margin: "0 auto 2rem" }} />

        <p style={{
          fontFamily: "var(--ff-body)", fontSize: "0.88rem",
          color: "rgba(255,255,255,0.35)", letterSpacing: "0.05em",
        }}>
          Taufiqul Hakim &nbsp;·&nbsp; Dekrit Presiden 5 Juli 1959
        </p>
      </div>
    </section>
  );
}
