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
            <div className="flex flex-wrap gap-6">
              <a href="mailto:your.email@example.com" className="hover:opacity-70 transition-opacity">
                <Mail className="w-10 h-10 text-black" />
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <Github className="w-10 h-10 text-black" />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <Linkedin className="w-10 h-10 text-black" />
              </a>
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


        {/* CTA Section */}
        
      </div>
    </div>;
};
export default Home;