import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import video_livin_wishlist from "../assets/videos/livin_wishlist.mp4";
import video_livin from "../assets/videos/livin.mp4";

export default function Portafolio() {
  return (
    <>
      <Navbar/>
      <div
        className="
        relative
        flex
        items-center
        justify-center
        min-h-[45vh]
        section-wrapper-auto
        bg-[url('/img/dark-blue-gradient.png')]
        bg-cover
        bg-center
        mt-[-90px]"
      >
        <div className="flex flex-col items-center text-center text-white max-w-4xl px-6 gap-10">

          <h1 className="text-white text-[50px] leading-[50px] lg:text-[80px] lg:leading-[80px] tracking-[0.26px]">
            Nuestro <br/>
            <span className="relative inline-block">
              <span className="tracking-[0.26px] bg-gradient-to-r from-[#9700FF] to-[#00B79F] bg-clip-text text-transparent">
                Trabajo
              </span>
            </span>
          </h1>

        </div>
      </div>

      {/* Contenido principal */}
      <div className="section-wrapper bg-[linear-gradient(296deg,rgba(39,22,51,1)_18%,rgba(28,57,142,0.2)_100%),linear-gradient(0deg,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_100%)]">
        <div className="section-container-large mx-auto flex flex-col">

          {/* Livin Section */}
          <div className="grid grid-cols-1 md:grid-cols-[40%_56%] gap-8 items-center lg:items-start pb-8">

            {/* Left column: Livin + image */}
            <div className="flex flex-col gap-6 mt-[66px] md:mt-[90px] lg:mt-[105px] items-center lg:items-start">
              <img
                className="w-full max-w-[560px] aspect-[1.84] object-cover"
                src="../../img/livin_fondo.png"
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
                src="../../img/phone_mockup_livin.png"
                alt="Livin campaign"
              />
            </div>

          </div>

          {/* Niu + Livin Section */}
          <div className="grid grid-cols-1 md:grid-cols-[40%_56%] gap-10 items-end">

            {/* Left column: Niu */}
            <div className="flex flex-col justify-end gap-6 items-center lg:items-start">
              <img
                className="w-full max-w-[560px] aspect-[1.84] object-cover"
                src="../../img/niu_fondo.png"
                alt="Niu campaign"
              />
              <p className="text-white w-full text-[16px] lg:text-[20px]">
                <span className="font-black block">Niu</span>
                Conceptualización y desarrollo de la identidad de Niu, broker financiero.
              </p>
            </div>

            {/* Right column: Livin video */}
            <div className="flex flex-col justify-end gap-6 relative -mt-0 md:-mt-32 lg:-mt-0
            ">
              <video
                className="w-full aspect-[1.84] object-cover relative -mt-0 lg:-mt-0 md:-mt-12" 
                src={video_livin}
                autoPlay
                muted
                loop
                playsInline
              />
              <p className="text-white w-full text-[16px] lg:text-[20px]">
                <span className="font-black block">Livin</span>
                Concepto creativo y producción con IA generativa para la campaña de Livin.
              </p>
            </div>
          </div>

          {/* Opteam Section */}
          <div className="relative mt-[70px] w-full flex justify-center md:justify-start">

            {/* Phone mockup Opteam */}
            <div className="relative z-30 w-full md:w-[60%] flex justify-center">
              <img
                className="w-full object-cover"
                src="../../img/phone_mockup_opteam.png"
                alt="Opteam campaign"
              />
            </div>

            {/* Opteam image (behind phone) */}
            <div className="absolute hidden md:block top-0 md:right-auto w-[60%] items-end md:left-[40%] z-10">
              <img
                className="w-full object-cover"
                src="../../img/opteam_image.jpg"
                alt="Opteam campaign"
              />
            </div>

          </div>

          {/* Livin + Opteam Section */}
          <div className="grid grid-cols-1 md:grid-cols-[60%_36%] gap-10 mt-8 items-end">
            
            {/* Left column: Livin website video */}
            <div className="flex flex-col justify-end gap-6 relative -mt-0 md:-mt-35 lg:-mt-0">
              <video
                className="w-full aspect-[1.84] object-cover relative -mt-0 md:-mt-16 lg:-mt-0"
                src={video_livin_wishlist}
                autoPlay
                muted
                loop
                playsInline
              />
              <p className="text-white w-full text-[16px] lg:text-[20px]">
                <span className="font-black block">Livin</span>
                Diseño UX/UI para una aplicación web de gestión de referidos.
              </p>
            </div>

            {/* Right column: Opteam*/}
            <div className="flex flex-col justify-end gap-6 items-center lg:items-start">
              <img
                className="w-full max-w-[560px] aspect-[1.84] object-cover"
                src="../../img/opteam_image_square.jpg"
                alt="Niu campaign"
              />
              <p className="text-white w-full text-[16px] lg:text-[20px]">
                <span className="font-black block">Opteam</span>
                Rediseño de logo e identidad de marca para Opteam.
              </p>
            </div>
            
          </div>

          {/* Botón contáctanos*/}
          <div className="items-center mx-auto mt-20 mb-8 text-white">
            <button className="
            w-auto
            px-6 py-3 
            rounded-[20px] 
            bg-[linear-gradient(90deg,rgba(151,0,255,1)_37%,rgba(0,183,159,1)_100%)]">
            Agenda una sesión gratuita
          </button>

          </div>
          
          
        </div>
      </div>
      <Footer/>
    </>);
}