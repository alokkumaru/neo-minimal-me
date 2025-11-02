import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Getting Started with Neobrutalism Design",
      excerpt: "Learn how to implement bold, eye-catching neobrutalism design principles in your next project.",
      date: "2024-03-15",
      readTime: "5 min read",
      color: "bg-primary",
      tags: ["Design", "Web Development"],
    },
    {
      id: 2,
      title: "Building Modern Web Applications",
      excerpt: "A comprehensive guide to building scalable and maintainable web applications using modern tools.",
      date: "2024-03-10",
      readTime: "8 min read",
      color: "bg-secondary",
      tags: ["Development", "Tutorial"],
    },
    {
      id: 3,
      title: "The Power of TypeScript",
      excerpt: "Why TypeScript is becoming the go-to choice for serious JavaScript developers.",
      date: "2024-03-05",
      readTime: "6 min read",
      color: "bg-accent",
      tags: ["TypeScript", "JavaScript"],
    },
    {
      id: 4,
      title: "Responsive Design Best Practices",
      excerpt: "Create websites that look amazing on any device with these essential responsive design techniques.",
      date: "2024-02-28",
      readTime: "7 min read",
      color: "bg-success",
      tags: ["Design", "CSS"],
    },
    {
      id: 5,
      title: "State Management in React",
      excerpt: "Exploring different approaches to state management and when to use each one.",
      date: "2024-02-20",
      readTime: "10 min read",
      color: "bg-card",
      tags: ["React", "State Management"],
    },
    {
      id: 6,
      title: "Optimizing Web Performance",
      excerpt: "Tips and tricks to make your website load faster and provide a better user experience.",
      date: "2024-02-15",
      readTime: "9 min read",
      color: "bg-card",
      tags: ["Performance", "Optimization"],
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">Blog</h1>
          <p className="text-2xl text-muted-foreground max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about web development and design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group cursor-pointer"
            >
              <div className={`${post.color} border-neo border-foreground shadow-neo rounded p-6 h-full flex flex-col group-hover:translate-x-2 group-hover:translate-y-2 group-hover:shadow-none transition-all`}>
                <div className="flex items-center gap-4 mb-4 text-sm">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>

                <h2 className="text-2xl font-bold mb-3 line-clamp-2">
                  {post.title}
                </h2>

                <p className="text-sm opacity-80 mb-4 flex-grow line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-background border-2 border-foreground text-xs font-bold rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 font-bold mt-auto">
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 bg-card border-neo border-foreground shadow-neo-lg p-12 rounded text-center">
          <h2 className="text-4xl font-bold mb-4">Subscribe to My Newsletter</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get notified when I publish new articles. No spam, unsubscribe at any time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="your.email@example.com"
              className="flex-1 px-6 py-3 border-neo border-foreground rounded font-bold bg-background focus:outline-none focus:ring-4 focus:ring-ring"
            />
            <button className="px-8 py-3 bg-primary text-primary-foreground border-neo border-foreground shadow-neo rounded font-bold hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
