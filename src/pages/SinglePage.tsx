import { ArrowRight, Github, Linkedin, Calendar, Briefcase, GraduationCap, Award } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const SinglePage = () => {
  const posts = [
    {
      id: "storage-ai-infra",
      title: "Storage is the invisible opportunity in AI infra",
      excerpt: "AI workload is driving the necessity for cloud storage services, with cloud storage growing at ~20% CAGR.",
      date: "2025-09-30",
      slug: "storage-ai-infra",
    },
    {
      id: "quick-commerce-2025",
      title: "Quick commerce update 2025",
      excerpt: "$6Bn in 2025, growing at >70% CAGR. Quick comm is cannibalizing ecomm market in India (growing 5X faster).",
      date: "2025-09-15",
      slug: "quick-commerce-2025",
    },
    {
      id: "corporate-hegemony",
      title: "The Rise of Corporate Hegemony",
      excerpt: "Tracing how corporations came to dominate the global economic and political landscape.",
      date: "2025-01-10",
      slug: "corporate-hegemony",
    },
  ];

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
    <div className="min-h-screen pt-6 md:pt-8 pb-16 md:pb-20 px-5 md:px-6">
      <div className="max-w-6xl mx-auto bg-background border-neo border-foreground shadow-neo-lg rounded p-6 md:p-8">
        <Navigation />
        
        {/* Home Section */}
        <section id="home" className="mb-16 md:mb-24 scroll-mt-24">
          <div className="border-neo border-foreground shadow-neo-lg p-8 md:p-12 rounded mb-8 transform hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all mx-[4px] bg-slate-50">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 md:mb-6 text-primary-foreground">Hi, I'm Alok</h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary-foreground/90 font-medium mb-8 md:mb-8">I'm a consultant turned builder based in Bangalore. Always looking to solve hard, impactful problems.</p>
            <div className="flex flex-wrap gap-5 md:gap-6">
              <a href="https://x.com/alok_kumar_u" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <FaXTwitter className="w-9 h-9 md:w-10 md:h-10 text-black" />
              </a>
              <a href="https://github.com/alokkumaru" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <Github className="w-9 h-9 md:w-10 md:h-10 text-black" />
              </a>
              <a href="https://www.linkedin.com/in/alok-kumar-u/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                <Linkedin className="w-9 h-9 md:w-10 md:h-10 text-black" />
              </a>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="mb-16 md:mb-24 scroll-mt-24">
          <div className="text-center mb-10 md:mb-16">
            <div className="border-neo border-foreground shadow-neo-lg p-8 md:p-12 rounded mb-6 bg-slate-50 inline-block">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold flex items-center gap-3 md:gap-4 text-primary-foreground">
                Blog
                <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">✍</span>
              </h1>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto px-2">
              Things I think about
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 md:gap-6">
            {posts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group cursor-pointer block"
              >
                <article className="bg-card text-foreground border-neo border-foreground shadow-neo rounded p-5 md:p-6 h-full flex flex-col group-hover:translate-x-2 group-hover:translate-y-2 group-hover:shadow-none transition-all">
                  <p className="text-xs md:text-sm mb-4 md:mb-4 flex items-center gap-2">
                    <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </p>

                  <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-3">
                    {post.title}
                  </h2>

                  <p className="text-sm md:text-sm opacity-90 mb-4 md:mb-4 flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-2 font-bold mt-auto text-sm md:text-base">
                    Read More
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-16 md:mb-24 scroll-mt-24">
          <div className="text-center mb-10 md:mb-16">
            <div className="border-neo border-foreground shadow-neo-lg p-8 md:p-12 rounded mb-6 bg-slate-50 inline-block">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold flex items-center gap-3 md:gap-4 text-primary-foreground">
                Projects
                <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">👨‍💻</span>
              </h1>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto px-2">
              Things I've built (selective)
            </p>
          </div>

          <div className="bg-card border-neo border-foreground shadow-neo-lg p-8 md:p-12 rounded text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Work In Progress</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
              Project showcase coming soon!
            </p>
          </div>
        </section>

        {/* Journey Section */}
        <section id="journey" className="scroll-mt-24">
          <div className="text-center mb-10 md:mb-16">
            <div className="border-neo border-foreground shadow-neo-lg p-8 md:p-12 rounded mb-6 bg-slate-50 inline-block">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold flex items-center gap-3 md:gap-4 text-primary-foreground">
                My Journey
                <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">🚀</span>
              </h1>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground px-2">
              Things I've done
            </p>
          </div>

          {/* Experience */}
          <div className="mb-12 md:mb-16">
            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
              <Briefcase className="w-6 h-6 md:w-8 md:h-8" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Experience</h2>
            </div>
            <div className="space-y-4 md:space-y-6">
              {experience.map((job, index) => (
                <div
                  key={index}
                  className="bg-card border-neo border-foreground shadow-neo p-4 md:p-6 rounded hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold">{job.role}</h3>
                      <p className="text-base md:text-lg text-muted-foreground">{job.company}</p>
                    </div>
                    <div className="sm:text-right">
                      <span className="text-xs md:text-sm font-bold bg-secondary text-secondary-foreground px-2 md:px-3 py-1 rounded border-2 border-foreground inline-block mb-1">
                        {job.period}
                      </span>
                      <span className="text-xs md:text-sm text-muted-foreground block sm:inline sm:ml-2">{job.location}</span>
                    </div>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground mb-4">{job.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-12 md:mb-16">
            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
              <GraduationCap className="w-6 h-6 md:w-8 md:h-8" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Education</h2>
            </div>
            <div className="space-y-4 md:space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-card text-foreground border-neo border-foreground shadow-neo p-4 md:p-6 rounded hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold">{edu.degree}</h3>
                      <p className="text-base md:text-lg text-muted-foreground">{edu.institution}</p>
                      <p className="text-xs md:text-sm text-muted-foreground mt-1">{edu.gpa}</p>
                    </div>
                    <div className="sm:text-right">
                      <span className="text-xs md:text-sm font-bold bg-background text-foreground px-2 md:px-3 py-1 rounded border-2 border-foreground inline-block mb-1">
                        {edu.period}
                      </span>
                      <span className="text-xs md:text-sm text-muted-foreground block sm:inline sm:ml-2">{edu.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activities and Interests */}
          <div>
            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
              <Award className="w-6 h-6 md:w-8 md:h-8" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Activities and Interests</h2>
            </div>
            <div className="bg-card text-foreground border-neo border-foreground shadow-neo p-4 md:p-8 rounded">
              <ul className="space-y-3 md:space-y-4">
                {activities.map((activity, index) => (
                  <li key={index} className="flex items-start gap-2 md:gap-3">
                    <span className="text-xl md:text-2xl">→</span>
                    <span className="text-sm md:text-base lg:text-lg">{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SinglePage;
