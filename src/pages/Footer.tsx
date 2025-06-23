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
  return (
    <footer className="bg-[var(--color-primary)] px-[80px] py-[12px] flex flex-col gap-[10px]">
      <div className="text-white rounded-lg py-[80px]">
        <div className="flex flex-col md:flex-row items-start justify-between">
          <div className="flex flex-col gap-4 w-1/2">
            <h1 className="text-xl font-bold">Girlando Junior</h1>
            <p className="text-gray-300">
              Um desenvolvedor web focado em front-end construindo o front-end
              de sites e Aplicações Web que conduzem ao sucesso da produto.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <h3 className="text-xl font-bold">Social</h3>
            <div className="flex gap-4 mt-4">
              {buttons.map((btn, index) => (
                <CustomButton key={index} {...btn} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="h-[90px] flex items-center justify-center border-t border-solid border-[#DDDDDD]">
        <p className="text-white">Feito por Girlando Junior  © Todos os direitos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
