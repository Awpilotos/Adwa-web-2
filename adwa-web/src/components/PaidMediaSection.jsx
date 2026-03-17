import { ImageList,ImageListItem,Typography, Box} from '@mui/material';
import { useRef, useState, useEffect } from 'react';
import {useInView} from 'framer-motion';
import Counter from './ui/Counter';

import img1 from "../assets/img/gradiente_azul_rosa_morado.png";
import img2 from "../assets/img/fondo_transparente_d.png";
import img3 from "../assets/img/gradiente_rosa_peq.png";
import img4 from  "../assets/img/claqueta.jpg";
import img5 from "../assets/img/gradiente_rosa_peq.png";
import img6 from "../assets/img/fondo_transparente_.png";
import img7 from "../assets/img/gradiente_rosa_morado.png";
import img8 from  "../assets/img/gradient_mas_a.png";
import img9 from "../assets/img/gradiente_azul_rosa.png";
import img10 from "../assets/img/pieza_ajedrez.png";

const imagenes=[
        {
            id: 1,
            value: "200",
            prefix:"+",
            suffix:"",
            description: "Campañas\ngestionadas",
            src: img1,
            alt: "Gradiente",
            dimensions: { width: "214px", height: "273px" },
            aspectRatio: 0.40,
            pd:0,
            textAlign:"right",
            position:{bottom:"40%", right:"0px"},
        },
        {
            id: 2,
            value: "",
            prefix:"",
            suffix:"",
            description: "",
            src: img2,
            alt: "Gradiente rosa morado",
            dimensions: { width: "214px", height: "273px" },
            aspectRatio: 0.79,
            pd:-118,
        },
        {
            id: 3,
            value: "",
            prefix:"",
            suffix:"",
            description: "",
            src: img3,
            alt: "Gradiente",
            dimensions: { width: "214px", height: "273px" },
            aspectRatio: 0.53,
            pd:220,
        },
        {
            id: 4,
            value: "",
            prefix:"",
            suffix:"",
            description: "",
            src: img4,
            alt: "Claqueta",
            dimensions: { width: "214px", height: "273px" },
            aspectRatio: 0.78,
            pd:0,
        },
        {
            id: 5,
            value: "98",
            prefix:"",
            suffix:"%",
            description: "Tasa de Éxito",
            src: img5,
            alt: "Gradiente",
            dimensions: { width: "207px", height: "511px" },
            aspectRatio: 0.53,
            pd:0,
            textAlign:"center",
            position:{bottom:"-5%", right:"0px"},
        },
        {
            id: 6,
            value: "",
            prefix:"",
            suffix:"",
            description: "",
            src: img6,
            alt: "fondo transparente",
            dimensions: { width: "214px", height: "273px" },
            aspectRatio: 0.66,
            pd:0,
        },
        {
            id: 7,
            value: "10",
            prefix:"+",
            suffix:"",
            description: "En medios\ndigitales",
            src: img7,
            alt: "Gradiente rosa morado",
            dimensions: { width: "214px", height: "273px" },
            aspectRatio: 0.40,
            pd:0,
            textAlign:"center",
            position:{bottom:"50%", right:"0px"},
        },
        {
            id: 8,
            value: "",
            prefix:"",
            suffix:"",
            description: "",
            src: img8,
            alt: "Gradiente mas a",
            dimensions: { width: "214px", height: "273px" },
            aspectRatio: 0.56,
            pd:0,
        },
        {
            id: 9,
            value: "50",
            prefix:"+",
            suffix:"",
            description: "Marcas\nNacionales e Internacionales",
            src: img9,
            alt: "Gradiente azul rosa",
            dimensions: { width: "426px", height: "754px"},
            aspectRatio: 0.40,
            pd:40,
            textAlign:"right",
            position:{bottom:"80%", right:"0px"},
        },
        {
            id: 10,
            value: "",
            prefix:"",
            suffix:"",
            description: "",
            src: img10,
            alt: "Pieza ajedrez emporium",
            dimensions: {height: "511px" },
            aspectRatio: 0.42,
            pd:0,
        },
        {
            id: 11,
            value: "50",
            prefix:"+",
            suffix:"",
            description: "Clientes Satisfechos",
            src: img9,
            alt: "Gradiente",
            dimensions: {height: "511px"},
            aspectRatio: 0.40,
            pd:0,
            textAlign:"center",
            position:{bottom:"0%", left:"0px"},
        }
    ];
