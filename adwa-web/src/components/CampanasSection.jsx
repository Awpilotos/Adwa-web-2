
import background_gradient from "../assets/img/gradiente_azul_campanas.png";
import mockup_frameUrl from "../assets/img/mobile_mockup_op.png";
import { useNavigate } from "react-router-dom";

export default function CampanaSection(){
    const navigate = useNavigate();
    const mockup_videoUrl = "https://res.cloudinary.com/dokleqkjv/video/upload/v1782226783/building_freedom_adwa_nil61u.mp4";
    const mockup_posterUrl = "https://res.cloudinary.com/dokleqkjv/video/upload/so_0/v1782226783/building_freedom_adwa_nil61u.jpg";

    return (
    <div 
        className="section-wrapper justify-center mb-14"
        style={{ 
            backgroundImage: `url(${background_gradient})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover"
        }}
    >
        <div className="section-container-large flex flex-col items-center">

            <div className="w-full flex flex-col md:flex-row items-center justify-between mt-[100px] gap-12">
                <h2 className="text-white text-[50px] leading-[50px] lg:text-[80px] lg:leading-[80px] tracking-[0.26px] text-left">
                De ideas a<br/>
                <span className="z-10 text-[60px] leading-[55px] lg:text-[90px] lg:leading-[90px] tracking-[0.26px] bg-gradient-to-r from-[#9700FF] to-[#00B79F] bg-clip-text text-transparent">
                    Resultados
                </span>
                </h2>

                <div className="relative flex justify-center items-center pl-[0.4%] pt-[0.6%] pr-[0.4%] pb-[0.6%]">
                    <video
                        className="w-[100%] h-[100%] object-cover z-10 rounded-[clamp(30px,9vw,55px)] md:rounded-[clamp(20px,3.5vw,50px)]"
                        autoPlay
                        muted 
                        loop
                        playsInline 
                        preload="auto"
                        poster={mockup_posterUrl}
                    >
                        <source src={mockup_videoUrl} type="video/mp4"/>
                    </video>

                    <img
                        src={mockup_frameUrl}
                        alt="Device Mockup"
                        className="absolute inset-0 w-full h-full pointer-events-none"
                    />
                </div>
            </div>

            <div className="w-full mt-16 grid grid-cols-1 md:grid-cols-3 px-8 md:px-0">

                {/* COLUMN 1 */}
                <div className="flex justify-center border-b md:border-b-0 md:border-r border-white/50 py-[25px]">
                    <div className="flex flex-col justify-between gap-6 text-left text-white w-[330px] max-w-[80%]">
                        <p>Fox Sports: Campaña Viral "Los <br className="hidden md:block"/> deportes o yo" </p>
                        <h3 className="text-xl font-semibold">16M social reach <br className="hidden md:block"/>(órganico)</h3>
                    </div>
                </div>

                {/* COLUMN 2 */}
                <div className="flex justify-center border-b md:border-b-0 md:border-r border-white/50 py-[25px]">
                    <div className="flex flex-col justify-between gap-6 text-left text-white w-[330px] max-w-[80%]">
                        <p>Touché Films ( Enchufetv) desarrollo de modelo Sponsor para Branded Content (+500 sponsors vendidos) </p>
                        <h3 className="text-xl font-semibold">Crecimiento de <br className="hidden md:block"/> audiencias 25M</h3>
                    </div>
                </div>

                {/* COLUMN 3 */}
                <div className="flex justify-center py-[25px]">
                    <div className="flex flex-col justify-between gap-6 text-left text-white w-[330px] max-w-[70%]">
                        <p>Agencia Integral de comunicación para Holding SG, Marketing y publicidad manejo de marcas del grupo.</p>
                        <h3 className="text-xl font-semibold">Marketing y publicidad manejo de marcas del grupo.</h3>
                    </div>
                </div>

            </div>
           

            {/* CTA */}
            <div className="w-full flex justify-center mt-16">
                <button className="cursor-pointer text-white px-6 py-3 rounded-[20px] bg-[linear-gradient(90deg,rgba(151,0,255,1)_37%,rgba(0,183,159,1)_100%)]"
                    onClick={() => navigate("/contacto")}>
                Hablemos de tu proyecto
                </button>
            </div>

            </div>
        </div>
    );
}