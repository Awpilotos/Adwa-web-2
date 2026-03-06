import { Menu } from 'lucide-react';
import { useState } from "react";

export default function Navbar(){
    const [activeIndex, setActiveIndex] = useState(0);

    const navigationItems = [
        { label: "Inicio",
            path:"/",
        },
        { label: "Nosotros",
            path:"/",
        },
        { label: "Portafolio",
            path:"/",
        },
        { label: "Contacto",
            path:"/",
        },
    ];

    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

    return (<div className='w-full sticky top-[33px] h-[90px] flex z-50 items-start justify-center'>
        <div className="flex-1 flex justify-center">
            <header className="hidden md:block">
                <a href="/">
                    <img
                    className="h-[clamp(71px,4vw,30px)] w-auto"
                    alt="Adwa Logo"
                    src="/adwa-logo.svg"
                    />
                </a>
            </header>
        </div>
        
        {/* Botones de navegacion */}
        <nav className="z-50 flex px-4 py-2 w-full max-w-[425px] mx-auto items-center justify-center bg-[#ffffff1a] rounded-[28px] backdrop-blur-[2.0px] backdrop-brightness-[100.0%] backdrop-saturate-[96.5%] [-webkit-backdrop-filter:blur(2.0px)_brightness(100.0%)_saturate(96.5%)] shadow-[inset_1px_0_0_rgba(255,255,255,0.32),inset_-1px_0_1px_rgba(0,0,0,0.11)]">
            {navigationItems.map((item, index) => (
            <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`
                    inline-flex items-center justify-center gap-2.5
                    px-2 py-1 md:px-4 md:py-2
                    rounded-2xl font-nunito font-normal text-white text-base
                    transition-all duration-300
                    ${activeIndex === index
                    ? `backdrop-blur-[12px] backdrop-brightness-[108%] backdrop-saturate-[105%] backdrop-hue-rotate-[-3.6deg]
                        [-webkit-backdrop-filter:blur(12px)_brightness(108%)_saturate(105%)_hue-rotate(-3.6deg)]
                        shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_8px_rgba(0,0,0,0.20),inset_-1px_0_8px_rgba(0,0,0,0.16)]
                        bg-[linear-gradient(90deg,rgba(151,0,255,0.2)_37%,rgba(0,183,159,0.2)_100%)]`
                    : ""}
                `}
                >
                {item.label}
            </button>
            ))}
        </nav>

        {/* Espaciador */}
        <div className="flex-1"></div>
    </div>
  );
}