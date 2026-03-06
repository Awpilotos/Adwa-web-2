import React from "react";

const Card = ({ mainImage, overlayImage, label, gradientColor }) => {
  return (
    <div className="relative w-full aspect-[400/850] overflow-hiddem rounded-2xl">
      {/* Gradient overlay */}
      <div
        className={`absolute inset-x-[5%] top-[20%] h-[80%] bg-gradient-to-t ${gradientColor} rounded-lg`}
      />

      {/* Main Image */}
      <img
        src={mainImage}
        alt={label}
        className="absolute top-[3%] left-[-5%] w-[110%] h-[70%] object-contain"
      />

      {/* Overlay Image */}
      <img
        src={overlayImage}
        alt={`${label} overlay`}
        className="absolute top-[28%] left-0 w-[95%] h-[60%] object-contain"
      />

      {/* Label */}
      <div className="absolute bottom-[5%] left-[30%] bg-white/5 rounded-[30px] px-4 py-2 inline-flex justify-center items-center">
        <span className="text-[#FAB889] text-[5vw] sm:text-[2rem] font-raleway font-normal leading-none break-words">
          {label}
        </span>
      </div>
    </div>
  );
};

export default Card;