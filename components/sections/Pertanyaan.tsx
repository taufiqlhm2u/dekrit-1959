"use client";
import React, { useEffect, useRef, useState } from "react";

export default function Pertanyaan() {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => setVis(e.isIntersecting),
      { threshold: 0.2 }
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
        padding: "6rem 2rem",
        minHeight: "100vh",
        background: "#0D0D0D",
      }}
    >
      {/* ── Background radial glow ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "70vw",
          height: "70vw",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(180,83,9,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Subtle grid texture ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* ── Main content ── */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          maxWidth: "640px",
          width: "100%",
          opacity: vis ? 1 : 0,
          transform: vis ? "translateY(0)" : "translateY(28px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        {/* Section label */}
        <p
          style={{
            fontFamily: "var(--ff-body)",
            fontSize: "0.7rem",
            fontWeight: 600,
            letterSpacing: "0.18em",
            color: "#B45309",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
          }}
        >
          07 — Tanya Jawab
        </p>

        {/* Big title */}
        <h2
          style={{
            fontFamily: "var(--ff-display)",
            fontSize: "clamp(3.5rem, 9vw, 7rem)",
            fontWeight: 700,
            fontStyle: "italic",
            letterSpacing: "-0.03em",
            color: "#FFFFFF",
            lineHeight: 1,
            marginBottom: "2rem",
          }}
        >
          Pertanyaan?
        </h2>

        {/* Divider */}
        <div
          style={{
            width: "32px",
            height: "1px",
            background: "#B45309",
            margin: "0 auto 2.5rem",
          }}
        />

        {/* Main quote */}
        <p
          style={{
            fontFamily: "var(--ff-body)",
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            fontWeight: 400,
            lineHeight: 1.85,
            color: "rgba(255,255,255,0.75)",
            fontStyle: "italic",
          }}
        >
          "Cukup pertanyaamu saja yang diutarakan.{" "}
          <span style={{ color: "rgba(255,255,255,0.4)" }}>
            Perasaanmu padanya… dipendam saja."
          </span>
        </p>
      </div>

      {/* ── Sticky note / tempelan diskon ── */}
      <div
        aria-hidden="false"
        style={{
          position: "absolute",
          bottom: "3.5rem",
          right: "3rem",
          zIndex: 10,
          opacity: vis ? 1 : 0,
          transform: vis ? "rotate(-4deg) scale(1)" : "rotate(-4deg) scale(0.6) translateY(20px)",
          transition: "opacity 0.8s ease 0.45s, transform 0.8s cubic-bezier(0.34,1.56,0.64,1) 0.45s",
          maxWidth: "240px",
        }}
      >
        {/* Tape strip at top */}
        <div
          style={{
            position: "absolute",
            top: "-14px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "52px",
            height: "22px",
            background: "rgba(253,230,138,0.45)",
            borderRadius: "2px",
            backdropFilter: "blur(4px)",
            boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
          }}
        />

        {/* Note body */}
        <div
          style={{
            background: "#FCD34D",
            borderRadius: "2px",
            padding: "1.25rem 1.4rem 1.5rem",
            boxShadow:
              "4px 6px 24px rgba(0,0,0,0.55), inset 0 -2px 0 rgba(0,0,0,0.08)",
            position: "relative",
          }}
        >
          {/* Corner fold */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: 0,
              height: 0,
              borderStyle: "solid",
              borderWidth: "0 0 20px 20px",
              borderColor: "transparent transparent rgba(0,0,0,0.18) transparent",
            }}
          />

          <p
            style={{
              fontFamily: "var(--ff-body)",
              fontSize: "0.82rem",
              fontWeight: 600,
              color: "#1C1C1C",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Kalo mau bertanya gapapa, gue jawab sebisanya saja🙏🏽
          </p>
        </div>
      </div>
    </section>
  );
}
