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
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6FBvfim_Z7bEMWwIs_BAsRQg_iYsrCrqnIKYUiboAUYuUlwGJMLueSJQ4hsobjbsMJgW8_3subkKtLmiQjmpqahsV2nuAJHJbLxmv8TQnEsOnAOgD-iue9TdeRPldcAAZE3iB-QdJfmQ4GLKu05TgaYln2Rm5tuZPsyqeVpEUYmFz7A6EDNDW422-Mws-gKHWs2wIzDeNGh4cppJIQ03EZ2L-AwVI_FydWuushXhzjyl7dEipmjxM'
    },
    {
      id: 'nav',
      title: 'Air Navigation',
      questions: `${questionsData['nav']?.length || 0} QUESTIONS`,
      progress: 68,
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJ7Z-RotfkS8C7Q4QZwy70r27gVQPGkOy-y336zgCJp6b_0PC6WFZ87pl2JhBE_u8Uq_SC7OVuLHQT2SFXA1x_v9F1N0no5RnCL4A_kbbxaAZkA-cglAny7BSQHSVcf4Rs_IsESHFfJe8Ji0r45iyXYCQuD4LsEi_3XKfBvC0St1HIb7O8fHHYGlOfISgnPeRCkOBA5VzSEFCm7rLHxA03CtSQpYH7qcHs70kTlw63B5Vzj5eEpSe3'
    },
    {
      id: 'reg',
      title: 'Air Regulations',
      questions: `${questionsData['reg']?.length || 0} QUESTIONS`,
      progress: 45,
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBajdXfB8LfmxTsu2XqtGelvKXzOvpG_QoqjKB-IeHGAj3gMNKIkQxeE30ygp_CxfaWat7rkoDuDGTKXPa5NlmpflgRQRWJCLFVeDZxBOoTeyMIMm5a7nEdWVL-6qKQ9L49zDMrZrdAPo4U-kNZtdgiWU-zjDhukO_QjuLCOv1XkNOl6jPbVDMyKon6cXK83r8YD9BWev8oceGWix6MXSZ2wzwHxGxJKYLGI2k2Pfd9DzIpoxUBqr6J'
    },
    {
      id: 'gen',
      title: 'Technical General',
      questions: `${questionsData['gen']?.length || 0} QUESTIONS`,
      progress: 65,
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFWtPE2Gv9IViysnBp9Mvt7akpCHyUQu_-MyAwa2ZkErNwuMq8iuZV3WVbL6yUuefgky413W2drACwZ5UQeX1qSTRjY5qX3q8D4WmnhDMoxzuLv9kG2wNM8jbEstyO83K6ezEo_FjcS2mChrZLdQpQ5wMCABcc3VUGpdYL5Ow2RamRYRGRNNvaYYAM-myrXw1lDBJ2iEq_EDBqM7bXJyUnKU_oJGqkl2wlNm8OJv62FKXtLmH6TiCq'
    },
    {
      id: 'spec',
      title: 'Technical Specific',
      subtitle: 'Piper Archer DX',
      questions: `${questionsData['spec']?.length || 0} QUESTIONS`,
      progress: 58,
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJ4JJIivL7h1anmNRf5O8iDCLFDE1XSbT_Y59DGLLpLnAODOaCj_yvvK5SEID254un144oBScrNhEix0MOG4FSWkQDqFbYKvRT0XPzTUyC6D18qXvneNPPrbieXE2iKOc8tPfY-8W7E6u8CS_Fbp0DoMqB4vTEAVCo0eUYt1JobT-ScsQF_S9BKdRMpUw8_5tDz4NZ36kps9HdUS1RxhKb4cMnRKuxOHTCGmOjKrOJ4VbApHiaUsa4'
    },
    {
      id: 'rtr',
      title: 'RTR (Part 1)',
      questions: `${questionsData['rtr']?.length || 0} QUESTIONS`,
      progress: 72,
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHHEUetzNqW_KmiSa14qJ6p2lhAtc5bi-QIKtYhl-ftsOxqMSF45h342Xs89OSJRDR5_VH17kkRsuzcPRCaE6c0iHBk1ZzsU2HtCRMzzUfNWFdZ8yWZOtmrvsIog_QQNxdsSvvbZ9AD7Esq8Lesb2EycdZQz0KXCcQloDEhNa4lcE0Pe7II-HNdspiUuqt5n32Euti3FaS1mRds7WPs5uB5oHPDwyD6S1p0VsmmkMkzOtuV9J-DLby'
    },
    {
      id: 'pyq',
      title: 'Previous Years',
      subtitle: '2013 — 2024',
      questions: `${questionsData['pyq']?.length || 0} QUESTIONS`,
      progress: 40,
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzI9bL3JyGyEzZPuNgQajodxOkZQswFvU1rUW0YgsoB9PXihwVeV3ELsgHArq3TvDwywtSMq6TOZ10lod4Hl90fcm9nda3BmJM1RiTnmTE1M0a1PnjSqrXMNpiitLH97u52BkrWum8XYmtxFoYgcpLqbCoeX1t7UYnIbm_An_V3po7CoYPHyiiTdc-Bej9SYFiIGhILv1cPErWqxHCRQ7dQo6GHvUZ-RYAvgmoYm0Cyi34zf9OTAgn'
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
          const isActive = subj.id === 'nav';
          return (
            <motion.div
              key={subj.id}
              onClick={() => {
                if (isActive) {
                  onNavigate('mock', { subject: subj.id, title: subj.title, mode: 'practice' });
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
