import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle, AlertTriangle, RefreshCw, XCircle, BookOpen, Bookmark } from 'lucide-react';
import type { Question } from '../types';
import { CX3Calculator } from '../components/CX3Calculator';

export const getExplanation = (question: any): string => {
  if (question.explanation) {
    return question.explanation;
  }
  const correctText = question.options[question.correct];
  const qTextLower = question.question.toLowerCase();
  
  if (qTextLower.includes('metar') || qTextLower.includes('taf')) {
    return `METAR and TAF are standard aviation weather formats. The option "${correctText}" correctly interprets the coded weather reporting groups for wind, visibility, clouds, or pressure.`;
  }
  if (qTextLower.includes('lapse rate') || qTextLower.includes('temperature')) {
    return `In meteorology, the lapse rate refers to the rate of temperature decrease with altitude. The standard lapse rate is 1.98°C (approx 2°C) per 1000 feet, whereas dry air cools at 3°C per 1000 feet (DALR).`;
  }
  if (qTextLower.includes('troposphere') || qTextLower.includes('stratosphere') || qTextLower.includes('atmosphere')) {
    return `The troposphere contains most of the weather and air density. Temperature decreases with altitude in the troposphere, but remains constant or increases in the stratosphere due to ozone absorption.`;
  }
  if (qTextLower.includes('transponder') || qTextLower.includes('squawk') || qTextLower.includes('7600') || qTextLower.includes('7700')) {
    return `Standard squawk codes are emergency protocols: 7700 indicates general emergency, 7600 indicates radio communication failure, and 7500 indicates hijacking. "${correctText}" is the correct code or procedure for this situation.`;
  }
  if (qTextLower.includes('emergency') || qTextLower.includes('mayday') || qTextLower.includes('pan pan')) {
    return `Distress communications use 'MAYDAY' (repeated 3 times) for grave/imminent danger. Urgency communications use 'PAN PAN' for safety concerns not requiring immediate assistance. "${correctText}" represents the standard operating procedure.`;
  }
  if (qTextLower.includes('vfr') || qTextLower.includes('ifr') || qTextLower.includes('visibility')) {
    return `Visual Flight Rules (VFR) require specific visibility and cloud clearance minimums. Instrument Flight Rules (IFR) apply in lower visibility or high altitudes. "${correctText}" is the required threshold or procedure.`;
  }
  
  return `In aviation practice and DGCA syllabus guidelines, "${correctText}" is the correct option. It represents the standard operational value, safety protocol, or regulatory requirement for this topic.`;
};

interface MockPageProps {
  params?: {
    subject?: string;
    title?: string;
    mode?: string;
    difficulty?: string;
    numQuestions?: number;
    timeLimitMinutes?: number;
    book?: string;
    chapter?: string;
    chapters?: string[];
  };
  onNavigate: (page: string, params?: any) => void;
  questionsData: Record<string, Question[]>;
}

