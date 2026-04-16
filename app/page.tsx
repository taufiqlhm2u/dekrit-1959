"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import HeroTitle from "@/components/sections/HeroTitle";
import HeroScrollVideo from "@/components/ui/scroll-animated-video";
import Pengertian from "@/components/sections/Pengertian";
import LatarBelakang from "@/components/sections/LatarBelakang";
import IsiDekrit from "@/components/sections/IsiDekrit";
import Tujuan from "@/components/sections/Tujuan";
import Dampak from "@/components/sections/Dampak";
import Kesimpulan from "@/components/sections/Kesimpulan";
import Pertanyaan from "@/components/sections/Pertanyaan";
import TerimaKasih from "@/components/sections/TerimaKasih";
import DaftarPustaka from "@/components/sections/DaftarPustaka";

export default function DemoOne() {
  const snapRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // ── Laser pointer cursor ──
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = -100;
    let mouseY = -100;
    let curX = -100;
    let curY = -100;
    let visible = false;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!visible) {
        visible = true;
        cursor.style.opacity = "1";
      }
    };

    const onLeave = () => {
      visible = false;
      cursor.style.opacity = "0";
    };

    const tick = () => {
      // Smooth lerp for a polished feel
      curX += (mouseX - curX) * 0.25;
      curY += (mouseY - curY) * 0.25;
      cursor.style.left = `${curX}px`;
      cursor.style.top = `${curY}px`;
      raf = requestAnimationFrame(tick);
    };

    cursor.style.opacity = "0";
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  // ── Track current section via IntersectionObserver ──
  useEffect(() => {
    const container = snapRef.current;
    if (!container) return;

    const sections = container.querySelectorAll<HTMLElement>(".snap-section, section");
    if (!sections.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            const idx = Array.from(sections).indexOf(entry.target as HTMLElement);
            if (idx !== -1) setCurrentIndex(idx);
          }
        });
      },
      { root: container, threshold: 0.5 }
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  // Navigate to a specific section index
  const scrollTo = useCallback((index: number) => {
    const container = snapRef.current;
    if (!container) return;
    const sections = container.querySelectorAll<HTMLElement>(".snap-section, section");
    if (index < 0 || index >= sections.length) return;
    sections[index].scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  // ── Keyboard arrow handler ──
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!snapRef.current) return;

      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        setCurrentIndex((prev) => {
          const container = snapRef.current;
          if (!container) return prev;
          const sections = container.querySelectorAll<HTMLElement>(".snap-section, section");
          const next = Math.min(prev + 1, sections.length - 1);
          sections[next].scrollIntoView({ behavior: "smooth", block: "start" });
          return next;
        });
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        setCurrentIndex((prev) => {
          const container = snapRef.current;
          if (!container) return prev;
          const sections = container.querySelectorAll<HTMLElement>(".snap-section, section");
          const next = Math.max(prev - 1, 0);
          sections[next].scrollIntoView({ behavior: "smooth", block: "start" });
          return next;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main>
      {/* Laser pointer cursor */}
      <div id="laser-cursor" ref={cursorRef} />

      {/* 1. Landing Judul */}
      <HeroTitle />

      {/* 2. Video — scroll makes it grow from small to full width */}
      <HeroScrollVideo media="/videos/hero.mp4" />

      {/*
        3. Pengertian — white background, z-index higher than video section
           so it naturally scrolls on top and "covers" the dark video area
      */}
      {/* <div style={{ position: "relative", zIndex: 10, background: "#fff" }}>
      </div> */}

      {/* 4–10. Snap scroll sections */}
      <div className="snap-wrap" ref={snapRef}>
        <Pengertian />
        <LatarBelakang />
        <IsiDekrit />
        <Tujuan />
        <Dampak />
        <Kesimpulan />
        <Pertanyaan />
        <DaftarPustaka />
        <TerimaKasih />
      </div>
    </main>
  );
}

