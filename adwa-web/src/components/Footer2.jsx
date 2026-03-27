import { footerData } from "../data/footerData";

const Footer2 = () => {
  return (
    <footer className="w-full text-white">

        {/* TOP */}
        <div className="bg-[linear-gradient(90deg,#7A1EB8_0%,#360E52_100%)]">
            <div className="max-w-[1200px] mx-auto px-[60px] sm:px-[60px] md:px-[60px] lg:px-12 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* LEFT */}
                <div className="flex flex-col gap-4">
                    <div className="text-2xl font-bold mb-[40px]">
                        <img alt="adwa logo" src="/adwa_logo_inverted.svg"/>
                    </div>

                    <p className="text-sm text-white max-w-[280px]">
                        {footerData.description}
                    </p>
                </div>

                {/* CENTER */}
                <div className="flex flex-col gap-6 md:justify-center md:items-center">
                    <div className="flex flex-col gap-6 w-fit">
                        {footerData.contact.map((item) => (
                        <div key={item.id} className="flex items-start gap-3">
                            <img
                                src={item.icon}
                                alt={item.label}
                                className="w-5 h-5 mt-1 opacity-70"
                            />
                            <div>
                                <p className="text-xs text-white/60">{item.label}</p>
                                <p className="text-sm">{item.value}</p>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>

                {/* RIGHT */}
                <div className="flex flex-col gap-4 md:items-end justify-end mb-[45px]">
                    <p className="text-sm text-white/70">
                        Síguenos en redes sociales
                    </p>

                    <div className="flex gap-4">
                        {footerData.social.map((item) => (
                        <a
                            key={item.id}
                            href={item.href}
                            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
                        >
                            <img src={item.icon} alt={item.id} className="w-5 h-5" />
                        </a>
                        ))}
                    </div>
                </div>
            
            </div>
        </div>

        {/* BOTTOM */}
        <div className="bg-[linear-gradient(90deg,#5A0994_0%,#1C032E_100%)]">
            <div className="w-full border-t border-white/10 py-[15px] text-center text-xs text-white px-6">
                <p>{footerData.copyright}</p>
                <p className="mt-1">{footerData.tagline}</p>
            </div>
        </div>
    </footer>
  );
};

export default Footer2;
