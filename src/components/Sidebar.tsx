import React, { useState } from "react";

interface MenuItem {
  label: string;
  href: string;
}

interface NavbarProps {
  logo: any;
  title: string;
  menuItems: MenuItem[];
}

const Navbar: React.FC<NavbarProps> = ({ logo, menuItems }) => {
  const [menuAberto, setarMenuAberto] = useState(false);

  const rolarParaSessao = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setarMenuAberto(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 bg-[var(--color-primary)] text-text w-full shadow-md p-4 z-50">
      <div className="flex justify-between items-center">
        <div className="flex-shrink-0">
          <img
            width={42}
            height={32}
            className="rounded-[8px] cursor-pointer"
            src={logo}
            alt="logo"
            onClick={() => window.location.reload()}
          />
        </div>

        <button
          onClick={() => setarMenuAberto(!menuAberto)}
          className="sm:hidden text-white focus:outline-none"
          aria-label="Alternar menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuAberto ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <div className="hidden sm:flex space-x-4 text-[var(--color-white)]">
          {menuItems.map((item, indice) => (
            <button
              key={indice}
              onClick={() => rolarParaSessao(item.href.substring(1))}
              className="relative px-3 py-2 text-sm font-medium transition duration-300 ease-in-out
                after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px]
                after:bg-[var(--color-primary-100)] after:transition-all after:duration-300 
                hover:after:w-full"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {menuAberto && (
        <div className="sm:hidden mt-2 flex flex-col bg-[var(--color-primary)] p-2 border-t border-solid border-[var(--color-primary-100)]">
          {menuItems.map((item, indice) => (
            <button
              key={indice}
              onClick={() => rolarParaSessao(item.href.substring(1))}
              className="py-2 px-3 text-center text-white hover:bg-[var(--color-primary-600)] rounded-md"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
