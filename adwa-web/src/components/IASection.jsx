import Card from "./ui/Card";

import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

export default function IASection(){
    const personajes=[
        {
            mainImage:"../../img/distrax_fondo.png",
            overlayImage:"../../img/distrax.png",
            label:"Distrax",
            gradientColor:"from-[#FF6900] to-transparent",
        },
        {
            mainImage:"../../img/nedro_fondo.png",
            overlayImage:"../../img/nedro.png",
            label:"Nedro",
            gradientColor:"from-[#1C6F16] to-transparent",
        },
        {
            mainImage:"../../img/prudi_fondo.png",
            overlayImage:"../../img/prudi.png",
            label:"Prudi",
            gradientColor:"from-[#3987A9] to-transparent",
        },
        {
            mainImage:"../../img/negli_fondo.png",
            overlayImage:"../../img/negli.png",
            label:"Negli",
            gradientColor:"from-[#5B0099] to-transparent",
        },
        {
            mainImage:"../../img/distrax_fondo.png",
            overlayImage:"../../img/distrax.png",
            label:"Distrax",
            gradientColor:"from-[#FF6900] to-transparent",
        },
        {
            mainImage:"../../img/nedro_fondo.png",
            overlayImage:"../../img/nedro.png",
            label:"Nedro",
            gradientColor:"from-[#1C6F16] to-transparent",
        },
        {
            mainImage:"../../img/prudi_fondo.png",
            overlayImage:"../../img/prudi.png",
            label:"Prudi",
            gradientColor:"from-[#3987A9] to-transparent",
        },
        {
            mainImage:"../../img/negli_fondo.png",
            overlayImage:"../../img/negli.png",
            label:"Negli",
            gradientColor:"from-[#5B0099] to-transparent",
        },
    ];

    return <div className="mb-12">
        <Swiper
            effect="coverflow"
            slideToClickedSlide={true}
            centeredSlides={true}
            slidesPerView={2}
            initialSlide={1}
            spaceBetween={100}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 2.5,
              slideShadows: false,
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
                />
              </SwiperSlide>
            ))}
          </Swiper>


    </div>;
}