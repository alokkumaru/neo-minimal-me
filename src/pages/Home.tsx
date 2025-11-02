import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
const Home = () => {
  return <div className="min-h-screen pt-4 md:pt-8 pb-12 md:pb-20 px-3 md:px-6">
      <div className="max-w-6xl mx-auto bg-background border-neo border-foreground shadow-neo-lg rounded p-4 md:p-8">
        <Navigation />
        {/* Hero Section */}
        <section className="mb-12 md:mb-20">
          <div className="border-neo border-foreground shadow-neo-lg p-6 md:p-12 rounded mb-8 transform hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all mx-[4px] bg-slate-50">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 md:mb-6 text-primary-foreground">Hi, I'm Alok</h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary-foreground/90 font-medium mb-6 md:mb-8">I'm a consultant turned builder based in Bangalore. Always looking to solve hard, impactful problems.</p>
            <div className="flex flex-wrap gap-4 md:gap-6">
              <a href="mailto:your.email@example.com" className="hover:opacity-70 transition-opacity">
                <Mail className="w-8 h-8 md:w-10 md:h-10 text-black" />
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <Github className="w-8 h-8 md:w-10 md:h-10 text-black" />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <Linkedin className="w-8 h-8 md:w-10 md:h-10 text-black" />
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            

            
          </div>
        </section>


        {/* CTA Section */}
        
      </div>
    </div>;
};
export default Home;