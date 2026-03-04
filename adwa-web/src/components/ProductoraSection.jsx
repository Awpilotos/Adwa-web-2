import Masonry from '@mui/lab/Masonry';
import { ImageList } from '@mui/material';
import { ImageListItem } from '@mui/material';


export default function ProductoraSection(){

    const imagenes=[
        {
            id: 1,
            value: "+200",
            description: "Campañas\ngestionadas",
            src: "../../img/gradiente_azul_rosa_morado.png",
            alt: "Gradiente",
            dimensions: { width: "214px", height: "273px" },
            aspectRatio: "0.79",
            pd:0,
        },
        {
            id: 2,
            value: "",
            description: "",
            src: "../../img/fondo_transparente_d.png",
            alt: "Gradiente rosa morado",
            dimensions: { width: "214px", height: "273px" },
            aspectRatio: "0.79",
            pd:-118,
        },
        {
            id: 3,
            value: "",
            description: "",
            src: "../../img/gradiente_rosa_peq.png",
            alt: "Gradiente",
            dimensions: { width: "214px", height: "273px" },
            aspectRatio: "0.79",
            pd:265,
        },
        {
            id: 4,
            value: "",
            description: "",
            src: "../../img/claqueta.png",
            alt: "Claqueta",
            dimensions: { width: "214px", height: "273px" },
            aspectRatio: "0.79",
            pd:0,
        },
        {
            id: 5,
            value: "98%",
            description: "Tasa de Éxito",
            src: "../../img/gradiente_rosa_peq.png",
            alt: "Gradiente",
            dimensions: { width: "207px", height: "511px" },
            aspectRatio: "2.47",
            pd:0,
        },
        {
            id: 6,
            value: "",
            description: "",
            src: "../../img/fondo_transparente_.png",
            alt: "Gradiente rosa morado",
            dimensions: { width: "214px", height: "273px" },
            aspectRatio: "0.79",
            pd:0,
        },
        {
            id: 7,
            value: "+10",
            description: "En medios\ndigitales",
            src: "../../img/gradiente_rosa_morado.png",
            alt: "Gradiente rosa morado",
            dimensions: { width: "214px", height: "273px" },
            aspectRatio: "0.79",
            pd:0,
        },
        {
            id: 8,
            value: "",
            description: "",
            src: "../../img/gradient_mas_a.svg",
            alt: "Claqueta",
            dimensions: { width: "214px", height: "273px" },
            aspectRatio: "0.79",
            pd:0,
        },
        {
            id: 9,
            value: "+50",
            description: "Marcas\nNacionales e Internacionales",
            src: "../../img/gradiente_azul_rosa.png",
            alt: "Claqueta filmación",
            dimensions: { width: "214px", height: "273px"},
            aspectRatio: "0.79",
            pd:0,
        },
        {
            id: 10,
            value: "",
            description: "",
            src: "../../img/pieza_ajedrez.png",
            alt: "Pieza ajedrez emporium",
            dimensions: {height: "511px" },
            aspectRatio: "2.47",
            pd:0,
        },
        {
            id: 11,
            value: "+50",
            description: "Clientes Satisfechos",
            src: "../../img/gradiente_azul_rosa.png",
            alt: "Gradiente",
            dimensions: {height: "511px"},
            aspectRatio: "2.47",
            pd:0,
        }
    ];


    return <div className="min-h-screen flex justify-center">
      <div className="w-full max-w-[1000px] px-8 mt-[61px] mb-[151px]">
        <ImageList variant='masonry' cols={4} gap={8}>
            <ImageListItem >
                <div className="flex flex-col items-start relative">
                    <img
                    src="../../img/fondo_transparente_.png"
                    loading="lazy"
                    style={{
                        display: 'block',
                        height: '400px',
                    }}></img>
                    <h2 className="mt-[-1.00px] font-normal text-white text-[90px] tracking-[0.26px] leading-[90px]">
                        Paid
                    </h2>

                    <div className="bg-[linear-gradient(90deg,rgba(151,0,255,1)_37%,rgba(0,183,159,1)_100%)]
                        [-webkit-background-clip:text] bg-clip-text
                        [-webkit-text-fill-color:transparent]
                        text-[100px] tracking-[0.26px] leading-[100px] font-normal">
                        Media
                    </div>
                </div>
            </ImageListItem>

                
            {imagenes.map((item, index) => (
            <ImageListItem key={index} sx={{ pt: `${item.pd}px` }}
>
                <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                style={{
                    display: 'block',
                    width: '100%',
                }}
                />
            </ImageListItem>
            ))}
        </ImageList>
      </div>
        
    </div>;
}