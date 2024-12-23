
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';


interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}



export function GradientText({ children, className = '' }: GradientTextProps) {
  return (
    <span className={`bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text ${className}`}>
      {children}
    </span>
  );
}

export function HeroButtons() {
    return (
      <motion.div 
        className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <button className="group bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all transform hover:scale-105">
          <Sparkles className="w-5 h-5" />
          Start Your Journey
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      
  
      </motion.div>
    );
  }

  const stats = [
    { value: '1M+', label: 'Quiz Takers' },
    { value: '92%', label: 'Success Rate' },
    { value: '4.9/5', label: 'User Rating' },
  ];
  

  export function HeroStats() {
    return (
      <div className="flex justify-center gap-8 mt-12">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            className="text-center"
          >
            <div className="text-2xl font-bold text-blue-900">{stat.value}</div>
            <div className="text-sm text-blue-600">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    );
  }