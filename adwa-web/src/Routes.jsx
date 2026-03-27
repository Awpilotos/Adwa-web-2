import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import DisenoGrafico from "./pages/DisenoGrafico";
import Uxui from "./pages/Uxui";
import Contacto from "./pages/Contacto";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/diseno-grafico" element={<DisenoGrafico />}/>
      <Route path="/ux-ui" element={<Uxui />}/>
      <Route path="/contacto" element={<Contacto/>}/>
    </Routes>
  );
}