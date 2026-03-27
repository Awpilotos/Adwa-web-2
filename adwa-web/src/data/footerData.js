import correo from "../assets/img/correo.svg"; 
import telefono from "../assets/img/telefono.svg";
import direccion from "../assets/img/direccion.svg";
import instagram from "../assets/img/instagram.svg"; 
import linkedin from "../assets/img/linkedin.svg"; 
import tiktok from "../assets/img/tiktok.svg"; 

export const footerData = {
  description:
    "ADWA impulsa el crecimiento de tu marca con estrategias de marketing basadas en datos, enfocadas en generar resultados reales y medibles.",

  contact: [
    {
      id: "email",
      label: "Email",
      value: "info@adwa.com.ec",
      icon: correo,
    },
    {
      id: "phone",
      label: "Teléfono",
      value: "+593 99 801 5134",
      icon: telefono,
    },
    {
      id: "location",
      label: "Ubicación",
      value: "Quito, Ecuador",
      icon: direccion,
    },
  ],

  social: [
    {
      id: "instagram",
      icon: instagram,
      href: "#",
    },
    {
      id: "linkedin",
      icon: linkedin,
      href: "#",
    },
    {
      id: "tiktok",
      icon: tiktok,
      href: "#",
    },
  ],

  copyright: "© 2026 adwa.com.ec. Todos los derechos reservados.",
  tagline: "Creando el futuro digital, un proyecto a la vez.",
};
