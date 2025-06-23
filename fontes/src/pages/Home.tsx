import React, { useEffect, useState } from "react";
import CustomButton from "@/components/ButtonLink";
import { FaLinkedin, FaGithub, FaPhoneAlt } from "react-icons/fa";
import SkeletonHome from "@/components/SkeletonHome";
import { AiFillInstagram } from "react-icons/ai";

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

interface GitHubProfile {
  name: string;
  avatar_url: string;
}

const GitHubProfile: React.FC = () => {
  const [profile, setProfile] = useState<GitHubProfile | null>(null);

  const apiKey = import.meta.env.VITE_GITHUB_API_KEY;

  useEffect(() => {
    fetch("https://api.github.com/users/girlando-junior", {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data: GitHubProfile) => {
        setProfile(data);
      })
      .catch(() => {});
  }, []);

  if (!profile) return <SkeletonHome />;
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row-reverse items-center justify-center gap-[40px] p-4 bg-gray-100"
    >
      <div>
        <img
          className="rounded-[100px] w-[220px] h-[220px] sm:w-[247px] sm:h-[247px]"
          src={profile.avatar_url}
          alt="Foto do Perfil"
        />
      </div>

      <div className="flex flex-col items-center md:items-center text-center md:text-center max-w-[720px]">
        <p className="text-lg">Meu nome é {profile.name} e sou</p>
        <h1 className="text-[var(--color-primary)] text-[40px] sm:text-[48px] md:text-[56px] font-bold drop-shadow-lg">
          Desenvolvedor Front-end
        </h1>
        <p className="text-base mt-2">
          Transformo necessidades em aplicações reais, envolventes e funcionais.
          Desenvolvo sistemas através da minha paixão pela tecnologia,
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

export default GitHubProfile;
