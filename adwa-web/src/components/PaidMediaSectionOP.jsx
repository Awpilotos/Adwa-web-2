import PaidMediaColumns from "./ui/PaidMediaColumns";
import { columns } from "../data/paidMediaData";
import { images } from "../data/marqueeData";
import MarqueeItem from "./ui/MarqueeItem";

import platform_logos from "../assets/img/logos_plataformas.png";

export default function PaidMediaSectionOP(){

  return (
    <div className="section-wrapper flex-col justify-center items-center">
      
      {/* Contenedor 1000px ancho*/}
      <div className="w-full max-w-[1000px] px-[30%] lg:px-12 mt-[61px]">
        {/* Titulo Paid Media */}
        <h2 className="
          relative z-10
          text-white
          text-[60px] leading-[60px]
          md:text-[80px] md:leading-[80px]
          lg:text-[90px] lg:leading-[90px]
          tracking-[0.26px]
        ">
          Paid <br />
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-[#9700FF] to-[#00B79F] bg-clip-text text-transparent">
              Media
            </span>
          </span>
        </h2>
        {/* Masonry Paid Media */}
        <div className="-mt-[25px] md:-mt-[40px] lg:-mt-[50px] relative z-0">
          <PaidMediaColumns data={columns} />
        </div>
      </div>

      {/* Plataformas */}
      <div className="flex flex-col w-full mb-[122px] px-6 mt-10 lg:-mt-[120px] md:px-20 md:px-15 max-w-full md:max-w-[1200px] justify-start">
        <h3 className="text-white text-[40px] leading-[40px] md:text-[40px] md:leading-[40px] tracking-[0.26px]">
            <span className="tracking-[0.26px] bg-gradient-to-r from-[#9700FF] to-[#00B79F] bg-clip-text text-transparent">
              Plataformas
            </span>
        </h3>
        <img
          src={platform_logos}
          className="w-full md:w-3/4 lg:w-1/2"
        />
      </div>

      <div className="w-screen max-w-full overflow-hidden bg-[#9700FF] sm:h-[150px] md:h-[200px] flex items-center">
        <MarqueeItem images={images} from={0} to={"-100%"} />
      </div>
    </div>
  );
}
