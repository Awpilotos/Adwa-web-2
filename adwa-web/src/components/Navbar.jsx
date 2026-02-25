export default function Navbar(){
    return <nav className="fixed top-0 z-50 transition-all w-250 duration-300 bg-white backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-centered h-14 sm:h-16 md:20">
                <div>
                    <img src="/adwa-logo.svg" className="CodeFlow"></img>
                </div>
            </div>
        </div>
    </nav>;
}