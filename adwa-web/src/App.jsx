import Navbar from "./components/Navbar";
import PaidMediaSection from "./components/PaidMediaSection";
import Hero from "./components/Hero";
import SpotSection from "./components/SpotSection";
import ProductoraSection from "./components/ProductoraSection";
import IASection from "./components/IASection";
import CampanasSection from './components/CampanasSection';
import Footer from "./components/Footer";

export default function App() {
  return (
      <>
          <Navbar/>
          <Hero/>
          <SpotSection/>
          <PaidMediaSection/>
          <ProductoraSection/>
          <CampanasSection/>
          <IASection/>
          <Footer/>
      </>
  );
}
