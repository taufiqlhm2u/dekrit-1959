"use client";
import React, { useEffect, useState } from "react";

export default function HeroTitle() {
  const [vis, setVis] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVis(true), 80); return () => clearTimeout(t); }, []);

  return (
    <section style={{
      minHeight: "100vh", background: "#111111",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      padding: "4rem 2rem", position: "relative", overflow: "hidden",
    }}>
      {/* Subtle radial */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%,-50%)",
        width: "70vw", height: "70vw", borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(180,83,9,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{
        position: "relative", zIndex: 1, textAlign: "center",
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 1s ease, transform 1s ease",
      }}>
        {/* Eyebrow */}
        <p style={{
          fontFamily: "var(--ff-body)", fontSize: "0.7rem",
          fontWeight: 500, letterSpacing: "0.2em",
          color: "#B45309", textTransform: "uppercase",
          marginBottom: "2rem",
        }}>
          Presentasi Sejarah
        </p>

        {/* Main heading */}
        <h1 style={{
          fontFamily: "var(--ff-display)",
          fontSize: "clamp(3.5rem, 10vw, 8rem)",
          fontWeight: 900, lineHeight: 0.95,
          letterSpacing: "-0.03em", color: "#FFFFFF",
          marginBottom: "0.3rem",
        }}>
          Dekrit Presiden
        </h1>
        <h2 style={{
          fontFamily: "var(--ff-display)",
          fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
          fontWeight: 400, fontStyle: "italic",
          lineHeight: 1, letterSpacing: "-0.02em",
          color: "#B45309", marginBottom: "3rem",
        }}>
          5 Juli 1959
        </h2>

        {/* Thin divider */}
        <div style={{ width: "40px", height: "1px", background: "rgba(255,255,255,0.15)", margin: "0 auto 2rem" }} />

        {/* Author */}
        <p style={{
          fontFamily: "var(--ff-body)", fontSize: "0.85rem",
          fontWeight: 400, color: "rgba(255,255,255,0.4)",
          letterSpacing: "0.05em",
        }}>
          Disusun oleh{" "}
          <span style={{ color: "rgba(255,255,255,0.65)", fontWeight: 500 }}>
            Taufiqul Hakim
          </span>
        </p>
      </div>

      {/* Scroll cue */}
      <div style={{
        position: "absolute", bottom: "2.5rem", left: "50%",
        transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: "6px",
        opacity: vis ? 1 : 0, transition: "opacity 1s ease 0.8s",
      }}>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none"
          style={{ animation: "scrollPulse 2s ease-in-out infinite" }}>
          <rect x="1" y="1" width="14" height="22" rx="7" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
          <rect x="7" y="5" width="2" height="5" rx="1" fill="rgba(255,255,255,0.35)"/>
        </svg>
      </div>
    </section>
  );
}
