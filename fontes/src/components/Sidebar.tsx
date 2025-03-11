// src/components/Navbar.tsx
import React from "react";

// Tipo para os itens do menu
interface MenuItem {
  label: string;
  href: string;
}

// Tipo para as propriedades (props) do componente Navbar
interface NavbarProps {
  title: string;
  menuItems: MenuItem[];
}

const Navbar: React.FC<NavbarProps> = ({ title, menuItems }) => {
  return (
    <div className="fixed top-0 left-0 bg-primary text-text w-full">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Título da Navbar */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold">{title}</h1>
          </div>

          {/* Menu de navegação */}
          <div className="flex space-x-4">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="relative px-3 py-2 text-sm font-medium transition duration-300 ease-in-out 
                         after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] 
                         after:bg-primary-foreground after:transition-all after:duration-300 
                         hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
