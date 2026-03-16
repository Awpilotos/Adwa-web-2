import { motion } from "framer-motion";

type MarqueeItemProps = {
  images: string[];
  from: number | string;
  to: number | string;
};

export default function MarqueeItem({ images, from, to }: MarqueeItemProps) {
  return (
    <div className="flex">
      {/* First moving row */}
      <motion.div
        initial={{ x: from }}
        animate={{ x: to }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`marqueImg${index}`}
            width={250}
            height={250}
            className="object-contain pr-20"
          />
        ))}
      </motion.div>

      {/* Duplicate row for seamless looping */}
      <motion.div
        initial={{ x: from }}
        animate={{ x: to }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`marqueImg${index}`}
            width={250}
            height={250}
            className="object-contain pr-20"
          />
        ))}
      </motion.div>
    </div>
  );
}