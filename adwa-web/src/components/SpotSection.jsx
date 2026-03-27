import { useState } from 'react';

import thumb1 from "../assets/thumbnails/adwa_showcase_thumb3.jpg";
import thumb2 from "../assets/thumbnails/incoop_thumb.jpg";
import thumb3 from "../assets/thumbnails/livin_thumb.jpg";

import VideoCarousel from './ui/VideoCarousel';

export default function SpotSection() {

  const [activeVideo, setActiveVideo] = useState(null);

  const videos = [
    { thumb: thumb1, src: "https://res.cloudinary.com/dtoelcbzw/video/upload/v1774452661/livin_animado_bxmeba.mp4"},
    { thumb: thumb2, src: "https://res.cloudinary.com/dtoelcbzw/video/upload/v1774452933/incoop_ij10ld.mov"},
    { thumb: thumb3, src: "https://res.cloudinary.com/dtoelcbzw/video/upload/v1774452661/livin_animado_bxmeba.mp4"},
    { thumb: thumb1, src: "https://res.cloudinary.com/dtoelcbzw/video/upload/v1774452661/livin_animado_bxmeba.mp4"},
    { thumb: thumb2, src: "https://res.cloudinary.com/dtoelcbzw/video/upload/v1774452933/incoop_ij10ld.mov"},
    { thumb: thumb3, src: "https://res.cloudinary.com/dtoelcbzw/video/upload/v1774452661/livin_animado_bxmeba.mp4"},
  ];
  
  return (
    <div className="section-wrapper-auto justify-center md:-mt-60 lg:-mt-70">
      <div className="section-container-large">
        
        <h2 className="text-white text-[50px] leading-[50px] lg:text-[80px] lg:leading-[80px] tracking-[0.26px]">
          Nuestro <br />
          <span className={`relative inline-block md:pl-25 lg:pl-40`}>
            <span className="tracking-[0.26px] bg-gradient-to-r from-[#9700FF] to-[#00B79F] bg-clip-text text-transparent">
              Trabajo
            </span>
          </span>
        </h2>

        <div className='container'>
          <VideoCarousel videos={videos}/>
        </div>
      </div>
    </div>
  );
}