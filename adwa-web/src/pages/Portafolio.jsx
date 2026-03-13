import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import video_livin from "../assets/videos/livin.mp4";

export default function Portafolio() {
  return (
    <>
      <Navbar/>
      <div className="
        relative 
        section-wrapper-auto
        pb-30
        items-center 
        justify-center 
        bg-[url('/img/dark-blue-gradient.png')] 
        bg-cover 
        bg-center
        mt-[-90px]"
      >
        <div className="flex flex-col mt-[100px] items-center text-center text-white max-w-4xl px-6 pt-10 gap-10">

          <h1 className="text-white text-[50px] leading-[50px] lg:text-[80px] lg:leading-[80px] tracking-[0.26px] text-left mb-[100px] lg:mb-0">
                Nuestro <br/>
                <span className="relative inline-block">
                    <span
                        className="
                        tracking-[0.26px]
                        bg-gradient-to-r
                        from-[#9700FF]
                        to-[#00B79F]
                        bg-clip-text
                        text-transparent"
                    >
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
          <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-8 items-center lg:items-start">

            {/* Left column: Livin + image */}
            <div className="flex flex-col gap-6 mt-[70px] md:mt-[90px] lg:mt-[120px] items-center lg:items-start">
              <img
                className="w-full max-w-[560px] aspect-[1.84] object-cover"
                src="../../img/livin_fondo.png"
                alt="Livin campaign"
              />
              <p className="text-white text-lg md:text-xl max-w-[520px]">
                <span className="font-black block">Livin</span>
                messaging and full design of the campaign which appeared across
                New York this autumn.
              </p>
            </div>

            {/* Right column: Phone mockup */}
            <div className="relative flex justify-center items-start w-full overflow-visible -mb-32 z-20">
              <img
                className="w-full max-w-none object-cover"
                src="../../img/phone_mockup_livin.png"
                alt="Livin campaign"
              />
            </div>

          </div>

          {/* Niu + Livin Section */}
          <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-10 items-end">

            {/* Left column: Niu */}
            <div className="flex flex-col justify-end gap-6 items-center lg:items-start">
              <img
                className="w-full max-w-[560px] aspect-[1.84] object-cover"
                src="../../img/niu_fondo.png"
                alt="Niu campaign"
              />
              <p className="text-white text-lg md:text-xl max-w-[520px]">
                <span className="font-black block">Niu</span>
                messaging and full design of the campaign which appeared across
                New York this autumn.
              </p>
            </div>

            {/* Right column: Lvin video */}
            <div className="flex flex-col justify-end gap-6 relative -mt-32 md:-mt-0">
              <video
                className="w-full aspect-[1.84] object-cover relative -top-16 md:-top-0"
                src={video_livin}
                autoPlay
                muted
                loop
                playsInline
              />
              <p className="text-white text-lg md:text-xl max-w-[520px]">
                <span className="font-black block">Opteam</span>
                messaging and full design of the campaign which appeared across
                New York this autumn.
              </p>
            </div>
          </div>

          {/* Opteam Section */}
          <div className="relative mt-[70px] w-full flex justify-center md:justify-start">

            {/* Phone mockup (on top) */}
            <div className="relative z-30 w-full md:w-[60%] flex justify-center">
              <img
                className="w-full object-cover"
                src="../../img/phone_mockup_opteam.png"
                alt="Opteam campaign"
              />
            </div>

            {/* Opteam image (behind phone) */}
            <div className="absolute top-0 md:right-auto w-[65%] items-end md:left-[35%] z-10">
              <img
                className="w-full object-cover"
                src="../../img/opteam_image.jpg"
                alt="Opteam campaign"
              />
            </div>

          </div>
        </div>
      </div>
      <Footer/>
    </>);
}