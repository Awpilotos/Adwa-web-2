import React from 'react';
import { useScrollEffect } from '../hooks/useScrollEffect';
import dark_blue_gradient from "../assets/img/dark-blue-gradient.jpg";

export default function Hero() {
  const { opacity, yOffset } = useScrollEffect(0.8, 120);
  const VIDEO_URL = "https://res.cloudinary.com/a2t82uyl/video/upload/f_auto,q_auto,vc_auto/v1783615576/Hero_VideoBanner_adwa_plhnx8.mp4";

  return (
    <div className="relative h-[200vh] mt-[-90px] bg-black">
      {/* Contenedor bloqueado hasta que se haga scroll en el area 200vh */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* Fondo de video */}
        <video autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          poster="https://res.cloudinary.com/a2t82uyl/video/upload/so_0,f_auto,q_auto/v1783615576/Hero_VideoBanner_adwa_plhnx8.jpg">
          <source src={VIDEO_URL} type="video/mp4"/>
        </video>

        {/* Capa de fondo controlada por scroll hook */}
        <div 
          className="absolute inset-0 z-10 bg-cover bg-center" 
          style={{ 
            backgroundImage: `url(${dark_blue_gradient})`,
            opacity: opacity 
          }}
        />

        {/* Contenido principal controlado por scroll hook */}
        <div 
          className="relative z-20 w-full h-full flex flex-col items-center justify-center text-center text-white max-w-4xl mx-auto px-6 gap-10"
          style={{ 
            opacity: opacity > 0.1 ? opacity * 1.2 : 0, // Desaparece luego de scroll incial
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

          <a
            href="https://api.whatsapp.com/send/?phone=593998115348&text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20sesi%C3%B3n%20gratuita"
            className="inline-block cursor-pointer px-6 py-3 rounded-[20px] bg-[linear-gradient(90deg,rgba(151,0,255,1)_37%,rgba(0,183,159,1)_100%)]"
            target="_blank" rel="noopener noreferrer"
          >
            Agenda una sesión gratuita
          </a>
        </div>
      </div>

      {/* Contenedor oculto 200vh */}
      <div className="h-screen pointer-events-none" />
    </div>
  );
}