import React from "react";
import Navbar from "../components/Navbar";
import PaidMediaSection from "../components/PaidMediaSection";
import Hero from "../components/Hero";
import Hero2 from "../components/Hero2";
import SpotSection from "../components/SpotSection";
import ProductoraSection from "../components/ProductoraSection";
import IASection from "../components/IASection";
import CampanasSection from '../components/CampanasSection';
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
        <Navbar/>
        <Hero2/>
        <SpotSection/>
        <PaidMediaSection/>
        <ProductoraSection/>
        <CampanasSection/>
        <IASection/>
        <Footer/>
    </>
);
}