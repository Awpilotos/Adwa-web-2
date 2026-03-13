import video_4 from "../assets/videos/tras_camara.mp4";
import MarqueeItem from "./MarqueeItem";

export default function ProductoraSection(){
    const images = [
        "../../img/2btube.png",
        "../../img/autoeastern.png",
        "../../img/ciot.png",
        "../../img/estudiotess.png",
        "../../img/funkyfish.png",
        "../../img/incoop.png",
        "../../img/livin.png",
        "../../img/opteam.png",
        "../../img/pical.png",
        "../../img/sg.png",
    ];

    return <div className="section-wrapper-auto flex-wrap justify-center items-center">
      <div className="relative section-container-large aspect-[1438/1729] sm:aspect-[1438/1300] flex justify-center items-center">
        <svg
            className="absolute inset-0 z-0 w-full h-full"
            viewBox="0 0 1438 1729"
            preserveAspectRatio="xMidYMid"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
            <clipPath id="videoClip">
                {/* máscara svg del video */}
                <rect width="297" height="1101" x="222" y="355"/>
                <rect width="297" height="1597" x="571" y="47"/>
                <rect width="297" height="1086" x="920" y="301"/>
            </clipPath>
            </defs>

            {/* Video cortado con la forma del svg */}
            <foreignObject
                x="0"
                y="0"
                width="1438"
                height="1729"
                clipPath="url(#videoClip)"
            >
            <video
                src= {video_4}
                autoPlay
                muted
                loop
                playsInline
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            </foreignObject>
        </svg>

        <div className="relative z-10 flex flex-col items-center text-center">
            <h2 className="mt-[-1px] font-normal text-white text-[55px] leading-[50px] lg:text-[85px] lg:leading-[90px] tracking-[0.26px] ">
            Productora aliada
            </h2>

            <div
            className="bg-[linear-gradient(90deg,rgba(151,0,255,1)_37%,rgba(0,183,159,1)_100%)]
            [-webkit-background-clip:text] bg-clip-text
            [-webkit-text-fill-color:transparent]
            text-[60px] leading-[65px] lg:text-[95px] lg:leading-[100px] tracking-[0.26px]  font-normal"
            >
            Creativa
            </div>
        </div>

        
    </div>
    <div className="bg-[#9700FF] sm:h-[150px] md:h-[200px] items-center justify-center flex mx-auto overflow-hidden select-none">
      <MarqueeItem images={images} from={0} to={"-100%"} />
    </div>
</div>;
}