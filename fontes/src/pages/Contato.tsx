import CustomButton from "@/components/ButtonLink";
import Input from "@/components/Input";
import React, { useState } from "react";
import { FaLaptop } from "react-icons/fa";

const buttons = [
  {
    height: "36px",
    width: "100px",
    name: "Enviar",
    icon: FaLaptop,
    color: "bg-blue-400",
    border: "rounded-[6px]",
    hover: "hover:bg-blue-900",
  },
];

const Contato: React.FC = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  return (
    <section id="contato">
      <div className="text-black min-h-screen flex flex-col items-center px-4 md:px-[80px] py-[72px]">
        <h2 className="text-3xl font-bold text-center w-full">Contato</h2>

        <div className="mt-[48px] flex flex-col items-center justify-center w-full">
          <div className="w-full max-w-[580px] min-h-[416px] flex flex-col gap-[8px] py-[16px] px-[16px] rounded shadow-lg bg-white">
            <Input
              label="Nome"
              value={nome}
              height="36px"
              onChange={(e) => setNome(e.target.value)}
            />
            <Input
              label="E-mail"
              value={email}
              height="36px"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="Mensagem"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              height="150px"
            />

            <div className="flex items-center justify-end gap-[8px] w-full mt-2">
              {buttons.map((btn, index) => (
                <CustomButton key={index} {...btn} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
