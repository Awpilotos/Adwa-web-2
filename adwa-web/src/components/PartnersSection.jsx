
export default function PartnersSection(){
    
    const partners = [
    { name: "Atomik_", opacity: "text-[#ffffff80]" },
    { name: "Kinesso_", opacity: "text-[#e4e4e4]" },
    { name: "IPG_", opacity: "text-white" },
    { name: "Opteam_", opacity: "text-[#e4e4e4]" },
    { name: "Estudio Tess_", opacity: "text-[#ffffff80]" },
    ];

    return (
        <div className="section-wrapper-auto justify-center -mt-20 lg:-mt-20">
            <div className="section-container-large flex-row">

                <div className='w-full items-start '>
                    <h2 className="text-left font-semibold text-white text-[40px] leading-10 pl-10 lg:pl-20 tracking-[-0.31px]">
                    Partners
                    </h2>
                    
                    <p className="w-full text-center whitespace-nowrap overflow-hidden pl-10 lg:pl-20 text-5xl lg:text-8xl leading-[96px] tracking-[-0.31px]">
                    {partners.map((partner, index) => (
                        <span
                        key={index}
                        className={`${partner.opacity} inline-block tracking-[-0.30px]`}
                        >
                        {partner.name}
                        </span>
                    ))}
                    </p>
                </div>

                <div className="w-full flex flex-col md:flex-row mt-15 md:mt-25 px-6 md:px-10">
                    {/* Left column */}
                    <div className="w-full md:w-[58%] flex items-end justify-center p-8 md:p-6 lg:p-[40px]">
                        <h2 className="text-white text-4xl md:text-[42px] lg:text-[50px] font-light leading-tight">
                            "No importa cuantos <br className="hidden md:block" /> seguidores tienes, sino <br className="hidden lg:block"/>
                            <span className="tracking-[0.26px] bg-gradient-to-r from-[#9700FF] to-[#00B79F] bg-clip-text text-transparent font-medium">
                                lo que tienes que contar"
                            </span>
                        </h2>
                    </div>

                    {/* Right column */}
                    <div className="w-full md:w-[42%] flex items-end justify-center p-8 -mt-[20px] md:mt-0 md:p-[40px]">
                        <p className="text-left text-white md:text-[16px] lg:text-[18px]">
                        No nos limitamos a crear anuncios visualmente atractivos; nuestro objetivo principal es garantizar que cada campaña publicitaria tenga un propósito claro y contribuya a los objetivos comerciales de nuestros clientes.
                        </p>
                    </div>
                </div>

            </div>

        </div>
    );
}
