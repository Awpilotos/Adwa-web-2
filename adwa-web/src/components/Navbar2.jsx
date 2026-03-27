import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import RoutingMenuItem from "./ui/RoutingMenuItem";
import { useLocation } from "react-router-dom";

export default function Navbar2() {
    const location = useLocation();
    const [openDropdown, setOpenDropdown] = useState(null);
    const navigate = useNavigate();

    const navigationItems = [
        { label: "Inicio",
            path:"/",
        },
        { label: "Nosotros",
            path:"/nosotros",
        },
        { label: "Portafolio",
            path:"",
            children: [
                { label: "Diseño", path: "/diseno-grafico" },
                { label: "UX/UI", path: "/ux-ui" },
            ]
        },
        { label: "Contacto",
            path:"/contacto",
        },
    ];

    const isHomeActive = location.pathname === "/";

    return (
        <div className="w-full sticky top-[33px] z-50 flex justify-center">
        
        <nav className="flex px-4 py-2 w-full max-w-[425px] items-center justify-center bg-[#ffffff1a] rounded-[28px] backdrop-blur-[2.0px] shadow-[inset_1px_0_0_rgba(255,255,255,0.32),inset_-1px_0_1px_rgba(0,0,0,0.11)]">
            
            {navigationItems.map((item, index) => (
                item.children ? (
                    <div
                    key={index}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(index)}
                    onMouseLeave={() => setOpenDropdown(null)}
                    >
                    <RoutingMenuItem
                        index={index}
                        path={item.path}
                        label={item.label}
                    />

                    {openDropdown === index && (
                        <>
                        <div className="absolute top-full left-0 w-full h-3" />
                            <div className="
                                absolute top-full mt-2 flex flex-col min-w-[160px]
                                rounded-2xl overflow-hidden

                                bg-[#ffffff1a]
                                backdrop-blur-[12px]
                                backdrop-brightness-[108%]
                                backdrop-saturate-[105%]
                                backdrop-hue-rotate-[-3.6deg]
                                [-webkit-backdrop-filter:blur(12px)_brightness(108%)_saturate(105%)_hue-rotate(-3.6deg)]

                                shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_8px_rgba(0,0,0,0.20),inset_-1px_0_8px_rgba(0,0,0,0.16)]
                            ">
                                {item.children.map((child, i) => (
                                    <button
                                        key={i}
                                        onClick={() => navigate(child.path)}
                                        className="
                                            px-4 py-2 text-left text-white text-sm
                                            transition-all duration-300

                                            hover:bg-[linear-gradient(90deg,rgba(151,0,255,0.2)_37%,rgba(0,183,159,0.2)_100%)]
                                        "
                                        >
                                        {child.label}
                                    </button>
                                ))}
                            </div>
                        </>
                    )}
                    </div>
                ) : (
                    <div key={index}>
                    {item.label === "Inicio" ? (
                        <button
                            key={index}
                            onClick={() => navigate("/")}
                            className={`
                                inline-flex items-center justify-center gap-2.5
                                px-2 py-1 md:px-4 md:py-2
                                rounded-2xl font-nunito font-normal text-white text-base
                                transition-all duration-300

                                ${
                                isHomeActive
                                    ? `backdrop-blur-[12px] backdrop-brightness-[108%] backdrop-saturate-[105%] backdrop-hue-rotate-[-3.6deg]
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
                            <img
                                src="/adwa_nav.svg"
                                alt="Inicio"
                                className="h-5 md:h-6 w-auto object-contain"
                            />
                        </button>
                    ) : (
                        <RoutingMenuItem
                        index={index}
                        path={item.path}
                        label={item.label}
                        />
                    )}
                    </div>
                )
            ))}
        </nav>
        </div>
    );
}