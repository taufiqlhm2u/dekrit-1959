// "use client";

// import React, { useRef, useEffect, useState } from "react";

// export default function HeroScrollVideo({ media }: { media: string }) {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const [scale, setScale] = useState(0.55);
//   const [borderRadius, setBorderRadius] = useState(24);
//   const [muted, setMuted] = useState(true);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [showControls, setShowControls] = useState(false);

//   // Scroll → scale up video
//   useEffect(() => {
//     const handleScroll = () => {
//       const el = containerRef.current;
//       if (!el) return;
//       const rect = el.getBoundingClientRect();
//       const totalScrollable = el.offsetHeight - window.innerHeight;
//       const scrolled = -rect.top;
//       const p = Math.min(Math.max(scrolled / totalScrollable, 0), 1);

//       // Scale from 55% → 100%
//       setScale(0.55 + p * 0.45);
//       // Border radius 24px → 0px
//       setBorderRadius(Math.max(0, 24 - p * 24));
//     };
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     handleScroll();
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Autoplay on mount (muted — required by browsers)
//   useEffect(() => {
//     const v = videoRef.current;
//     if (!v) return;
//     v.play().catch(() => {});
//     const onPlay  = () => setIsPlaying(true);
//     const onPause = () => setIsPlaying(false);
//     const onTime  = () => { if (v.duration) setProgress((v.currentTime / v.duration) * 100); };
//     v.addEventListener("play",  onPlay);
//     v.addEventListener("pause", onPause);
//     v.addEventListener("timeupdate", onTime);
//     return () => {
//       v.removeEventListener("play",  onPlay);
//       v.removeEventListener("pause", onPause);
//       v.removeEventListener("timeupdate", onTime);
//     };
//   }, []);

//   const toggleMute = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     const v = videoRef.current;
//     if (!v) return;
//     if (muted) {
//       v.muted = false;
//       v.play().catch(() => { v.muted = true; return; });
//     } else {
//       v.muted = true;
//     }
//     setMuted((p) => !p);
//   };

//   const togglePlay = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     const v = videoRef.current;
//     if (!v) return;
//     v.paused ? v.play() : v.pause();
//   };

//   const seekTo = (e: React.MouseEvent<HTMLDivElement>) => {
//     const v = videoRef.current;
//     if (!v || !v.duration) return;
//     const rect = e.currentTarget.getBoundingClientRect();
//     v.currentTime = ((e.clientX - rect.left) / rect.width) * v.duration;
//   };

//   return (
//     // This div is tall so scroll has room to scale the video
//     <div
//       ref={containerRef}
//       style={{
//         position: "relative",
//         height: "280vh",
//         background: "#111111",
//       }}
//     >
//       {/* Sticky container — stays in view while we scroll */}
//       <div style={{
//         position: "sticky",
//         top: 0,
//         height: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         overflow: "hidden",
//       }}>

//         {/* Left progress bar */}
//         <div style={{
//           position: "absolute", left: 0, top: 0, bottom: 0,
//           width: "2px", background: "rgba(255,255,255,0.06)", zIndex: 10,
//         }}>
//           <div style={{
//             width: "100%", height: `${(scale - 0.55) / 0.45 * 100}%`,
//             background: "#B45309", transition: "none",
//           }} />
//         </div>

//         {/* Video card — scales up on scroll */}
//         <div
//           onMouseEnter={() => setShowControls(true)}
//           onMouseLeave={() => setShowControls(false)}
//           style={{
//             width: `${scale * 100}%`,
//             maxWidth: "1200px",
//             position: "relative",
//             borderRadius: `${borderRadius}px`,
//             overflow: "hidden",
//             boxShadow: scale > 0.7
//               ? `0 ${(scale - 0.55) * 100}px ${(scale - 0.55) * 160}px rgba(0,0,0,0.65)`
//               : "0 20px 60px rgba(0,0,0,0.4)",
//             transition: "box-shadow 0.2s ease",
//             background: "#000",
//           }}
//         >
//           <video
//             ref={videoRef}
//             src={media}
//             muted
//             playsInline
//             loop
//             preload="auto"
//             style={{
//               width: "100%",
//               display: "block",
//               aspectRatio: "16/9",
//               objectFit: "cover",
//             }}
//           />

