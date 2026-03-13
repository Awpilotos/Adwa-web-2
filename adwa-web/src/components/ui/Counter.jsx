import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function Counter({ value = 0, start = false }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);

  const isVisible = useInView(ref, {
    once: true,
    amount: 0.6
  });

  useEffect(() => {
    if (!start || !isVisible || value === 0) return;

    const duration = 1100;
    let startTime = null;

    const animate = (time) => {
      if (!startTime) startTime = time;  
      const progress = Math.min((time - startTime) / duration, 1);
      const current = Math.floor(progress * value);

      setDisplay(current);

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [start, isVisible, value]);

  if (value === "") return null;

  return <span ref={ref}>{display}</span>;
}


