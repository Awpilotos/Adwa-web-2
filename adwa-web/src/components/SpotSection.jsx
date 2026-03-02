import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import slide_video_1 from '../assets/videos/incoop.mp4';
import slide_video_2 from '../assets/videos/building_freedom.mp4';
import slide_video_3 from '../assets/videos/livin.mp4';

export default function SpotSection() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-6xl px-8 mb-[151px] mt-[61px]">
        
        <h1 className="text-white text-[80px] leading-[80px] tracking-[0.26px]">
          Spot
        </h1>

        <h2
          className="
            inline-block
            text-[90px]
            leading-[90px]
            tracking-[0.26px]
            bg-[linear-gradient(90deg,rgba(151,0,255,1)_37%,rgba(0,183,159,1)_100%)]
            bg-clip-text
            text-transparent
          "
        >
          Publicitarios
        </h2>
      </div>

      <div className='w-full max-w-[1200px]'>
        <Swiper
          effect={'coverflow'}
          grabCursor={false}
          centeredSlides={true}
          loop={true}
          initialSlide={1}
          slidesPerView={3}
          slideToClickedSlide={true}
          pagination={{ clickable: true }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 125,
            modifier: 2.5,
            slideShadows:false,
          }}
          modules={[EffectCoverflow, Pagination]}
          breakpoints={{
            0: { slidesPerView: 1 },  
            768: { slidesPerView: 3 },
          }}
          className="swiper_container"
        >
          {[slide_video_1, slide_video_2, slide_video_3].map((videoSrc, idx) => (
            <SwiperSlide
              key={idx}
              className='slide'
            >
              <video
                className="slide-video"
                width="100%"
                height="100%"
                controls={false}
                playsInline
                autoPlay
                muted
                loop
                src={videoSrc}
              />
            </SwiperSlide>
          ))}
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </div>
  );
}