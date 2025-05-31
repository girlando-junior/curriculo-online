import React from "react";
import { FaDownload } from "react-icons/fa";

const skills = [
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Angular",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "Oracle",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
  },
];

const Sobre: React.FC = () => {
  return (
    <section
      id="sobre"
      className="bg-[var(--color-primary-300)] h-screen flex flex-col items-center px-20 py-[72px]"
    >
      <div className="text-white p-10 rounded-lg max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center w-full">Sobre mim</h2>
        <div className="mt-6 flex flex-col md:flex-row items-start justify-between">
          <div className="md:w-2/3">
            <h3 className="text-xl font-bold">Conheça-me!</h3>
            <p className="mt-4 text-gray-300">
              Sou um desenvolvedor web focado em front-end e gerenciar o
              Front-end de Sites e Aplicações Web que leva ao sucesso do produto
              geral. Confira alguns dos meus trabalhos na seção Projetos.
            </p>
            <p className="mt-4 text-gray-300">
              Também gosto de compartilhar conteúdo sobre desenvolvimento web
              para ajudar a comunidade. Sinta-se à vontade para se conectar
              comigo no LinkedIn e Instagram.
            </p>
            <p className="mt-4 text-gray-300">
              Estou aberto a oportunidades de emprego onde possa contribuir,
              aprender e crescer. Se você tiver uma boa oportunidade, entre em
              contato comigo.
            </p>
            <button className="mt-6 flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">
              <FaDownload /> Download CV
            </button>
          </div>
          <div className="md:w-1/3 mt-6 md:mt-0">
            <h3 className="text-xl font-bold">Skills</h3>
            <div className="grid grid-cols-2 gap-3 mt-4">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 bg-blue-700 px-3 py-2 rounded-lg"
                >
                  <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
