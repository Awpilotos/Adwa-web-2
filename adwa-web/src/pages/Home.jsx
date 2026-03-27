import React from "react";
import Navbar2 from "../components/Navbar2";
import PaidMediaSectionOP from "../components/PaidMediaSectionOP";
import ConceptSection from "../components/ConceptSection";
import Hero2 from "../components/Hero2";
import SpotSection from "../components/SpotSection";
import ProductoraSection from "../components/ProductoraSection";
import IASection from "../components/IASection";
import CampanasSection from '../components/CampanasSection';
import PartnersSection from "../components/PartnersSection";
import Footer2 from "../components/Footer2";

export default function Home() {
  return (
    <>
        <Navbar2/>
        <Hero2/>
        <ConceptSection/>
        <SpotSection/>
        <IASection/>
        <PartnersSection/>
        <PaidMediaSectionOP/>
        <CampanasSection/>
        <ProductoraSection/>
        <Footer2/>
    </>
);
}