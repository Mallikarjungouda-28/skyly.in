import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { SubjectBooks } from '../types';

interface BooksPageProps {
  params?: {
    subject?: string;
    title?: string;
  };
  onNavigate: (page: string, params?: any) => void;
  booksData: Record<string, SubjectBooks>;
}

export const BooksPage: React.FC<BooksPageProps> = ({ params, onNavigate, booksData }) => {
  const subjectId = params?.subject || 'met';
  const subjectData = booksData[subjectId];

  if (!subjectData) {
    return (
      <div className="max-w-7xl mx-auto px-6 md:px-16 pt-8 pb-20 text-center">
        <h2 className="text-2xl font-bold text-white">Subject Not Found</h2>
        <button 
          onClick={() => onNavigate('training')}
          className="mt-4 bg-primary text-white px-4 py-2 rounded-lg"
        >
          Back to Subjects
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-16 pt-8 pb-20">
      {/* Back Link */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <button 
          onClick={() => onNavigate('training')}
          className="flex items-center gap-2 text-on-surface-variant hover:text-white transition-colors font-semibold text-sm cursor-pointer"
        >
          <ArrowLeft size={16} />
          Back to Subjects
        </button>
      </motion.div>

      {/* Header */}
      <motion.div 
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="font-label-caps text-xs text-on-surface-variant block mb-3 uppercase tracking-widest">
          {subjectData.badge} REFERENCE
        </span>
        <h1 className="font-display-xl text-5xl md:text-7xl mb-6 text-white">
          Select Book
        </h1>
        <p className="font-body-lg text-lg text-on-surface-variant max-w-2xl leading-relaxed">
          {subjectData.desc}
        </p>
      </motion.div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {subjectData.books.map((book, index) => (
          <motion.div
            key={book.id}
            onClick={() => onNavigate('chapters', { subject: subjectId, book: book.id, bookName: book.name })}
            className={`subject-card group relative overflow-hidden rounded-[32px] md:rounded-[40px] h-[240px] bg-surface-container-low flex flex-col justify-end p-8 border border-outline-variant/10 shadow-sm cursor-pointer transition-all hover:border-outline`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Background Gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-tr ${book.bg} opacity-80 z-0`}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent z-0"></div>

            {/* Content */}
            <div className="relative z-10 text-white flex justify-between items-end w-full">
              <div className="flex-1 pr-4">
                <span className="bg-white/10 backdrop-blur-md text-[8px] font-label-caps tracking-widest px-2.5 py-1 rounded-md uppercase border border-white/20 select-none">
                  {book.chaptersCount} Chapters
                </span>
                <h3 className="font-display-lg text-2xl md:text-3xl mt-3 mb-2 text-white font-bold group-hover:text-primary transition-colors">
                  {book.name}
                </h3>
                <p className="font-body-md text-xs text-on-surface-variant/90 line-clamp-2 max-w-md leading-relaxed">
                  {book.desc}
                </p>
              </div>

              <motion.button 
                className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center shadow-lg shrink-0"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <ArrowRight size={20} />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
