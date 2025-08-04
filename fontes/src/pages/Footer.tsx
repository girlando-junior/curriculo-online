import CustomButton from "@/components/ButtonLink";
import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";

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
    hover: "hover:bg-blue-900",
    link: "https://github.com/girlando-junior",
  },
  {
    height: "55px",
    width: "55px",
    name: "",
    icon: FaPhoneAlt,
    color: "bg-blue-400",
    border: "rounded-full",
    hover: "hover:bg-blue-900",
  },
  {
    height: "55px",
    width: "55px",
    name: "",
    icon: AiFillInstagram,
    color: "bg-blue-400",
    border: "rounded-full",
    hover: "hover:bg-blue-900",
    link: "https://www.instagram.com/girlando_18y/",
  },
];

const Footer: React.FC = () => {
  const dataAno = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-primary)] px-4 sm:px-8 md:px-16 lg:px-20 py-4 flex flex-col gap-10">
      <div className="text-white w-full max-w-screen-xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-8 text-center md:text-left">

          <div className="flex flex-col gap-4 w-full md:w-1/2">
            <h1 className="text-xl font-bold">Girlando Junior</h1>
            <p className="text-gray-300">
              Um desenvolvedor web focado em front-end construindo o front-end
              de sites e Aplicações Web que conduzem ao sucesso da produto.
            </p>
          </div>

          <div className="w-full md:w-auto">
            <h3 className="text-xl font-bold">Social</h3>
            <div className="flex justify-center md:justify-start gap-4 mt-4 flex-wrap">
              {buttons.map((btn, index) => (
                <CustomButton key={index} {...btn} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="py-4 flex items-center justify-center border-t border-solid border-[#DDDDDD]">
        <p className="text-white text-sm text-center">
          © {dataAno} Girlando Junior. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
