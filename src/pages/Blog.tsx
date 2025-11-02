import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Blog = () => {
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

  return (
    <div className="min-h-screen pt-2 md:pt-8 pb-8 md:pb-20 px-2 md:px-6">
      <div className="max-w-6xl mx-auto bg-background border-neo border-foreground shadow-neo-lg rounded p-3 md:p-8">
        <Navigation />
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 md:mb-6 flex items-center justify-center gap-2 md:gap-4">
            Blog
            <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl">✍</span>
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto px-2">
            Things I think about
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-3 md:gap-6">
          {posts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group cursor-pointer block"
            >
              <article className="bg-card text-foreground border-neo border-foreground shadow-neo rounded p-3 md:p-6 h-full flex flex-col group-hover:translate-x-2 group-hover:translate-y-2 group-hover:shadow-none transition-all">
                <p className="text-xs md:text-sm mb-2 md:mb-4 flex items-center gap-1.5 md:gap-2">
                  <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </p>

                <h2 className="text-lg md:text-2xl font-bold mb-2 md:mb-3 leading-tight">
                  {post.title}
                </h2>

                <p className="text-xs md:text-sm opacity-90 mb-2 md:mb-4 flex-grow line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-1.5 md:gap-2 font-bold mt-auto text-xs md:text-base">
                  Read More
                  <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Blog;
