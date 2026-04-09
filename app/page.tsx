"use client";

import { useState } from "react";

export default function Home() {
  const [start, setStart] = useState(false);
  const [rezultat, setRezultat] = useState("");

  const openConfigurator = () => {
    setStart(true);
  };

  const genereaza = (tip: string) => {
    if (tip === "fructe") setRezultat("🍓 Căpșuni • 🍉 Pepene • ❄️ Ice");
    if (tip === "dulce") setRezultat("🍇 Struguri • 🍯 Miere • 🍒 Cireșe");
    if (tip === "acru") setRezultat("🍋 Lămâie • 🍏 Măr verde • Kiwi");
    if (tip === "desert") setRezultat("🍫 Ciocolată • 🍦 Vanilie • Caramel");
    if (tip === "fresh") setRezultat("❄️ Ice • Mentă • Lime");
    if (tip === "exotic") setRezultat("🥭 Mango • Fructul pasiunii • Ananas");
  };

  const optiuni = ["fructe", "dulce", "acru", "desert", "fresh", "exotic"];

  return (
    <main className="luxury-stage">
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />
      <div className="ambient ambient-bottom" />

      <div className="hookah-wrap" aria-hidden="true">
        <svg
          viewBox="0 0 500 900"
          className="hookah-svg"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="goldMetal" x1="0" x2="1">
              <stop offset="0%" stopColor="#7a5a1d" />
              <stop offset="50%" stopColor="#f0cf7a" />
              <stop offset="100%" stopColor="#8a6320" />
            </linearGradient>
            <linearGradient id="glassGlow" x1="0" x2="1">
              <stop offset="0%" stopColor="rgba(115,224,255,0.18)" />
              <stop offset="50%" stopColor="rgba(255,200,120,0.28)" />
              <stop offset="100%" stopColor="rgba(160,90,255,0.16)" />
            </linearGradient>
            <filter id="softGlow">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <ellipse cx="250" cy="780" rx="120" ry="34" fill="rgba(255,215,140,0.16)" />
          <path
            d="M170 640 C185 760, 315 760, 330 640 L300 470 L200 470 Z"
            fill="url(#glassGlow)"
            stroke="rgba(255,240,210,0.35)"
            strokeWidth="4"
            filter="url(#softGlow)"
          />
          <path
            d="M215 470 L285 470 L290 360 L210 360 Z"
            fill="url(#goldMetal)"
            filter="url(#softGlow)"
          />
          <rect x="238" y="170" width="24" height="190" rx="10" fill="url(#goldMetal)" />
          <rect x="210" y="135" width="80" height="48" rx="18" fill="#2f2a23" stroke="#f0cf7a" strokeWidth="4" />
          <rect x="196" y="118" width="108" height="20" rx="10" fill="#0f0f10" stroke="#7a5a1d" strokeWidth="3" />
          <path
            d="M262 300 C390 325, 420 410, 425 505"
            fill="none"
            stroke="url(#goldMetal)"
            strokeWidth="14"
            strokeLinecap="round"
            opacity="0.92"
          />
          <circle cx="426" cy="513" r="20" fill="#0f0f10" stroke="#c89a3d" strokeWidth="6" />
        </svg>
      </div>

      <section className="hero-content">
        {!start ? (
          <>
            <h1 className="signature-title">Configurator Narghilea</h1>

            <button
              type="button"
              className="start-button"
              onClick={openConfigurator}
              onTouchStart={openConfigurator}
            >
              Începe configurarea
            </button>
          </>
        ) : (
          <div className="flow-wrap">
            <h2 className="flow-title">Alege direcția gustului</h2>

            <div className="flavor-cloud">
              {optiuni.map((tip) => (
                <button
                  key={tip}
                  type="button"
                  className="flavor-pill"
                  onClick={() => genereaza(tip)}
                  onTouchStart={() => genereaza(tip)}
                >
                  {tip}
                </button>
              ))}
            </div>

            {rezultat && (
              <div className="result-text">
                Recomandare: <span>{rezultat}</span>
              </div>
            )}
          </div>
        )}
      </section>
    </main>
  );
}