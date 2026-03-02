export default function PaidMediaSection(){
    const statistics = [
    {
      id: 1,
      value: "+50",
      description: "Marcas\nNacionales e Internacionales",
      position: { top: "81px", left: "997px" },
      width: "306px",
      align: "left",
    },
    {
      id: 2,
      value: "+10",
      description: "En medios\ndigitales",
      position: { top: "566px", left: "752px" },
      width: "224px",
      align: "center",
    },
    {
      id: 3,
      value: "+200",
      description: "Campañas\ngestionadas",
      position: { top: "864px", left: "177px" },
      width: "322px",
      align: "right",
    },
    {
      id: 4,
      value: "98%",
      description: "Tasa de Éxito",
      position: { top: "1233px", left: "481px" },
      width: "263px",
      align: "center",
    },
    {
      id: 5,
      value: "+50",
      description: "Clientes Satisfechos",
      position: { top: "1464px", left: "972px" },
      width: "245px",
      align: "center",
    },
  ];

  const backgroundImages = [
    {
      id: 1,
      src: "https://c.animaapp.com/6R4bwcvr/img/dark-blue-gradient-smooth-abstract-background-hor-2026-01-05-00--1.png",
      alt: "Dark blue gradient",
      position: { top: "682px", left: "285px" },
      dimensions: { width: "207px", height: "511px" },
      aspectRatio: "2.47",
    },
    {
      id: 2,
      src: "https://c.animaapp.com/6R4bwcvr/img/dark-blue-gradient-smooth-abstract-background-hor-2026-01-05-00--2.png",
      alt: "Dark blue gradient",
      position: { top: "165px", left: "995px" },
      dimensions: { width: "207px", height: "511px" },
      aspectRatio: "2.47",
    },
    {
      id: 3,
      src: "https://c.animaapp.com/6R4bwcvr/img/dark-blue-gradient-smooth-abstract-background-hor-2026-01-05-00--3@2x.png",
      alt: "Dark blue gradient",
      position: { top: "1209px", left: "995px" },
      dimensions: { width: "207px", height: "376px" },
      aspectRatio: "1.82",
    },
    {
      id: 4,
      src: "https://c.animaapp.com/6R4bwcvr/img/dark-blue-gradient-smooth-abstract-background-hor-2026-01-05-00--4.png",
      alt: "Dark blue gradient",
      position: { top: "1461px", left: "0px" },
      dimensions: { width: "872px", height: "252px" },
      aspectRatio: "4.04",
    },
  ];

  const contentImages = [
    {
      id: 1,
      src: "https://c.animaapp.com/6R4bwcvr/img/a-filmmaker-prepares-a-clapperboard-for-a-nighttim-2026-01-09-00@2x.png",
      alt: "A filmmaker prepares",
      position: { top: "779px", left: "522px" },
      dimensions: { width: "214px", height: "273px" },
      aspectRatio: "0.79",
    },
    {
      id: 2,
      src: "https://c.animaapp.com/6R4bwcvr/img/neon-colors-grainy-texture-purple-pink-blue-gradie-2026-01-07-06.png",
      alt: "Neon colors grainy",
      position: { top: "475px", left: "759px" },
      dimensions: { width: "213px", height: "536px" },
      aspectRatio: "2.52",
    },
    {
      id: 3,
      src: "https://c.animaapp.com/6R4bwcvr/img/captura-de-pantalla-2026-01-23-a-la-s--2-13-43-p--m--1.png",
      alt: "Captura de pantalla",
      position: { top: "691px", left: "997px" },
      dimensions: { width: "212px", height: "502px" },
      aspectRatio: "0.42",
    },
  ];

  return (
    <section
      className="absolute top-[1980px] left-[calc(50.00%_-_720px)] w-[1439px] h-[2250px]"
      aria-label="Paid Media Overview"
    >
      {backgroundImages.map((image) => (
        <img
          key={image.id}
          className={`absolute aspect-[${image.aspectRatio}]`}
          style={{
            top: image.position.top,
            left: image.position.left,
            width: image.dimensions.width,
            height: image.dimensions.height,
          }}
          alt={image.alt}
          src={image.src}
        />
      ))}

      <div className="w-[274px] gap-3 top-[448px] left-[287px] flex flex-col items-start absolute">
        <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
          <h2 className="relative w-fit mt-[-1.00px] [font-family:'Raleway',Helvetica] font-normal text-blanco text-[90px] text-center tracking-[0.26px] leading-[90px] whitespace-nowrap">
            Paid
          </h2>
        </div>

        <div className="relative w-fit mr-[-12.00px] bg-[linear-gradient(90deg,rgba(151,0,255,1)_37%,rgba(0,183,159,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Raleway',Helvetica] font-normal text-transparent text-[100px] tracking-[0.26px] leading-[100px] whitespace-nowrap">
          Media
        </div>
      </div>

      <div
        className="absolute top-[346px] left-[522px] w-[214px] h-[406px] bg-[linear-gradient(180deg,rgba(139,56,196,0.3)_0%,rgba(32,10,48,0.3)_100%)]"
        aria-hidden="true"
      />

      <div
        className="absolute top-[1075px] left-[522px] w-[214px] h-[268px] bg-[linear-gradient(180deg,rgba(49,28,62,0.4)_0%,rgba(91,0,153,0.4)_100%)]"
        aria-hidden="true"
      />

      {contentImages.map((image) => (
        <img
          key={image.id}
          className={`absolute aspect-[${image.aspectRatio}]`}
          style={{
            top: image.position.top,
            left: image.position.left,
            width: image.dimensions.width,
            height: image.dimensions.height,
          }}
          alt={image.alt}
          src={image.src}
        />
      ))}

      <img
        className="absolute w-[61.01%] h-[61.11%] top-[38.89%] left-[38.99%]"
        alt=""
        src="https://c.animaapp.com/6R4bwcvr/img/vector.svg"
        aria-hidden="true"
      />

      <img
        className="absolute w-[79.78%] h-[53.18%] top-[46.82%] left-[20.22%]"
        alt=""
        src="https://c.animaapp.com/6R4bwcvr/img/group@2x.png"
        aria-hidden="true"
      />

      {statistics.map((stat) => {
        const isLeft = stat.align === "left";
        const isRight = stat.align === "right";
        const isCenter = stat.align === "center";

        return (
          <div
            key={stat.id}
            className={`flex flex-col items-${stat.align === "right" ? "end" : stat.align === "center" ? "center" : "start"} gap-5 absolute`}
            style={{
              top: stat.position.top,
              left: stat.position.left,
              width: stat.width,
            }}
          >
            <div
              className={`mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-white text-[120px] ${isCenter ? "text-center" : isRight ? "text-center" : ""} tracking-[0.37px] leading-[120px] relative self-stretch`}
            >
              {stat.value}
            </div>

            <p
              className={`relative ${isCenter ? "w-[230px]" : "self-stretch"} [font-family:'Raleway',Helvetica] font-normal text-white text-[40px] ${isCenter ? "text-center" : isRight ? "text-right" : ""} tracking-[${isCenter ? "-0.15px" : isRight ? "0.37px" : "-0.15px"}] leading-${isCenter || isRight ? "10" : stat.id === 4 ? "[30px]" : "10"} ${isRight ? "" : ""}`}
            >
              {stat.description.split("\n").map((line, index, array) => (
                <span key={index}>
                  {line}
                  {index < array.length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>
        );
      })}

      <img
        className="absolute top-[1036px] left-[759px] w-[213px] h-[377px]"
        alt=""
        src="https://c.animaapp.com/6R4bwcvr/img/frame-70.svg"
        aria-hidden="true"
      />

      <div className="flex flex-col w-[677px] items-start gap-2 absolute top-[1510px] left-[92px]">
        <h3 className="relative self-stretch mt-[-1.00px] bg-[linear-gradient(90deg,rgba(151,0,255,1)_6%,rgba(0,183,159,1)_20%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Raleway',Helvetica] font-semibold text-transparent text-[40px] tracking-[-0.31px] leading-10">
          Plataformas
        </h3>

        <img
          className="relative self-stretch w-full h-[149px] ml-[-7.00px]"
          alt="Plataformas de medios digitales"
          src="https://c.animaapp.com/6R4bwcvr/img/frame-93.svg"
        />
      </div>
    </section>
  );
}