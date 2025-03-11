// src/App.tsx
import React from "react";
import Navbar from "./components/Sidebar";

const App: React.FC = () => {
  // Defina o título da Navbar e os itens de menu
  const title = "Meu Portfólio";

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "Sobre Mim", href: "#sobre" },
    { label: "Projetos", href: "#projetos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <div>
      {/* Passando título e itens de menu como props */}
      <Navbar title={title} menuItems={menuItems} />

      <div className="p-6 bg-gray-100">
        {/* O conteúdo da sua aplicação vai aqui */}
        <h1 className="text-2xl font-bold">Bem-vindo ao meu portfólio!</h1>
        <p>Este é o conteúdo principal da página.</p>
      </div>
      <div className="p-6 bg-gray-100">
        {/* O conteúdo da sua aplicação vai aqui */}
        <h1 className="text-2xl font-bold">Bem-vindo ao meu portfólio!</h1>
        <p>Este é o conteúdo principal da página.</p>
      </div>
      <div className="p-6 bg-gray-100">
        {/* O conteúdo da sua aplicação vai aqui */}
        <h1 className="text-2xl font-bold">Bem-vindo ao meu portfólio!</h1>
        <p>Este é o conteúdo principal da página.</p>
      </div>
      <div className="p-6 bg-gray-100">
        {/* O conteúdo da sua aplicação vai aqui */}
        <h1 className="text-2xl font-bold">Bem-vindo ao meu portfólio!</h1>
        <p>Este é o conteúdo principal da página.</p>
      </div>
      <div className="p-6 bg-gray-100">
        {/* O conteúdo da sua aplicação vai aqui */}
        <h1 className="text-2xl font-bold">Bem-vindo ao meu portfólio!</h1>
        <p>Este é o conteúdo principal da página.</p>
      </div>
      <div className="p-6 bg-gray-100">
        {/* O conteúdo da sua aplicação vai aqui */}
        <h1 className="text-2xl font-bold">Bem-vindo ao meu portfólio!</h1>
        <p>Este é o conteúdo principal da página.</p>
      </div>

      <div className="p-6 bg-gray-100">
        {/* O conteúdo da sua aplicação vai aqui */}
        <h1 className="text-2xl font-bold">Bem-vindo ao meu portfólio!</h1>
        <p>Este é o conteúdo principal da página.</p>
      </div>
      <div className="p-6 bg-gray-100">
        {/* O conteúdo da sua aplicação vai aqui */}
        <h1 className="text-2xl font-bold">Bem-vindo ao meu portfólio!</h1>
        <p>Este é o conteúdo principal da página.</p>
      </div>
      <div className="p-6 bg-gray-100">
        {/* O conteúdo da sua aplicação vai aqui */}
        <h1 className="text-2xl font-bold">Bem-vindo ao meu portfólio!</h1>
        <p>Este é o conteúdo principal da página.</p>
      </div>
      <div className="p-6 bg-gray-100">
        {/* O conteúdo da sua aplicação vai aqui */}
        <h1 className="text-2xl font-bold">Bem-vindo ao meu portfólio!</h1>
        <p>Este é o conteúdo principal da página.</p>
      </div>
      <div className="p-6 bg-gray-100">
        {/* O conteúdo da sua aplicação vai aqui */}
        <h1 className="text-2xl font-bold">Bem-vindo ao meu portfólio!</h1>
        <p>Este é o conteúdo principal da página.</p>
      </div>

      <div className="p-6 bg-gray-100">
        {/* O conteúdo da sua aplicação vai aqui */}
        <h1 className="text-2xl font-bold">Bem-vindo ao meu portfólio!</h1>
        <p>Este é o conteúdo principal da página.</p>
      </div>
      <div className="p-6 bg-gray-100">
        {/* O conteúdo da sua aplicação vai aqui */}
        <h1 className="text-2xl font-bold">Bem-vindo ao meu portfólio!</h1>
        <p>Este é o conteúdo principal da página.</p>
      </div>
      <div className="p-6 bg-gray-100">
        {/* O conteúdo da sua aplicação vai aqui */}
        <h1 className="text-2xl font-bold">Bem-vindo ao meu portfólio!</h1>
        <p>Este é o conteúdo principal da página.</p>
      </div>

      <div className="p-6 bg-gray-100">
        {/* O conteúdo da sua aplicação vai aqui */}
        <h1 className="text-2xl font-bold">Bem-vindo ao meu portfólio!</h1>
        <p>Este é o conteúdo principal da página.</p>
      </div>
      <div className="p-6 bg-gray-100">
        {/* O conteúdo da sua aplicação vai aqui */}
        <h1 className="text-2xl font-bold">Bem-vindo ao meu portfólio!</h1>
        <p>Este é o conteúdo principal da página.</p>
      </div>
      <div className="p-6 bg-gray-100">
        {/* O conteúdo da sua aplicação vai aqui */}
        <h1 className="text-2xl font-bold">Bem-vindo ao meu portfólio!</h1>
        <p>Este é o conteúdo principal da página.</p>
      </div>
      <div className="p-6 bg-gray-100">
        {/* O conteúdo da sua aplicação vai aqui */}
        <h1 className="text-2xl font-bold">Bem-vindo ao meu portfólio!</h1>
        <p>Este é o conteúdo principal da página.</p>
      </div>
    </div>
  );
};

export default App;
