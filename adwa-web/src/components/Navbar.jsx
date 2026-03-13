import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import RoutingMenuItem from "./ui/RoutingMenuItem";

export default function Navbar(){
    const [activeIndex, setActiveIndex] = useState(0);
    const navigate = useNavigate();

    const navigationItems = [
        { label: "Inicio",
            path:"/",
        },
        { label: "Nosotros",
            path:"",
        },
        { label: "Portafolio",
            path:"/portafolio",
        },
        { label: "Contacto",
            path:"",
        },
    ];

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
                <RoutingMenuItem path={item.path} label={item.label}/>
            ))}
        </nav>

        {/* Espaciador */}
        <div className="flex-1"></div>
    </div>
  );
}