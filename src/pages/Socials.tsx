import { Github, Linkedin, Twitter, Mail, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Socials = () => {
  const socialLinks = [
    {
      name: "GitHub",
      username: "@yourusername",
      url: "https://github.com/yourusername",
      icon: Github,
      color: "bg-card",
      description: "Check out my code",
    },
    {
      name: "LinkedIn",
      username: "Your Name",
      url: "https://linkedin.com/in/yourusername",
      icon: Linkedin,
      color: "bg-primary",
      description: "Let's connect professionally",
    },
    {
      name: "Twitter",
      username: "@yourusername",
      url: "https://twitter.com/yourusername",
      icon: Twitter,
      color: "bg-secondary",
      description: "Follow my journey",
    },
    {
      name: "Email",
      username: "your.email@example.com",
      url: "mailto:your.email@example.com",
      icon: Mail,
      color: "bg-accent",
      description: "Get in touch",
    },
    {
      name: "Instagram",
      username: "@yourusername",
      url: "https://instagram.com/yourusername",
      icon: Instagram,
      color: "bg-card",
      description: "See my photos",
    },
    {
      name: "YouTube",
      username: "Your Channel",
      url: "https://youtube.com/@yourusername",
      icon: Youtube,
      color: "bg-success",
      description: "Watch my videos",
    },
  ];

  return (
    <div className="min-h-screen pt-16 md:pt-32 pb-12 md:pb-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6">Let's Connect</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto px-4">
            Find me on these platforms. I'm always happy to chat!
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            const isLarge = index === 0 || index === 3;
            
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group ${isLarge ? "md:col-span-2" : ""}`}
              >
                <div
                  className={`${social.color} border-neo border-foreground shadow-neo p-8 rounded h-full flex flex-col justify-between group-hover:translate-x-2 group-hover:translate-y-2 group-hover:shadow-none transition-all`}
                >
                  <div>
                    <Icon className="w-12 h-12 mb-4" />
                    <h3 className="text-3xl font-bold mb-2">{social.name}</h3>
                    <p className="text-lg opacity-80 mb-2">{social.username}</p>
                    <p className="text-sm opacity-70">{social.description}</p>
                  </div>
                  <div className="mt-4">
                    <span className="inline-flex items-center gap-2 font-bold">
                      Visit Profile
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 md:mt-16 bg-card border-neo border-foreground shadow-neo-lg p-6 md:p-12 rounded text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Prefer Direct Contact?</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8">
            Send me an email and I'll get back to you as soon as possible.
          </p>
          <Button size="lg" asChild className="text-sm md:text-base">
            <a href="mailto:your.email@example.com">
              <Mail className="w-4 h-4 md:w-5 md:h-5" />
              Send Email
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Socials;