//           {/* Controls overlay — appears on hover */}
//           <div style={{
//             position: "absolute", inset: 0,
//             background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 45%)",
//             opacity: showControls ? 1 : 0,
//             transition: "opacity 0.25s ease",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "flex-end",
//             padding: "1rem 1.25rem",
//             pointerEvents: showControls ? "auto" : "none",
//           }}>
//             {/* Seek bar */}
//             <div
//               onClick={seekTo}
//               style={{
//                 width: "100%", height: "3px",
//                 background: "rgba(255,255,255,0.25)",
//                 borderRadius: "2px",
//                 marginBottom: "0.8rem",
//                 cursor: "pointer",
//               }}
//             >
//               <div style={{
//                 height: "100%", width: `${progress}%`,
//                 background: "#B45309", borderRadius: "2px",
//                 transition: "width 0.1s linear",
//                 pointerEvents: "none",
//               }} />
//             </div>

//             {/* Buttons */}
//             <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
//               {/* Play/pause */}
//               <button onClick={togglePlay} style={btnStyle}>
//                 {isPlaying ? (
//                   <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
//                     <rect x="6" y="4" width="4" height="16" rx="1"/>
//                     <rect x="14" y="4" width="4" height="16" rx="1"/>
//                   </svg>
//                 ) : (
//                   <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
//                     <polygon points="5,3 19,12 5,21"/>
//                   </svg>
//                 )}
//               </button>

//               {/* Mute / unmute */}
//               <button onClick={toggleMute} style={btnStyle}>
//                 {muted ? (
//                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//                     <path d="M11 4.702a.705.705 0 0 0-1.197-.505L6.765 7H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.765l3.038 2.803A.705.705 0 0 0 11 19.298z"/>
//                     <line x1="22" y1="9" x2="16" y2="15"/>
//                     <line x1="16" y1="9" x2="22" y2="15"/>
//                   </svg>
//                 ) : (
//                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
//                     <path d="M11 4.702a.705.705 0 0 0-1.197-.505L6.765 7H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.765l3.038 2.803A.705.705 0 0 0 11 19.298z"/>
//                     <path d="M15.536 8.464a5 5 0 0 1 0 7.072"/>
//                     <path d="M17.95 6.05a8 8 0 0 1 0 11.9"/>
//                   </svg>
//                 )}
//               </button>

//               {/* Label right side */}
//               <span style={{
//                 fontFamily: "var(--ff-body)", fontSize: "0.65rem",
//                 color: "rgba(255,255,255,0.4)",
//                 letterSpacing: "0.08em",
//                 marginLeft: "auto",
//               }}>
//                 Dekrit Presiden · 1959
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Scroll hint — fades as you scroll */}
//         <div style={{
//           position: "absolute", bottom: "2rem", left: "50%",
//           transform: "translateX(-50%)",
//           opacity: Math.max(0, 1 - (scale - 0.55) / 0.2),
//           transition: "opacity 0.1s",
//           display: "flex", flexDirection: "column",
//           alignItems: "center", gap: "6px",
//           pointerEvents: "none",
//         }}>
//           <span style={{
//             fontFamily: "var(--ff-body)", fontSize: "0.65rem",
//             letterSpacing: "0.2em", color: "rgba(255,255,255,0.3)",
//             textTransform: "uppercase",
//           }}>
//             Scroll
//           </span>
//           <svg width="16" height="24" viewBox="0 0 16 24" fill="none"
//             style={{ animation: "scrollPulse 2s ease-in-out infinite" }}>
//             <rect x="1" y="1" width="14" height="22" rx="7" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
//             <rect x="7" y="5" width="2" height="5" rx="1" fill="rgba(255,255,255,0.3)"/>
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// }

