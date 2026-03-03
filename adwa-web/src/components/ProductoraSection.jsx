import Masonry from '@mui/lab/Masonry';

export default function ProductoraSection(){

    const imagenes=[
        {
            id: 1,
            texto: "Paid Media",
            src: "../../img/fondo_transparente_.png",
            alt: "Claqueta filmación",
            dimensions: {width: "214px", height: "200px"},
            aspectRatio: "0.79",
        },
        {
            id: 2,
            texto:"",
            src: "../../img/gradiente_rosa_peq.png",
            alt: "Gradiente rosa morado",
            dimensions: { width: "214px", height: "273px" },
            aspectRatio: "0.79",
        },
        {
            id: 3,
            src: "../../img/gradiente_rosa_morado.png",
            alt: "Gradiente rosa morado",
            dimensions: { width: "214px", height: "273px" },
            aspectRatio: "0.79",
        },
        {
            id: 4,
            texto: "",
            src: "../../img/gradiente_azul_rosa.png",
            alt: "Claqueta filmación",
            dimensions: { width: "214px", height: "273px"},
            aspectRatio: "0.79",
        },
        {
            id: 5,
            src: "../../img/gradiente_rosa_morado.png",
            alt: "Gradiente rosa morado",
            dimensions: { width: "214px", height: "273px" },
            aspectRatio: "0.79",
        },
        {
            id: 6,
            src: "../../img/pieza_ajedrez.png",
            alt: "Ajedrez",
            dimensions: { width: "214px", height: "273px" },
            aspectRatio: "0.79",
        },
        {
            id: 7,
            src: "../../img/gradiente_azul_rosa.png",
            alt: "Gradiente azul rosa",
            dimensions: { width: "207px", height: "511px" },
            aspectRatio: "2.47",
        },
        {
            id: 8,
            src: "../../img/gradiente_azul_rosa_morado.png",
            alt: "Gradiente azul rosa morado",
            position: { top: "165px", left: "995px" },
            dimensions: { width: "207px", height: "511px" },
            aspectRatio: "2.47",
        },
        {
            id: 9,
            src: "../../img/gradiente_celeste rosa.png",
            alt: "Gradiente celeste rosa",
            dimensions: { width: "207px", height: "511px" },
            aspectRatio: "2.47",
        },
        {
            id: 10,
            src: "../../img/gradiente_horizontal_rosa_azul.png",
            alt: "Gradiente horizontal",
            dimensions: { width: "207px", height: "511px" },
            aspectRatio: "2.47",
        }
    ];


    return <div className="min-h-screen flex justify-center">
      <div className="w-full max-w-[1400px] px-8 mt-[61px] mb-[151px]">
        <Masonry columns={4} spacing={2}>
            {imagenes.map((item, index) => (
            <div key={index}>
                <p className='text-white'>{item.texto}</p>
                <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                style={{
                    display: 'block',
                    width: '100%',
                }}
            />
            </div>
            ))}
        </Masonry>
      </div>
        
    </div>;
}