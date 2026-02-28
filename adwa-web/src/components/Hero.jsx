
export default function Hero(){
    return <div className="relative flex w-full h-[500px] min-h-screen justify-center items-center bg-[url('/img/dark-blue-gradient.png')] bg-cover bg-center z-0">
        <div className="flex flex-wrap gap-0 justify-center w-full">
            <div className="w-full justify-center text-white [font-family:'Raleway',Helvetica] font-medium text-sm text-center whitespace-nowrap">
                CREATIVIDAD + INTELIGENCIA ARTIFICIAL
            </div>

            <div className="w-full justify-center text-white [font-family:'Raleway',Helvetica] font-medium text-sm text-center whitespace-nowrap">
                <h1 className="w-full text-white [font-family:'Raleway',Helvetica] font-normal text-center text-[70px] leading-[75px]">
                    <span>TU ERES EL</span><br/>
                    <span className="font-bold">PROTAGONISTA</span><br/>
                    <span>DE TU MARCA</span>
                </h1>
            </div>

            <div className="justify-center w-full whitespace-nowrap">
                <p className="text-white text-center">Diseñamos tu estrategia de liderazgo digital, te entrenamos en<br/>
                comunicación auténtica y generamos un impacto medible en tu industria.</p>
            </div>

            <button className="inline-flex items-center justify-center gap-2.5 px-4 py-3 absolute top-[761px] left-[calc(50.00%_-_111px)] rounded-[20px] bg-[linear-gradient(90deg,rgba(151,0,255,1)_37%,rgba(0,183,159,1)_100%)]">
                <span className="relative w-fit mt-[-1.00px] [font-family:'Nunito',Helvetica] font-semibold text-white text-base text-center tracking-[-0.31px] leading-6 whitespace-nowrap">
                Agenda una sesión gratuita
                </span>
            </button>

        </div>
        
    </div>;
}   