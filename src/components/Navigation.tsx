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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card border-neo border-foreground shadow-neo-lg px-4 py-3 mx-auto max-w-7xl rounded">
      <div className="flex items-center justify-between">
        <img src={logo} alt="Logo" className="h-8" />
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
