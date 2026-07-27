import React from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  message?: string;
  subMessage?: string;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ 
  message = "Skyly Portal", 
  subMessage = "Connecting to flight deck database..." 
}) => {
  return (
    <div className="relative min-h-screen w-full flex flex-col font-sans bg-background text-on-background items-center justify-center overflow-hidden">
      {/* Background noise and radial gradient overlay for premium depth */}
      <div className="noise-overlay" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08)_0%,transparent_70%)] pointer-events-none" />

      <motion.div 
        className="z-10 flex flex-col items-center gap-6"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative flex items-center justify-center">
          {/* Glowing outer spinning ring */}
          <div 
            className="w-24 h-24 rounded-full border-2 border-primary/10 border-t-primary animate-spin" 
            style={{ animationDuration: '1.2s' }} 
          />
          
          {/* Inner breathing logo with drop-shadow glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.img 
              src="/favicon.png" 
              alt="Skyly Logo" 
              className="w-12 h-12 object-contain"
              animate={{ 
                scale: [0.94, 1.06, 0.94],
                filter: [
                  "drop-shadow(0 0 6px rgba(37, 99, 235, 0.25))",
                  "drop-shadow(0 0 20px rgba(37, 99, 235, 0.65))",
                  "drop-shadow(0 0 6px rgba(37, 99, 235, 0.25))"
                ]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            />
          </div>
        </div>

        <div className="text-center">
          <h2 className="font-display-lg text-2xl text-white font-bold tracking-tight">{message}</h2>
          <p className="text-on-surface-variant font-body-md text-sm mt-1.5 animate-pulse tracking-wide">
            {subMessage}
          </p>
        </div>
      </motion.div>
    </div>
  );
};
