import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const emotions = [
  { emoji: '😊', label: 'Happy' },
  { emoji: '😔', label: 'Sad' },
  { emoji: '😡', label: 'Angry' },
  { emoji: '😌', label: 'Calm' },
  { emoji: '🤔', label: 'Curious' },
];

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    content: "hello@humotion.ai",
    action: "mailto:hello@humotion.ai"
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+1 (555) 123-4567",
    action: "tel:+15551234567"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    content: "San Francisco, CA",
    action: "#"
  }
];

const ContactSection: React.FC = () => {
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Brand Message */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Connect with Emotion AI
            </h2>
            <p className="text-gray-300 text-lg">
              Experience the future of emotional intelligence. Our AI-powered platform
              understands and responds to human emotions, creating meaningful connections
              in the digital world.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <p className="text-gray-300">
                Join us in shaping the future of emotional AI technology
              </p>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="bg-gray-800 rounded-2xl p-8 shadow-xl">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">How are you feeling today?</h3>
              <div className="flex flex-wrap gap-4">
                {emotions.map((emotion) => (
                  <motion.button
                    key={emotion.label}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedEmotion(emotion.emoji)}
                    className={`p-3 rounded-xl flex flex-col items-center space-y-1 transition-all ${
                      selectedEmotion === emotion.emoji
                        ? 'bg-blue-500/20 border-2 border-blue-500'
                        : 'bg-gray-700/50 hover:bg-gray-700'
                    }`}
                  >
                    <span className="text-2xl">{emotion.emoji}</span>
                    <span className="text-sm text-gray-300">{emotion.label}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all h-32"
                  placeholder="Your message..."
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 px-6 bg-gradient-to-r from-red-500 to-blue-500 text-white rounded-lg font-medium hover:from-red-600 hover:to-blue-600 transition-all shadow-lg hover:shadow-xl"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
