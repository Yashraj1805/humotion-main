import React from 'react';
import { motion } from 'framer-motion';

interface BlogPost {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const featuredPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Emotional AI",
    description: "Exploring how artificial intelligence is revolutionizing human emotional understanding and interaction.",
    imageUrl: "https://specials-images.forbesimg.com/imageserve/65a5cef44a7f1efc194e5907/Human-Vs-Robot/960x0.jpg?fit=scale",
    link: "/blog/emotional-ai-future"
  },
  {
    id: 2,
    title: "Neural Networks & Human Emotions",
    description: "Deep dive into how neural networks process and interpret human emotional patterns.",
    imageUrl: "https://cdn.pixabay.com/photo/2025/05/26/17/02/ai-generated-9623738_640.png",
    link: "/blog/neural-emotions"
  },
  {
    id: 3,
    title: "AI-Powered Mental Health",
    description: "How artificial intelligence is transforming mental health support and emotional well-being.",
    imageUrl: "https://trendsresearch.org/wp-content/uploads/2025/05/Cognitive-Enhancement-through-AI.jpg",
    link: "/blog/ai-mental-health"
  }
];

const BlogInsights: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center font-sans">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Blogs</span> from <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">Emotion &</span> Intelligence
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <motion.article
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-sans">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 font-sans">
                  {post.description}
                </p>
                <a
                  href={post.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
                >
                  Read More
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogInsights; 