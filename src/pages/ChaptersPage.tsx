import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen } from 'lucide-react';
import type { Chapter } from '../types';

interface ChaptersPageProps {
  params?: {
    subject?: string;
    book?: string;
    bookName?: string;
  };
  onNavigate: (page: string, params?: any) => void;
  chaptersData: Record<string, Record<string, Chapter[]>>;
}

export const ChaptersPage: React.FC<ChaptersPageProps> = ({ params, onNavigate, chaptersData }) => {
  const subjectId = params?.subject || 'met';
  const bookId = params?.book || 'icjoshi';
  const bookName = params?.bookName || 'Reference Book';

  const chapters = chaptersData[subjectId]?.[bookId] || [];

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-16 pt-8 pb-20">
      {/* Back Link */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <button 
          onClick={() => onNavigate('books', { subject: subjectId })}
          className="flex items-center gap-2 text-on-surface-variant hover:text-white transition-colors font-semibold text-sm cursor-pointer"
        >
          <ArrowLeft size={16} />
          Back to Books
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
          {bookName}
        </span>
        <h1 className="font-display-xl text-5xl md:text-7xl mb-6 text-white">
          Chapters
        </h1>
        <p className="font-body-lg text-lg text-on-surface-variant max-w-2xl leading-relaxed">
          Select a chapter to begin practicing questions.
        </p>
      </motion.div>

      {/* Chapters List */}
      <div className="flex flex-col gap-4">
        {chapters.map((chapter, index) => (
          <motion.div
            key={chapter.id}
            onClick={() => onNavigate('mock', {
              subject: subjectId,
              title: `${bookName} - ${chapter.name}`,
              mode: 'practice',
              book: bookId,
              chapter: chapter.name
            })}
            className="group relative overflow-hidden rounded-2xl p-6 bg-surface-container-low border border-outline-variant/10 shadow-sm cursor-pointer hover:bg-surface-container hover:border-outline transition-all flex items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.03 }}
          >
            <div className="flex items-center gap-6">
              {/* Chapter Number Badge */}
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-display-lg text-base font-bold group-hover:bg-primary group-hover:text-white transition-colors">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div>
                <h3 className="font-headline-sm text-lg md:text-xl text-white group-hover:text-primary transition-colors font-semibold">
                  {chapter.name}
                </h3>
                <span className="text-xs text-on-surface-variant font-medium">
                  {chapter.questionsCount} Questions
                </span>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-on-surface-variant group-hover:text-white transition-colors">
                Practice &rarr;
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
