import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const links = [
    { to: "/", label: "Home" },
    { to: "/blog", label: "Blog" },
    { to: "/projects", label: "Projects" },
    { to: "/cv", label: "CV" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-card border-neo border-foreground shadow-neo-lg px-4 py-3 rounded">
      <ul className="flex gap-2">
        {links.map((link) => {
          const isActive = location.pathname === link.to;
          
          return (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`px-4 py-2 rounded font-bold transition-all border-2 border-foreground ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-[3px_3px_0px_0px_hsl(var(--foreground))]"
                    : "bg-background hover:translate-x-0.5 hover:translate-y-0.5 shadow-[3px_3px_0px_0px_hsl(var(--foreground))] hover:shadow-none"
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
