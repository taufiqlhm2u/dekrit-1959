// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import Image from "next/image";

// const items = [
//   {
//     icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3"/></svg>,
//     title: "Pembubaran Konstituante",
//     desc: "Konstituante resmi dibubarkan karena dianggap tidak mampu menyelesaikan tugasnya dalam menetapkan UUD baru.",
//   },
//   {
//     icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"/></svg>,
//     title: "Kembali ke UUD 1945",
//     desc: "UUD 1945 diberlakukan kembali sebagai konstitusi yang sah dan fundamental bagi negara Indonesia.",
//   },
//   {
//     icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/></svg>,
//     title: "Penghapusan UUDS 1950",
//     desc: "UUDS 1950 yang selama ini berlaku resmi dinyatakan tidak berlaku lagi sejak dikeluarkannya dekrit.",
//   },
//   {
//     icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"/></svg>,
//     title: "Pembentukan MPRS & DPAS",
//     desc: "Presiden diperintahkan membentuk MPRS dan DPAS sesegera mungkin.",
//   },
// ];

// function TiltImage() {
//   const cardRef = useRef<HTMLDivElement>(null);
//   const [tilt, setTilt] = useState({ x: 0, y: 0 });
//   const [hovered, setHovered] = useState(false);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     const card = cardRef.current;
//     if (!card) return;
//     const rect = card.getBoundingClientRect();
//     const cx = rect.left + rect.width / 2;
//     const cy = rect.top + rect.height / 2;
//     const dx = (e.clientX - cx) / (rect.width / 2);
//     const dy = (e.clientY - cy) / (rect.height / 2);
//     setTilt({ x: -dy * 14, y: dx * 14 });
//   };

//   const reset = () => { setTilt({ x: 0, y: 0 }); setHovered(false); };

//   return (
//     <div
//       ref={cardRef}
//       onMouseMove={handleMouseMove}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={reset}
//       style={{
//         perspective: "800px",
//         cursor: "grab",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <div style={{
//         width: "550px",
//         borderRadius: "14px",
//         overflow: "hidden",
//         position: "relative",
//         aspectRatio: "3/4",
//         transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${hovered ? 1.04 : 1})`,
//         transition: hovered ? "transform 0.08s ease" : "transform 0.5s ease",
//         boxShadow: hovered
//           ? `${-tilt.y * 1.5}px ${tilt.x * 1.5}px 40px rgba(0,0,0,0.22), 0 20px 60px rgba(0,0,0,0.12)`
//           : "0 12px 40px rgba(0,0,0,0.12)",
//         background: "#F3F4F6",
//         willChange: "transform",
//       }}>
//         <Image
//           src="/photos/dekrit.webp"
//           alt="Dekrit Presiden 5 Juli 1959"
//           fill
//           style={{ objectFit: "cover" }}
//         />
//         {/* Shine layer */}
//         <div style={{
//           position: "absolute", inset: 0,
//           background: `radial-gradient(circle at ${50 + tilt.y * 3}% ${50 - tilt.x * 3}%, rgba(255,255,255,0.18), transparent 65%)`,
//           pointerEvents: "none",
//           borderRadius: "14px",
//           transition: "background 0.08s ease",
//         }} />
//       </div>
//     </div>
//   );
// }