export const MockPage: React.FC<MockPageProps> = ({ params, onNavigate, questionsData }) => {
  const subjectTitle = params?.title || 'RTR Mock Test';
  const subjectKey = params?.subject || 'rtr';
  const mode = params?.mode || 'test';
  const isPractice = mode === 'practice';
  const isCustomMock = mode === 'custom-mock';
  const limitMinutes = isCustomMock ? (params?.timeLimitMinutes ?? 60) : 60;
  const isUntimed = isCustomMock && limitMinutes === 0;

  const handleBack = () => {
    if (params?.book && params?.chapter) {
      onNavigate('chapters', {
        subject: subjectKey,
        book: params.book,
        bookName: params.title ? params.title.split(' - ')[0] : 'Reference Book'
      });
    } else if (isCustomMock) {
      onNavigate('mock-config');
    } else {
      onNavigate('training');
    }
  };

  const getBackLabel = () => {
    if (params?.book && params?.chapter) {
      return 'BACK TO CHAPTERS';
    }
    if (isCustomMock) {
      return 'BACK TO CONFIG';
    }
    return 'BACK TO SUBJECTS';
  };

  // Compute initial questions list
  const initialQuestions = useMemo(() => {
    let allQuestions = questionsData[subjectKey] || questionsData['rtr'] || [];

    if (params?.book && params.book !== 'all') {
      const bookClean = params.book.toLowerCase().trim();
      const mappings: Record<string, string[]> = {
        "icjoshi": ["aviation meteorology", "ic joshi", "ic joshi meteorology"],
        "oxf*rd_met": ["oxf*rd meteorology", "oxf*rd aviation meteorology"],
        "oxf*rd_nav": ["oxf*rd air navigation", "oxf*rd navigation"]
      };
      allQuestions = allQuestions.filter(q => {
        const qBook = (q.book || "").toLowerCase().trim();
        let bookMatch = (qBook === bookClean);
        if (!bookMatch) {
          const list = mappings[bookClean] || [];
          bookMatch = list.includes(qBook);
        }
        return bookMatch;
      });
    }

    if (params?.chapter) {
      const chapterClean = params.chapter.toLowerCase().trim();
      allQuestions = allQuestions.filter(q => (q.chapter || "").toLowerCase().trim() === chapterClean);
    }

    if (params?.chapters && Array.isArray(params.chapters) && !params.chapters.includes('all')) {
      const chapsClean = params.chapters.map((c: string) => c.toLowerCase().trim());
      allQuestions = allQuestions.filter(q => {
        const qChap = (q.chapter || "").toLowerCase().trim();
        return chapsClean.includes(qChap);
      });
    }

    if (allQuestions.length === 0) {
      allQuestions = questionsData[subjectKey] || questionsData['rtr'] || [];
    }

    if (isPractice) {
      return allQuestions;
    }
    
    // Custom mock or standard test mode
    let filtered = [...allQuestions];
    if (isCustomMock && params?.difficulty && params?.difficulty !== 'any') {
      const targetDiff = params.difficulty;
      const getDifficulty = (q: any) => {
        const val = q.id % 3;
        if (val === 0) return 'easy';
        if (val === 1) return 'medium';
        return 'hard';
      };
      filtered = filtered.filter(q => getDifficulty(q) === targetDiff);
      if (filtered.length === 0) {
        filtered = [...allQuestions];
      }
    }
    
    // Shuffle
    const shuffled = [...filtered];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    const limit = isCustomMock ? (params?.numQuestions || 60) : 60;
    return shuffled.slice(0, limit);
  }, [subjectKey, isPractice, isCustomMock, params?.difficulty, params?.numQuestions, params?.book, params?.chapter, params?.chapters]);

  const [mockQuestions, setMockQuestions] = useState<any[]>(initialQuestions);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(() => 
    new Array(initialQuestions.length).fill(null)
  );
  const [timeLeft, setTimeLeft] = useState(() => limitMinutes * 60);
  const [isFinished, setIsFinished] = useState(false);
  const timerRef = useRef<any>(null);
  const [showReview, setShowReview] = useState(false);
  const [reviewFilter, setReviewFilter] = useState<'all' | 'correct' | 'incorrect' | 'unanswered'>('all');
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  // States for the DGCA-like exam interface
  const [visited, setVisited] = useState<boolean[]>(() => {
    const arr = new Array(initialQuestions.length).fill(false);
    if (arr.length > 0) arr[0] = true;
    return arr;
  });
  const [fontSize, setFontSize] = useState<number>(16);

  useEffect(() => {
    if (mockQuestions.length > 0) {
      setVisited(prev => {
        const updated = [...prev];
        updated[currentIndex] = true;
        return updated;
      });
    }
  }, [currentIndex, mockQuestions]);

  // Timer Effect
  useEffect(() => {
    if (isPractice || isUntimed) return;

    if (timeLeft > 0 && !isFinished) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      handleSubmit();
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [timeLeft, isFinished, isPractice, isUntimed]);

  const handleSelectOption = (optIndex: number) => {
    if (isPractice && answers[currentIndex] !== null) {
      return;
    }
    const updated = [...answers];
    updated[currentIndex] = optIndex;
    setAnswers(updated);
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < mockQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    setIsFinished(true);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setIsFinished(false);
    setShowReview(false);
    setReviewFilter('all');
    setFontSize(16);
    if (!isPractice) {
      // Re-shuffle and re-filter using initialQuestions computed list
      const shuffled = [...initialQuestions];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      setMockQuestions(shuffled);
      setAnswers(new Array(shuffled.length).fill(null));
      setVisited(() => {
        const arr = new Array(shuffled.length).fill(false);
        if (arr.length > 0) arr[0] = true;
        return arr;
      });
      setTimeLeft(limitMinutes * 60);
    } else {
      setAnswers(new Array(mockQuestions.length).fill(null));
      setVisited(() => {
        const arr = new Array(mockQuestions.length).fill(false);
        if (arr.length > 0) arr[0] = true;
        return arr;
      });
    }
  };



  // Score calculations
  const totalCorrect = answers.reduce<number>((acc, ans, i) => {
    return ans === mockQuestions[i].correct ? acc + 1 : acc;
  }, 0);
  const percentage = Math.round((totalCorrect / mockQuestions.length) * 100);
  const totalIncorrect = answers.filter((ans, i) => ans !== null && ans !== mockQuestions[i].correct).length;
  const unanswered = answers.filter((ans) => ans === null).length;

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-16 pt-8 pb-20">
      
      {/* Header Back Link & Title */}
      <div className="mb-10 flex items-center justify-between">
        <button 
          onClick={handleBack}
          className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-all font-label-caps text-xs"
        >
          <ArrowLeft size={16} /> {getBackLabel()}
        </button>
        <div className="font-annotation text-xl text-secondary">Aviation precision required</div>
      </div>

      <header className="mb-12">
        <p className="font-label-caps text-xs text-on-secondary-container mb-2 uppercase tracking-widest">
          {isPractice ? 'PRACTICE MODE' : isCustomMock ? `CUSTOM MOCK TEST • ${params?.difficulty?.toUpperCase() || 'ANY'} DIFFICULTY` : 'MOCK TEST MODE'}
        </p>
        <div className="relative inline-block">
          <h1 className="font-display-lg text-4xl md:text-6xl text-primary mb-2 font-medium">{subjectTitle}</h1>
          <svg className="absolute -bottom-2 left-0 w-full h-2 text-secondary-container" viewBox="0 0 300 10" preserveAspectRatio="none">
            <path d="M2 8C50 9.5 100 -2 298 4" stroke="currentColor" strokeWidth="3" fill="none" />
          </svg>
        </div>
        <p className="font-body-lg text-base md:text-lg text-on-surface-variant max-w-2xl mt-4 leading-relaxed">
          {isPractice 
            ? 'Review the question database at your own pace. Choose options to verify answers and learn correct principles.'
            : 'Validate your readiness for the DGCA examination under real-world timing and question-limit constraints.'
          }
        </p>
      </header>

      <AnimatePresence mode="wait">
        {!isFinished ? (
          isPractice ? (
            <motion.div 
              key="practice-sheet"
              className="max-w-4xl mx-auto space-y-8 text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {mockQuestions.map((q, qIndex) => {
                const answer = answers[qIndex];
                const hasAnswered = answer !== null;

                return (
                  <div 
                    key={q.id || qIndex}
                    className="bg-surface-container p-6 md:p-10 rounded-[32px] md:rounded-[40px] border border-outline-variant/20 relative overflow-hidden shadow-sm"
                  >
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-sm font-semibold text-blue-500 font-label-caps">
                        Question {qIndex + 1}
                      </span>
                      <button className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer bg-transparent border-none p-1">
                        <Bookmark size={18} />
                      </button>
                    </div>

                    <h2 className="text-lg font-bold text-on-background leading-snug mb-8">
                      {q.question}
                    </h2>

                    {/* Clear Static Options */}
                    <div className="space-y-3">
                      {q.options.map((opt: string, optIndex: number) => {
                        const isSelected = answer === optIndex;
                        const isCorrectOption = optIndex === q.correct;
                        const isUserWrongSelection = isSelected && !isCorrectOption;

                        let borderClass = "border-outline-variant/30 bg-surface/35";
                        let labelColor = "text-primary font-bold";
                        let textColor = "text-on-surface";

                        if (hasAnswered) {
                          if (isCorrectOption) {
                            borderClass = "border-emerald-500/50 bg-emerald-500/5";
                            labelColor = "text-emerald-400 font-bold";
                            textColor = "text-emerald-200 font-medium";
                          } else if (isUserWrongSelection) {
                            borderClass = "border-rose-500/50 bg-rose-500/5";
                            labelColor = "text-rose-400 font-bold";
                            textColor = "text-rose-200 font-medium";
                          } else {
                            borderClass = "border-outline-variant/10 bg-surface/10 opacity-40";
                            labelColor = "text-on-surface-variant/40";
                            textColor = "text-on-surface-variant/40";
                          }
                        } else if (isSelected) {
                          borderClass = "border-primary bg-primary/5";
                          labelColor = "text-primary font-bold";
                          textColor = "text-white font-medium";
                        }

                        return (
                          <div
                            key={optIndex}
                            className={`w-full p-4 rounded-2xl border flex items-start gap-4 transition-all duration-200 ${borderClass}`}
                          >
                            <span className={`text-sm min-w-[15px] select-none ${labelColor}`}>
                              {String.fromCharCode(65 + optIndex)})
                            </span>
                            <span className={`text-sm leading-relaxed ${textColor}`}>
                              {opt}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Dedicated A, B, C, D Tapping Row */}
                    <div className="mt-6 flex flex-col gap-2 bg-surface-container-low/40 p-4 rounded-2xl border border-outline-variant/10">
                      <span className="font-label-caps text-[10px] text-on-surface-variant tracking-wider uppercase font-semibold">Select your answer:</span>
                      <div className="flex gap-4 mt-1">
                        {q.options.map((_: string, optIndex: number) => {
                          const isSelected = answer === optIndex;
                          const isCorrect = optIndex === q.correct;
                          const isWrong = isSelected && !isCorrect;

                          let btnStyle = "border-outline-variant hover:border-primary text-on-surface bg-surface hover:bg-surface-variant";
                          if (hasAnswered) {
                            if (isCorrect) {
                              btnStyle = "bg-emerald-500 border-emerald-500 text-white font-bold";
                            } else if (isWrong) {
                              btnStyle = "bg-rose-500 border-rose-500 text-white font-bold";
                            } else {
                              btnStyle = "opacity-35 border-outline-variant/15 text-on-surface-variant/30 bg-surface/5 cursor-default";
                            }
                          } else if (isSelected) {
                            btnStyle = "bg-primary border-primary text-on-primary font-bold shadow-md scale-105";
                          }

                          return (
                            <button
                              key={optIndex}
                              disabled={hasAnswered}
                              onClick={() => {
                                const updated = [...answers];
                                updated[qIndex] = optIndex;
                                setAnswers(updated);
                              }}
                              className={`w-12 h-12 rounded-xl border flex items-center justify-center font-display-lg text-lg transition-all active:scale-95 cursor-pointer font-bold ${btnStyle}`}
                            >
                              {String.fromCharCode(65 + optIndex)}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {hasAnswered && (
                      <motion.div 
                        className={`mt-6 p-5 rounded-2xl border flex flex-col gap-3 ${
                          answer === q.correct
                            ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300'
                            : 'bg-rose-950/40 border-rose-500/40 text-rose-300'
                        }`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <div className="flex items-center gap-3">
                          {answer === q.correct ? (
                            <>
                              <CheckCircle className="text-emerald-400 flex-shrink-0" size={20} />
                              <div className="text-sm font-medium">
                                <strong className="text-emerald-300">Correct!</strong> Well done. You selected the right answer.
                              </div>
                            </>
                          ) : (
                            <>
                              <XCircle className="text-rose-400 flex-shrink-0" size={20} />
                              <div className="text-sm font-medium">
                                <strong className="text-rose-300 font-bold">Incorrect.</strong> The correct answer is: <strong className="underline text-emerald-300">{String.fromCharCode(65 + q.correct)}) {q.options[q.correct]}</strong>.
                              </div>
                            </>
                          )}
                        </div>
                        
                        <div className="mt-2 pt-3 border-t border-current/10 text-xs leading-relaxed opacity-95">
                          <strong className="block mb-1 text-on-surface">Explanation:</strong>
                          <span className="text-on-surface-variant font-medium">{getExplanation(q)}</span>
                        </div>
                      </motion.div>
                    )}
                  </div>
                );
              })}

              {/* Bottom Actions for Practice Sheet */}
              <div className="pt-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="text-sm font-medium text-on-surface-variant font-annotation">
                  Answered {answers.filter(a => a !== null).length} of {mockQuestions.length} questions
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsCalculatorOpen(true)}
                    className="flex items-center gap-2 border border-secondary text-secondary hover:bg-secondary hover:text-white px-6 py-3.5 rounded-full font-label-caps text-xs tracking-wider transition-all active:scale-95 cursor-pointer shadow-sm font-bold"
                  >
                    🧮 CX-3 CALCULATOR
                  </button>
                  <button 
                    onClick={handleSubmit}
                    className="bg-primary text-on-primary px-8 py-3.5 rounded-full font-label-caps text-xs tracking-wider hover:bg-secondary transition-all active:scale-95 shadow-sm cursor-pointer"
                  >
                    FINISH SESSION
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="mock-exam-portal"
              className="max-w-7xl mx-auto space-y-6 text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Top Panel: Legend & Timer & Question Palette */}
              <div className="bg-surface-container border border-outline-variant/30 p-6 rounded-2xl shadow-sm">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 pb-4 border-b border-outline-variant/20">
                  {/* Status Legend */}
                  <div className="flex flex-wrap items-center gap-6 text-xs font-semibold">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded bg-emerald-600 dark:bg-emerald-700 text-white flex items-center justify-center font-bold">✓</span>
                      <span className="text-on-surface">Answered</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded bg-rose-600 dark:bg-rose-700 text-white flex items-center justify-center font-bold">✗</span>
                      <span className="text-on-surface">Not Answered</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded bg-amber-500/20 dark:bg-amber-500/10 border border-amber-500/40 text-amber-800 dark:text-amber-300 flex items-center justify-center font-bold">•</span>
                      <span className="text-on-surface">Not Visited</span>
                    </div>
                  </div>

                  {/* Timer */}
                  <div className="text-lg md:text-xl font-bold font-mono text-primary flex items-center gap-2">
                    <span>⏱</span>
                    <span>Time Left : {
                      isUntimed ? 'UNTIMED' : (
                        (() => {
                          const hrs = Math.floor(timeLeft / 3600);
                          const mins = Math.floor((timeLeft % 3600) / 60);
                          const secs = timeLeft % 60;
                          return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
                        })()
                      )
                    }</span>
                  </div>
                </div>

                {/* Question Numbers Palette */}
                <div className="max-h-[140px] overflow-y-auto pr-2 border border-outline-variant/10 p-4 rounded-xl bg-surface/50">
                  <div className="flex flex-wrap gap-2">
                    {mockQuestions.map((_, i) => {
                      const isCurrent = i === currentIndex;
                      const hasAns = answers[i] !== null;
                      const wasVisited = visited[i];

                      let btnClass = "bg-amber-500/20 dark:bg-amber-500/10 border border-amber-500/40 text-amber-800 dark:text-amber-300"; // Not Visited
                      if (hasAns) {
                        btnClass = "bg-emerald-600 dark:bg-emerald-700 text-white border border-emerald-700"; // Answered
                      } else if (wasVisited) {
                        btnClass = "bg-rose-600 dark:bg-rose-700 text-white border border-rose-700"; // Not Answered
                      }

                      const activeOutline = isCurrent ? "ring-2 ring-primary ring-offset-2 dark:ring-offset-background font-bold scale-105" : "";

                      return (
                        <button
                          key={i}
                          onClick={() => setCurrentIndex(i)}
                          className={`w-9 h-9 rounded flex items-center justify-center text-xs font-semibold transition-all hover:brightness-95 active:scale-95 ${btnClass} ${activeOutline}`}
                        >
                          {i + 1}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Middle Control Bar */}
              <div className="bg-surface-container-low border border-outline-variant/20 p-3 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-3 text-sm font-semibold">
                <div className="flex flex-wrap items-center gap-6">
                  <div>
                    <span className="text-on-surface-variant font-annotation">Question No : </span>
                    <span className="text-primary font-bold">{currentIndex + 1}</span>
                  </div>
                  <div>
                    <span className="text-on-surface-variant font-annotation">Marks : </span>
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-on-surface-variant font-annotation">Your Answer : </span>
                    <div className="flex gap-1.5">
                      {mockQuestions[currentIndex].options.map((_: string, optIndex: number) => {
                        const isSelected = answers[currentIndex] === optIndex;
                        const btnText = String.fromCharCode(65 + optIndex);
                        const btnStyle = isSelected
                          ? "bg-primary border-primary text-on-primary font-bold shadow-sm"
                          : "border-outline-variant hover:border-primary text-on-surface bg-surface hover:bg-surface-variant";

                        return (
                          <button
                            key={optIndex}
                            onClick={() => handleSelectOption(optIndex)}
                            className={`w-8 h-8 rounded-lg border flex items-center justify-center font-bold text-xs transition-all active:scale-90 cursor-pointer ${btnStyle}`}
                          >
                            {btnText}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                  <button
                    onClick={() => {
                      const updated = [...answers];
                      updated[currentIndex] = null;
                      setAnswers(updated);
                    }}
                    className="flex-1 md:flex-none border border-outline-variant/50 hover:bg-surface-variant px-5 py-2.5 rounded-lg text-xs font-bold transition-all active:scale-95 cursor-pointer text-secondary"
                  >
                    Reset Answer
                  </button>
                  <button
                    onClick={handleNext}
                    className="flex-1 md:flex-none bg-primary hover:bg-secondary text-white px-5 py-2.5 rounded-lg text-xs font-bold transition-all active:scale-95 cursor-pointer shadow-sm"
                  >
                    Confirm Answer
                  </button>
                </div>
              </div>

              {/* Main Question Box */}
              <div className="bg-surface-container p-6 md:p-10 rounded-[32px] border border-outline-variant/20 relative shadow-sm min-h-[360px] flex flex-col justify-between">
                <div className="text-left flex-grow">
                  {/* Question Text */}
                  <h2 
                    className="font-bold text-on-background leading-snug mb-8 transition-all"
                    style={{ fontSize: `${fontSize}px` }}
                  >
                    {mockQuestions[currentIndex].question}
                  </h2>

                  {/* Options */}
                  <div className="space-y-4">
                    {mockQuestions[currentIndex].options.map((opt: string, optIndex: number) => {
                      const isSelected = answers[currentIndex] === optIndex;

                      let borderClass = 'border-outline-variant/30 bg-surface/35';
                      let labelColor = 'text-primary font-semibold';
                      let textColor = 'text-on-surface-variant';

                      if (isSelected) {
                        borderClass = 'border-primary bg-primary/5';
                        labelColor = 'text-primary font-bold';
                        textColor = 'text-white font-medium';
                      }

                      return (
                        <div
                          key={optIndex}
                          className={`w-full text-left p-4 rounded-xl border flex items-start gap-4 transition-all duration-200 ${borderClass}`}
                        >
                          <span 
                            className={`min-w-[15px] select-none ${labelColor}`}
                            style={{ fontSize: `${fontSize - 2}px` }}
                          >
                            {String.fromCharCode(65 + optIndex)})
                          </span>
                          <span 
                            className={`${textColor}`}
                            style={{ fontSize: `${fontSize - 2}px` }}
                          >
                            {opt}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom Navigation & Size Settings */}
                <div className="mt-10 pt-6 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4 z-10">
                  {/* Previous / Next buttons */}
                  <div className="flex items-center gap-3 w-full md:w-auto">
                    <button
                      onClick={handlePrev}
                      disabled={currentIndex === 0}
                      className={`flex-1 md:flex-none border border-outline-variant px-6 py-3.5 rounded-full font-label-caps text-xs tracking-wider font-bold transition-all active:scale-95 shadow-sm ${
                        currentIndex === 0 ? 'opacity-40 cursor-not-allowed text-outline border-outline-variant' : 'text-on-surface hover:bg-surface-variant'
                      }`}
                    >
                      Previous
                    </button>
                    <button
                      onClick={handleNext}
                      className="flex-1 md:flex-none bg-primary-container text-on-primary px-8 py-3.5 rounded-full font-label-caps text-xs tracking-wider transition-all active:scale-95 shadow-sm cursor-pointer"
                    >
                      {currentIndex === mockQuestions.length - 1 ? 'Submit Test' : 'Next'}
                    </button>
                  </div>

                  {/* Calculator and Display Size Controls */}
                  <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-end text-xs font-semibold">
                    <button
                      onClick={() => setIsCalculatorOpen(true)}
                      className="flex items-center gap-2 border border-secondary text-secondary hover:bg-secondary hover:text-white px-5 py-3.5 rounded-full font-label-caps text-xs tracking-wider transition-all active:scale-95 cursor-pointer shadow-sm font-bold"
                    >
                      🧮 CX-3 CALCULATOR
                    </button>

                    <span className="text-on-surface-variant font-annotation">Display Size :</span>
                    <div className="flex items-center border border-outline-variant/30 rounded-full overflow-hidden bg-surface">
                      <button
                        onClick={() => setFontSize(prev => Math.min(prev + 2, 26))}
                        className="px-4 py-3 hover:bg-surface-variant active:scale-95 border-r border-outline-variant/30 transition-all font-bold cursor-pointer"
                      >
                        A++
                      </button>
                      <button
                        onClick={() => setFontSize(prev => Math.max(prev - 2, 12))}
                        className="px-4 py-3 hover:bg-surface-variant active:scale-95 border-r border-outline-variant/30 transition-all font-bold cursor-pointer"
                      >
                        A--
                      </button>
                      <button
                        onClick={() => setFontSize(16)}
                        className="px-4 py-3 hover:bg-surface-variant active:scale-95 transition-all font-bold cursor-pointer"
                      >
                        Default
                      </button>
                    </div>
                  </div>
                </div>
              </div>
          </motion.div>
        )) : showReview ? (
          /* Review Screen */
          <motion.div
            key="review"
            className="max-w-4xl mx-auto py-8 text-left"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
          >
            {/* Header */}
            <div className="mb-10 flex items-center justify-between">
              <button 
                onClick={() => {
                  setShowReview(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-all font-label-caps text-xs cursor-pointer"
              >
                <ArrowLeft size={16} /> BACK TO SUMMARY
              </button>
              <div className="font-annotation text-xl text-secondary">Learning from mistakes</div>
            </div>

            <header className="mb-8">
              <p className="font-label-caps text-xs text-on-secondary-container mb-2 uppercase tracking-widest">
                REVIEW SESSION
              </p>
              <h1 className="font-display-lg text-4xl text-white font-medium">{subjectTitle}</h1>
              <p className="font-body-md text-sm text-on-surface-variant mt-2">
                Go through each question to check explanations, correct answers, and your choices.
              </p>
            </header>

            {/* Filters Bento */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {[
                { id: 'all', label: `All (${mockQuestions.length})` },
                { id: 'correct', label: `Correct (${totalCorrect})` },
                { id: 'incorrect', label: `Incorrect (${totalIncorrect})` },
                { id: 'unanswered', label: `Unanswered (${unanswered})` }
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setReviewFilter(f.id as any)}
                  className={`py-2.5 px-4 rounded-xl border text-xs font-label-caps transition-all cursor-pointer ${
                    reviewFilter === f.id
                      ? 'bg-primary text-on-primary border-primary font-medium'
                      : 'border-outline-variant/50 hover:border-primary text-on-surface-variant bg-surface-container-low'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Questions list */}
            <div className="space-y-6">
              {mockQuestions
                .map((q, i) => ({ q, originalIndex: i }))
                .filter(({ q, originalIndex }) => {
                  const isCorrect = answers[originalIndex] === q.correct;
                  const isUnanswered = answers[originalIndex] === null;
                  if (reviewFilter === 'correct') return isCorrect && !isUnanswered;
                  if (reviewFilter === 'incorrect') return !isCorrect && !isUnanswered;
                  if (reviewFilter === 'unanswered') return isUnanswered;
                  return true;
                })
                .length === 0 ? (
                  <div className="text-center py-12 bg-surface-container-low rounded-3xl border border-outline-variant/20">
                    <p className="font-body-md text-on-surface-variant">No questions match this filter.</p>
                  </div>
                ) : (
                  mockQuestions
                    .map((q, i) => ({ q, originalIndex: i }))
                    .filter(({ q, originalIndex }) => {
                      const isCorrect = answers[originalIndex] === q.correct;
                      const isUnanswered = answers[originalIndex] === null;
                      if (reviewFilter === 'correct') return isCorrect && !isUnanswered;
                      if (reviewFilter === 'incorrect') return !isCorrect && !isUnanswered;
                      if (reviewFilter === 'unanswered') return isUnanswered;
                      return true;
                    })
                    .map(({ q, originalIndex }) => {
                      const userAnswer = answers[originalIndex];
                      const isCorrect = userAnswer === q.correct;
                      const isUnanswered = userAnswer === null;

                      return (
                        <div 
                          key={q.id}
                          className="bg-surface-container p-6 md:p-8 rounded-3xl border border-outline-variant/20 flex flex-col gap-4 relative overflow-hidden"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] font-label-caps text-outline uppercase tracking-wider">
                              Question {(originalIndex + 1).toString().padStart(2, '0')}
                            </span>
                            {isUnanswered ? (
                              <span className="bg-surface-variant text-outline px-3 py-1 rounded-full font-label-caps text-[9px] uppercase tracking-wider border border-outline-variant/30">
                                Unanswered
                              </span>
                            ) : isCorrect ? (
                              <span className="bg-emerald-500/10 text-emerald-700 px-3 py-1 rounded-full font-label-caps text-[9px] uppercase tracking-wider border border-emerald-500/20">
                                Correct
                              </span>
                            ) : (
                              <span className="bg-error/5 text-error px-3 py-1 rounded-full font-label-caps text-[9px] uppercase tracking-wider border border-error/20">
                                Incorrect
                              </span>
                            )}
                          </div>

                          <h3 className="font-headline-md text-xl text-primary leading-snug">
                            {q.question}
                          </h3>

                          <div className="space-y-3">
                            {q.options.map((opt: string, optIndex: number) => {
                              const isCorrectOption = optIndex === q.correct;
                              const isSelectedOption = userAnswer === optIndex;

                              let optionStyle = 'border-outline-variant/30 bg-surface/50';
                              let badgeStyle = 'border-outline-variant text-outline';

                              if (isCorrectOption) {
                                optionStyle = 'border-emerald-500/80 bg-emerald-500/5 text-emerald-950 font-medium';
                                badgeStyle = 'bg-emerald-500 text-white border-emerald-500';
                              } else if (isSelectedOption) {
                                optionStyle = 'border-error/80 bg-error/5 text-error-950';
                                badgeStyle = 'bg-error text-white border-error';
                              }

                              return (
                                <div 
                                  key={optIndex}
                                  className={`w-full text-left p-4 rounded-2xl border flex items-center gap-4 ${optionStyle}`}
                                >
                                  <span className={`w-7 h-7 rounded-full border flex items-center justify-center font-label-caps text-xs ${badgeStyle}`}>
                                    {String.fromCharCode(65 + optIndex)}
                                  </span>
                                  <span className="text-xs md:text-sm">
                                    {opt}
                                  </span>
                                </div>
                              );
                            })}
                          </div>

                          {/* Explanation Block */}
                          <div className="mt-4 p-5 rounded-2xl bg-secondary-container/30 border border-outline-variant/20 text-xs leading-relaxed text-on-surface-variant">
                            <div className="flex items-center gap-2 mb-2 text-primary font-bold">
                              <CheckCircle className="text-secondary flex-shrink-0" size={16} />
                              <span>Detailed Explanation</span>
                            </div>
                            <p className="opacity-90">{getExplanation(q)}</p>
                          </div>
                        </div>
                      );
                    })
                )}
            </div>

            {/* Footer actions */}
            <div className="mt-12 flex justify-center">
              <button
                onClick={() => {
                  setShowReview(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-primary text-on-primary px-8 py-4 rounded-full font-label-caps text-xs tracking-wider hover:bg-secondary transition-all active:scale-95 shadow-md flex items-center gap-2 cursor-pointer"
              >
                BACK TO SUMMARY
              </button>
            </div>
          </motion.div>
        ) : (
          /* Result Summary Screen */
          <motion.div 
            key="results"
            className="text-center max-w-2xl mx-auto py-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 80 }}
          >
            <h2 className="font-headline-lg text-3xl md:text-5xl text-primary mb-8 font-medium">Performance Summary</h2>
            
            {/* Radial score gauge */}
            <div className="relative w-56 h-56 mx-auto mb-10">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#e0e5c9" strokeWidth="6" />
                <motion.circle 
                  cx="50" 
                  cy="50" 
                  r="45" 
                  fill="none" 
                  stroke="#202a2d" 
                  strokeWidth="6" 
                  strokeDasharray="283"
                  initial={{ strokeDashoffset: 283 }}
                  animate={{ strokeDashoffset: 283 - (283 * percentage) / 100 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-display-lg text-5xl md:text-6xl text-primary font-bold">{percentage}%</span>
                <span className="font-label-caps text-[9px] text-outline uppercase tracking-widest mt-1">PROFICIENCY</span>
              </div>
            </div>

            {/* Score cards bento */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              <div className="bg-surface-container-low p-5 rounded-[24px] md:rounded-[32px] border border-outline-variant/30 flex flex-col items-center">
                <CheckCircle className="text-secondary mb-2" size={20} />
                <p className="font-label-caps text-[9px] text-outline uppercase tracking-widest mb-1">CORRECT</p>
                <p className="font-headline-md text-2xl text-primary font-bold">{totalCorrect}</p>
              </div>
              <div className="bg-surface-container-low p-5 rounded-[24px] md:rounded-[32px] border border-outline-variant/30 flex flex-col items-center">
                <XCircle className="text-error mb-2" size={20} />
                <p className="font-label-caps text-[9px] text-outline uppercase tracking-widest mb-1">INCORRECT</p>
                <p className="font-headline-md text-2xl text-error font-bold">{totalIncorrect}</p>
              </div>
              <div className="bg-surface-container-low p-5 rounded-[24px] md:rounded-[32px] border border-outline-variant/30 flex flex-col items-center">
                <AlertTriangle className="text-outline mb-2" size={20} />
                <p className="font-label-caps text-[9px] text-outline uppercase tracking-widest mb-1">UNANSWERED</p>
                <p className="font-headline-md text-2xl text-outline font-bold">{unanswered}</p>
              </div>
            </div>

            <div className="flex gap-4 justify-center flex-wrap">
              <button 
                onClick={handleReset}
                className="bg-primary text-on-primary px-8 py-4 rounded-full font-label-caps text-xs tracking-wider hover:bg-secondary transition-all active:scale-95 flex items-center gap-2 shadow-sm cursor-pointer font-bold"
              >
                <RefreshCw size={14} /> {isPractice ? 'RETRY PRACTICE' : 'RETRY SIMULATION'}
              </button>
              <button 
                onClick={() => {
                  setShowReview(true);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-secondary text-on-secondary px-8 py-4 rounded-full font-label-caps text-xs tracking-wider hover:bg-primary transition-all active:scale-95 flex items-center gap-2 shadow-sm cursor-pointer font-bold"
              >
                <BookOpen size={14} /> REVIEW QUESTIONS
              </button>
              <button 
                onClick={handleBack}
                className="border border-outline-variant px-8 py-4 rounded-full font-label-caps text-xs tracking-wider hover:border-primary transition-all active:scale-95 text-primary"
              >
                {params?.book && params?.chapter ? 'BACK TO CHAPTERS' : isCustomMock ? 'MOCK CONFIG' : 'OTHER SUBJECTS'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <CX3Calculator isOpen={isCalculatorOpen} onClose={() => setIsCalculatorOpen(false)} />
    </div>
  );
};
