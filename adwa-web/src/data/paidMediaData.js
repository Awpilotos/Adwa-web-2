import img1 from "../assets/img/gradiente_azul_rosa_morado.webp";
import img2 from "../assets/img/fondo_transparente_d.webp";
import img3 from "../assets/img/gradiente_rosa_peq.webp";
import img4 from "../assets/img/claqueta.jpg";
import img6 from "../assets/img/fondo_transparente_.webp";
import img7 from "../assets/img/gradiente_rosa_morado.webp";
import img8 from "../assets/img/gradient_mas_a.webp";
import img9 from "../assets/img/gradiente_azul_rosa.webp";
import img10 from "../assets/img/pieza_ajedrez.webp";

export const columns=[
    {
        id: 1,
        src: img6,
        alt: "fondo transparente",
        dimensions: { width: "214px", height: "309px" },
        pt:120,
    },
    {
        id: 2,
        value: 200,
        prefix:"+",
        suffix:"",
        description: "Campañas\ngestionadas",
        src: img1,
        alt: "Gradiente azul rosa morado",
        dimensions: { width: "214px", height: "511px" },
        textAlign:"right",
        textPosition:{bottom:"40%", right:"0px"},
    },
    {
        id: 3,
        src: img2,
        alt: "letra d",
        dimensions: { width: "214px", height: "257px" },
        pt:-118,
    },
    {
        id: 4,
        src: img3,
        alt: "Gradiente rosa pequeño",
        dimensions: { width: "214px", height: "406px" },
        pt:120,
    },
    {
        id: 5,
        src: img4,
        alt: "Claqueta",
        dimensions: { width: "214px", height: "273px" },
        pt:0,
    },
    {
        id: 6,
        value: 98,
        prefix:"",
        suffix:"%",
        description: "Tasa de Éxito",
        src: img3,
        alt: "Gradiente rosa pequeño",
        dimensions: { width: "214px", height: "268px" },
        pt:0,
        textAlign:"center",
        textPosition:{bottom:"-5%", right:"0px"},
    },
    {
        id: 7,
        src: img6,
        alt: "fondo transparente",
        dimensions: { width: "214px", height: "309px" },
        pt:0,
    },
    {
        id: 8,
        value: 10,
        prefix:"+",
        description: "En medios\ndigitales",
        src: img7,
        alt: "Gradiente rosa morado",
        dimensions: { width: "214px", height: "536px" },
        textAlign:"center",
        textPosition:{bottom:"50%", right:"0px"},
    },
    {
        id: 9,
        src: img8,
        alt: "Gradiente mas a",
        dimensions: { width: "214px", height: "382px" },
        pt:0,
    },
    {
        id: 10,
        value: 50,
        prefix:"+",
        description: "Marcas\nNacionales e Internacionales",
        src: img9,
        alt: "Gradiente azul rosa",
        dimensions: { width: "214px", height: "511px"},
        textAlign:"right",
        textPosition:{bottom:"80%", right:"0px"},
    },
    {
        id: 11,
        src: img10,
        alt: "Pieza ajedrez emporium",
        dimensions: {width: "214px", height: "502px" },
    },
    {
        id: 12,
        value: 50,
        prefix:"+",
        suffix:"",
        description: "Clientes Satisfechos",
        src: img9,
        alt: "Gradiente",
        dimensions: {width: "214px", height: "376px"},
        textAlign:"center",
        textPosition:{bottom:"0%", left:"0px"},
    }
];