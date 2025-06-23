import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
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
  // Adicione quantos quiser
];

const Projetos: React.FC = () => {
  return (
    <section
      id="projetos"
      className="bg-gray-100 min-h-screen flex flex-col items-center px-6 md:px-20 py-16"
    >
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">
        Meus Projetos
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="w-full max-w-7xl pb-14"
      >
        {slides.map(({ title, description, buttonText }, index) => (
          <SwiperSlide key={index}>
            <CardProjetos />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projetos;
