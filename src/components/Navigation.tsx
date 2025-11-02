import { Link, useLocation } from "react-router-dom";
import { Home, Grid, BookOpen, Briefcase, FileText } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const links = [
    { to: "/", label: "Home", icon: Home },
    { to: "/socials", label: "Socials", icon: Grid },
    { to: "/blog", label: "Blog", icon: BookOpen },
    { to: "/projects", label: "Projects", icon: Briefcase },
    { to: "/cv", label: "CV", icon: FileText },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-card border-neo border-foreground shadow-neo-lg px-4 py-3 rounded">
      <ul className="flex gap-2">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = location.pathname === link.to;
          
          return (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`flex items-center gap-2 px-4 py-2 rounded font-bold transition-all border-2 border-foreground ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-[3px_3px_0px_0px_hsl(var(--foreground))]"
                    : "bg-background hover:translate-x-0.5 hover:translate-y-0.5 shadow-[3px_3px_0px_0px_hsl(var(--foreground))] hover:shadow-none"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{link.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
