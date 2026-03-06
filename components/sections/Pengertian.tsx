// "use client";
// import React, { useEffect, useRef, useState } from "react";

// export default function Pengertian() {
//   const ref = useRef<HTMLElement>(null);
//   const [vis, setVis] = useState(false);
//   useEffect(() => {
//     const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.2 });
//     if (ref.current) obs.observe(ref.current);
//     return () => obs.disconnect();
//   }, []);

//   return (
//     <section ref={ref} style={{
//       position: "relative",
//       zIndex: 2,
//       minHeight: "100vh",
//       background: "#FFFFFF",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       padding: "7rem 2rem",
//       // This naturally scrolls over the sticky video above it
//     }}>
//       <div style={{
//         maxWidth: "680px", width: "100%",
//         opacity: vis ? 1 : 0,
//         transform: vis ? "translateY(0)" : "translateY(28px)",
//         transition: "opacity 0.85s ease, transform 0.85s ease",
//       }}>
//         <p style={{
//           fontFamily: "var(--ff-body)", fontSize: "0.7rem", fontWeight: 600,
//           letterSpacing: "0.18em", color: "#B45309",
//           textTransform: "uppercase", marginBottom: "1.5rem",
//         }}>
//           01 — Pengertian
//         </p>

//         <h2 style={{
//           fontFamily: "var(--ff-display)",
//           fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)",
//           fontWeight: 700, lineHeight: 1.1,
//           letterSpacing: "-0.025em", color: "#111111",
//           marginBottom: "2.5rem",
//         }}>
//           Apa Itu Dekrit Presiden?
//         </h2>

//         <div style={{ width: "36px", height: "2px", background: "#B45309", marginBottom: "2.5rem" }} />

//         <p style={{
//           fontFamily: "var(--ff-body)", fontSize: "1.1rem",
//           fontWeight: 400, lineHeight: 1.85, color: "#374151",
//           marginBottom: "3rem",
//         }}>
//           Dekrit Presiden 5 Juli 1959 adalah keputusan Presiden Soekarno yang
//           dikeluarkan untuk mengatasi kondisi ketatanegaraan yang dianggap
//           membahayakan persatuan dan keselamatan negara dengan membubarkan
//           Konstituante dan memberlakukan kembali UUD 1945.
//         </p>

//         {/* Highlight box */}
//         <div style={{
//           padding: "1.5rem 2rem",
//           background: "#FFFBEB",
//           border: "1px solid #FDE68A",
//           borderLeft: "4px solid #B45309",
//           borderRadius: "0 12px 12px 0",
//         }}>
//           <p style={{
//             fontFamily: "var(--ff-body)", fontSize: "0.85rem",
//             lineHeight: 1.7, color: "#92400E", fontStyle: "italic",
//           }}>
//             Keputusan ini menandai berakhirnya era Demokrasi Liberal dan
//             dimulainya era Demokrasi Terpimpin di Indonesia.
//           </p>
//         </div>

//         <p style={{
//           fontFamily: "var(--ff-body)", fontSize: "0.72rem",
//           color: "#9CA3AF", marginTop: "2rem", fontStyle: "italic",
//         }}>
//           Sumber: Sjahdeini (2021)
//         </p>
//       </div>
//     </section>
//   );
// }

"use client";
import React, { useEffect, useRef, useState } from "react";

export default function Pengertian() {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVis(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        zIndex: 2,
        minHeight: "100vh", 
        background: "#FFFFFF",
        display: "flex",
        alignItems: "center", 
        justifyContent: "center",
        padding: "4rem 2rem", 
        scrollSnapAlign: "start", 
      }}
    >
      <div
        style={{
          maxWidth: "680px",
          width: "100%",
          opacity: vis ? 1 : 0,
          transform: vis ? "translateY(0)" : "translateY(28px)",
          transition: "opacity 0.85s ease, transform 0.85s ease",
        }}
      >
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
          01 — Pengertian
        </p>

        <h2
          style={{
            fontFamily: "var(--ff-display)",
            fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
            color: "#111111",
            marginBottom: "2.5rem",
          }}
        >
          Apa Itu Dekrit Presiden?
        </h2>

        <div
          style={{
            width: "36px",
            height: "2px",
            background: "#B45309",
            marginBottom: "2.5rem",
          }}
        />

        <p
          style={{
            fontFamily: "var(--ff-body)",
            fontSize: "1.1rem",
            fontWeight: 400,
            lineHeight: 1.85,
            color: "#374151",
            marginBottom: "3rem",
          }}
        >
          Dekrit Presiden 5 Juli 1959 adalah keputusan Presiden Soekarno yang
          dikeluarkan untuk mengatasi kondisi ketatanegaraan yang dianggap
          membahayakan persatuan dan keselamatan negara dengan membubarkan
          Konstituante dan memberlakukan kembali UUD 1945.
        </p>

        {/* Highlight box */}
        <div
          style={{
            padding: "1.5rem 2rem",
            background: "#FFFBEB",
            border: "1px solid #FDE68A",
            borderLeft: "4px solid #B45309",
            borderRadius: "0 12px 12px 0",
          }}
        >
          <p
            style={{
              fontFamily: "var(--ff-body)",
              fontSize: "0.85rem",
              lineHeight: 1.7,
              color: "#92400E",
              fontStyle: "italic",
            }}
          >
            Keputusan ini menandai berakhirnya era Demokrasi Liberal dan
            dimulainya era Demokrasi Terpimpin di Indonesia.
          </p>
        </div>

        <p
          style={{
            fontFamily: "var(--ff-body)",
            fontSize: "0.72rem",
            color: "#9CA3AF",
            marginTop: "2rem",
            fontStyle: "italic",
          }}
        >
          Sumber: Sjahdeini (2021)
        </p>
      </div>
    </section>
  );
}