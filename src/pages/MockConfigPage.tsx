import React, { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, BookOpen, Sliders, Check } from 'lucide-react';
import type { Question } from '../types';

interface MockConfigPageProps {
  onNavigate: (page: string, params?: any) => void;
  questionsData: Record<string, Question[]>;
  booksData?: any;
  chaptersData?: any;
}

export const MockConfigPage: React.FC<MockConfigPageProps> = ({ 
  onNavigate, 
  questionsData,
  booksData,
  chaptersData
}) => {
  const [selectedSubject, setSelectedSubject] = useState<string>('nav');
  const [difficulty, setDifficulty] = useState<string>('any');
  const [questionCount, setQuestionCount] = useState<number>(60);
  const [timeLimit, setTimeLimit] = useState<number>(60); // in minutes, 0 means untimed
  const [selectedBook, setSelectedBook] = useState<string>('all');
  const [selectedChapters, setSelectedChapters] = useState<string[]>(['all']);

  const subjects = [
    {
      id: 'met',
      title: 'Meteorology',
      code: 'MET',
      img: '/assets/stormy_flight.jpg'
    },
    {
      id: 'nav',
      title: 'Air Navigation',
      code: 'NAV',
      img: '/assets/cockpit.jpg'
    },
    {
      id: 'reg',
      title: 'Air Regulations',
      code: 'REG',
      img: '/assets/atc_tower.jpg'
    },
    {
      id: 'gen',
      title: 'Technical General',
      code: 'GEN',
      img: '/assets/jet_engine.jpg'
    },
    {
      id: 'spec',
      title: 'Technical Specific',
      code: 'SPEC',
      subtitle: 'Piper Archer DX',
      img: '/assets/jet_engine.jpg'
    },
    {
      id: 'rtr',
      title: 'RTR (Part 1)',
      code: 'RTR',
      img: '/assets/atc_tower.jpg'
    },
    {
      id: 'pyq',
      title: 'Previous Years',
      code: 'PYQ',
      subtitle: '2013 — 2024',
      img: '/assets/exam_paper.jpg'
    }
  ];

  const selectedSubjectData = subjects.find(s => s.id === selectedSubject) || subjects[5];

  const handleSubjectSelect = (subjId: string) => {
    setSelectedSubject(subjId);
    setSelectedBook('all');
    setSelectedChapters(['all']);
  };

  const filteredQuestions = useMemo(() => {
    let list = questionsData[selectedSubject] || [];

    if (selectedBook !== 'all') {
      const bookClean = selectedBook.toLowerCase().trim();
      const mappings: Record<string, string[]> = {
        "icjoshi": ["aviation meteorology", "ic joshi", "ic joshi meteorology"],
        "oxf*rd_met": ["oxf*rd meteorology", "oxf*rd aviation meteorology"],
        "oxf*rd_nav": ["oxf*rd air navigation", "oxf*rd navigation"]
      };
      list = list.filter(q => {
        const qBook = (q.book || "").toLowerCase().trim();
        let bookMatch = (qBook === bookClean);
        if (!bookMatch) {
          const listName = mappings[bookClean] || [];
          bookMatch = listName.includes(qBook);
        }
        return bookMatch;
      });
    }

    if (selectedChapters.length > 0 && !selectedChapters.includes('all')) {
      const chapsClean = selectedChapters.map(c => c.toLowerCase().trim());
      list = list.filter(q => {
        const qChap = (q.chapter || "").toLowerCase().trim();
        return chapsClean.includes(qChap);
      });
    }

    if (difficulty !== 'any') {
      const getDifficulty = (q: any) => {
        const val = q.id % 3;
        if (val === 0) return 'easy';
        if (val === 1) return 'medium';
        return 'hard';
      };
      list = list.filter(q => getDifficulty(q) === difficulty);
    }

    return list;
  }, [selectedSubject, selectedBook, selectedChapters, difficulty, questionsData]);

  const maxAvailableQuestions = filteredQuestions.length;
  const actualQuestionCount = Math.min(questionCount, maxAvailableQuestions === 0 ? 5 : maxAvailableQuestions);

  useEffect(() => {
    if (questionCount > maxAvailableQuestions) {
      setQuestionCount(maxAvailableQuestions === 0 ? 5 : maxAvailableQuestions);
    }
  }, [maxAvailableQuestions, questionCount]);

  const chaptersList = useMemo(() => {
    if (selectedBook !== 'all') {
      return chaptersData?.[selectedSubject]?.[selectedBook] || [];
    }
    const books = booksData?.[selectedSubject]?.books || [];
    let list: any[] = [];
    books.forEach((b: any) => {
      const chaps = chaptersData?.[selectedSubject]?.[b.id] || [];
      list = [...list, ...chaps];
    });
    // Remove duplicates by name
    const seen = new Set();
    return list.filter((chap: any) => {
      const duplicate = seen.has(chap.name);
      seen.add(chap.name);
      return !duplicate;
    });
  }, [selectedSubject, selectedBook, booksData, chaptersData]);

  const toggleChapter = (chapterName: string) => {
    setSelectedChapters(prev => {
      if (prev.includes('all')) {
        return [chapterName];
      }
      if (prev.includes(chapterName)) {
        const filtered = prev.filter(c => c !== chapterName);
        return filtered.length === 0 ? ['all'] : filtered;
      }
      return [...prev, chapterName];
    });
  };

  const handleStartExam = () => {
    onNavigate('mock', {
      subject: selectedSubject,
      title: `${selectedSubjectData.title} Custom Mock`,
      mode: 'custom-mock',
      difficulty: difficulty,
      numQuestions: actualQuestionCount,
      timeLimitMinutes: timeLimit,
      book: selectedBook,
      chapters: selectedChapters
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-16 pt-8 pb-20">
      {/* Hero Header */}
      <motion.div 
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="font-label-caps text-xs text-on-surface-variant block mb-3 uppercase tracking-widest">EXAM SIMULATION</span>
        <h1 className="font-display-xl text-5xl md:text-7xl mb-6 relative inline-block text-white">
          Mock test
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
          Configure a custom exam simulation. Customize your test scope, depth, difficulty, and timing to mirror real-world pilot tests.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column - Subject, Book, Chapter Selection */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          {/* 1. Subject Selection */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <BookOpen size={20} className="text-secondary" />
              <h3 className="font-headline-md text-2xl text-primary font-bold">1. Select subject</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {subjects.map((subj) => {
                const isActive = subj.id === 'nav' || subj.id === 'met';
                const isSelected = selectedSubject === subj.id;
                const qCount = questionsData[subj.id]?.length || 0;
                return (
                  <div
                    key={subj.id}
                    onClick={() => {
                      if (isActive) {
                        handleSubjectSelect(subj.id);
                      }
                    }}
                    className={`group relative h-[120px] rounded-3xl overflow-hidden border transition-all duration-300 flex items-end p-5 ${
                      isSelected 
                        ? 'border-primary ring-2 ring-primary bg-surface shadow-md' 
                        : isActive
                        ? 'border-outline-variant/30 hover:border-outline bg-surface-container-low shadow-sm cursor-pointer'
                        : 'border-outline-variant/10 bg-surface-container-low opacity-60 cursor-not-allowed select-none'
                    }`}
                  >
                    <div className="absolute inset-0 z-0 overflow-hidden">
                      <img 
                        className={`w-full h-full object-cover transition-transform duration-700 ${
                          isSelected ? 'scale-105 opacity-80' : 'group-hover:scale-105 opacity-55'
                        }`}
                        alt={subj.title}
                        src={subj.img}
                      />
                      <div className={`absolute inset-0 transition-colors duration-300 ${
                        isSelected 
                          ? 'bg-gradient-to-t from-black/80 via-black/40 to-transparent' 
                          : 'bg-gradient-to-t from-black/70 via-black/30 to-transparent'
                      }`}></div>
                    </div>

                    <div className="relative z-10 w-full text-white flex justify-between items-end">
                      <div>
                        <span className="bg-white/15 backdrop-blur-md text-[8px] font-label-caps tracking-widest px-2 py-0.5 rounded-md uppercase border border-white/10 select-none">
                          {subj.code}
                        </span>
                        <h4 className="font-display-lg text-lg mt-1 leading-snug">{subj.title}</h4>
                        {subj.subtitle && <p className="text-[10px] opacity-75 italic font-body-md">{subj.subtitle}</p>}
                      </div>
                      <div className="text-right">
                        <p className="font-label-caps text-[9px] tracking-wider opacity-80">{qCount} QUESTIONS</p>
                      </div>
                    </div>

                    {isSelected && (
                      <div className="absolute top-4 right-4 bg-white text-primary w-6 h-6 rounded-full flex items-center justify-center shadow-md">
                        <Check size={14} className="stroke-[3]" />
                      </div>
                    )}

                    {!isActive && (
                      <div className="absolute inset-0 z-20 bg-black/40 backdrop-blur-[2px] pointer-events-none flex items-center justify-center">
                        <span className="font-display-lg text-sm text-white/80 border border-white/20 px-4 py-2 rounded-full backdrop-blur-md bg-white/5">
                          Coming Soon
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* 2. Book Selection */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <BookOpen size={20} className="text-secondary" />
              <h3 className="font-headline-md text-2xl text-primary font-bold">2. Select book</h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <button
                onClick={() => {
                  setSelectedBook('all');
                  setSelectedChapters(['all']);
                }}
                className={`py-2.5 px-5 rounded-2xl border text-xs font-label-caps tracking-wider transition-all cursor-pointer ${
                  selectedBook === 'all'
                    ? 'bg-primary text-on-primary border-primary font-bold shadow-sm'
                    : 'border-outline-variant/50 hover:border-primary text-on-surface-variant bg-surface'
                }`}
              >
                All Reference Books
              </button>
              {(booksData?.[selectedSubject]?.books || []).map((book: any) => (
                <button
                  key={book.id}
                  onClick={() => {
                    setSelectedBook(book.id);
                    setSelectedChapters(['all']);
                  }}
                  className={`py-2.5 px-5 rounded-2xl border text-xs font-label-caps tracking-wider transition-all cursor-pointer ${
                    selectedBook === book.id
                      ? 'bg-primary text-on-primary border-primary font-bold shadow-sm'
                      : 'border-outline-variant/50 hover:border-primary text-on-surface-variant bg-surface'
                  }`}
                >
                  📖 {book.name}
                </button>
              ))}
            </div>
          </div>

          {/* 3. Chapter Selection */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Sliders size={20} className="text-secondary" />
                <h3 className="font-headline-md text-2xl text-primary font-bold">3. Select chapters</h3>
              </div>
              <span className="text-[10px] font-label-caps text-on-surface-variant uppercase tracking-widest font-semibold">
                {selectedChapters.includes('all') ? 'All Chapters' : `${selectedChapters.length} Selected`}
              </span>
            </div>

            <div className="max-h-[260px] overflow-y-auto pr-2 border border-outline-variant/20 p-4 rounded-3xl bg-surface-container-low custom-scrollbar flex flex-col gap-2">
              {/* Select All Item */}
              <button
                onClick={() => setSelectedChapters(['all'])}
                className={`w-full text-left p-3 rounded-xl border flex items-center justify-between transition-all duration-150 cursor-pointer ${
                  selectedChapters.includes('all')
                    ? 'bg-primary/5 border-primary text-primary font-bold'
                    : 'bg-surface border-outline-variant/30 hover:border-outline text-on-surface-variant'
                }`}
              >
                <span className="text-xs font-semibold uppercase tracking-wider">📁 ALL CHAPTERS</span>
                {selectedChapters.includes('all') && <Check size={14} className="stroke-[3]" />}
              </button>

              {/* Individual Chapters Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                {chaptersList.map((chap: any, idx: number) => {
                  const isChecked = selectedChapters.includes(chap.name);
                  return (
                    <button
                      key={chap.id || idx}
                      onClick={() => toggleChapter(chap.name)}
                      className={`text-left p-3 rounded-xl border flex items-center justify-between gap-3 transition-all duration-150 cursor-pointer ${
                        isChecked
                          ? 'bg-primary/5 border-primary text-primary font-bold'
                          : 'bg-surface border-outline-variant/30 hover:border-outline text-on-surface-variant'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="w-5 h-5 rounded bg-surface-variant flex items-center justify-center font-mono text-[9px] font-bold shrink-0 text-secondary">
                          {(idx + 1).toString().padStart(2, '0')}
                        </span>
                        <span className="text-xs truncate">{chap.name}</span>
                      </div>
                      {isChecked && <Check size={14} className="stroke-[3] shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Custom settings */}
        <div className="lg:col-span-5 flex flex-col gap-8 bg-surface-container-low p-6 md:p-8 rounded-[32px] md:rounded-[40px] border border-outline-variant/30 sticky top-28 shadow-sm">
          <div className="flex items-center gap-3">
            <Sliders size={20} className="text-secondary" />
            <h3 className="font-headline-md text-2xl text-primary font-bold">2. Configure test</h3>
          </div>

          <div className="space-y-6">
            {/* Difficulty Level */}
            <div>
              <label className="font-label-caps text-[10px] text-on-surface-variant block mb-2 uppercase tracking-widest">
                Difficulty Level
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { id: 'any', label: 'Any' },
                  { id: 'easy', label: 'Easy' },
                  { id: 'medium', label: 'Medium' },
                  { id: 'hard', label: 'Hard' }
                ].map((d) => (
                  <button
                    key={d.id}
                    onClick={() => {
                      setDifficulty(d.id);
                    }}
                    className={`py-2 px-3 rounded-xl border text-xs font-label-caps transition-all cursor-pointer ${
                      difficulty === d.id
                        ? 'bg-primary text-on-primary border-primary'
                        : 'border-outline-variant/50 hover:border-primary text-on-surface-variant bg-surface'
                    }`}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Questions count */}
            <div>
              <label className="font-label-caps text-[10px] text-on-surface-variant block mb-2 uppercase tracking-widest flex justify-between">
                <span>Number of Questions</span>
                <span className="text-primary font-bold lowercase">({maxAvailableQuestions} available)</span>
              </label>
              <div className="grid grid-cols-5 gap-2 mb-3">
                {[10, 20, 30, 60, 90].map((count) => {
                  const isDisabled = count > maxAvailableQuestions;
                  return (
                    <button
                      key={count}
                      disabled={isDisabled}
                      onClick={() => setQuestionCount(count)}
                      className={`py-2 rounded-xl border text-xs font-label-caps transition-all cursor-pointer ${
                        questionCount === count && !isDisabled
                          ? 'bg-primary text-on-primary border-primary'
                          : isDisabled
                          ? 'opacity-30 border-outline-variant/10 text-outline cursor-not-allowed bg-transparent'
                          : 'border-outline-variant/50 hover:border-primary text-on-surface-variant bg-surface'
                      }`}
                    >
                      {count}
                    </button>
                  );
                })}
              </div>

              {/* Slider for custom select */}
              <div className="flex items-center gap-4 mt-2">
                <input
                  type="range"
                  min="5"
                  max={maxAvailableQuestions === 0 ? 5 : maxAvailableQuestions}
                  value={actualQuestionCount}
                  onChange={(e) => setQuestionCount(parseInt(e.target.value))}
                  className="flex-1 accent-primary cursor-pointer h-1 bg-outline-variant/30 rounded-lg appearance-none"
                />
                <span className="font-display-lg text-lg font-bold text-primary w-8 text-right">
                  {actualQuestionCount}
                </span>
              </div>
            </div>

            {/* Time limit */}
            <div>
              <label className="font-label-caps text-[10px] text-on-surface-variant block mb-2 uppercase tracking-widest">
                Time Limit
              </label>
              <div className="grid grid-cols-5 gap-2">
                {[
                  { value: 10, label: '10m' },
                  { value: 20, label: '20m' },
                  { value: 45, label: '45m' },
                  { value: 60, label: '60m' },
                  { value: 0, label: 'Untimed' }
                ].map((t) => (
                  <button
                    key={t.value}
                    onClick={() => setTimeLimit(t.value)}
                    className={`py-2 rounded-xl border text-xs font-label-caps transition-all cursor-pointer ${
                      timeLimit === t.value
                        ? 'bg-primary text-on-primary border-primary'
                        : 'border-outline-variant/50 hover:border-primary text-on-surface-variant bg-surface'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-outline-variant/20 pt-6">
            <div className="bg-primary-container text-on-primary rounded-2xl p-4 mb-4 border border-outline-variant/10">
              <p className="font-label-caps text-[9px] text-on-primary-container tracking-wider uppercase mb-1">
                EXAM SHEET SUMMARY
              </p>
              <div className="font-display-lg text-lg text-white font-medium mb-1">
                {selectedSubjectData.title}
              </div>
              <p className="font-body-md text-xs text-on-primary-container leading-relaxed">
                {actualQuestionCount} Questions • {difficulty === 'any' ? 'Mixed' : difficulty} Difficulty • {timeLimit === 0 ? 'No Time Limit' : `${timeLimit} Minutes`}
              </p>
            </div>

            <button
              onClick={handleStartExam}
              disabled={maxAvailableQuestions === 0}
              className={`w-full py-4 bg-primary text-on-primary rounded-full font-label-caps text-xs tracking-widest transition-all active:scale-95 shadow-md flex items-center justify-center gap-2 cursor-pointer hover:bg-secondary`}
            >
              <Play size={14} className="fill-current" />
              <span>LAUNCH MOCK SIMULATION</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
