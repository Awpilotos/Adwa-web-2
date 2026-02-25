export default function Navbar(){
    return <nav className="fixed top-0 z-50 transition-all w-250 duration-300 bg-white backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-centered h-14 sm:h-16 md:20">
                <div>
                    <img src="/adwa-logo.svg" alt="Adwa logo" className="w-8 h-6 sm:h-8"></img>
                </div>
                <span>
                    <span>Inicio</span>
                    <span>Nosotros</span>
                    <span>Portafolio</span>
                    <span>Contacto</span>
                </span>
            </div>
        </div>
    </nav>;
}