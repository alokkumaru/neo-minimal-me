import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
const Home = () => {
  return <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="mb-20">
          <div className="border-neo border-foreground shadow-neo-lg p-12 rounded mb-8 transform hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all mx-[4px] bg-slate-50">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-primary-foreground">Hi, I'm Alok</h1>
            <p className="text-2xl md:text-3xl text-primary-foreground/90 font-bold mb-8">I'm a consultant turned builder based in Bangalore. Always looking to solve hard, impactful problems.</p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a href="mailto:your.email@example.com">
                  <Mail className="w-5 h-5 text-black" />
                  Email Me
                </a>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 text-black" />
                  GitHub
                </a>
              </Button>
              <Button variant="accent" size="lg" asChild>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 text-black" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-secondary border-neo border-foreground shadow-neo p-8 rounded">
              <h2 className="text-3xl font-bold mb-4 text-secondary-foreground">What I Do</h2>
              <p className="text-lg text-secondary-foreground/80">
                I design and develop beautiful, functional websites and applications. 
                Specializing in modern web technologies and user experience.
              </p>
            </div>

            <div className="bg-accent border-neo border-foreground shadow-neo p-8 rounded">
              <h2 className="text-3xl font-bold mb-4 text-accent-foreground">Currently</h2>
              <p className="text-lg text-accent-foreground/80">
                Working on exciting projects, learning new technologies, 
                and always looking for the next challenge.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8">Quick Links</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/projects" className="group">
              <div className="bg-card border-neo border-foreground shadow-neo p-6 rounded h-full group-hover:translate-x-2 group-hover:translate-y-2 group-hover:shadow-none transition-all">
                <h3 className="text-2xl font-bold mb-2">Projects</h3>
                <p className="text-muted-foreground">Check out my work</p>
                <ArrowRight className="w-6 h-6 mt-4" />
              </div>
            </Link>

            <Link to="/blog" className="group">
              <div className="bg-card border-neo border-foreground shadow-neo p-6 rounded h-full group-hover:translate-x-2 group-hover:translate-y-2 group-hover:shadow-none transition-all">
                <h3 className="text-2xl font-bold mb-2">Blog</h3>
                <p className="text-muted-foreground">Read my thoughts</p>
                <ArrowRight className="w-6 h-6 mt-4" />
              </div>
            </Link>

            <Link to="/socials" className="group">
              <div className="bg-card border-neo border-foreground shadow-neo p-6 rounded h-full group-hover:translate-x-2 group-hover:translate-y-2 group-hover:shadow-none transition-all">
                <h3 className="text-2xl font-bold mb-2">Socials</h3>
                <p className="text-muted-foreground">Connect with me</p>
                <ArrowRight className="w-6 h-6 mt-4" />
              </div>
            </Link>

            <Link to="/cv" className="group">
              <div className="bg-card border-neo border-foreground shadow-neo p-6 rounded h-full group-hover:translate-x-2 group-hover:translate-y-2 group-hover:shadow-none transition-all">
                <h3 className="text-2xl font-bold mb-2">Resume</h3>
                <p className="text-muted-foreground">View my CV</p>
                <ArrowRight className="w-6 h-6 mt-4" />
              </div>
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-card border-neo border-foreground shadow-neo-lg p-12 rounded text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </section>
      </div>
    </div>;
};
export default Home;