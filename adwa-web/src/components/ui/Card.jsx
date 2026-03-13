import React from "react";

const Card = ({ mainImage, overlayImage, label, gradientColor, gradientTextl, gradientTextr }) => {
  return (
    <div className="relative w-full aspect-[400/850] overflow-hidden rounded-2xl">
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
      <div className="absolute bottom-[5%] left-1/2 transform -translate-x-1/2 rounded-[30px] px-4 py-2 justify-center items-center bg-white/10 border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]">
        <span className="bg-clip-text text-transparent text-[5vw] sm:text-[2rem] font-raleway font-normal leading-none break-words"
            style={{
                backgroundImage: `linear-gradient(to right, ${gradientTextl}, ${gradientTextr})`
            }}
        >
          {label}
        </span>
      </div>
    </div>
  );
};

export default Card;