// function HoverCard({ item, index }: { item: typeof items[0]; index: number }) {
//   const [hovered, setHovered] = useState(false);
//   return (
//     <div
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{
//         display: "flex", gap: "1rem", alignItems: "flex-start",
//         padding: "1.1rem 1rem",
//         borderRadius: "10px",
//         background: hovered ? "#FFFBEB" : "transparent",
//         border: `1px solid ${hovered ? "#FDE68A" : "transparent"}`,
//         transition: "all 0.2s ease",
//         cursor: "default",
//         marginBottom: index < items.length - 1 ? "0.1rem" : 0,
//       }}
//     >
//       <div style={{
//         width: "34px", height: "34px", borderRadius: "8px",
//         background: hovered ? "#B45309" : "#FEF3C7",
//         display: "flex", alignItems: "center", justifyContent: "center",
//         color: hovered ? "#fff" : "#B45309", flexShrink: 0,
//         transition: "all 0.2s ease",
//       }}>
//         {item.icon}
//       </div>
//       <div>
//         <p style={{
//           fontFamily: "var(--ff-body)", fontSize: "0.86rem",
//           fontWeight: 600, color: "#111111", marginBottom: "0.2rem",
//         }}>
//           {item.title}
//         </p>
//         <p style={{
//           fontFamily: "var(--ff-body)", fontSize: "0.8rem",
//           lineHeight: 1.6, color: "#6B7280",
//         }}>
//           {item.desc}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default function IsiDekrit() {
//   const ref = useRef<HTMLElement>(null);
//   const [vis, setVis] = useState(false);
//   useEffect(() => {
//     const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.15 });
//     if (ref.current) obs.observe(ref.current);
//     return () => obs.disconnect();
//   }, []);

//   return (
//     <section ref={ref} className="snap-section" style={{
//       background: "#FFFFFF",
//       display: "flex", alignItems: "center", justifyContent: "center",
//       padding: "5rem 2rem",
//     }}>
//       <div style={{
//         maxWidth: "960px", width: "100%",
//         display: "grid", gridTemplateColumns: "1fr 240px",
//         gap: "4rem", alignItems: "center",
//         opacity: vis ? 1 : 0,
//         transform: vis ? "translateY(0)" : "translateY(24px)",
//         transition: "opacity 0.7s ease, transform 0.7s ease",
//       }}>
//         {/* Left */}
//         <div>
//           <p style={{
//             fontFamily: "var(--ff-body)", fontSize: "0.7rem", fontWeight: 600,
//             letterSpacing: "0.18em", color: "#B45309",
//             textTransform: "uppercase", marginBottom: "1.25rem",
//           }}>
//             03 — Isi Dekrit
//           </p>
//           <h2 style={{
//             fontFamily: "var(--ff-display)",
//             fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
//             fontWeight: 700, letterSpacing: "-0.02em",
//             color: "#111111", marginBottom: "0.75rem", lineHeight: 1.15,
//           }}>
//             Empat Pokok Isi Dekrit
//           </h2>
//           <p style={{
//             fontFamily: "var(--ff-body)", fontSize: "0.85rem",
//             color: "#9CA3AF", marginBottom: "2rem", lineHeight: 1.6,
//           }}>
//             Dibacakan oleh Presiden Soekarno pada 5 Juli 1959 di Istana Merdeka.
//           </p>

//           <div style={{ display: "flex", flexDirection: "column" }}>
//             {items.map((item, i) => <HoverCard key={i} item={item} index={i} />)}
//           </div>

//           <p style={{
//             fontFamily: "var(--ff-body)", fontSize: "0.72rem",
//             color: "#9CA3AF", marginTop: "1.5rem", fontStyle: "italic",
//           }}>
//             Sumber: Sjahdeini (2021)
//           </p>
//         </div>

//         {/* Right: 3D tilt image */}
//         <TiltImage />
//       </div>
//     </section>
//   );
// }

"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const items = [
  {
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3"/></svg>,
    title: "Pembubaran Konstituante",
    desc: "Konstituante resmi dibubarkan karena dianggap tidak mampu menyelesaikan tugasnya dalam menetapkan UUD baru.",
  },
  {
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"/></svg>,
    title: "Kembali ke UUD 1945",
    desc: "UUD 1945 diberlakukan kembali sebagai konstitusi yang sah dan fundamental bagi negara Indonesia.",
  },
  {
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/></svg>,
    title: "Penghapusan UUDS 1950",
    desc: "UUDS 1950 yang selama ini berlaku resmi dinyatakan tidak berlaku lagi sejak dikeluarkannya dekrit.",
  },
  {
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"/></svg>,
    title: "Pembentukan MPRS & DPAS",
    desc: "Presiden diperintahkan membentuk MPRS dan DPAS sesegera mungkin.",
  },
];

// TiltImage sekarang sebagai komponen presentasional yang menerima props
const TiltImage = React.forwardRef<
  HTMLDivElement,
  { tilt: { x: number; y: number }; hovered: boolean }
