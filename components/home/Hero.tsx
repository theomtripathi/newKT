"use client"
import { motion } from 'framer-motion';
import { FloatingEmojis } from '@/components/animations/FloatingEmojis';
import { GradientText } from '@/components/home/HeroComponents';
import { HeroStats } from '@/components/home/HeroComponents';
import { HeroButtons } from '@/components/home/HeroComponents';


export function Hero() {
    return (
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-50 via-pink-50 to-white">
        {/* Blurred Background Elements - Moving these first so they stay in background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          <div className="absolute top-24 -left-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute top-16 -right-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
        </div>
  
        {/* Glass Effect Layer */}
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]" />
  
        {/* Floating Emojis */}
        <FloatingEmojis />
  
        {/* Main Content - Adjusted top padding to account for new nav */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.h1 
              className="text-6xl md:text-7xl font-bold mb-6 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <GradientText>
                Discover Your
                <br />
                Love Story ❤️
              </GradientText>
            </motion.h1>
  
            <motion.p 
              className="text-xl md:text-2xl text-blue-900/80 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Take our scientifically crafted quiz to understand where your relationship stands and where it heading.
            </motion.p>
  
            <HeroButtons />
            <HeroStats />
          </motion.div>
        </div>
      </div>
    );
  }