const partners = [
  { name: "Atomik_", opacity: "text-[#ffffff80]" },
  { name: "Kinesso_", opacity: "text-[#e4e4e4]" },
  { name: "IPG_", opacity: "text-white" },
  { name: "Opteam_", opacity: "text-[#e4e4e4]" },
  { name: "Estudio Tess_", opacity: "text-[#ffffff80]" },
];

export default function PaidMediaSection(){
  const sectionRef = useRef(null);
  const isSectionVisible = useInView(sectionRef, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isSectionVisible) {
      setTimeout(() => {
        setStartCounters(true);
      }, 100); // small pause before starting
    }
  }, [isSectionVisible]);

    return <div className="section-wrapper flex-col justify-center items-center">
      <div className="w-full max-w-[1000px] px-8 mt-[61px] mb-[151px]" ref={sectionRef}>
        <ImageList variant='masonry' cols={4} gap={8} sx={{ overflow: "visible" }}>
            <ImageListItem className='z-20'>
                <div className="flex flex-col items-start relative">
                    <img
                    src={img6}
                    loading="lazy"
                    style={{
                        display: 'block',
                        height: '350px',
                    }}></img>
                    <h2 className="mt-[-1.00px] font-normal text-white text-[55px] lg:text-[90px] lg:leading-[90px] tracking-[0.26px] ">
                        Paid
                    </h2>

                    <div className="bg-[linear-gradient(90deg,rgba(151,0,255,1)_37%,rgba(0,183,159,1)_100%)]
                        [-webkit-background-clip:text] bg-clip-text
                        [-webkit-text-fill-color:transparent]
                        text-[60px] leading-[60px] lg:text-[100px] lg:leading-[100px] tracking-[0.26px] font-normal">
                        Media
                    </div>
                </div>
            </ImageListItem>

                
            {imagenes.map((item) => (
            <ImageListItem key={item.id} >
              <Box sx={{ pt: `${item.pd}px` }}>
                <Box sx={{ position: "relative" }}>
                  <img
                    src={item.src}
                    alt={item.alt || ""}
                    loading="lazy"
                    decoding="async"
                    style={{
                        display: 'block',
                        width: '100%',
                        aspectRatio: item.aspectRatio,
                        objectFit: "cover",
                  }}
                  ></img>
                  <Typography
                    sx={{
                      position: "absolute",
                      color: "white",
                      borderRadius: "4px",
                      textAlign: item.textAlign,
                      fontFamily: "'Inter', sans-serif",
                      ...(item.position || {}),
                    }}
                  >
                    <Box component="span" 
                      sx={{ display: "block", 
                            fontWeight: 700,
                            lineHeight: {
                            xs: "40px",   
                            sm: "60px",   
                            md: "80px",   
                            lg: "100px",  },
                            fontSize: {
                            xs: "40px",   
                            sm: "60px",   
                            md: "80px",   
                            lg: "100px",  }}}
                      >
                      {item.prefix}<Counter value={item.value} start={isSectionVisible}/>{item.suffix}
                    </Box>

                    <Box
                      component="span"
                      sx={{
                        display: "block",
                        fontSize: {
                            xs: "20px",   
                            sm: "20px",   
                            md: "30px",   
                            lg: "40px",  },
                        lineHeight: {
                            xs: "20px",   
                            sm: "20px",   
                            md: "30px",   
                            lg: "40px",  },
                      }}
                    >
                      {item.description}
                    </Box>
                  </Typography>
                </Box>
              </Box>
            </ImageListItem>
            ))}
          </ImageList>
      </div>

      <div className='w-full items-start '>
        <h2 className="text-left font-semibold text-white text-[40px] leading-10 pl-10 lg:pl-20 tracking-[-0.31px]">
          Partners
        </h2>
        
        <p className="w-full text-center whitespace-nowrap overflow-hidden pl-10 lg:pl-20 text-5xl lg:text-8xl leading-[96px] tracking-[-0.31px]">
          {partners.map((partner, index) => (
            <span
              key={index}
              className={`${partner.opacity} inline-block tracking-[-0.30px]`}
            >
              {partner.name}
            </span>
          ))}
        </p>
      </div>
    </div>;
}