import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroHeader from "../components/ui/HeroHeader";

import gradient from "../assets/img/blue-purple-cyan-gradient.jpg";
import phone_mockup_opteam from "../assets/img/phone_mockup_opteam.png";
import opteam_image from "../assets/img/opteam_image.jpg";
import livin_fondo from "../assets/img/livin_fondo.jpg";
import livin_phone_mockup from "../assets/img/phone_mockup_livin.png";

export default function DisenoGrafico() {
  return (
    <>
      <Navbar/>
      <HeroHeader 
        title="Diseño" 
        highlightedText="Gráfico" 
        backgroundImage={gradient}
        indent="md:pl-32 lg:pl-56"
      />
       <div className="section-wrapper bg-[linear-gradient(296deg,rgba(39,22,51,1)_18%,rgba(28,57,142,0.2)_100%),linear-gradient(0deg,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_100%)]">
        <div className="section-container-large mx-auto flex flex-col">
        
          {/* Contenido principal */}

          {/* Sección Opteam*/}
          <div className="relative mt-[-70px] w-full flex justify-center md:justify-start">

            {/* Phone mockup Opteam */}
            <div className="relative z-30 w-full md:w-[60%] flex justify-center">
              <img
                className="w-full object-cover"
                src={phone_mockup_opteam}
                alt="Opteam campaign"
                loading="lazy"
              />
            </div>

            {/* Opteam image (behind phone) */}
            <div className="absolute hidden md:block top-17 md:right-auto w-[60%] items-end md:left-[40%] z-10">
              <img
                className="w-full object-cover"
                src={opteam_image}
                alt="Opteam campaign"
                loading="lazy"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[31.5%_31.5%_31%] gap-8 items-center lg:items-start pb-8">

            {/* Left column*/}
            <div className="flex flex-col gap-6 mt-[66px] md:mt-[90px] lg:mt-[105px] items-center lg:items-start bg-[#8307DC]">
              <img
                className="w-full max-w-[560px] aspect-[1.84] object-cover"
                src={livin_fondo}
                alt="Livin campaign"
              />
            </div>

            {/* Middle column*/}
            <div className="flex flex-col gap-6 mt-[66px] md:mt-[90px] lg:mt-[105px] items-center lg:items-start">
              <img
                className="w-full max-w-[560px] aspect-[1.84] object-cover"
                src={livin_fondo}
                alt="Livin campaign"
              />
            </div>

            {/* Right column*/}
            <div className="flex flex-col gap-6 mt-[66px] md:mt-[90px] lg:mt-[105px] items-center lg:items-start">
              <img
                className="w-full max-w-[560px] aspect-[1.84] object-cover"
                src={livin_fondo}
                alt="Livin campaign"
              />
            </div>

          </div>


          {/* Livin Section */}
          <div className="grid grid-cols-1 md:grid-cols-[40%_56%] gap-8 items-center lg:items-start pb-8">

            {/* Left column: Livin + image */}
            <div className="flex flex-col gap-6 mt-[66px] md:mt-[90px] lg:mt-[105px] items-center lg:items-start">
              <img
                className="w-full max-w-[560px] aspect-[1.84] object-cover"
                src={livin_fondo}
                alt="Livin campaign"
              />
              <p className="text-white w-full text-[16px] lg:text-[20px]">
                <span className="font-black block">Livin</span>
                Diseño de identidad visual y campaña de comunicación para Livin, broker de seguros.
              </p>
            </div>

            {/* Right column: Phone mockup */}
            <div className="relative flex justify-center items-start w-full overflow-visible mb-8 md:mb-0 lg:-mb-32 z-20">
              <img
                className="w-full max-w-none object-cover"
                src={livin_phone_mockup}
                alt="Livin campaign"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
    );
}