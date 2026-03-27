import React from "react";
import Navbar2 from "../components/Navbar2";
import Footer2 from "../components/Footer2";
import HeroHeader from "../components/ui/HeroHeader";

import gradient from "../assets/img/blue-purple-cyan-gradient.jpg";

import phone_mockup_opteam from "../assets/img/phone_mockup_opteam.png";
import opteam_image from "../assets/img/opteam_image.jpg";
import livin_fondo from "../assets/img/livin_fondo.jpg";
import livin_phone_mockup from "../assets/img/phone_mockup_livin.png";

import opteam_left from "../assets/img/opteam_left.png";
import opteam_right from "../assets/img/opteam_right.png";
import opteam_middle from "../assets/img/opteam_middle.png";

import emporium_phone_mockup from "../assets/img/emporium_phone_mockup.png";
import emporium_images from "../assets/img/emporium_images.png";

import logo_niu from "../assets/img/logo_niu.jpg";
import ropa_niu from "../assets/img/clothing_niu.jpg";
import niu_left from "../assets/img/niu_left.jpg";
import niu_right from "../assets/img/niu_right.jpg";
import niu_middle from "../assets/img/niu_middle.jpg";

import ciot_fondo from "../assets/img/ciot_fondo.jpg";
import ciot_phone_mockup from "../assets/img/ciot_phone_mockup.png";

