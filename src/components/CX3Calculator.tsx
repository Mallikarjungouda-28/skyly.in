import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Move } from 'lucide-react';

interface CX3CalculatorProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CX3Calculator: React.FC<CX3CalculatorProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          drag
          dragMomentum={false}
          dragElastic={0.05}
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 30 }}
          className="fixed top-24 right-10 w-[380px] h-[580px] bg-[#22272a] text-white border border-outline-variant/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col z-50"
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
                onClick={onClose}
                title="Minimize"
                className="p-1 hover:bg-white/10 rounded-md text-outline hover:text-white transition-all cursor-pointer"
              >
                <Minus size={14} />
              </button>
              <button
                onClick={onClose}
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
            />
          </div>

          {/* Drag Handle Help Indicator Footer */}
          <div className="bg-[#121618] py-1 text-center border-t border-[#2d3336] text-[8px] text-outline/65 tracking-widest uppercase">
            DRAG HEADER TO REPOSITION WINDOW
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
