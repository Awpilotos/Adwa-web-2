import Card from "./ui/Card";

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow} from 'swiper/modules';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

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




export default function IASection(){
    const navigate = useNavigate();
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
        <div className="section-container-large -mt-20 md:-mt-25">

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

            <div className="flex w-full justify-center mt-15">
                <button 
                    className="cursor-pointer px-6 py-3 rounded-[20px] text-white bg-[linear-gradient(90deg,rgba(151,0,255,1)_37%,rgba(0,183,159,1)_100%)]"
                    onClick={() => navigate("/portafolio")}>
                Ver todos los proyectos 
                </button>
            </div>
            
        </div>
        
        

    </div>;
}