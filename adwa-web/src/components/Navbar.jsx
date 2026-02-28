import { Menu } from 'lucide-react';
import { useState } from "react";

export default function Navbar(){
    const [activeIndex, setActiveIndex] = useState(0);

    const navigationItems = [
        { label: "Inicio"},
        { label: "Nosotros"},
        { label: "Portafolio"},
        { label: "Contacto"},
    ];

    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

    return (<div className='w-full absolute top-[33px] z-90 items-center justify-center'>
        <header className="md:flex">
            <a href="/" className="fixed top-[40px] left-[10%]">
                <img
                className="h-full md:h-15 w-auto"
                alt="Adwa Logo"
                src="/adwa-logo.svg"
                />
            </a>
            
        </header>

        {/* Bar with links */}
        <div className="relative">
            <nav className=" sticky z-50 flex px-4 py-2 mx-auto items-center justify-center w-[411px] bg-[#ffffff1a] rounded-[28px] backdrop-blur-[2.0px] backdrop-brightness-[100.0%] backdrop-saturate-[96.5%] [-webkit-backdrop-filter:blur(2.0px)_brightness(100.0%)_saturate(96.5%)] shadow-[inset_1px_0_0_rgba(255,255,255,0.32),inset_-1px_0_1px_rgba(0,0,0,0.11)]">
                <div className="items-center gap-1 flex">
                    <div className="">
                        <div className="flex items-center space-x-2 group cursor-pointer ">

                            {/* Nav Links */}
                            <div className="items-center gap-2"> 
                                {navigationItems.map((item, index) => (
                                    <button key={index} onClick={() => setActiveIndex(index)} className={`inline-flex items-center justify-center gap-2.5 px-4 py-2 rounded-2xl [font-family:'Nunito',Helvetica] font-normal text-white text-base
                                        ${activeIndex === index
                                            ? "backdrop-blur-[12.0px] backdrop-brightness-[108.0%] backdrop-saturate-[105.0%] backdrop-hue-rotate-[-3.6deg] [-webkit-backdrop-filter:blur(12.0px)_brightness(108.0%)_saturate(105.0%)_hue-rotate(-3.6deg)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_8px_rgba(0,0,0,0.20),inset_-1px_0_8px_rgba(0,0,0,0.16)] bg-[linear-gradient(90deg,rgba(151,0,255,0.2)_37%,rgba(0,183,159,0.2)_100%)]"
                                            : ""
                                    }`} >
                                        {item.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </div>


    </div>
  );
}