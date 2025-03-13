import CustomButton from "@/components/ButtonLink";

import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const buttons = [
  {
    height: "55px",
    width: "55px",
    name: "",
    icon: FaLinkedin,
    color: "bg-blue-400",
    border: "rounded-full",
    hover: "hover:bg-blue-900",
    link: "https://www.linkedin.com/in/girlando-junior/",
  },
  {
    height: "55px",
    width: "55px",
    name: "",
    icon: FaGithub,
    color: "bg-blue-400",
    border: "rounded-full",
    hover: "hover:bg-gray-900",
  },
  {
    height: "55px",
    width: "55px",
    name: "",
    icon: FaTwitter,
    color: "bg-blue-400",
    border: "rounded-full",
    hover: "hover:bg-blue-600",
  },
];

const Home: React.FC = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-gray-100"
    >
      <div className="bg-primary">
        <p>Meu nome é Girlando Junior e sou</p>
        <h4>Desenvolvedor Front-end</h4>
        <p>
          Transformo necessidades em aplicações reais, evolventes e funcionais.
          Desenvolvo sistemas<br></br> através da minha paixão pela tecnologia,
          contribuindo com soluções inovadoras e eficazes para desafios
          complexos.
        </p>

        <div className="flex gap-4 mt-4">
          {buttons.map((btn, index) => (
            <CustomButton key={index} {...btn} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
