import Footer2 from "../components/Footer2";
import Navbar2 from "../components/Navbar2";

import { footerData } from "../data/footerData";
import letra_a from "../assets/img/letra_a.png";

export default function Contacto() {
    return (
        <>
        <Navbar2 />

        <div className="section-wrapper pt-[5dvh] relative flex items-center justify-center section-wrapper bg-cover bg-center bg-[linear-gradient(154deg,#13041E_19.91%,#5B0E7F_93.48%),#000]">
            {/* 1. THE GRADIENT COLUMN (Right 40%) */}
            <div className="absolute inset-y-0 left-0 w-[50%] md:w-[60%] lg:w-[28%] z-0 lg:ml-15
                            bg-[linear-gradient(180deg,rgba(152,16,250,0)_0%,rgba(90,9,148,0.45)_100%)]">
                
                {/* The 'A' Logo/Icon Aligned to the bottom of this column */}
                <div className="absolute bottom-0 w-full flex justify-end pb-10 md:pb-[181px]">
                    <img 
                    src={letra_a}
                    alt="Icon" 
                    className="max-w-full h-auto object-contain opacity-40" 
                    />
                </div>
            </div>

            <div className="section-container-large flex flex-col lg:flex-row w-full items-center lg:items-start gap-6 lg:gap-10 relative">

                {/* Contact Information */}
                <div className="flex w-full md:max-w-[80%] lg:max-w-[45%] flex-col gap-6 px-10 lg:px-0">

                    {/* Title stays left-aligned */}
                    <h1 className="text-white text-[40px] leading-[40px] lg:text-[70px] lg:leading-[60px] font-normal tracking-[0.26px] text-left">
                        Hablemos de tu <br className="hidden lg:block" />
                        <span className="gradient-text lg:text-[80px] lg:leading-[60px]">
                            proyecto
                        </span>
                    </h1>

                    {/* Contact Items - right-aligned as a group */}
                    <div className="flex flex-col gap-3 self-end mt-[100px]">
                        {footerData.contact.map((item) => (
                        <div key={item.id} className="flex items-start gap-3 text-left">
                            <img
                            src={item.icon}
                            alt={item.label}
                            className="w-5 h-5 mt-1 opacity-70"
                            />
                            <div>
                            <p className="text-xs text-white/80">{item.label}</p>
                            <p className="text-sm text-white">{item.value}</p>
                            </div>
                        </div>
                        ))}

                        {/* Social media icons */}
                        <div className="flex flex-col gap-4 mt-[70px] z-10 ">
                            <p className="text-sm text-white/70">
                                Síguenos en redes sociales
                            </p>
                        
                            <div className="flex gap-4">
                                {footerData.social.map((item) => (
                                    <a
                                        key={item.id}
                                        href={item.href}
                                        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
                                    >
                                        <img src={item.icon} alt={item.id} className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    
                </div>
        
                {/* Header sobre el formulario */}
                <div className="flex flex-col w-full px-8 lg:px-2 lg:max-w-[55%] bg-transparent relative mt-[25px]">
                    {/* Titulo */}
                    <div className="w-full mb-1">
                        <p className="font-normal text-white/80 text-xl text-center leading-7">
                            ¿Tienes una idea? Nos encantaría escucharla y ayudarte a hacerla realidad.
                        </p>
                    </div>
        
                    {/* Iframe formulario Opteam */}
                    <div className="w-full relative" >
                        <iframe
                            src="https://api.leadconnectorhq.com/widget/form/yM2UktVVeCDmxW9hLlmu"
                            style={{ width: "100%", minHeight: "500px", border: "none", borderRadius: "3px" }}
                            id="inline-yM2UktVVeCDmxW9hLlmu"
                            title="Formulario contacto nueva web"
                        />
                    </div>
                </div>
            </div>
        </div>
        <Footer2 />
        </>
        
    );
}