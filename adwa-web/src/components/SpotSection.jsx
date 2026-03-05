import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import video_1 from "../assets/videos/incoop.mp4";
import video_2 from '../assets/videos/building_freedom.mp4';
import video_3 from '../assets/videos/livin.mp4';

export default function SpotSection() {

  const [activeVideo, setActiveVideo] = useState(null);

  const videos = [
    { thumb: "", src: video_1 },
    { thumb: "", src: video_2 },
    { thumb: "", src: video_3 },
    { thumb: "", src: video_1 },
    { thumb: "", src: video_2 },
    { thumb: "", src: video_3 },
  ];
  
  return (
    <div className="section-wrapper-auto justify-center">
      <div className="section-container-large">
        
        <h2 className="text-white text-[80px] leading-[80px] tracking-[0.26px] text-left">
          Spots
        </h2>
        <h3
          className="
              inline-block
              text-[90px]
              leading-[90px]
              tracking-[0.26px]
              bg-gradient-to-r
              from-[#9700FF]
              to-[#00B79F]
              bg-clip-text
              text-transparent"
        >
            Publicitarios
        </h3>

        <div className='container'>

          <Swiper
            className='swiper-container'
            effect="coverflow"
            slideToClickedSlide={true}
            centeredSlides={true}
            slidesPerView={2}
            initialSlide={1}
            spaceBetween={0}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 150,
              modifier: 1.5,
              slideShadows: false,
            }}
            modules={[EffectCoverflow]}
            style={{ width: "100%", maxWidth: "1400px" }}
          >
            {videos.map((video, i) => (
              <SwiperSlide key={i}>
                <video
                  className="!w-[888px] !h-[500px] object-cover"
                  src={video.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </SwiperSlide>
            ))}
          </Swiper>
          
        </div>
      </div>
    </div>
  );
}