// const btnStyle: React.CSSProperties = {
//   width: "32px", height: "32px",
//   borderRadius: "50%", border: "none",
//   background: "rgba(255,255,255,0.15)",
//   backdropFilter: "blur(8px)",
//   color: "#fff", cursor: "pointer",
//   display: "flex", alignItems: "center", justifyContent: "center",
//   flexShrink: 0,
// };

"use client";

import React, { useRef, useEffect, useState } from "react";

export default function HeroScrollVideo({ media }: { media: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scale, setScale] = useState(0.55);
  const [borderRadius, setBorderRadius] = useState(24);
  const [muted, setMuted] = useState(true); // status mute (untuk keperluan internal, tidak ditampilkan)

  // Scroll → scale up video
  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const totalScrollable = el.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const p = Math.min(Math.max(scrolled / totalScrollable, 0), 1);
      setScale(0.55 + p * 0.45);
      setBorderRadius(Math.max(0, 24 - p * 24));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Autoplay video (muted)
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {});
  }, []);

  // Keyboard control: "\" toggle mute, "/" toggle play/pause
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Hindari jika sedang mengetik di form
      if (
        document.activeElement instanceof HTMLInputElement ||
        document.activeElement instanceof HTMLTextAreaElement
      ) {
        return;
      }

      const v = videoRef.current;
      if (!v) return;

      // Tombol "/" (kode "Slash") → play/pause
      if (e.code === "Slash") {
        e.preventDefault(); // Mencegah input karakter "/" di halaman
        if (v.paused) {
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      }

      // Tombol "\" (kode "Backslash") → mute/unmute
      if (e.code === "Backslash") {
        e.preventDefault();
        v.muted = !v.muted;
        setMuted(v.muted); // update state meskipun tidak ditampilkan
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        height: "280vh",
        background: "#111111",
      }}
    >
      {/* Sticky container */}
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Progress bar kiri (indikator scroll) */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "2px",
            background: "rgba(255,255,255,0.06)",
            zIndex: 10,
          }}
        >
          <div
            style={{
              width: "100%",
              height: `${((scale - 0.55) / 0.45) * 100}%`,
              background: "#B45309",
              transition: "none",
            }}
          />
        </div>

        {/* Video card – tanpa kontrol visual */}
        <div
          style={{
            width: `${scale * 100}%`,
            maxWidth: "1200px",
            position: "relative",
            borderRadius: `${borderRadius}px`,
            overflow: "hidden",
            boxShadow:
              scale > 0.7
                ? `0 ${(scale - 0.55) * 100}px ${
                    (scale - 0.55) * 160
                  }px rgba(0,0,0,0.65)`
                : "0 20px 60px rgba(0,0,0,0.4)",
            transition: "box-shadow 0.2s ease",
            background: "#000",
          }}
        >
          <video
            ref={videoRef}
            src={media}
            muted={muted}
            playsInline
            loop={false} // hanya sekali putar
            preload="auto"
            style={{
              width: "100%",
              display: "block",
              aspectRatio: "16/9",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Petunjuk scroll (fade out) */}
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            opacity: Math.max(0, 1 - (scale - 0.55) / 0.2),
            transition: "opacity 0.1s",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "6px",
            pointerEvents: "none",
          }}
        >
          <span
            style={{
              fontFamily: "var(--ff-body)",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              color: "rgba(255,255,255,0.3)",
              textTransform: "uppercase",
            }}
          >
            Scroll
          </span>
          <svg
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
            style={{ animation: "scrollPulse 2s ease-in-out infinite" }}
          >
            <rect
              x="1"
              y="1"
              width="14"
              height="22"
              rx="7"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="1.5"
            />
            <rect
              x="7"
              y="5"
              width="2"
              height="5"
              rx="1"
              fill="rgba(255,255,255,0.3)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}