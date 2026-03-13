import Iframe from 'react-iframe';

export default function Footer(){
  const contactInfo = [
    {
      icon: "../../img/correo.svg",
      label: "Email",
      value: "info@adwa.com.ec",
    },
    {
      icon: "../../img/telefono.svg",
      label: "Teléfono",
      value: "+593998115348",
    },
    {
      icon: "../../img/direccion.svg",
      label: "Ubicación",
      value: "Quito, Ecuador",
    },
  ];

  return (
    <footer className="relative w-full h-auto bg-transparent flex flex-col items-center gap-16 mt-[61px]">
      {/* Header / Title */}
      <div className="flex flex-col items-center gap-3 relative">
        <h2 className="text-white text-[40px] leading-[40px] lg:text-[80px] lg:leading-[80px] font-normal tracking-[0.26px]">
          Hablemos de tu{" "}
          <br className="md:hidden"/>
          <span className="gradient-text lg:text-[90px] lg:leading-[90px]">
          proyecto
          </span>
        </h2>
      </div>

      {/* Contenido principal */}
      <div className="flex flex-col lg:flex-row w-full max-w-[1280px] items-center lg:items-start gap-12 relative">
        {/* Informacion de contacto*/}
        <aside className="flex flex-col gap-6 relative w-full max-w-[616px] px-12">
          <h3 className="font-medium text-white text-3xl tracking-[0.40px] leading-9">
            Información de Contacto
          </h3>
          <p className="font-normal text-white text-base tracking-[-0.31px] leading-6">
            Estamos disponibles para discutir tu próximo proyecto. No dudes
            en contactarnos por cualquiera de estos medios.
          </p>

          <address className="flex flex-col gap-6 relative w-full">
            {contactInfo.map((contact, index) => (
              <div key={index} className="flex items-center gap-4 relative w-full">
                <img className="relative w-12 h-12" alt={contact.label} src={contact.icon} />
                <div className="flex flex-col relative">
                  <div className="h-5 relative">
                    <div className="text-[#99a1ae] font-normal text-sm tracking-[-0.15px] leading-5 whitespace-nowrap">
                      {contact.label}
                    </div>
                  </div>
                  <div className="h-6 relative">
                    <div className="font-normal text-white text-base tracking-[-0.31px] leading-6 whitespace-nowrap">
                      {contact.value}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </address>

          {/* Iconos redes sociales */}
          <div className="flex flex-col items-start gap-4 pt-8 relative w-full">
            <p className="font-normal text-[#99a1ae] text-sm tracking-[-0.15px] leading-5">
              Síguenos en redes sociales
            </p>
            <img
              className="h-12 relative w-full"
              alt="Redes sociales"
              src="../../img/redes_sociales.svg"
            />
          </div>
        </aside>

        {/* Header sobre el formulario */}
        <div className="flex flex-col w-full max-w-[616px] bg-transparent relative">
          {/* Titulo */}
          <div className="w-full mb-1">
            <p className="font-normal text-white text-xl text-center leading-7">
              ¿Tienes una idea? Nos encantaría escucharla <br />y ayudarte a hacerla realidad.
            </p>
          </div>

          {/* Iframe formulario Opteam */}
          <div className="w-full relative" >
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/yM2UktVVeCDmxW9hLlmu"
              style={{ width: "100%", minHeight: "500px", border: "none", borderRadius: "3px" }}
              id="inline-yM2UktVVeCDmxW9hLlmu"
              title="Formulario contacto nueva web"
            />
            </div>
            </div>
        </div>

        {/* Footer copyright */}
        <div className="flex flex-col items-center gap-3 relative pb-12 p-12">
            <p className="font-normal text-[#99a1ae] text-base text-center tracking-[-0.31px] leading-6">
            © 2026 adwa.com.ec. Todos los derechos reservados.
            </p>
            <p className="font-normal text-[#697282] text-sm text-center tracking-[-0.15px] leading-5">
            Creando el futuro digital, un proyecto a la vez.
            </p>
        </div>
    </footer>
  );
}