export default function DisenoGrafico() {
  return (
    <>
      <Navbar2/>
      <HeroHeader 
        title="Diseño" 
        highlightedText="Gráfico"
        containerHeight="min-h-[80dvh]" 
        backgroundImage={gradient}
        indent="md:pl-32 lg:pl-56"
      />
       <div className="section-wrapper bg-[linear-gradient(296deg,rgba(39,22,51,1)_18%,rgba(28,57,142,0.2)_100%),linear-gradient(0deg,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_100%)]">
        <div className="section-container-large mx-auto flex flex-col">
        
          {/* Contenido principal */}

          {/* Sección Opteam*/}
          <div className="relative -mt-[40dvh] w-full flex justify-center md:justify-start">

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

          {/* Opteam merch */}
          <div className="flex flex-col gap-[18px] pb-6 px-10 md:px-0" >
            <div className="grid grid-cols-1 md:grid-cols-3 -mt-[10dvh] gap-[18px]">

              {/* Left column */}
              <div className="flex flex-col items-center justify-center bg-[#8307DC] p-[34px] h-full">
                <img
                  className="w-full max-w-[560px] aspect-[1] object-contain"
                  src={opteam_left}
                  alt="Livin campaign"
                  loading="lazy"
                />
              </div>

              {/* Middle column */}
              <div className="flex flex-col items-center justify-center bg-[#8307DC] p-[34px] h-full">
                <img
                  className="w-full max-w-[560px] aspect-[1] object-contain"
                  src={opteam_middle}
                  alt="Livin campaign"
                  loading="lazy"
                />
              </div>

              {/* Right column */}
              <div className="flex flex-col items-center justify-center bg-[#8307DC] p-[34px] h-full">
                <img
                  className="w-full max-w-[560px] aspect-[1] object-contain"
                  src={opteam_right}
                  alt="Livin campaign"
                  loading="lazy"
                />
              </div>

            </div>

            {/* Full-width text below */}
            <div className="w-full text-left mt-[29px]">
              <p className="text-white w-full text-[16px] lg:text-[20px]">
                <span className="font-black block">Opteam</span>
                Rediseño de la identidad visual y creación de lineamientos para asegurar coherencia en su uso.
              </p>
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
                loading="lazy"
              />
              <p className="text-white w-full text-[16px] lg:text-[20px]">
                <span className="font-black block">Livin</span>
                Desarrollo de identidad de marca y gestión de contenido para redes sociales, enfocado en coherencia visual, crecimiento y conexión con la audiencia.
              </p>
            </div>

            {/* Right column: Phone mockup */}
            <div className="relative flex justify-center items-start w-full overflow-visible mb-8 md:mb-0 lg:-mb-32 z-20">
              <img
                className="w-full max-w-none object-cover"
                src={livin_phone_mockup}
                alt="Livin campaign"
                loading="lazy"
              />
            </div>
          </div>

          {/* Emporium Section */}
          <div className="grid grid-cols-1 md:grid-cols-[56%_40%] gap-8 items-center lg:items-start pb-8">

            {/* Right column: Phone mockup */}
            <div className="relative flex justify-center items-start w-full overflow-visible mb-8 md:mb-0 lg:-mb-32 z-20">
              <img
                className="w-full max-w-none object-cover"
                src={emporium_phone_mockup}
                alt="Telefono con imagenes promocionales de Emporium"
                loading="lazy"
              />
            </div>

            {/* Left column: Livin + image */}
            <div className="flex flex-col gap-6 mt-[66px] md:mt-[70px] lg:mt-[80px] items-center lg:items-start">
              <img
                className="w-full max-w-[560px] aspect-[1.64] object-cover"
                src={emporium_images}
                alt="Emporium campaign"
                loading="lazy"
              />
              <p className="text-white w-full text-[16px] lg:text-[20px]">
                <span className="font-black block"> Emporium</span>
               
                Optimización de la imagen de marca y su presencia en redes para lograr mayor coherencia, impacto y conexión con la audiencia.
              </p>
            </div>

          </div>

          {/* Niu Section */}
          <div className="flex flex-col gap-8 ">
            <div className="grid grid-cols-1 md:grid-cols-[55%_41%] gap-6 lg:mt-[106px] items-stretch">

              {/* Left column: Niu logo */}
              <div className="relative flex w-full overflow-visible">
                <img className="w-full h-full object-cover" src={logo_niu} alt="Niu brand" loading="lazy" />
              </div>

              {/* Right column: Niu clothing */}
              <div className="relative flex w-full overflow-visible">
                <img className="w-full h-full object-cover" src={ropa_niu} alt="Niu clothing" loading="lazy"/>
              </div>
            </div>

            {/* Tres columnas con productos Niu*/}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

              {/* Left column */}
              <div className="flex flex-col items-center justify-center h-full">
                <img
                  className="w-full max-w-[560px] aspect-[1] object-cover"
                  src={niu_left}
                  alt="Livin campaign"
                  loading="lazy"
                />
              </div>

              {/* Middle column */}
              <div className="flex flex-col items-center justify-center h-full">
                <img
                  className="w-full max-w-[560px] aspect-[1] object-cover"
                  src={niu_middle}
                  alt="Livin campaign"
                  loading="lazy"
                />
              </div>

              {/* Right column */}
              <div className="flex flex-col items-center justify-center h-full">
                <img
                  className="w-full max-w-[560px] aspect-[1] object-cover"
                  src={niu_right}
                  alt="Livin campaign"
                  loading="lazy"
                />
              </div>

            </div>
            <div className="flex md:w-full justify-center md:justify-start">
              <p className="text-white w-full text-[16px] lg:text-[20px] max-w-[90%]">
                <span className="font-black block">Niu</span>
                Niu
                Desarrollo de identidad de marca y gestión de contenido para redes sociales, enfocado en coherencia visual, crecimiento y conexión con la audiencia.
              </p>

            </div>
            

          </div>
          
          {/* CIOT Section */}
          <div className="grid grid-cols-1 md:grid-cols-[40%_56%] mt-[56px] gap-8 items-center lg:items-start pb-8 items-stretch">

            {/* Right column: Phone mockup */}
            <div className="relative flex justify-center items-start w-full overflow-visible mb-8 md:mb-0 lg:-mb-32 z-20">
              <img
                className="w-full max-w-none object-cover"
                src={ciot_phone_mockup}
                alt="Telefono con imagenes promocionales de Emporium"
                loading="lazy"
              />
            </div>

            {/* Left column: CIOT banner */}
            <div className="flex flex-col md:mt-[30px] lg:mt-[50px] items-center lg:items-start">
              <img
                className="w-full aspect-[1.64] object-contain"
                src={ciot_fondo}
                alt="Emporium campaign"
                loading="lazy"
              />
              <p className="text-white w-full text-[16px] lg:text-[20px]">
                <span className="font-black block">Ciot</span>
                  Conceptualización y ejecución de una campaña creativa orientada a comunicar un mensaje clave y generar impacto en la audiencia.
              </p>
            </div>

          </div>


        </div>

      </div>
      <Footer2/>
    </>
    );
}