import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function CounterOP({ value = 0, start = true }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);

  const isVisible = useInView(ref, {
    once: true,
    amount: 0.6,
  });

  useEffect(() => {
    if (!start || !isVisible || !value) return;

    let frame;
    const duration = 1300;
    let startTime = null;

    const animate = (time) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);

      setDisplay(Math.floor(progress * value));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [start, isVisible, value]);

  return <span ref={ref}>{display}</span>;
}
