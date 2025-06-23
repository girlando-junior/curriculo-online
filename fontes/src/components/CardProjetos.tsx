import React from "react";
import { FaGithub } from "react-icons/fa";
import CustomButton from "./ButtonLink";
import { FaLaptop } from "react-icons/fa";

interface PropriedadesCard {
  height?: string;
  width?: string;
  icon?: string;
  name?: string;
  color?: string;
  border?: string;
  hover?: string;
  link?: string;
  disabled?: boolean;
}

const buttons = [
  {
    height: "55px",
    width: "100%",
    name: "Projeto",
    icon: FaLaptop,
    color: "bg-blue-400",
    border: "rounded-[8px]",
    hover: "hover:bg-blue-900",
    link: "https://www.linkedin.com/in/girlando-junior/",
  },
  {
    height: "55px",
    width: "100%",
    name: "GitHub",
    icon: FaGithub,
    color: "bg-[#FFB84D]",
    border: "rounded-[8px]",
    hover: "hover:bg-blue-900",
    link: "https://github.com/girlando-junior",
  },
];

const CardProjetos: React.FC<PropriedadesCard> = ({
  height = "50px",
  width = "50px",
  icon = "",
  name = "Projeto",
  color = "",
  border = "",
  hover = "",
  link = "",
}) => {
  return (
    <section className="rounded-[12px] h-[auto] w-[330px] bg-[var(--color-primary)] p-[12px]">
      <div className="flex flex-col items-start gap-[12px]">
        <div className="bg-[var(--color-primary-100)] h-[156px] w-[306px] flex items-center justify-center overflow-hidden rounded-[8px]">
          <img
            src="/Icon.svg"
            alt="Logo"
            className="h-full w-full object-contain"
          />
        </div>

        <div className="text-white">
          <h1>{name}</h1>
        </div>

        <div className="text-white">
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        </div>

        <div className="text-white flex gap-[8px] flex-wrap">
          <img
            src="/Icon.svg"
            alt="Logo"
            className="h-[32px] w-[32px] object-contain"
          />

          <img
            src="/Icon.svg"
            alt="Logo"
            className="h-[32px] w-[32px] object-contain"
          />

          <img
            src="/Icon.svg"
            alt="Logo"
            className="h-[32px] w-[32px] object-contain"
          />

          <img
            src="/Icon.svg"
            alt="Logo"
            className="h-[32px] w-[32px] object-contain"
          />

          <img
            src="/Icon.svg"
            alt="Logo"
            className="h-[32px] w-[32px] object-contain"
          />

          <img
            src="/Icon.svg"
            alt="Logo"
            className="h-[32px] w-[32px] object-contain"
          />

          <img
            src="/Icon.svg"
            alt="Logo"
            className="h-[32px] w-[32px] object-contain"
          />
        </div>

        <div className="flex gap-[8px] w-full">
          {buttons.map((btn, index) => (
            <CustomButton key={index} {...btn} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardProjetos;
