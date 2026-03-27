import React from "react";
import Navbar2 from "../components/Navbar2";
import Footer2 from "../components/Footer2";
import HeroHeader from "../components/ui/HeroHeader";

import gradient from "../assets/img/blue-purple-cyan-gradient.jpg";
import livin_mockup from "../assets/img/livin_mockup.png";

import emporium_mockup from "../assets/img/emporium_mockup.png";

export default function Uxui() {
    const livinWebUrl="https://res.cloudinary.com/dtoelcbzw/video/upload/q_auto,f_auto/v1774597528/livin_web__qryp9t.mp4";
    const livinPosterUrl="https://res.cloudinary.com/dtoelcbzw/video/upload/so_0,q_auto,f_auto/v1774597528/livin_web__qryp9t.jpg";
    
    return (
        <>
        <Navbar2/>
        <HeroHeader 
            title="Diseño" 
            highlightedText="UX UI"
            backgroundImage={gradient}
            containerHeight="min-h-[80dvh]"
            indent="md:pl-32 lg:pl-56"
        />
  
        {/* Projects Section */}
        <div className="section-wrapper -mt-[30dvh] relative z-10 ">
            <div className="section-container-large mx-auto flex flex-col gap-10">

                {/* Livin section*/}
                <div className="flex flex-col items-center lg:flex-row gap-12 lg:gap-[46px]">
                    <img 
                        src={livin_mockup} 
                        alt="Livin App" 
                        className="w-full h-full lg:w-1/2 object-cover"
                    />

                    <div className="w-full lg:w-1/2">
                        <video 
                            className="w-full h-full object-cover"
                            autoPlay 
                            muted 
                            loop 
                            playsInline
                            preload="auto"
                            poster={livinPosterUrl}
                        >
                            <source src={livinWebUrl} type="video/mp4" />
                        </video>
                    </div>
                </div>
                {/* Text */}
                <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-white font-semibold">Emporium</h3>
                    <p className="text-white/70 mt-2">
                        Diseño y Desarrollo Web para Emporium
                    </p>
                </div>

                {/* Emporium section*/}
                <div className="flex flex-col items-center lg:flex-row">
                    <img 
                        src={emporium_mockup} 
                        alt="Livin App" 
                        className="w-full h-full lg:w-1/2 object-cover"
                    />

                    <div className="w-full lg:w-1/2 z-0">
                        <video 
                            className="w-full h-full object-cover"
                            autoPlay 
                            muted 
                            loop 
                            playsInline
                            preload="auto"
                            poster={livinPosterUrl}
                        >
                            <source src={livinWebUrl} type="video/mp4" />
                        </video>
                    </div>
                </div>
                {/* Text */}
                <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-white font-semibold">Emporium</h3>
                    <p className="text-white/70 mt-2">
                        Diseño y Desarrollo Web para Emporium
                    </p>
                </div>
                

            </div>
        </div>


        <Footer2/>
        </>
    );
}