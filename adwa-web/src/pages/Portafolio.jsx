import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
      <div className="section-wrapper bg-[linear-gradient(296deg,rgba(39,22,51,1)_18%,rgba(28,57,142,0.2)_100%),linear-gradient(0deg,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_100%)]">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col gap-32 ">

          {/* LIVIN SECTION */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="flex flex-col gap-6">
              <img
                className="w-full max-w-[560px] aspect-[1.84] object-cover"
                src="../../img/livin_fondo.png"
                alt=""
              />
              <p className="text-white text-xl max-w-[520px]">
                <span className="font-black block">Livin</span>
                messaging and full design of the campaign which appeared across
                New York this autumn.
              </p>
            </div>

            <div className="flex justify-center items-center">
              {/* Imagen Livin izquierda */}
              <div className="hidden md:block relative z-10 -mr-24">
                <img
                  className="w-[320px] shadow-xl"
                  src="https://c.animaapp.com/0cn5eMNB/img/img-5561-1@2x.png"
                  alt="campaign"
                />
              </div>

              {/* Mockup */}
              <div className="relative z-20 transform scale-[1.35] mb-[80px]">
                <img
                  className="w-[320px] md:w-[360px]"
                  src="../../img/iphone_livin_mockup.png"
                  alt="iphone mockup"
                />
              </div>

              {/* Imagen Livin derecha */}
              <div className="hidden md:block relative z-10 -ml-24">
                <img
                  className="w-[320px] shadow-xl"
                  src="https://c.animaapp.com/0cn5eMNB/img/img-5561-1-1@2x.png"
                  alt="campaign"
                />
              </div>
            </div>

          </div>

          {/* SECOND SECTION */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-6">
              <img
                className="w-full max-w-[560px] aspect-[1.84] object-cover"
                src="../../img/livin_fondo.png"
                alt=""
              />
              <p className="text-white text-xl max-w-[520px]">
                <span className="font-black block">Opteam</span>
                messaging and full design of the campaign which appeared across
                New York this autumn.
              </p>
            </div>
            
            <div className="flex flex-col gap-6">
              <img
                className="w-full max-w-[560px] aspect-[1.84] object-cover"
                src="../../img/livin_fondo.png"
                alt=""
              />
              <p className="text-white text-xl max-w-[520px]">
                <span className="font-black block">Opteam</span>
                messaging and full design of the campaign which appeared across
                New York this autumn.
              </p>
            </div>
            
          </div>

          </div>

          {/* SECOND IMAGE ROW */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">

            <img
              className="w-full aspect-[0.8]"
              src="https://c.animaapp.com/0cn5eMNB/img/img-5562-1@2x.png"
              alt=""
            />

            <img
              className="w-full aspect-[0.8]"
              src="https://c.animaapp.com/0cn5eMNB/img/img-5563-1@2x.png"
              alt=""
            />

            <img
              className="w-full aspect-[0.8]"
              src="https://c.animaapp.com/0cn5eMNB/img/img-5564-1@2x.png"
              alt=""
            />

          </div>

        </div>
      <Footer/>
    </>);
}