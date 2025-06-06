
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Emotional AI in Business",
    description: "Discover how emotional intelligence is revolutionizing customer experiences and driving unprecedented business growth.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop",
    author: "Dr. Sarah Chen",
    date: "Dec 15, 2024",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "AI Security: Protecting Human-Centric Systems",
    description: "Learn about the latest advances in AI security frameworks that prioritize both technological robustness and human emotional safety.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop",
    author: "Marcus Rodriguez",
    date: "Dec 12, 2024",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "Transforming Healthcare with Empathetic AI",
    description: "Explore how emotion-aware AI is creating more compassionate healthcare experiences and improving patient outcomes.",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=250&fit=crop",
    author: "Dr. Emily Watson",
    date: "Dec 10, 2024",
    readTime: "6 min read"
  }
];

const BlogSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 font-futura">
            Insights from <span className="gradient-text">Emotion & Intelligence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the latest thoughts, research, and innovations at the intersection of human emotion and artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 bg-white">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:gradient-text transition-all duration-300 font-futura">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 font-medium">{post.readTime}</span>
                  <Button 
                    variant="ghost" 
                    className="group/btn text-navy-900 hover:text-white hover:bg-gradient-brand p-0 h-auto font-semibold"
                  >
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-brand hover:shadow-2xl transition-all duration-300 text-white font-semibold px-8">
            View All Insights
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
