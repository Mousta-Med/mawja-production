import React from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-primary/80 text-white flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          {/* 404 Number */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-8xl md:text-9xl font-bold mb-4 bg-gradient-to-r from-white to-secondary bg-clip-text text-transparent">
              404
            </h1>
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Oops! Page Not Found
            </h2>
            <p className="text-xl text-white/80 mb-6">
              The page you're looking for seems to have disappeared into the digital void. 
              Don't worry, even the best creative ideas sometimes take unexpected paths!
            </p>
          </motion.div>

          {/* Search suggestions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-8"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-lg font-semibold mb-4 flex items-center justify-center">
                <Search className="h-5 w-5 mr-2" />
                What you might be looking for:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <a href="#services" className="hover:text-secondary transition-colors">
                  • Our Services
                </a>
                <a href="#portfolio" className="hover:text-secondary transition-colors">
                  • Portfolio
                </a>
                <a href="#team" className="hover:text-secondary transition-colors">
                  • Our Team
                </a>
                <a href="#contact" className="hover:text-secondary transition-colors">
                  • Contact Us
                </a>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              onClick={() => window.location.href = '/'}
              className="bg-secondary text-primary hover:bg-secondary/90 text-lg px-8 py-3"
            >
              <Home className="h-5 w-5 mr-2" />
              Back to Home
            </Button>
            
            <Button 
              onClick={() => window.history.back()}
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Go Back
            </Button>
            
            <Button 
              onClick={() => window.location.href = '#contact'}
              variant="ghost" 
              className="text-white hover:bg-white/10 text-lg px-8 py-3"
            >
              <Mail className="h-5 w-5 mr-2" />
              Contact Support
            </Button>
          </motion.div>

          {/* Brand message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-12 text-white/60"
          >
            <p className="text-sm">
              MAWJA Production - Digital solutions for your creative ideas
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Wave decoration at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          className="relative block w-full h-16 fill-white"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default NotFound; 