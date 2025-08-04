import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import CardProjetos from "@/components/CardProjetos";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    title: "Projeto 1",
    description: "Descrição do projeto 1, mostrando detalhes interessantes.",
    buttonText: "Ver Projeto",
  },
  {
    title: "Projeto 2",
    description: "Descrição do projeto 2, com funcionalidades incríveis.",
    buttonText: "Ver Projeto",
  },
  {
    title: "Projeto 3",
    description: "Descrição do projeto 3, design moderno e clean.",
    buttonText: "Ver Projeto",
  },
  {
    title: "Projeto 4",
    description: "Descrição do projeto 4, código limpo e eficiente.",
    buttonText: "Ver Projeto",
  },
  {
    title: "Projeto 1",
    description: "Descrição do projeto 1, mostrando detalhes interessantes.",
    buttonText: "Ver Projeto",
  },
  {
    title: "Projeto 2",
    description: "Descrição do projeto 2, com funcionalidades incríveis.",
    buttonText: "Ver Projeto",
  },
  {
    title: "Projeto 3",
    description: "Descrição do projeto 3, design moderno e clean.",
    buttonText: "Ver Projeto",
  },
  {
    title: "Projeto 4",
    description: "Descrição do projeto 4, código limpo e eficiente.",
    buttonText: "Ver Projeto",
  },
];

const Projetos: React.FC = () => {
  const [mostrarNavegacao, setMostrarNavegacao] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMostrarNavegacao(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="projetos"
      className="flex justify-center items-center min-h-screen px-6 py-10 bg-gray-100"
    >
      <div className="w-full max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">
          Meus Projetos
        </h2>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          centeredSlides={true}
          grabCursor={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={mostrarNavegacao}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3 },
          }}
          className="!overflow-hidden !rounded-[25px] !pb-10 relative"
        >
          {slides.map(({ title, description, buttonText }, index) => (
            <SwiperSlide key={index} className="px-4">
              <div className="flex justify-center items-center p-4 w-full">
                <CardProjetos />
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-pagination [&>.swiper-pagination-bullet]:!bg-white [&>.swiper-pagination-bullet]:!opacity-100 [&>.swiper-pagination-bullet-active]:!bg-blue-600" />
        </Swiper>
      </div>
    </section>
  );
};

export default Projetos;
