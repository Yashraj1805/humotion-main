
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-blue-50 pt-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Floating Logo */}
          <div className="mb-8 animate-float">
            <div className="w-24 h-24 mx-auto bg-gradient-brand rounded-3xl flex items-center justify-center shadow-2xl animate-pulse-glow">
              <span className="text-white font-bold text-3xl">H</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="text-navy-900">Where</span>{" "}
            <span className="gradient-text">Emotion</span>{" "}
            <span className="text-navy-900">Meets</span>{" "}
            <span className="gradient-text">Intelligence</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Transforming businesses through AI-powered solutions that understand both technology and human nature. 
            Experience the future of intelligent automation.
          </p>

          {/* Feature Tags */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
              <Sparkles className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-gray-700">AI-Powered</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
              <Sparkles className="w-4 h-4 text-red-500" />
              <span className="text-sm font-medium text-gray-700">Human-Centric</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
              <Sparkles className="w-4 h-4 text-purple-500" />
              <span className="text-sm font-medium text-gray-700">Enterprise Ready</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button 
              size="lg" 
              className="bg-gradient-brand hover:shadow-2xl transition-all duration-300 text-white font-semibold px-8 py-4 text-lg group"
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-navy-200 text-navy-900 hover:bg-navy-50 font-semibold px-8 py-4 text-lg transition-all duration-300"
            >
              Learn More
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full mx-auto flex justify-center">
              <div className="w-1 h-3 bg-gradient-brand rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
