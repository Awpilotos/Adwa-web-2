import React from "react";

import letra_a from "../assets/img/letra_a.png";

export default function ConceptSection() {
    const videoUrl="https://res.cloudinary.com/dtoelcbzw/video/upload/q_auto,f_auto/v1774463821/adwito_halloween_vo5hgw.mp4";
    const posterUrl="https://res.cloudinary.com/dtoelcbzw/video/upload/so_0,f_auto,q_auto/v1774463821/adwito_halloween_vo5hgw.jpg";

    return (<>
        <div className="section-wrapper-auto justify-center">
            <div className="max-w-[1400px] grid grid-cols-1 md:grid-cols-[68%_32%] gap-0 items-stretch min-h-[1000px]">

                <div className="relative w-full flex items-stretch min-h-[600px] overflow-hidden">
    
                    {/* 1. THE GRADIENT COLUMN (Right 40%) */}
                    <div className="absolute inset-y-0 right-0 w-[40%] z-0 
                                    bg-[linear-gradient(180deg,rgba(152,16,250,0)_0%,rgba(90,9,148,0.45)_100%)]">
                        
                        {/* The 'A' Logo/Icon Aligned to the bottom of this column */}
                        <div className="absolute bottom-0 w-full flex justify-end pb-10 md:pb-[181px]">
                            <img 
                            src={letra_a}
                            alt="Icon" 
                            className="max-w-full h-auto object-contain opacity-40" 
                            />
                        </div>
                    </div>

                    {/* 2. THE CONTENT LAYER (Spans the full 100% width) */}
                    <div className="relative z-10 w-full flex flex-col mt-[104px] ml-10 mr-10 md:mr-0 mb-[180px]">
                        
                        <h2 className="text-white text-4xl md:text-[40px] lg:text-[55px] leading-tight w-[90%]">
                            “La tecnología es solo una herramienta. <br/>
                            En manos de personas creativas,&nbsp;
                            <span className="tracking-[0.26px] bg-gradient-to-r from-[#9700FF] to-[#00B79F] bg-clip-text text-transparent font-medium">
                                puede lograr cosas increíbles”
                            </span>
                        </h2>
                        
                        <p className="text-white mt-10 max-w-[550px] text-[16px] md:text-[20px] leading-relaxed opacity-80">
                            Nos aseguramos de que cada concepto creativo tenga un respaldo estratégico sólido, 
                            que se alinee con los valores de tu marca y genere resultados significativos.
                        </p>
                    </div>

                </div>

                {/* RIGHT CONTAINER (32%) - The Video */}
                <div className="flex items-center justify-center">
                    <div className="w-full h-full overflow-hidden">
                        <video 
                            className="w-full h-full object-cover md:pt-[75px] md:pb-[181px] md:pl-0 pr-10 pl-10"
                            autoPlay 
                            muted 
                            loop 
                            playsInline 
                            preload="auto"
                            poster={posterUrl}
                        >
                        <source src={videoUrl} type="video/mp4" />
                        </video>
                    </div>
                </div>

            </div>
        </div>
    </>);

}