import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const links = [
    { to: "/", label: "Home" },
    { to: "/blog", label: "Blog" },
    { to: "/projects", label: "Projects" },
    { to: "/journey", label: "Journey" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="mb-10 md:mb-12 border-neo border-foreground shadow-neo-lg px-4 md:px-4 py-3 md:py-3 rounded relative" style={{ backgroundColor: '#FEE440' }}>
      <div className="flex items-center justify-between">
        <img src={logo} alt="Logo" className="h-12 md:h-16 -my-4 md:-my-6 -ml-3 md:-ml-4" />
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-2 sm:gap-4 md:gap-6">
          {links.map((link) => {
            const isActive = location.pathname === link.to;
            
            return (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`px-2 sm:px-3 md:px-4 py-1.5 md:py-2 rounded font-bold text-sm md:text-base transition-all ${
                    isActive
                      ? "text-primary"
                      : "hover:opacity-70"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 hover:opacity-70 transition-opacity"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-[#FEE440] border-neo border-foreground shadow-neo-lg rounded p-4 z-50">
          <ul className="flex flex-col gap-2">
            {links.map((link) => {
              const isActive = location.pathname === link.to;
              
              return (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 rounded font-bold text-base transition-all ${
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "hover:bg-foreground/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
