import React from 'react';
import { useScrollEffect } from '../hooks/useScrollEffect';
import dark_blue_gradient from "../assets/img/dark-blue-gradient.jpg";

export default function Hero() {
  const { opacity, yOffset } = useScrollEffect(0.8, 120);
  const VIDEO_URL = "https://res.cloudinary.com/dtoelcbzw/video/upload/v1774392725/VideoBanner_s9atbj.mp4";

  return (
    <div className="relative h-[200vh] mt-[-90px] bg-black">
      {/* Container stays locked to top while scrolling the 200vh area */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* VIDEO LAYER */}
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0">
          <source src={VIDEO_URL} type="video/mp4" />
        </video>

        {/* GRADIENT OVERLAY (Controlled by Hook) */}
        <div 
          className="absolute inset-0 z-10 bg-cover bg-center" 
          style={{ 
            backgroundImage: `url(${dark_blue_gradient})`,
            opacity: opacity 
          }}
        />

        {/* CONTENT (Controlled by Hook) */}
        <div 
          className="relative z-20 w-full h-full flex flex-col items-center justify-center text-center text-white max-w-4xl mx-auto px-6 gap-10"
          style={{ 
            opacity: opacity > 0.1 ? opacity * 1.2 : 0, // Fades in after initial scroll
            transform: `translateY(${yOffset}px)` 
          }}
        >
          <span className="text-sm font-medium tracking-wide">
            CREATIVIDAD + INTELIGENCIA ARTIFICIAL
          </span>

          <h1 className="text-[45px] leading-[55px] lg:text-[70px] lg:leading-[75px] font-normal">
            TU ERES EL <br />
            <span className="font-bold">PROTAGONISTA</span> <br />
            DE TU MARCA
          </h1>

          <p className="max-w-2xl text-[16px] lg:text-[20px]">
            Diseñamos tu estrategia de liderazgo digital, te entrenamos<br className="hidden lg:block"/> en
            comunicación auténtica y generamos un impacto<br className="hidden lg:block"/> medible en tu industria.
          </p>

          <button className="px-6 py-3 rounded-[20px] bg-[linear-gradient(90deg,rgba(151,0,255,1)_37%,rgba(0,183,159,1)_100%)]">
            Agenda una sesión gratuita
          </button>
        </div>
      </div>

      {/* This invisible box creates the scrollable space */}
      <div className="h-screen pointer-events-none" />
    </div>
  );
}