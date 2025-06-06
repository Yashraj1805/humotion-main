
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Smile, Meh, Frown, Heart, Zap, Star } from "lucide-react";

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

const emotionMoods = [
  { icon: Smile, label: "Excited", color: "text-green-400", bg: "bg-green-400/20", border: "border-green-400" },
  { icon: Heart, label: "Passionate", color: "text-red-400", bg: "bg-red-400/20", border: "border-red-400" },
  { icon: Star, label: "Curious", color: "text-yellow-400", bg: "bg-yellow-400/20", border: "border-yellow-400" },
  { icon: Zap, label: "Energetic", color: "text-blue-400", bg: "bg-blue-400/20", border: "border-blue-400" },
  { icon: Meh, label: "Neutral", color: "text-gray-400", bg: "bg-gray-400/20", border: "border-gray-400" },
  { icon: Frown, label: "Concerned", color: "text-orange-400", bg: "bg-orange-400/20", border: "border-orange-400" }
];

const ContactSection = () => {
  const [selectedMood, setSelectedMood] = useState(null);

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-navy-900 to-navy-800 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-red-500/10 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Start a <span className="gradient-text">Conversation</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business with AI? We'd love to hear about your challenges and explore solutions together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Brand Message */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Connect with Emotional Intelligence</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                At Humotion.AI, we believe technology should understand not just what you need, 
                but how you feel. Our emotion-aware AI solutions create deeper connections between 
                businesses and their customers, fostering trust, empathy, and meaningful interactions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-brand rounded-full"></div>
                  <span className="text-gray-300">24/7 Emotion-AI Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-brand rounded-full"></div>
                  <span className="text-gray-300">Personalized Solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-brand rounded-full"></div>
                  <span className="text-gray-300">Human-Centered Approach</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="tech-card border-white/20 bg-white/5 hover:bg-white/10 transition-colors duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-brand rounded-xl p-3">
                        <info.icon className="w-full h-full text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{info.title}</h4>
                        <a 
                          href={info.action} 
                          className="text-gray-300 hover:text-white transition-colors duration-200"
                        >
                          {info.content}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <Card className="tech-card border-white/20 bg-white/10 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
              
              {/* Emotion Selector */}
              <div className="mb-6">
                <label className="block text-white font-medium mb-3">How are you feeling about this project?</label>
                <div className="grid grid-cols-3 gap-3">
                  {emotionMoods.map((mood, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedMood(index)}
                      className={`flex flex-col items-center p-3 rounded-lg border-2 transition-all duration-300 hover:scale-105 ${
                        selectedMood === index 
                          ? `${mood.bg} ${mood.border} ${mood.color}` 
                          : 'border-white/20 text-gray-400 hover:border-white/40'
                      }`}
                    >
                      <mood.icon className="w-6 h-6 mb-1" />
                      <span className="text-xs font-medium">{mood.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <Input 
                      placeholder="First Name" 
                      className="bg-white/5 border-2 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 focus:shadow-lg focus:shadow-blue-400/20 transition-all duration-300"
                    />
                  </div>
                  <div className="relative">
                    <Input 
                      placeholder="Last Name" 
                      className="bg-white/5 border-2 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 focus:shadow-lg focus:shadow-blue-400/20 transition-all duration-300"
                    />
                  </div>
                </div>
                <div className="relative">
                  <Input 
                    type="email" 
                    placeholder="Email Address" 
                    className="bg-white/5 border-2 border-white/20 text-white placeholder:text-gray-400 focus:border-red-400 focus:ring-2 focus:ring-red-400/20 focus:shadow-lg focus:shadow-red-400/20 transition-all duration-300"
                  />
                </div>
                <div className="relative">
                  <Input 
                    placeholder="Company" 
                    className="bg-white/5 border-2 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 focus:shadow-lg focus:shadow-purple-400/20 transition-all duration-300"
                  />
                </div>
                <div className="relative">
                  <Textarea 
                    placeholder="Tell us about your project and how we can help..." 
                    rows={4}
                    className="bg-white/5 border-2 border-white/20 text-white placeholder:text-gray-400 focus:border-green-400 focus:ring-2 focus:ring-green-400/20 focus:shadow-lg focus:shadow-green-400/20 transition-all duration-300"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-brand hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 text-white font-semibold py-4 group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Send Message
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
