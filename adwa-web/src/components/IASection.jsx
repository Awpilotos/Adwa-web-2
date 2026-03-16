import Card from "./ui/Card";

import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import distrax_fondo from "../assets/img/distrax_fondo.png";
import distrax from "../assets/img/distrax.png";
import nedro_fondo from "../assets/img/nedro_fondo.png";
import nedro from "../assets/img/nedro.png";
import prudi_fondo from "../assets/img/prudi_fondo.png";
import prudi from "../assets/img/prudi.png";
import negli_fondo from "../assets/img/negli_fondo.png";
import negli from "../assets/img/negli.png";

import { EffectCoverflow} from 'swiper/modules';

export default function IASection(){
    const personajes=[
        {
            mainImage: distrax_fondo,
            overlayImage: distrax,
            label:"Distrax",
            gradientColor:"from-[#FF6900] to-transparent",
            gradientTextl: "#FEFFFE",
            gradientTextr: "#FAB889",
        },
        {
            mainImage: nedro_fondo,
            overlayImage: nedro,
            label:"Nedro",
            gradientColor:"from-[#1C6F16] to-transparent",
            gradientTextl: "#0BDB5A",
            gradientTextr: "#0F9D8B",
        },
        {
            mainImage:prudi_fondo,
            overlayImage:prudi,
            label:"Prudi",
            gradientColor:"from-[#3987A9] to-transparent",
            gradientTextl: "#77B3CD",
            gradientTextr: "#B9DEED",
        },
        {
            mainImage:negli_fondo,
            overlayImage:negli,
            label:"Negli",
            gradientColor:"from-[#5B0099] to-transparent",
            gradientTextl: "#D69FFB",
            gradientTextr: "#9810FA",
        },
        {
            mainImage:distrax_fondo,
            overlayImage:distrax,
            label:"Distrax",
            gradientColor:"from-[#FF6900] to-transparent",
            gradientTextl: "#FEFFFE",
            gradientTextr: "#FAB889",
        },
        {
            mainImage:nedro_fondo,
            overlayImage:nedro,
            label:"Nedro",
            gradientColor:"from-[#1C6F16] to-transparent",
            gradientTextl: "#0BDB5A",
            gradientTextr: "#0F9D8B",
        },
        {
            mainImage:prudi_fondo,
            overlayImage:prudi,
            label:"Prudi",
            gradientColor:"from-[#3987A9] to-transparent",
            gradientTextl: "#77B3CD",
            gradientTextr: "#B9DEED",
        },
        {
            mainImage:negli_fondo,
            overlayImage:negli,
            label:"Negli",
            gradientColor:"from-[#5B0099] to-transparent",
            gradientTextl: "#933AD4",
            gradientTextr: "#F1DCFF",
        },
    ];

    return <div className="section-wrapper-auto mb-20 justify-center">
        <div className="section-container-large">
            <h2 className="text-white text-[55px] leading-[55px] lg:text-[80px] lg:leading-[80px] tracking-[0.26px] text-left">
            La <span className="text-[#9700FF]"> IA </span>sin creatividad humana,
                <span
                    className="
                    inline-block
                    tracking-[0.26px]
                    bg-gradient-to-r
                    from-[#9700FF]
                    to-[#00B79F]
                    bg-clip-text
                    text-transparent"
                >
                No conecta
                </span>
            </h2>

            <Swiper
            className="swiper-container"
            effect="coverflow"
            slideToClickedSlide={true}
            centeredSlides={true}
            slidesPerView={2}
            initialSlide={1}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 150,
              modifier: 2,
              slideShadows: false,
            }}
            breakpoints={{
                0: {
                slidesPerView: 1.4,
                spaceBetween: 10,
                },
                768: {
                slidesPerView: 1.5,
                spaceBetween: 80,
                },
                1024: {
                slidesPerView: 2,
                spaceBetween: 125,
                },
            }}
            modules={[EffectCoverflow]}
            style={{ width: "90%", maxWidth: "1400"}}
          > 
            {personajes.map((personaje, i) => (
              <SwiperSlide key={i}>
                    <Card
                        mainImage={personaje.mainImage}
                        overlayImage={personaje.overlayImage}
                        label={personaje.label}
                        gradientColor={personaje.gradientColor}
                        gradientTextl={personaje.gradientTextl}
                        gradientTextr={personaje.gradientTextr}
                    />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        


    </div>;
}