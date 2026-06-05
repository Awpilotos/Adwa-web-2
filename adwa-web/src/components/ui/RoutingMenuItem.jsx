import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';


function RoutingMenuItem({path="/", label="", index}) {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = location.pathname === path;

  const handleButtonClick = () => {
    navigate(path); // Navega a la ruta
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
            ? `shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_8px_rgba(0,0,0,0.20),inset_-1px_0_8px_rgba(0,0,0,0.16)]
               bg-[linear-gradient(90deg,rgba(151,0,255,1)_37%,rgba(0,183,159,1)_100%)]`
            : ""
        }
        hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_8px_rgba(0,0,0,0.20),inset_-1px_0_8px_rgba(0,0,0,0.16)]
        hover:bg-[linear-gradient(90deg,rgba(151,0,255,1)_37%,rgba(0,183,159,1)_100%)]
      `}
    >
      {label}
    </button>
  );
}

export default RoutingMenuItem;
