import { useState } from 'react';

/*import thumb1 from "../assets/thumbnails/adwa_showcase_thumb3.jpg";
import thumb2 from "../assets/thumbnails/incoop_thumb.jpg";
import thumb3 from "../assets/thumbnails/livin_thumb.jpg";*/

import VideoCarousel from './ui/VideoCarousel';

export default function SpotSection() {

  const [activeVideo, setActiveVideo] = useState(null);

  const videos = [
    { thumb: "https://res.cloudinary.com/a2t82uyl/video/upload/so_2,f_auto,q_auto/v1783615597/livin_animado_bxmeba_qj2i85.jpg", src: "https://res.cloudinary.com/a2t82uyl/video/upload/v1783615597/livin_animado_bxmeba_qj2i85.mp4"},
    { thumb: "https://res.cloudinary.com/a2t82uyl/video/upload/so_0/v1783615599/incoop_ij10ld_hiydyz.jpg", src: "https://res.cloudinary.com/a2t82uyl/video/upload/v1783615599/incoop_ij10ld_hiydyz.mov"},
    { thumb: "https://res.cloudinary.com/a2t82uyl/video/upload/so_0,f_auto,q_auto/v1783615605/inka_burguer_trailer_lq7c9h_icyufq.jpg", src: "https://res.cloudinary.com/a2t82uyl/video/upload/v1783615605/inka_burguer_trailer_lq7c9h_icyufq.mp4"},
    { thumb: "https://res.cloudinary.com/a2t82uyl/video/upload/so_5/v1783615610/spartans_familia_lo0oto_nijadk.jpg", src: "https://res.cloudinary.com/a2t82uyl/video/upload/v1783615610/spartans_familia_lo0oto_nijadk.mp4"},
    { thumb: "https://res.cloudinary.com/a2t82uyl/video/upload/so_2,f_auto,q_auto/v1783615597/livin_animado_bxmeba_qj2i85.jpg", src: "https://res.cloudinary.com/a2t82uyl/video/upload/v1783615597/livin_animado_bxmeba_qj2i85.mp4"},
    { thumb: "https://res.cloudinary.com/a2t82uyl/video/upload/so_0/v1783615599/incoop_ij10ld_hiydyz.jpg", src: "https://res.cloudinary.com/a2t82uyl/video/upload/v1783615599/incoop_ij10ld_hiydyz.mov"},
    { thumb: "https://res.cloudinary.com/a2t82uyl/video/upload/so_0,f_auto,q_auto/v1783615605/inka_burguer_trailer_lq7c9h_icyufq.jpg", src: "https://res.cloudinary.com/a2t82uyl/video/upload/v1783615605/inka_burguer_trailer_lq7c9h_icyufq.mp4"},
    { thumb: "https://res.cloudinary.com/a2t82uyl/video/upload/so_5/v1783615610/spartans_familia_lo0oto_nijadk.jpg", src: "https://res.cloudinary.com/a2t82uyl/video/upload/v1783615610/spartans_familia_lo0oto_nijadk.mp4"}
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