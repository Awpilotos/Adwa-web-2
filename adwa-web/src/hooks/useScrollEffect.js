import { useState, useEffect } from 'react';

export function useScrollEffect(maxOpacity = 0.8, movementRange = 100) {
  const [scrollData, setScrollData] = useState({
    opacity: 0,
    yOffset: movementRange,
  });

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = window.scrollY;
      const threshold = window.innerHeight / 1.5;
      
      // Calculate 0 to 1 ratio based on scroll position
      const ratio = Math.min(winScroll / threshold, 1);
      
      setScrollData({
        opacity: ratio * maxOpacity,
        yOffset: (1 - ratio) * movementRange,
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [maxOpacity, movementRange]);

  return scrollData;
}