
export default function Hero() {
  return (
    <section className="
      relative 
      w-full 
      min-h-screen
      flex 
      items-center 
      justify-center 
      bg-[url('/img/dark-blue-gradient.png')] 
      bg-cover 
      bg-center
      mt-[-90px]
    ">
      <div className="flex flex-col mt-[100px] items-center text-center text-white max-w-4xl px-6 gap-10">

        <span className="text-sm font-medium tracking-wide">
          CREATIVIDAD + INTELIGENCIA ARTIFICIAL
        </span>

        <h1 className="text-[70px] leading-[75px] font-normal">
          TU ERES EL <br />
          <span className="font-bold">PROTAGONISTA</span> <br />
          DE TU MARCA
        </h1>

        <p className="max-w-2xl">
          Diseñamos tu estrategia de liderazgo digital, te entrenamos<br/> en
          comunicación auténtica y generamos un impacto<br/> medible en tu industria.
        </p>

        <button className="
          px-6 py-3 
          rounded-[20px] 
          bg-[linear-gradient(90deg,rgba(151,0,255,1)_37%,rgba(0,183,159,1)_100%)]
        ">
          Agenda una sesión gratuita
        </button>

      </div>
    </section>
  );
}