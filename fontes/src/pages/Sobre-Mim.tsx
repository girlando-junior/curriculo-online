import React from "react";
import { FaLinkedin } from "react-icons/fa";
import CustomButton from "@/components/ButtonLink";

const habilidadeSkils = [
  { name: "HTML", icon: FaLinkedin },
  { name: "CSS", icon: FaLinkedin },
  { name: "JavaScript", icon: FaLinkedin },
  { name: "TypeScript", icon: FaLinkedin },
  { name: "Angular", icon: FaLinkedin },
  { name: "Git", icon: FaLinkedin },
].map((item) => ({
  ...item,
  height: "55px",
  width: "100%",
  color: "bg-[var(--color-primary-200)]",
  border: "rounded-[5px]",
  hover: "hover:bg-[var(--color-primary-100)]",
  disabled: true,
}));

const Sobre: React.FC = () => {
  return (
    <section
      id="sobre"
      className="bg-[var(--color-primary-300)] min-h-screen flex flex-col items-center px-6 sm:px-10 md:px-20 py-12"
    >
      <div className="text-white rounded-lg w-full max-w-6xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-center w-full">
          Sobre mim
        </h2>

        <div className="mt-8 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          {/* Texto */}
          <div className="flex flex-col gap-4 w-full lg:w-2/3">
            <h3 className="text-lg sm:text-xl font-bold">Conheça-me!</h3>
            <p className="text-gray-300 text-sm sm:text-base text-justify">
              Sou um desenvolvedor web focado em front-end e gerenciar o
              Front-end de Sites e Aplicações Web que leva ao sucesso do produto
              geral. Confira alguns dos meus trabalhos na seção Projetos.
            </p>
            <p className="text-gray-300 text-sm sm:text-base text-justify">
              Também gosto de compartilhar conteúdo relacionado às coisas que
              aprendi ao longo dos anos em Desenvolvimento Web, por isso pode
              ajudar outras pessoas da Comunidade de Desenvolvimento. Sinta-se à
              vontade para se conectar ou seguir-me no meu LinkedIn e Instagram
              onde posto conteúdos úteis relacionados com Desenvolvimento Web e
              Programação.
            </p>
            <p className="text-gray-300 text-sm sm:text-base text-justify">
              Estou aberto a oportunidades de emprego onde posso contribuir,
              aprender e crescer. Se você tiver uma boa oportunidade que
              corresponde às minhas habilidades e experiência, então não hesite
              em entrar em contato comigo.
            </p>

            <div className="mt-2">
              <CustomButton
                name="Download CV"
                width="180px"
                height="55px"
                border="rounded-[5px]"
                color="bg-[var(--color-primary-100)]"
              />
            </div>
          </div>

          {/* Skills */}
          <div className="w-full lg:w-1/3">
            <h3 className="text-lg sm:text-xl font-bold">Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 mt-4">
              {habilidadeSkils.map((btn, index) => (
                <CustomButton key={index} {...btn} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
