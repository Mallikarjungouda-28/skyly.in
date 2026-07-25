import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { questionsData } from '../data/questions';

interface TrainingPageProps {
  onNavigate: (page: string, params?: any) => void;
}

export const TrainingPage: React.FC<TrainingPageProps> = ({ onNavigate }) => {


  const subjects = [
    {
      id: 'met',
      title: 'Meteorology',
      questions: `${questionsData['met']?.length || 0} QUESTIONS`,
      progress: 82,
      img: '/assets/stormy_flight.jpg'
    },
    {
      id: 'nav',
      title: 'Air Navigation',
      questions: `${questionsData['nav']?.length || 0} QUESTIONS`,
      progress: 68,
      img: '/assets/cockpit.jpg'
    },
    {
      id: 'reg',
      title: 'Air Regulations',
      questions: `${questionsData['reg']?.length || 0} QUESTIONS`,
      progress: 45,
      img: '/assets/atc_tower.jpg'
    },
    {
      id: 'gen',
      title: 'Technical General',
      questions: `${questionsData['gen']?.length || 0} QUESTIONS`,
      progress: 65,
      img: '/assets/jet_engine.jpg'
    },
    {
      id: 'spec',
      title: 'Technical Specific',
      subtitle: 'Piper Archer DX',
      questions: `${questionsData['spec']?.length || 0} QUESTIONS`,
      progress: 58,
      img: '/assets/jet_engine.jpg'
    },
    {
      id: 'rtr',
      title: 'RTR (Part 1)',
      questions: `${questionsData['rtr']?.length || 0} QUESTIONS`,
      progress: 72,
      img: '/assets/atc_tower.jpg'
    },
    {
      id: 'pyq',
      title: 'Previous Years',
      subtitle: '2013 — 2024',
      questions: `${questionsData['pyq']?.length || 0} QUESTIONS`,
      progress: 40,
      img: '/assets/exam_paper.jpg'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-16 pt-8 pb-20">
      {/* Hero Header */}
      <motion.div 
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="font-label-caps text-xs text-on-surface-variant block mb-3 uppercase tracking-widest">DGCA TRAINING</span>
        <h1 className="font-display-xl text-5xl md:text-7xl mb-6 relative inline-block text-white">
          Training
          <svg className="absolute -bottom-4 left-0 w-full h-4 overflow-visible" preserveAspectRatio="none">
            <motion.path 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              d="M2 8C50 9.5 100 -2 298 4" 
              fill="none" 
              stroke="#CBD0B5" 
              strokeWidth="4" 
            />
          </svg>
        </h1>
        <p className="font-body-lg text-lg text-on-surface-variant max-w-2xl mt-8 leading-relaxed">
          Choose a subject to continue your preparation. Our content is curated by senior pilots to ensure absolute precision.
        </p>
      </motion.div>



      {/* Subjects Grid */}
      <div className="flex flex-col gap-6">
        {subjects.map((subj, index) => {
          const isActive = subj.id === 'nav' || subj.id === 'met';
          return (
            <motion.div
              key={subj.id}
              onClick={() => {
                if (isActive) {
                  if (subj.id === 'met' || subj.id === 'nav') {
                    onNavigate('books', { subject: subj.id, title: subj.title });
                  } else {
                    onNavigate('mock', { subject: subj.id, title: subj.title, mode: 'practice' });
                  }
                }
              }}
              className={`subject-card group relative overflow-hidden rounded-[32px] md:rounded-[40px] h-[280px] md:h-[220px] bg-surface-container-low flex items-center border border-outline-variant/10 shadow-sm transition-all ${
                isActive ? 'cursor-pointer' : 'cursor-not-allowed select-none'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              {/* Background Image and Overlays */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <motion.img 
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    isActive ? 'group-hover:scale-105 opacity-90' : 'blur-[0.5px] opacity-55'
                  }`}
                  alt={subj.title}
                  src={subj.img}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent"></div>
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 w-full px-8 md:px-16 flex justify-between items-center text-white">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="font-display-lg text-3xl md:text-4xl mb-1 text-white">{subj.title}</h3>
                    {!isActive && (
                      <span className="bg-white/10 backdrop-blur-md text-[9px] font-label-caps tracking-widest px-2.5 py-1 rounded-full uppercase border border-white/20 select-none">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  {subj.subtitle && <p className="font-body-md text-xs italic opacity-80 mb-1">{subj.subtitle}</p>}
                  <p className="font-label-caps text-[10px] tracking-widest opacity-80 mb-0">{subj.questions}</p>
                </div>

                {isActive && (
                  <motion.button 
                    className="w-14 h-14 rounded-full bg-white text-primary flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <ArrowRight size={24} />
                  </motion.button>
                )}
              </div>

              {/* Blur overlay for inactive subjects */}
              {!isActive && (
                <div className="absolute inset-0 z-20 bg-black/15 backdrop-blur-[0.5px] pointer-events-none transition-all duration-300 flex items-center justify-end px-8 md:px-16">
                  <span className="font-display-lg text-lg md:text-xl text-white/70 border border-white/20 px-5 py-2 rounded-full bg-black/10">
                    Coming Soon
                  </span>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Hand-drawn Annotation */}
      <div className="mt-12 flex justify-center">
        <div className="relative">
          <span className="font-annotation text-2xl text-secondary">Your progress is saved automatically. Keep soaring.</span>
          <svg className="absolute -bottom-2 left-0 w-full h-2 overflow-visible" preserveAspectRatio="none">
            <path d="M0 4C50 4 100 4 200 4" fill="none" stroke="#CBD0B5" strokeWidth="2"></path>
          </svg>
        </div>
      </div>



    </div>
  );
};
