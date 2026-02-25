import Navbar from "./components/Navbar";
import PaidMediaSection from "./components/PaidMediaSection";
import Hero from "./components/Hero";
import SpotSection from "./components/SpotSection";
import ProductoraSection from "./components/ProductoraSection";
import IASection from "./components/IASection";
import CampanasSection from './components/CampanasSection';
import Footer from "./components/Footer";

function App() {
  return (
      <div className="min-h-screen bg-slate-950 overflow-hidden">
        <Navbar/>
        <Hero/>
        <SpotSection/>
        <PaidMediaSection/>
        <ProductoraSection/>
        <CampanasSection/>
        <IASection/>
        <Footer/>
      </div>
  )
}

export default App
