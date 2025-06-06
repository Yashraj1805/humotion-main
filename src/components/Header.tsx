
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-brand rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <span className="text-xl font-bold text-navy-900">Humotion.AI</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-navy-900 transition-colors duration-200 font-medium">
              Services
            </a>
            <a href="#about" className="text-gray-600 hover:text-navy-900 transition-colors duration-200 font-medium">
              About Us
            </a>
            <a href="#solutions" className="text-gray-600 hover:text-navy-900 transition-colors duration-200 font-medium">
              Solutions
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-navy-900 transition-colors duration-200 font-medium">
              Testimonials
            </a>
            <a href="#contact" className="text-gray-600 hover:text-navy-900 transition-colors duration-200 font-medium">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-gradient-brand hover:shadow-lg transition-all duration-300 text-white font-medium px-6">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <a href="#services" className="text-gray-600 hover:text-navy-900 transition-colors duration-200 font-medium">
                Services
              </a>
              <a href="#about" className="text-gray-600 hover:text-navy-900 transition-colors duration-200 font-medium">
                About Us
              </a>
              <a href="#solutions" className="text-gray-600 hover:text-navy-900 transition-colors duration-200 font-medium">
                Solutions
              </a>
              <a href="#testimonials" className="text-gray-600 hover:text-navy-900 transition-colors duration-200 font-medium">
                Testimonials
              </a>
              <a href="#contact" className="text-gray-600 hover:text-navy-900 transition-colors duration-200 font-medium">
                Contact
              </a>
              <Button className="bg-gradient-brand text-white font-medium w-full mt-4">
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
