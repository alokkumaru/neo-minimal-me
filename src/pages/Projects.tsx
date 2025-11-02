import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectsIcon from "@/assets/projects-icon.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      color: "bg-primary",
      github: "https://github.com/yourusername/project1",
      demo: "https://project1-demo.com",
      image: "🛍️",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates, team workspaces, and productivity analytics.",
      technologies: ["TypeScript", "React", "Firebase", "Tailwind"],
      color: "bg-secondary",
      github: "https://github.com/yourusername/project2",
      demo: "https://project2-demo.com",
      image: "✅",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Beautiful weather application with forecasts, maps, and location-based recommendations.",
      technologies: ["React", "OpenWeather API", "Chart.js"],
      color: "bg-accent",
      github: "https://github.com/yourusername/project3",
      demo: "https://project3-demo.com",
      image: "🌤️",
    },
    {
      id: 4,
      title: "Portfolio Generator",
      description: "Tool to create stunning portfolio websites with customizable templates and themes.",
      technologies: ["Next.js", "MDX", "Tailwind CSS"],
      color: "bg-success",
      github: "https://github.com/yourusername/project4",
      demo: "https://project4-demo.com",
      image: "🎨",
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for tracking social media metrics across multiple platforms.",
      technologies: ["React", "D3.js", "Express", "PostgreSQL"],
      color: "bg-card",
      github: "https://github.com/yourusername/project5",
      demo: "https://project5-demo.com",
      image: "📊",
    },
    {
      id: 6,
      title: "Recipe Finder",
      description: "Discover and save recipes with smart search, dietary filters, and meal planning features.",
      technologies: ["Vue.js", "Spoonacular API", "Vuex"],
      color: "bg-card",
      github: "https://github.com/yourusername/project6",
      demo: "https://project6-demo.com",
      image: "🍳",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto bg-background border-neo border-foreground shadow-neo-lg rounded p-8">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 flex items-center justify-center gap-4">
            My Work
            <img src={projectsIcon} alt="Projects" className="w-16 h-16 md:w-20 md:h-20" />
          </h1>
          <p className="text-2xl text-muted-foreground max-w-2xl mx-auto">
            Things I've built (selective)
          </p>
        </div>

        <div className="bg-card border-neo border-foreground shadow-neo-lg p-12 rounded text-center">
          <h2 className="text-4xl font-bold mb-4">Work In Progress</h2>
          <p className="text-xl text-muted-foreground">
            Project showcase coming soon!
          </p>
      </div>
    </div>
    </div>
  );
};

export default Projects;
