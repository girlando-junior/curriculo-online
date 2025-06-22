import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

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
        className="w-full max-w-7xl"
      >
        {slides.map(({ title, description, buttonText }, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[var(--color-primary)] rounded-lg shadow-md p-6 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
              </div>
              <button
                type="button"
                className="self-start bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
              >
                {buttonText}
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projetos;
