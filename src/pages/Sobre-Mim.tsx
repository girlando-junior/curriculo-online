import React from "react";
import { FaLinkedin } from "react-icons/fa";
import CustomButton from "@/components/ButtonLink";

const habilidadeSkils = [
  {
    height: "55px",
    width: "100%",
    name: "HTML",
    icon: FaLinkedin,
    color: "bg-[var(--color-primary-200)]",
    border: "rounded-[5px]",
    hover: "hover:bg-[var(--color-primary-100)]",
    disabled: true,
  },
  {
    height: "55px",
    width: "100%",
    name: "CSS",
    icon: FaLinkedin,
    color: "bg-[var(--color-primary-200)]",
    border: "rounded-[5px]",
    hover: "hover:bg-[var(--color-primary-100)]",
    disabled: true,
  },
  {
    height: "55px",
    width: "100%",
    name: "JavaScript",
    icon: FaLinkedin,
    color: "bg-[var(--color-primary-200)]",
    border: "rounded-[5px]",
    hover: "hover:bg-[var(--color-primary-100)]",
    disabled: true,
  },
  {
    height: "55px",
    width: "100%",
    name: "TypeScript",
    icon: FaLinkedin,
    color: "bg-[var(--color-primary-200)]",
    border: "rounded-[5px]",
    hover: "hover:bg-[var(--color-primary-100)]",
    disabled: true,
  },
  {
    height: "55px",
    width: "100%",
    name: "Angular",
    icon: FaLinkedin,
    color: "bg-[var(--color-primary-200)]",
    border: "rounded-[5px]",
    hover: "hover:bg-[var(--color-primary-100)]",
    disabled: true,
  },
  {
    height: "55px",
    width: "100%",
    name: "Git",
    icon: FaLinkedin,
    color: "bg-[var(--color-primary-200)]",
    border: "rounded-[5px]",
    hover: "hover:bg-[var(--color-primary-100)]",
    disabled: true,
  },
];

const Sobre: React.FC = () => {
  return (
    <section
      id="sobre"
      className="bg-[var(--color-primary-300)] min-h-screen flex flex-col items-center px-[80px] py-[72px]"
    >
      <div className="text-white rounded-lg mx-auto">
        <h2 className="text-3xl font-bold text-center w-full">Sobre mim</h2>
        <div className="mt-6 flex flex-col md:flex-row items-start justify-between">
          <div className="flex flex-col gap-4 w-1/2">
            <h3 className="text-xl font-bold">Conheça-me!</h3>
            <p className="text-gray-300">
              Sou um desenvolvedor web focado em front-end e gerenciar o
              Front-end de Sites e Aplicações Web que leva ao sucesso do produto
              geral. Confira alguns dos meu trabalho na seção Projetos.
            </p>
            <p className="text-gray-300">
              Também gosto de compartilhar conteúdo relacionado às coisas que
              tenho aprendi ao longo dos anos em Desenvolvimento Web, por isso
              pode ajudar outras pessoas da Comunidade de Desenvolvimento.
              Sinta-se à vontade para se conectar ou Siga-me no
              meu Linkedin e Instagram onde posto conteúdos úteis relacionados
              com Desenvolvimento Web e Programação.
            </p>
            <p className="text-gray-300">
              Estou aberto a oportunidades de emprego onde posso Contribuir,
              aprender e crescer. Se você tiver uma boa oportunidade que
              corresponde às minhas habilidades e experiência, então não
              hesite em entrar em contato comigo..
            </p>
            <div className="flex items-center">
              <CustomButton
                name="Download CV"
                width="180px"
                height="55px"
                border="rounded-[5px]"
                color="bg-[var(--color-primary-100)]"
              ></CustomButton>
            </div>
          </div>

          <div className="md:w-1/3 mt-6 md:mt-0">
            <h3 className="text-xl font-bold">Skills</h3>
            <div className="grid grid-cols-2 gap-3 mt-4">
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
