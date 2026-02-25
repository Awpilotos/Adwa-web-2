import { Menu } from 'lucide-react';

export default function Navbar(){
    return <nav className="fixed top-0 z-50 transition-all w-250 duration-300 bg-white backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-14 sm:h-16 md:20">
                <div className="flex items-center space-x-2 group cursor-pointer ">
                    <div>
                        <img src="/adwa-logo.svg" alt="Adwa logo" className="w-8 h-6 sm:h-8"></img>
                    </div>

                    {/* Nav Links */}
                    <div className="md:flex items-center space-x-6 lg:space-x-8">
                        <a href="#">Inicio</a>
                        <a href="#">Nosotros</a>
                        <a href="#">Portafolio</a>
                        <a href="#">Contacto</a>
                    </div>

                    <button className="md:hidden"> 
                        <Menu className='w-5 h-5'/>
                    </button>
                </div>
            </div>
        </div>
    </nav>;
}