import React from "react";
import Navbar2 from "../components/Navbar2";
import Footer2 from "../components/Footer2";
import HeroHeader from "../components/ui/HeroHeader";

import gradient from "../assets/img/dark-blue-gradient.jpg";

import placeholder_nosotros from "../assets/img/placeholder_nosotros.webp";

export default function Nosotros() {
  return (
    <>
      <Navbar2/>
      <HeroHeader
        title="Adwa"
        highlightedText="Land"
        backgroundImage={gradient}
        containerHeight="min-h-[65dvh] lg:min-h-[80dvh]"
        topSpacing="pt-[100px]"
        bottomSpacing="pb-[100px]"
        paragraph={
          <>
            Somos un aquelarre de mentes creativas convocadas por una misma magia: transformar ideas en experiencias que perduran. Cada integrante de Adwa lleva consigo una esencia ancestral que define su poder
            Juntos formamos el cónclave de Adwa: un lugar donde la creatividad no es una herramienta, sino un ritual.
            <br /><br />
            Bienvenido a la aldea. Aquí todo tiene poder.
          </>
        }
      />

      <Footer2/>
    </>
    );
}