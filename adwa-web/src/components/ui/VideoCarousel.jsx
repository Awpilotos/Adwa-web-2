import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import { Box, Modal, IconButton } from "@mui/material";
import { Play } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-coverflow";

export default function VideoCarousel({ videos }) {
  const [open, setOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  const handleOpen = (video) => {
    setActiveVideo(video);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setActiveVideo(null);
  };

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
              
              <video
                className="!w-[888px] !h-[500px] object-cover"
                src={video.src}
                muted
                loop
                playsInline
              />

              {/* Boton de play sobre el video */}
              <IconButton
                onClick={() => handleOpen(video.src)}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  background: "rgba(0,0,0,0.6)",
                  color: "white",
                  width: 80,
                  height: 80,
                  "&:hover": {
                    background: "rgba(0,0,0,0.8)",
                  },
                }}
              >
                <Play size={40} />
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
          {activeVideo && (
            <video
              src={activeVideo}
              controls
              autoPlay
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
              }}
            />
          )}
        </Box>
      </Modal>
    </>
  );
}
