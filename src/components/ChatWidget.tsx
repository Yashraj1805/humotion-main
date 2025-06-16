import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaComments, FaTimes, FaPaperPlane } from 'react-icons/fa';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle message submission
    setMessage('');
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-16 right-0 w-[calc(100vw-2rem)] sm:w-96 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 overflow-hidden"
          >
            <div className="p-3 sm:p-4 bg-gradient-to-r from-blue-500 to-purple-600">
              <div className="flex justify-between items-center">
                <h3 className="text-white font-semibold text-base sm:text-lg">Chat with us</h3>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleChat}
                  className="text-white hover:text-white/80 transition-colors"
                >
                  <FaTimes className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>
              </div>
            </div>
            <div className="h-[60vh] sm:h-96 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4">
              {/* Chat messages will go here */}
              <div className="flex justify-end">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl rounded-tr-none px-3 py-2 sm:px-4 sm:py-2 max-w-[85%] sm:max-w-[80%] text-sm sm:text-base">
                  Hello! How can I help you today?
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="p-3 sm:p-4 border-t border-white/10">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-sm sm:text-base text-Black placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white/20"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl px-3 py-2 sm:px-4 sm:py-2 hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  <FaPaperPlane className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleChat}
        className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-full p-3 sm:p-4 shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <div className="relative">
          <FaComments className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
      </motion.button>
    </div>
  );
};

export default ChatWidget; 