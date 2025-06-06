
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      // Simulate typing indicator when opening
      setTimeout(() => setIsTyping(false), 2000);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <Card className="w-80 h-96 mb-4 shadow-2xl border-0 bg-white animate-scale-in">
          <div className="flex items-center justify-between p-4 bg-gradient-brand text-white rounded-t-lg">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold">Emotion-AI Assistant</h4>
                <div className="flex items-center space-x-1 text-xs">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Online</span>
                </div>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleChat}
              className="text-white hover:bg-white/20 p-1 h-auto"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          <CardContent className="p-0 flex flex-col h-80">
            {/* Messages Area */}
            <div className="flex-1 p-4 space-y-4 overflow-y-auto">
              {/* AI Greeting */}
              <div className="flex items-start space-x-2">
                <div className="w-8 h-8 bg-gradient-brand rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-gray-100 rounded-lg rounded-tl-none p-3 max-w-[70%]">
                  <p className="text-sm text-gray-800">
                    Hi, I'm your Emotion-AI Assistant — how can I help?
                  </p>
                </div>
              </div>

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 bg-gradient-brand rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-gray-100 rounded-lg rounded-tl-none p-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-gray-100">
              <div className="flex space-x-2">
                <Input 
                  placeholder="Type your message..." 
                  className="flex-1 border-gray-200 focus:ring-2 focus:ring-blue-500/20"
                />
                <Button size="sm" className="bg-gradient-brand hover:shadow-lg px-3">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Chat Bubble */}
      <Button
        onClick={toggleChat}
        className="w-14 h-14 rounded-full bg-gradient-brand hover:shadow-2xl shadow-lg transition-all duration-300 hover:scale-110 relative overflow-hidden group"
      >
        <MessageCircle className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
        
        {/* Animated wave effect */}
        <div className="absolute inset-0 rounded-full">
          <div className="absolute inset-0 rounded-full bg-blue-400/30 animate-ping"></div>
          <div className="absolute inset-0 rounded-full bg-red-400/20 animate-pulse"></div>
        </div>
        
        {/* Notification dot */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-xs text-white font-bold">1</span>
        </div>
      </Button>
    </div>
  );
};

export default ChatWidget;
