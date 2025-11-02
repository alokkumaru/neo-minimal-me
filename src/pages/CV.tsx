import { Download, Briefcase, GraduationCap, Award, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const CV = () => {
  const experience = [
    {
      role: "Senior Frontend Developer",
      company: "Tech Company Inc.",
      period: "2022 - Present",
      description: "Leading frontend development for enterprise applications using React and TypeScript.",
    },
    {
      role: "Full Stack Developer",
      company: "Startup Co.",
      period: "2020 - 2022",
      description: "Built and maintained web applications using modern JavaScript frameworks.",
    },
    {
      role: "Junior Developer",
      company: "Digital Agency",
      period: "2019 - 2020",
      description: "Developed responsive websites and helped maintain client projects.",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "University Name",
      period: "2015 - 2019",
      description: "Focused on software engineering and web development.",
    },
  ];

  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
    { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "MongoDB"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Figma"] },
    { category: "Other", items: ["Agile", "Testing", "CI/CD", "API Design"] },
  ];

  const achievements = [
    "Led team of 5 developers on major product launch",
    "Reduced page load time by 60% through optimization",
    "Published 3 open-source libraries with 1000+ stars",
    "Speaker at Web Development Conference 2023",
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">Resume</h1>
          <p className="text-2xl text-muted-foreground mb-8">
            Download my CV or view my experience below
          </p>
          <Button size="lg">
            <Download className="w-5 h-5" />
            Download PDF
          </Button>
        </div>

        {/* Experience */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <Briefcase className="w-8 h-8" />
            <h2 className="text-4xl font-bold">Experience</h2>
          </div>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <div
                key={index}
                className="bg-card border-neo border-foreground shadow-neo p-6 rounded hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                  <div>
                    <h3 className="text-2xl font-bold">{job.role}</h3>
                    <p className="text-lg text-muted-foreground">{job.company}</p>
                  </div>
                  <span className="text-sm font-bold bg-secondary text-secondary-foreground px-3 py-1 rounded border-2 border-foreground mt-2 sm:mt-0">
                    {job.period}
                  </span>
                </div>
                <p className="text-muted-foreground">{job.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <GraduationCap className="w-8 h-8" />
            <h2 className="text-4xl font-bold">Education</h2>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-primary text-primary-foreground border-neo border-foreground shadow-neo p-6 rounded hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                  <div>
                    <h3 className="text-2xl font-bold">{edu.degree}</h3>
                    <p className="text-lg opacity-90">{edu.institution}</p>
                  </div>
                  <span className="text-sm font-bold bg-background text-foreground px-3 py-1 rounded border-2 border-foreground mt-2 sm:mt-0">
                    {edu.period}
                  </span>
                </div>
                <p className="opacity-80">{edu.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <Code className="w-8 h-8" />
            <h2 className="text-4xl font-bold">Skills</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {skills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="bg-secondary text-secondary-foreground border-neo border-foreground shadow-neo p-6 rounded hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all"
              >
                <h3 className="text-2xl font-bold mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-background text-foreground border-2 border-foreground text-sm font-bold rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <Award className="w-8 h-8" />
            <h2 className="text-4xl font-bold">Achievements</h2>
          </div>
          <div className="bg-accent text-accent-foreground border-neo border-foreground shadow-neo p-8 rounded">
            <ul className="space-y-4">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-2xl">→</span>
                  <span className="text-lg">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CV;
