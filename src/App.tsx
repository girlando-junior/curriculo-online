import React from "react";
import Navbar from "./components/Sidebar";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre-Mim";
import img from "./assets/img/logo.jpg";
import Projetos from "./pages/Projetos";
import Footer from "./pages/Footer";

const App: React.FC = () => {
  const title = "Meu Portfólio";

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "Sobre Mim", href: "#sobre" },
    { label: "Projetos", href: "#projetos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <div>
      <Navbar logo={img} title={title} menuItems={menuItems} />
      <main className="pt-16">
        <Home />
        <Sobre />
        <Projetos/>
        <Footer/>
      </main>
    </div>
  );
};

export default App;
