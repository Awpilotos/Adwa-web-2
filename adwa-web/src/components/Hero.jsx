
export default function Hero() {
  return (
    <div className="
      relative 
      section-wrapper 
      items-center
      bg-[url('/img/dark-blue-gradient.png')] 
      bg-cover 
      bg-center
      mt-[-90px]
    ">
      <div className="w-full flex flex-col items-center text-center text-white max-w-4xl mx-auto px-6 gap-10">

        <span className="text-sm font-medium tracking-wide">
          CREATIVIDAD + INTELIGENCIA ARTIFICIAL
        </span>

        <h1 className="text-[45px] leading-[55px] lg:text-[70px] lg:leading-[75px] font-normal">
          TU ERES EL <br />
          <span className="font-bold">PROTAGONISTA</span> <br />
          DE TU MARCA
        </h1>

        <p className="max-w-2xl text-[16px] lg:text-[20px]">
          Diseñamos tu estrategia de liderazgo digital, te entrenamos<br className="hidden lg:block"/> en
          comunicación auténtica y generamos un impacto<br className="hidden lg:block"/> medible en tu industria.
        </p>

        <button className="
          px-6 py-3 
          rounded-[20px] 
          bg-[linear-gradient(90deg,rgba(151,0,255,1)_37%,rgba(0,183,159,1)_100%)]
        ">
          Agenda una sesión gratuita
        </button>

      </div>
    </div>
  );
}