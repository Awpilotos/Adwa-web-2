import React from "react";

const HeroHeader = ({ 
  title, 
  highlightedText, 
  backgroundImage,
  containerHeight,
  indent = "md:pl-20 lg:pl-40"
}) => {
  return (
    <div
      className={`relative flex items-center justify-center ${containerHeight} section-wrapper-auto bg-cover bg-center mt-[-90px]`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex flex-col items-center text-center text-white max-w-4xl px-6">
        <h1 className="text-white text-[50px] leading-[40px] lg:text-[80px] lg:leading-[60px] tracking-[0.26px]">
          {title} <br />
          <span className={`relative inline-block leading-[0px] ${indent}`}>
            <span className="tracking-[0.26px] leading-[0px] bg-gradient-to-r from-[#9700FF] to-[#00B79F] bg-clip-text text-transparent">
              {highlightedText}
            </span>
          </span>
        </h1>
      </div>
    </div>
  );
};

export default HeroHeader;