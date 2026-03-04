import video_4 from "../assets/videos/tras_camara.mp4";

export default function ProductoraSection(){
    return <div className="min-h-screen flex justify-center items-center">
      <div className="relative w-full h-screen flex max-w-[1400px] px-8 mt-[61px] mb-[151px] items-center justify-center">
        <svg
            className="absolute inset-0 z-0 w-full"
            viewBox="0 0 1438 1729"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
            <clipPath id="videoClip">
                {/* your white rectangles */}
                <rect width="297" height="1101" x="222" y="355" />
                <rect width="297" height="1597" x="571" y="47" />
                <rect width="297" height="1086" x="920" y="301" />
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
            <h2 className="mt-[-1px] font-normal text-white text-[85px] tracking-[0.26px] leading-[90px]">
            Productora aliada
            </h2>

            <div
            className="bg-[linear-gradient(90deg,rgba(151,0,255,1)_37%,rgba(0,183,159,1)_100%)]
            [-webkit-background-clip:text] bg-clip-text
            [-webkit-text-fill-color:transparent]
            text-[95px] tracking-[0.26px] leading-[100px] font-normal"
            >
            Creativa
            </div>
        </div>
    </div>
</div>;
}