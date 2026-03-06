
import video_4 from "../assets/videos/building_freedom.mp4";

export default function CampanaSection(){
    return <div className="section-wrapper justify-center">
      <div className="section-container-large flex flex-col lg:flex-row items-stretch gap-8 lg:gap-16">
        <div className="flex flex-col text-left justify-between">
            
            <h2 className="text-white text-[50px] leading-[50px] lg:text-[80px] lg:leading-[80px] tracking-[0.26px] text-left">
                Campañas
                <span className="relative inline-block">
                    <span
                        className="
                        inline-block
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
                        src="../../img/gradiente_horizontal_rosa_azul.png"
                        alt=""
                        className="absolute left-0 bottom-[-60px] w-full h-auto pointer-events-none"
                    />
                </span>
            </h2>
            
            
            <video
                autoPlay
                src={video_4}
                muted
                loop
                playsInline
                className="w-full h-auto rounded-xl"
            >
            </video>
        </div>
        <div className="flex justify-center items-center w-full lg:w-auto">
            <img 
                src="../../img/mobile-mockup.png" 
                alt="Campaña" 
                className="max-w-full h-auto object-contain"
            />
        </div>


      </div>
    </div>;
}