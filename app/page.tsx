import React from "react";
import HeroTitle from "@/components/sections/HeroTitle";
import HeroScrollVideo from "@/components/ui/scroll-animated-video";
import Pengertian from "@/components/sections/Pengertian";
import LatarBelakang from "@/components/sections/LatarBelakang";
import IsiDekrit from "@/components/sections/IsiDekrit";
import Tujuan from "@/components/sections/Tujuan";
import Dampak from "@/components/sections/Dampak";
import Kesimpulan from "@/components/sections/Kesimpulan";
import TerimaKasih from "@/components/sections/TerimaKasih";
import DaftarPustaka from "@/components/sections/DaftarPustaka";

export default function DemoOne() {
  return (
    <main>
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
      <div className="snap-wrap">
        <Pengertian />
        <LatarBelakang />
        <IsiDekrit />
        <Tujuan />
        <Dampak />
        <Kesimpulan />
        <DaftarPustaka />
        <TerimaKasih />
      </div>
    </main>
  );
}
