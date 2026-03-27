import { useState, useRef, useEffect } from 'react';

export const useVideoModal = () => {
  const [open, setOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const videoRef = useRef(null);

  const handleOpen = (url) => {
    setActiveVideo(url);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setActiveVideo(null);
  };

  useEffect(() => {
    if (open && videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => console.log("Autoplay prevented:", err));
    }
  }, [open, activeVideo]);

  return {
    open,
    activeVideo,
    videoRef,
    handleOpen,
    handleClose
  };
};