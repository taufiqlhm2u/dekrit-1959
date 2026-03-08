"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HeroTitle() {

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
      easing: "ease-out-cubic"
    });
  }, []);

  return (
    <section style={{
      minHeight: "100vh",
      background: "#111111",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "4rem 2rem",
      position: "relative",
      overflow: "hidden",
    }}>
      
      {/* Radial background */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        width: "70vw",
        height: "70vw",
        borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(180,83,9,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div
        data-aos="fade-up"
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
        }}
      >
        
        {/* Eyebrow */}
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          style={{
            fontFamily: "var(--ff-body)",
            fontSize: "0.7rem",
            fontWeight: 500,
            letterSpacing: "0.2em",
            color: "#B45309",
            textTransform: "uppercase",
            marginBottom: "2rem",
          }}
        >
          Presentasi Sejarah
        </p>

        {/* Main heading */}
        <h1
          data-aos="zoom-in"
          data-aos-delay="200"
          style={{
            fontFamily: "var(--ff-display)",
            fontSize: "clamp(3.5rem, 10vw, 8rem)",
            fontWeight: 900,
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
            color: "#FFFFFF",
            marginBottom: "0.3rem",
          }}
        >
          Dekrit Presiden
        </h1>

        <h2
          data-aos="fade-up"
          data-aos-delay="400"
          style={{
            fontFamily: "var(--ff-display)",
            fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
            fontWeight: 400,
            fontStyle: "italic",
            lineHeight: 1,
            letterSpacing: "-0.02em",
            color: "#B45309",
            marginBottom: "3rem",
          }}
        >
          5 Juli 1959
        </h2>

        {/* Divider */}
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          style={{
            width: "40px",
            height: "1px",
            background: "rgba(255,255,255,0.15)",
            margin: "0 auto 2rem",
          }}
        />

        {/* Author */}
        <p
          data-aos="fade-up"
          data-aos-delay="600"
          style={{
            fontFamily: "var(--ff-body)",
            fontSize: "0.85rem",
            fontWeight: 400,
            color: "rgba(255,255,255,0.4)",
            letterSpacing: "0.05em",
          }}
        >
          Disusun oleh{" "}
          <span style={{ color: "rgba(255,255,255,0.65)", fontWeight: 500 }}>
            Taufiqul Hakim
          </span>
        </p>
      </div>

      {/* Scroll cue */}
      <div
        data-aos="fade-up"
        data-aos-delay="900"
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
          <rect x="1" y="1" width="14" height="22" rx="7" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
          <rect x="7" y="5" width="2" height="5" rx="1" fill="rgba(255,255,255,0.35)"/>
        </svg>
      </div>

    </section>
  );
}