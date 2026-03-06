
import video_4 from "../assets/videos/campanas_video_celular_rotado.mp4";

export default function CampanaSection(){
    return <div className="section-wrapper-auto justify-center mb-14">
      <div className="section-container-large flex flex-col lg:flex-row items-stretch gap-8 lg:gap-16">
        <div className="flex flex-col text-left justify-between">
            
            <h2 className="text-white text-[50px] leading-[50px] lg:text-[80px] lg:leading-[80px] tracking-[0.26px] text-left mb-[100px] lg:mb-0">
                Campañas <br/>
                <span className="relative inline-block">
                    
                    <span
                        className="
                        z-10
                        text-[60px] leading-[55px] lg:text-[90px] lg:leading-[90px]
                        tracking-[0.26px]
                        bg-gradient-to-r
                        from-[#9700FF]
                        to-[#00B79F]
                        bg-clip-text
                        text-transparent"
                    >
                    Publicitarias
                    </span>
                    <img
                        src="../../img/gradiente_horizontal_grande.png"
                        alt=""
                        className="absolute left-0 bottom-[-60px] lg:bottom-[-90px] w-full h-auto z-0"
                    />
                </span>
            </h2>
            
            
            <video
                autoPlay
                src={video_4}
                muted
                loop
                playsInline
                className="
                w-[830px] 
                h-auto
                border-white
                border-solid
                border-[1px]
                rounded-[63px]"
            >
            </video>
        </div>
        <div className="flex justify-center items-center w-full lg:w-auto">
            <img 
                src="../../img/mobile-mockup.png" 
                alt="Campaña" 
                className="
                max-w-full 
                h-auto
                bject-contain"
            />
        </div>


      </div>
    </div>;
}