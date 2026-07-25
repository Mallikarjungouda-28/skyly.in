import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle, AlertTriangle, RefreshCw, XCircle, BookOpen, Bookmark } from 'lucide-react';
import { questionsData } from '../data/questions';
import { CX3Calculator } from '../components/CX3Calculator';

export const getExplanation = (question: any): string => {
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
  };
  onNavigate: (page: string) => void;
}

export const MockPage: React.FC<MockPageProps> = ({ params, onNavigate }) => {
  const subjectTitle = params?.title || 'RTR Mock Test';
  const subjectKey = params?.subject || 'rtr';
  const mode = params?.mode || 'test';
  const isPractice = mode === 'practice';
  const isCustomMock = mode === 'custom-mock';
  const limitMinutes = isCustomMock ? (params?.timeLimitMinutes ?? 60) : 60;
  const isUntimed = isCustomMock && limitMinutes === 0;

  // Compute initial questions list
  const initialQuestions = useMemo(() => {
    const allQuestions = questionsData[subjectKey] || questionsData['rtr'];
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
  }, [subjectKey, isPractice, isCustomMock, params?.difficulty, params?.numQuestions]);

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
    if (!isPractice) {
      // Re-shuffle and re-filter
      const allQuestions = questionsData[subjectKey] || questionsData['rtr'];
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
        if (filtered.length === 0) filtered = [...allQuestions];
      }
      const shuffled = [...filtered];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      const limit = isCustomMock ? (params?.numQuestions || 60) : 60;
      const newQuestions = shuffled.slice(0, limit);
      setMockQuestions(newQuestions);
      setAnswers(new Array(newQuestions.length).fill(null));
      setTimeLeft(limitMinutes * 60);
    } else {
      setAnswers(new Array(mockQuestions.length).fill(null));
    }
  };

  // Formatted Timer
  const getFormattedTime = () => {
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
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
          onClick={() => onNavigate(isCustomMock ? 'mock-config' : 'training')}
          className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-all font-label-caps text-xs"
        >
          <ArrowLeft size={16} /> {isCustomMock ? 'BACK TO CONFIG' : 'BACK TO SUBJECTS'}
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
          <motion.div 
            key="test-engine"
            className="grid grid-cols-1 lg:grid-cols-12 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {/* Question Navigation Sidebar */}
            <aside className="lg:col-span-3 order-2 lg:order-1">
              <div className="bg-surface-container-low p-6 rounded-[32px] md:rounded-[40px] border border-outline-variant/30 sticky top-28">
                <div className="mb-8">
                  {isPractice ? (
                    <>
                      <p className="font-label-caps text-[10px] text-on-surface-variant mb-2 uppercase tracking-widest">SESSION MODE</p>
                      <div className="font-display-lg text-xl font-bold text-secondary flex items-center gap-1.5 mt-1">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                        PRACTICE
                      </div>
                    </>
                  ) : isUntimed ? (
                    <>
                      <p className="font-label-caps text-[10px] text-on-surface-variant mb-2 uppercase tracking-widest">SESSION MODE</p>
                      <div className="font-display-lg text-xl font-bold text-secondary flex items-center gap-1.5 mt-1">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
                        UNTIMED TEST
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="font-label-caps text-[10px] text-on-surface-variant mb-2 uppercase tracking-widest">SESSION TIMER</p>
                      <div className={`font-display-lg text-4xl font-bold tabular-nums ${timeLeft < 180 ? 'text-error' : 'text-primary'}`}>
                        {getFormattedTime()}
                      </div>
                    </>
                  )}
                </div>

                <div className="mb-8">
                  <p className="font-label-caps text-[10px] text-on-surface-variant mb-2 uppercase tracking-widest">PROGRESS</p>
                  <div className="w-full bg-surface-variant h-1.5 rounded-full overflow-hidden">
                    <div 
                      className="bg-primary h-full transition-all duration-300"
                      style={{ width: `${((currentIndex + 1) / mockQuestions.length) * 100}%` }}
                    />
                  </div>
                  <p className="font-label-caps text-[9px] mt-2 text-on-surface-variant">
                    QUESTION {(currentIndex + 1).toString().padStart(2, '0')} OF {mockQuestions.length.toString().padStart(2, '0')}
                  </p>
                </div>

                {/* Dot Grid */}
                <div className="grid grid-cols-5 gap-2.5 mb-8">
                  {mockQuestions.map((_, i) => {
                    let dotClass = "border border-outline-variant/40 hover:border-primary cursor-pointer";
                    if (i === currentIndex) {
                      dotClass = "bg-primary border-primary text-white cursor-pointer";
                    } else if (answers[i] !== null) {
                      dotClass = "bg-secondary-container border-secondary-container text-primary font-medium cursor-pointer";
                    }

                    return (
                      <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`aspect-square rounded-xl flex items-center justify-center text-xs transition-all active:scale-90 ${dotClass}`}
                      >
                        {i + 1}
                      </button>
                    );
                  })}
                </div>

                <button 
                  onClick={handleSubmit}
                  className="w-full bg-primary text-on-primary py-4 rounded-full font-label-caps text-xs tracking-widest hover:bg-secondary transition-all active:scale-95 shadow-sm cursor-pointer"
                >
                  {isPractice ? 'FINISH SESSION' : 'TERMINATE TEST'}
                </button>
              </div>
            </aside>

            {/* Question Panel */}
            <main className="lg:col-span-9 order-1 lg:order-2">
              <div className="bg-surface-container p-6 md:p-10 rounded-[32px] md:rounded-[40px] min-h-[500px] flex flex-col justify-between border border-outline-variant/20 relative overflow-hidden shadow-sm">
                


                <div className="flex-grow text-left">
                  {/* Top Row: Question number & Bookmark icon */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-sm font-semibold text-blue-500">
                      Question {currentIndex + 1}
                    </span>
                    <button className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer bg-transparent border-none p-1">
                      <Bookmark size={18} />
                    </button>
                  </div>

                  <h2 className="text-lg font-bold text-on-background leading-snug mb-8">
                    {mockQuestions[currentIndex].question}
                  </h2>

                  <div className="space-y-3">
                    {mockQuestions[currentIndex].options.map((opt: string, optIndex: number) => {
                      const isSelected = answers[currentIndex] === optIndex;
                      const hasAnswered = answers[currentIndex] !== null;
                      const isCorrectOption = optIndex === mockQuestions[currentIndex].correct;
                      const isUserWrongSelection = isSelected && !isCorrectOption;

                      let buttonClass = 'border-outline-variant/30 bg-surface/50 hover:border-primary/45 cursor-pointer';
                      let circleClass = 'border-outline text-outline';
                      let labelClass = 'text-on-surface-variant/70 font-semibold';
                      let textClass = 'text-on-surface-variant';
                      let innerDot = null;

                      if (isSelected) {
                        buttonClass = 'border-primary bg-primary/5';
                        circleClass = 'border-primary';
                        labelClass = 'text-primary font-bold';
                        textClass = 'text-on-background font-medium';
                        innerDot = <div className="w-2.5 h-2.5 rounded-full bg-primary" />;
                      }

                      if (isPractice && hasAnswered) {
                        if (isCorrectOption) {
                          buttonClass = 'border-emerald-500 bg-emerald-500/5 cursor-default';
                          circleClass = 'border-emerald-500';
                          labelClass = 'text-emerald-500 font-bold';
                          textClass = 'text-on-background font-semibold';
                          innerDot = <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />;
                        } else if (isUserWrongSelection) {
                          buttonClass = 'border-error bg-error/5 cursor-default';
                          circleClass = 'border-error';
                          labelClass = 'text-error font-bold';
                          textClass = 'text-on-background font-semibold';
                          innerDot = <div className="w-2.5 h-2.5 rounded-full bg-error" />;
                        } else {
                          buttonClass = 'border-outline-variant/10 bg-surface/10 opacity-55 cursor-default';
                          circleClass = 'border-outline/20';
                          labelClass = 'text-on-surface-variant/45';
                          textClass = 'text-on-surface-variant/45';
                          innerDot = null;
                        }
                      }

                      return (
                        <button
                          key={optIndex}
                          onClick={() => handleSelectOption(optIndex)}
                          disabled={isPractice && hasAnswered}
                          className={`w-full text-left p-4 rounded-xl border flex items-center gap-4 transition-all duration-200 group active:scale-[0.99] ${buttonClass}`}
                        >
                          {/* Circle Radio Indicator */}
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors ${circleClass}`}>
                            {innerDot}
                          </div>

                          {/* Option Letter prefix */}
                          <span className={`text-sm min-w-[12px] transition-colors ${labelClass}`}>
                            {String.fromCharCode(65 + optIndex)}
                          </span>

                          {/* Option text */}
                          <span className={`text-sm transition-colors ${textClass}`}>
                            {opt}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {isPractice && answers[currentIndex] !== null && (
                    <motion.div 
                      className={`mt-6 p-5 rounded-2xl border flex flex-col gap-3 ${
                        answers[currentIndex] === mockQuestions[currentIndex].correct
                          ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-800'
                          : 'bg-error/5 border-error/20 text-error'
                      }`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <div className="flex items-center gap-3">
                        {answers[currentIndex] === mockQuestions[currentIndex].correct ? (
                          <>
                            <CheckCircle className="text-emerald-600 flex-shrink-0" size={20} />
                            <div className="text-sm font-medium">
                              <strong>Correct!</strong> Well done. You selected the right answer.
                            </div>
                          </>
                        ) : (
                          <>
                            <XCircle className="text-error flex-shrink-0" size={20} />
                            <div className="text-sm font-medium">
                              <strong>Incorrect.</strong> The correct answer is: <strong className="underline">{mockQuestions[currentIndex].options[mockQuestions[currentIndex].correct]}</strong>.
                            </div>
                          </>
                        )}
                      </div>
                      
                      <div className="mt-2 pt-3 border-t border-current/10 text-xs leading-relaxed opacity-95">
                        <strong className="block mb-1">Explanation:</strong>
                        {getExplanation(mockQuestions[currentIndex])}
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Footer Controls */}
                <div className="mt-10 pt-6 border-t border-outline-variant/10 flex justify-between items-center z-10">
                  <button 
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className={`flex items-center gap-2 font-label-caps text-xs transition-all ${
                      currentIndex === 0 ? 'text-outline opacity-40 cursor-not-allowed' : 'text-on-surface-variant hover:text-primary'
                    }`}
                  >
                    <ArrowLeft size={16} /> PREVIOUS
                  </button>

                  <div className="hidden md:block font-annotation text-lg text-secondary opacity-70">
                    Precision over speed
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsCalculatorOpen(true)}
                      className="flex items-center gap-2 border border-secondary text-secondary hover:bg-secondary hover:text-white px-5 py-3.5 rounded-full font-label-caps text-xs tracking-wider transition-all active:scale-95 cursor-pointer shadow-sm font-bold"
                    >
                      🧮 CX-3 CALCULATOR
                    </button>
                    <button 
                      onClick={handleNext}
                      className="flex items-center gap-2 bg-primary-container text-on-primary px-6 py-3.5 rounded-full font-label-caps text-xs tracking-wider hover:bg-secondary transition-all active:scale-95 shadow-sm cursor-pointer"
                    >
                      {currentIndex === mockQuestions.length - 1 
                        ? (isPractice ? 'FINISH SESSION' : 'SUBMIT TEST')
                        : 'NEXT'
                      } <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </motion.div>
        ) : showReview ? (
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
                onClick={() => onNavigate(isCustomMock ? 'mock-config' : 'training')}
                className="border border-outline-variant px-8 py-4 rounded-full font-label-caps text-xs tracking-wider hover:border-primary transition-all active:scale-95 text-primary"
              >
                {isCustomMock ? 'MOCK CONFIG' : 'OTHER SUBJECTS'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <CX3Calculator isOpen={isCalculatorOpen} onClose={() => setIsCalculatorOpen(false)} />
    </div>
  );
};
