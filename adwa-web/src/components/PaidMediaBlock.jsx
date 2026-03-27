import React from "react";
import CounterOP from "./ui/CounterOP";

const PaidMediaBlock = React.memo(({ item }) => {
  const width = parseInt(item.dimensions.width);
  const height = parseInt(item.dimensions.height);

  return (
    <div
      className="
        relative w-full
        lg:w-[214px]
      "
      style={{
        aspectRatio: `${width} / ${height}`, // mobile scaling
        height: undefined,
        marginTop:
          typeof window !== "undefined" && window.innerWidth >= 1024 && item.pt
            ? `${item.pt}px`
            : undefined,
      }}
    >
      {/* Desktop fixed height */}
      <div className="hidden lg:block" style={{ height: item.dimensions.height }} />

      {/* Image */}
      <img
        src={item.src}
        alt={item.alt}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* TEXT (unchanged from your last correct version) */}
      {item.value && (
        <div
          className="absolute text-white whitespace-nowrap"
          style={{
            ...item.textPosition,
            textAlign: item.textAlign || "center",
          }}
        >
          <div
            className="
              font-bold font-[Inter]

              text-[40px] leading-[40px]
              sm:text-[60px] sm:leading-[60px]
              md:text-[80px] md:leading-[80px]
              lg:text-[100px] lg:leading-[100px]
            "
          >
            {item.prefix}
            <CounterOP value={Number(item.value)} />
            {item.suffix}
          </div>

          <div
            className="
              font-[Inter]

              text-[20px] leading-[20px]
              sm:text-[20px] sm:leading-[20px]
              md:text-[30px] md:leading-[30px]
              lg:text-[40px] lg:leading-[40px]

              whitespace-pre-line
            "
          >
            {item.description}
          </div>
        </div>
      )}
    </div>
  );
});


export default PaidMediaBlock;

