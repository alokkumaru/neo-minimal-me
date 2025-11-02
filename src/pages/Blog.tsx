import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const posts = [
    {
      id: "quick-commerce-2025",
      title: "Quick commerce update 2025",
      excerpt: "$6Bn in 2025, growing at >70% CAGR. Quick comm is cannibalizing ecomm market in India (growing 5X faster).",
      date: "2025-01-05",
      slug: "quick-commerce-2025",
    },
    {
      id: "corporate-hegemony",
      title: "The Rise of Corporate Hegemony",
      excerpt: "Tracing how corporations came to dominate the global economic and political landscape.",
      date: "2025-01-10",
      slug: "corporate-hegemony",
    },
    {
      id: "storage-ai-infra",
      title: "Storage is the invisible opportunity in AI infra",
      excerpt: "AI workload is driving the necessity for cloud storage services, with cloud storage growing at ~20% CAGR.",
      date: "2025-01-15",
      slug: "storage-ai-infra",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">Blog</h1>
          <p className="text-2xl text-muted-foreground max-w-2xl mx-auto">
            Things I think about
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group cursor-pointer block"
            >
              <article className="bg-card text-foreground border-neo border-foreground shadow-neo rounded p-6 h-full flex flex-col group-hover:translate-x-2 group-hover:translate-y-2 group-hover:shadow-none transition-all">
                <p className="text-sm mb-4 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </p>

                <h2 className="text-2xl font-bold mb-3">
                  {post.title}
                </h2>

                <p className="text-sm opacity-90 mb-4 flex-grow">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-2 font-bold mt-auto">
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