>(({ tilt, hovered }, ref) => {
  return (
    <div
      ref={ref}
      style={{
        perspective: "800px",
        cursor: "grab",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "550px",
          borderRadius: "14px",
          overflow: "hidden",
          position: "relative",
          aspectRatio: "3/4",
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${
            hovered ? 1.04 : 1
          })`,
          transition: hovered
            ? "transform 0.08s ease"
            : "transform 0.5s ease",
          boxShadow: hovered
            ? `${-tilt.y * 1.5}px ${tilt.x * 1.5}px 40px rgba(0,0,0,0.22), 0 20px 60px rgba(0,0,0,0.12)`
            : "0 12px 40px rgba(0,0,0,0.12)",
          background: "#F3F4F6",
          willChange: "transform",
        }}
      >
        <Image
          src="/photos/dekrit.webp"
          alt="Dekrit Presiden 5 Juli 1959"
          fill
          style={{ objectFit: "cover" }}
        />
        {/* Shine layer */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(circle at ${
              50 + tilt.y * 3
            }% ${50 - tilt.x * 3}%, rgba(255,255,255,0.18), transparent 65%)`,
            pointerEvents: "none",
            borderRadius: "14px",
            transition: "background 0.08s ease",
          }}
        />
      </div>
    </div>
  );
});

TiltImage.displayName = "TiltImage";

function HoverCard({ item, index }: { item: typeof items[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex", gap: "1rem", alignItems: "flex-start",
        padding: "1.1rem 1rem",
        borderRadius: "10px",
        background: hovered ? "#FFFBEB" : "transparent",
        border: `1px solid ${hovered ? "#FDE68A" : "transparent"}`,
        transition: "all 0.2s ease",
        cursor: "default",
        marginBottom: index < items.length - 1 ? "0.1rem" : 0,
      }}
    >
      <div style={{
        width: "34px", height: "34px", borderRadius: "8px",
        background: hovered ? "#B45309" : "#FEF3C7",
        display: "flex", alignItems: "center", justifyContent: "center",
        color: hovered ? "#fff" : "#B45309", flexShrink: 0,
        transition: "all 0.2s ease",
      }}>
        {item.icon}
      </div>
      <div>
        <p style={{
          fontFamily: "var(--ff-body)", fontSize: "0.86rem",
          fontWeight: 600, color: "#111111", marginBottom: "0.2rem",
        }}>
          {item.title}
        </p>
        <p style={{
          fontFamily: "var(--ff-body)", fontSize: "0.8rem",
          lineHeight: 1.6, color: "#6B7280",
        }}>
          {item.desc}
        </p>
      </div>
    </div>
  );
}

export default function IsiDekrit() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  // Intersection Observer untuk animasi scroll
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVis(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  // Efek tilt pada seluruh section
  useEffect(() => {
    const section = sectionRef.current;
    const card = cardRef.current;
    if (!section || !card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Hitung posisi relatif terhadap tengah gambar, normalisasi -1..1
      let dx = (e.clientX - centerX) / (rect.width / 2);
      let dy = (e.clientY - centerY) / (rect.height / 2);

      // Clamp agar tidak melebihi batas
      dx = Math.min(1, Math.max(-1, dx));
      dy = Math.min(1, Math.max(-1, dy));

      setTilt({ x: -dy * 14, y: dx * 14 });
      setHovered(true);
    };

    const handleMouseLeave = () => {
      setTilt({ x: 0, y: 0 });
      setHovered(false);
    };

    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="snap-section"
      style={{
        background: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "5rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: "960px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 240px",
          gap: "4rem",
          alignItems: "center",
          opacity: vis ? 1 : 0,
          transform: vis ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        {/* Left Content */}
        <div>
          <p
            style={{
              fontFamily: "var(--ff-body)",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.18em",
              color: "#B45309",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
            }}
          >
            03 — Isi Dekrit
          </p>
          <h2
            style={{
              fontFamily: "var(--ff-display)",
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#111111",
              marginBottom: "0.75rem",
              lineHeight: 1.15,
            }}
          >
            Empat Pokok Isi Dekrit
          </h2>
          <p
            style={{
              fontFamily: "var(--ff-body)",
              fontSize: "0.85rem",
              color: "#9CA3AF",
              marginBottom: "2rem",
              lineHeight: 1.6,
            }}
          >
            Dibacakan oleh Presiden Soekarno pada 5 Juli 1959 di Istana Merdeka.
          </p>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {items.map((item, i) => (
              <HoverCard key={i} item={item} index={i} />
            ))}
          </div>

          <p
            style={{
              fontFamily: "var(--ff-body)",
              fontSize: "0.72rem",
              color: "#9CA3AF",
              marginTop: "1.5rem",
              fontStyle: "italic",
            }}
          >
            Sumber: Sjahdeini (2021)
          </p>
        </div>

        {/* Right: TiltImage dengan ref dan props */}
        <TiltImage ref={cardRef} tilt={tilt} hovered={hovered} />
      </div>
    </section>
  );
}