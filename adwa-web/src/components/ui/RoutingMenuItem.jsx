import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function RoutingMenuItem({path="/", label="", index}) {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = location.pathname === path;

  const handleButtonClick = () => {
    navigate(path); // Navigate to route
  };

  return (
    <button
      key={index}
      type="button"
      onClick={handleButtonClick}
      className={`
        inline-flex items-center justify-center gap-2.5
        px-2 py-1 md:px-4 md:py-2
        rounded-2xl font-nunito font-normal text-white text-base
        transition-all duration-300

        ${
          isActive
            ? `backdrop-blur-[12px] backdrop-brightness-[108%] backdrop-saturate-[105%] backdrop-hue-rotate-[-3.6deg]
               [-webkit-backdrop-filter:blur(12px)_brightness(108%)_saturate(105%)_hue-rotate(-3.6deg)]
               shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_8px_rgba(0,0,0,0.20),inset_-1px_0_8px_rgba(0,0,0,0.16)]
               bg-[linear-gradient(90deg,rgba(151,0,255,0.2)_37%,rgba(0,183,159,0.2)_100%)]`
            : ""
        }

        hover:backdrop-blur-[12px]
        hover:backdrop-brightness-[108%]
        hover:backdrop-saturate-[105%]
        hover:backdrop-hue-rotate-[-3.6deg]
        hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_8px_rgba(0,0,0,0.20),inset_-1px_0_8px_rgba(0,0,0,0.16)]
        hover:bg-[linear-gradient(90deg,rgba(151,0,255,0.2)_37%,rgba(0,183,159,0.2)_100%)]
      `}
    >
      {label}
    </button>
  );
}

export default RoutingMenuItem;
