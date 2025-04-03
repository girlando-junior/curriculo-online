import React, { useEffect, useState } from "react";
import CustomButton from "@/components/ButtonLink";
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
// Defina a interface para os dados do perfil do GitHub
interface GitHubProfile {
  name: string;
  avatar_url: string;
}

const GitHubProfile: React.FC = () => {
  const [profile, setProfile] = useState<GitHubProfile | null>(null);

  useEffect(() => {
    // Requisição à API do GitHub para pegar informações do perfil
    fetch("https://api.github.com/users/girlando-junior")
      .then((response) => response.json())
      .then((data: GitHubProfile) => setProfile(data))
      .catch((error) => console.error("Erro ao buscar dados do perfil", error));
  }, []);

  if (!profile) return <div>Carregando...</div>;

  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-gray-100 gap-[80px]"
    >
      <div className="flex flex-col items-center">
        <p>Meu nome é Girlando Junior e sou</p>
        <h1 className="text-[var(--color-primary)] text-[56px] font-bold drop-shadow-lg">
          Desenvolvedor Front-end
        </h1>
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

      <div>
        <img
          className="rounded-[100px]"
          src={profile.avatar_url}
          alt="Foto do Perfil"
          width={247}
          height={266}
        />
      </div>
    </section>
  );
};

export default GitHubProfile;
