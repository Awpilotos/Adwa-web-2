import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import { Box, Modal, IconButton } from "@mui/material";
import { Play, X } from "lucide-react";
import { useVideoModal } from "../../hooks/useVideoModal"; 

export default function VideoCarousel({videos}) {
  const { open, activeVideo, videoRef, handleOpen, handleClose } = useVideoModal();

  return (
    <>
      <Swiper
        className="swiper-container"
        effect="coverflow"
        slideToClickedSlide
        centeredSlides
        slidesPerView={2}
        initialSlide={1}
        spaceBetween={0}
        loop
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
            <Box sx={{ position: "relative", cursor: "pointer" }}>
              
              <img
                className="!w-[888px] !h-[500px] object-cover rounded-lg"
                src={video.thumb} 
                alt="Preview"
              />

              {/* Boton de play sobre el video */}
              <IconButton
                onClick={() => handleOpen(video.src)}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  background: "rgba(255,255,255,0.3)",
                  color: "white",
                  width: 80,
                  height: 80,
                  "&:hover": {
                    background: "rgba(139, 139, 139, 0.8)",
                  },
                }}
              >
                <Play size={40}/>
              </IconButton>


            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal pantalla completa */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90vw",
            maxWidth: "1200px",
            outline: "none",
          }}
        >
          <IconButton 
            onClick={handleClose}
            sx={{ position: 'absolute', top: -45, right: 0, color: 'white' }}
          >
            <X size={30} />
          </IconButton>

          {activeVideo && (
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black shadow-2xl">
              <video
                ref={videoRef}
                src={activeVideo}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
              />
            </div>
          )}
        </Box>
      </Modal>
    </>
  );
}
