import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";

export const usePaidMedia = () => {
  const sectionRef = useRef(null);

  const isSectionVisible = useInView(sectionRef, {
    once: true,
    amount: 0.1,
  });

  const [startCounters, setStartCounters] = useState(false);

  useEffect(() => {
    if (!isSectionVisible) return;

    const timer = setTimeout(() => {
      setStartCounters(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [isSectionVisible]);

  return {
    sectionRef,
    startCounters,
  };
};
