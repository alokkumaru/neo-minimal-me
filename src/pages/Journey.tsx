import { Briefcase, GraduationCap, Award } from "lucide-react";
import Navigation from "@/components/Navigation";

const Journey = () => {
  const experience = [
    {
      role: "Entrepreneur in residence",
      company: "Urban Company",
      period: "Aug 2024 – Sept 2025",
      location: "Bangalore",
      description: "Built new consumer hardware products and established R&D at 'Native'. Native is a strategic D2C play to reposition Urban Company as a 'home solutions company' from 'home services' company (NTV USD 18 Mn in FY25, y-o-y growth >300%)",
      highlights: [
        "Led 0-1 for new product development of a breakthrough water purifier, 3X better than global benchmarks, from concept to launch",
        "Built R&D team of 10 and aligned cross-functional teams; established partnership with OEMs in Korea and India for production",
        "Spearheaded product development and testing; invented 2 novel (patent-pending) technologies critical to the product category",
        "Improved the accuracy of measuring machine health by 40p.p. using a novel system to monitor individual parts using product logs",
        "Revamped legacy products to cut customer revisits by 8 p.p., improved market share by 10 p.p., and customer rating to 4.6/5",
        "Explored nutraceuticals market entry for Native's RO product; identified whitespaces, and scouted OEMs for manufacturing"
      ]
    },
    {
      role: "Senior Associate",
      company: "L.E.K. Consulting",
      period: "Jul 2022 – Jun 2024",
      location: "Mumbai",
      description: "Led 10+ engagements across transaction advisory and strategy with top PE firms, global educational companies, and governments",
      sections: {
        strategyProjects: [
          "Crafted GTM strategy for the University of Southampton's India launch, the first foreign university campus (established in 2025)",
          "Advised the ministry of a major economy on public EdTech policy, led 3 C-level workshops to drive investments in the sector"
        ],
        dueDiligenceProjects: [
          "Delivered vendor due diligence to support the USD Xbn sale of the largest private K12 education provider in the USA",
          "Built the market report for the USD 200 million IPO for UAE's #2 K12 education provider, via TAM, growth, competitor analysis",
          "Prepared the investment memo to support secondary sale of the largest Higher Education network in Africa (USD X Bn deal)"
        ]
      }
    }
  ];

  const education = [
    {
      degree: "B.Tech in Industrial and Systems Engineering",
      institution: "IIT Kharagpur",
      period: "May. 2018 – May 2022",
      location: "Kharagpur",
      gpa: "CGPA 8.6/10"
    }
  ];

  const activities = [
    "Founder, CDC PrepApp: Developed a no-code mobile app to assist in placement and internship process; saw 1k+ signups",
    "Sports: Long distance running, PR 5k in 23 min and 10k in 61 min; rock climber V3-V6 levels; novice surfer",
    "Volunteering: Volunteered to clean 3 lakes and held awareness drives on water conservation with Parikrma Humanity Foundation"
  ];

  return (
    <div className="min-h-screen pt-2 md:pt-8 pb-8 md:pb-20 px-2 md:px-6">
      <div className="max-w-4xl mx-auto bg-background border-neo border-foreground shadow-neo-lg rounded p-3 md:p-8">
        <Navigation />
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 md:mb-6 flex items-center justify-center gap-2 md:gap-4">
            My Journey
            <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl">🚀</span>
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-muted-foreground mb-4 md:mb-8 px-2">
            Things I've done
          </p>
        </div>

        {/* Experience */}
        <section className="mb-8 md:mb-16">
          <div className="flex items-center gap-2 md:gap-4 mb-4 md:mb-8">
            <Briefcase className="w-5 h-5 md:w-8 md:h-8" />
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold">Experience</h2>
          </div>
          <div className="space-y-3 md:space-y-6">
            {experience.map((job, index) => (
              <div
                key={index}
                className="bg-card border-neo border-foreground shadow-neo p-3 md:p-6 rounded hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 md:mb-3 gap-1.5 md:gap-2">
                  <div>
                    <h3 className="text-lg md:text-2xl font-bold leading-tight">{job.role}</h3>
                    <p className="text-sm md:text-lg text-muted-foreground">{job.company}</p>
                  </div>
                  <div className="sm:text-right">
                    <span className="text-xs md:text-sm font-bold bg-secondary text-secondary-foreground px-2 md:px-3 py-0.5 md:py-1 rounded border-2 border-foreground inline-block mb-1">
                      {job.period}
                    </span>
                    <span className="text-xs md:text-sm text-muted-foreground block sm:inline sm:ml-2">{job.location}</span>
                  </div>
                </div>
                <p className="text-xs md:text-base text-muted-foreground leading-snug">{job.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-8 md:mb-16">
          <div className="flex items-center gap-2 md:gap-4 mb-4 md:mb-8">
            <GraduationCap className="w-5 h-5 md:w-8 md:h-8" />
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold">Education</h2>
          </div>
          <div className="space-y-3 md:space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-card text-foreground border-neo border-foreground shadow-neo p-3 md:p-6 rounded hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 md:mb-3 gap-1.5 md:gap-2">
                  <div>
                    <h3 className="text-lg md:text-2xl font-bold leading-tight">{edu.degree}</h3>
                    <p className="text-sm md:text-lg text-muted-foreground">{edu.institution}</p>
                    <p className="text-xs md:text-sm text-muted-foreground mt-0.5 md:mt-1">{edu.gpa}</p>
                  </div>
                  <div className="sm:text-right">
                    <span className="text-xs md:text-sm font-bold bg-background text-foreground px-2 md:px-3 py-0.5 md:py-1 rounded border-2 border-foreground inline-block mb-1">
                      {edu.period}
                    </span>
                    <span className="text-xs md:text-sm text-muted-foreground block sm:inline sm:ml-2">{edu.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Activities and Interests */}
        <section>
          <div className="flex items-center gap-2 md:gap-4 mb-4 md:mb-8">
            <Award className="w-5 h-5 md:w-8 md:h-8" />
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold">Activities and Interests</h2>
          </div>
          <div className="bg-card text-foreground border-neo border-foreground shadow-neo p-3 md:p-8 rounded">
            <ul className="space-y-2 md:space-y-4">
              {activities.map((activity, index) => (
                <li key={index} className="flex items-start gap-1.5 md:gap-3">
                  <span className="text-lg md:text-2xl">→</span>
                  <span className="text-xs md:text-base lg:text-lg leading-snug">{activity}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Journey;
