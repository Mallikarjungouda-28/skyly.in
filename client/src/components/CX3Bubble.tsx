import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, X, Minus, Move } from 'lucide-react';

export const CX3Bubble: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            drag
            dragMomentum={false}
            dragElastic={0.05}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            className="absolute bottom-20 right-0 w-[380px] h-[600px] bg-[#22272a] rounded-2xl shadow-2xl border border-outline-variant/10 overflow-hidden flex flex-col z-50"
            style={{ touchAction: 'none' }}
          >
            {/* Draggable Header */}
            <div className="bg-[#121618] px-4 py-3 flex justify-between items-center text-white border-b border-[#2d3336] cursor-move select-none active:bg-[#1a1f22] transition-colors">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-outline">
                <Move size={12} className="text-secondary" />
                <span>ASA CX-3 FLIGHT COMPUTER</span>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setIsOpen(false)}
                  title="Minimize"
                  className="p-1 hover:bg-white/10 rounded-md text-outline hover:text-white transition-all cursor-pointer"
                >
                  <Minus size={14} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Close"
                  className="p-1 hover:bg-red-500/20 hover:text-red-400 rounded-md text-outline transition-all cursor-pointer"
                >
                  <X size={14} />
                </button>
              </div>
            </div>

            {/* Embedded Iframe Simulator */}
            <div className="flex-grow bg-black relative">
              <iframe
                src="https://prepware.com/cx3e/index.html"
                className="w-full h-full border-0"
                title="ASA CX-3 Online Flight Computer"
                allow="autoplay"
              />
            </div>

            {/* Drag Handle Help Indicator Footer */}
            <div className="bg-[#121618] py-1 text-center border-t border-[#2d3336] text-[8px] text-outline/65 tracking-widest uppercase">
              DRAG HEADER TO REPOSITION WINDOW
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button (FAB) Bubble */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`flex items-center justify-center gap-2.5 h-14 px-5 rounded-full shadow-lg border cursor-pointer transition-all ${isOpen
            ? 'bg-red-600 text-white border-red-500 hover:bg-red-700'
            : 'bg-primary text-on-primary border-primary hover:bg-secondary'
          }`}
      >
        <Calculator size={20} className={isOpen ? 'rotate-90 transition-transform' : ''} />
        <span className="font-label-caps text-xs tracking-wider font-bold">
          {isOpen ? 'CLOSE CX-3' : 'ASA CX-3'}
        </span>
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
          </span>
        )}
      </motion.button>
    </div>
  );
};
