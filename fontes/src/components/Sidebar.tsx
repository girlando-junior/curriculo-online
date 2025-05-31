import React from "react";

interface MenuItem {
  label: string;
  href: string;
}

interface NavbarProps {
  logo: any;
  title: string;
  menuItems: MenuItem[];
}

const Navbar: React.FC<NavbarProps> = ({ logo, title, menuItems }) => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-0 left-0 bg-[var(--color-primary)] text-text w-full shadow-md">
      <div className="mx-auto px-4 sm:px-5 lg:px-5">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            {/* <h1 className="text-[var(--color-white)] text-xl font-bold">
              {title}
            </h1> */}
            <img width={42} height={32} className="rounded-[8px]" src={logo} alt="logo" />
          </div>

          <div className="text-[var(--color-white)] flex space-x-4">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.href.substring(1))} // Remove o "#" do href
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
      </div>
    </div>
  );
};

export default Navbar;
