import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const location = useLocation();
  
  const links = [
    { to: "/", label: "Home" },
    { to: "/blog", label: "Blog" },
    { to: "/projects", label: "Projects" },
    { to: "/journey", label: "Journey" },
  ];

  return (
    <nav className="mb-12 border-neo border-foreground shadow-neo-lg px-4 py-3 rounded relative" style={{ backgroundColor: '#FEE440' }}>
      <div className="flex items-center justify-between">
        <img src={logo} alt="Logo" className="h-16 -my-6 -ml-4" />
        <ul className="flex gap-6">
        {links.map((link) => {
          const isActive = location.pathname === link.to;
          
          return (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`px-4 py-2 rounded font-bold transition-all ${
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
      </div>
    </nav>
  );
};

export default Navigation;
