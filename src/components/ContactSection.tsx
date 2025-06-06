
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

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

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-navy-900 to-navy-800 text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Start a <span className="gradient-text">Conversation</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business with AI? We'd love to hear about your challenges and explore solutions together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="tech-card border-white/20 bg-white/10">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input 
                    placeholder="First Name" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                  <Input 
                    placeholder="Last Name" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>
                <Input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                <Input 
                  placeholder="Company" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                <Textarea 
                  placeholder="Tell us about your project..." 
                  rows={4}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-brand hover:shadow-2xl transition-all duration-300 text-white font-semibold py-4 group"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in touch</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Whether you're looking to implement AI solutions, modernize your IT infrastructure, 
                or explore new possibilities, our team is here to help you succeed.
              </p>
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
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
