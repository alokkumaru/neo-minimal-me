import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">My Work</h1>
          <p className="text-2xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects I've worked on. Each one taught me something new.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`${project.color} border-neo border-foreground shadow-neo-lg rounded p-8 hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all`}
            >
              <div className="text-6xl mb-6">{project.image}</div>
              
              <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
              
              <p className="text-lg mb-6 opacity-90">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-background border-2 border-foreground text-sm font-bold rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-card border-neo border-foreground shadow-neo-lg p-12 rounded text-center">
          <h2 className="text-4xl font-bold mb-4">Like What You See?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always working on new projects. Check out my GitHub for more or get in touch to collaborate!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                View All Projects
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href="mailto:your.email@example.com">
                Start a Project
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
