import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LandingPage } from './pages/LandingPage';
import { TrainingPage } from './pages/TrainingPage';
import { BooksPage } from './pages/BooksPage';
import { ChaptersPage } from './pages/ChaptersPage';
import { MockConfigPage } from './pages/MockConfigPage';
import { MockPage } from './pages/MockPage';
import { LoadingScreen } from './components/LoadingScreen';
import { Plane, Menu, X } from 'lucide-react';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.48 1.966 14.017 1.948 12.01 1.948c-5.44 0-9.866 4.372-9.87 9.802 0 1.63.454 3.224 1.316 4.642l-.991 3.616 3.702-.954zm10.93-4.57c-.295-.148-1.748-.862-2.019-.96-.27-.099-.468-.148-.665.148-.197.296-.764.96-.936 1.157-.172.196-.344.223-.64.074-.295-.148-1.25-.46-2.38-1.467-.88-.785-1.474-1.754-1.647-2.05-.172-.296-.018-.456.13-.604.134-.133.295-.346.443-.519.148-.173.197-.296.296-.494.099-.198.05-.371-.025-.519-.074-.148-.665-1.602-.911-2.195-.24-.578-.48-.5-.665-.51-.172-.007-.37-.01-.567-.01-.197 0-.518.074-.789.37-.27.296-1.034 1.012-1.034 2.47 0 1.458 1.059 2.864 1.207 3.062.148.197 2.083 3.178 5.047 4.455.705.304 1.256.486 1.684.622.709.224 1.353.193 1.863.117.568-.086 1.748-.714 1.994-1.402.246-.688.246-1.277.172-1.402-.074-.125-.27-.198-.567-.346z" />
  </svg>
);

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.577.191l-8.533 7.703-.332 4.981c.488 0 .702-.223.974-.488l2.337-2.27 4.861 3.59c.895.493 1.54.24 1.764-.83l3.185-15.008c.326-1.306-.5-1.898-1.357-1.472z" />
  </svg>
);

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [pageParams, setPageParams] = useState<any>(null);
  const [showBanner, setShowBanner] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [isTelegramOpen, setIsTelegramOpen] = useState(false);

  const [booksData, setBooksData] = useState<any>(null);
  const [chaptersData, setChaptersData] = useState<any>(null);
  const [questionsData, setQuestionsData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.documentElement.classList.remove('light-mode');
    document.body.classList.remove('light-mode');
    localStorage.removeItem('skyly-theme');

    const fetchData = async () => {
      try {
        const [booksRes, chaptersRes, questionsRes] = await Promise.all([
          fetch('/api/books'),
          fetch('/api/chapters'),
          fetch('/api/questions')
        ]);

        if (!booksRes.ok || !chaptersRes.ok || !questionsRes.ok) {
          throw new Error('Failed to load database content.');
        }

        const books = await booksRes.json();
        const chapters = await chaptersRes.json();
        const questions = await questionsRes.json();

        setBooksData(books);
        setChaptersData(chapters);
        setQuestionsData(questions);
        setLoading(false);
      } catch (err: any) {
        console.error('Error fetching data:', err);
        setError(err.message || 'Error loading database content. Please try again.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  const navigateTo = (page: string, params: any = null) => {
    setCurrentPage(page);
    setPageParams(params);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    return (
      <div className="relative min-h-screen flex flex-col font-sans bg-background text-on-background items-center justify-center overflow-hidden">
        <div className="noise-overlay" />
        <div className="z-10 max-w-md p-8 rounded-3xl bg-surface-container-low border border-outline-variant/30 text-center">
          <X className="w-12 h-12 text-[#FF5A5A] mx-auto mb-4 animate-bounce" />
          <h2 className="font-display-lg text-2xl text-white font-bold mb-2">Connection Error</h2>
          <p className="text-on-surface-variant font-body-md text-sm mb-6 leading-relaxed">
            {error}
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-primary text-white hover:bg-secondary px-6 py-3 rounded-full font-semibold text-xs tracking-wider transition-all active:scale-95 cursor-pointer border-none"
          >
            Retry Connection
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex flex-col font-sans bg-background text-on-background">
      {/* Global paper noise texture */}
      <div className="noise-overlay" />

      {/* Dismissible Top Notification Banner */}
      <AnimatePresence>
        {showBanner && (
          <motion.div 
            className="bg-primary text-on-primary py-2.5 px-6 md:px-16 flex justify-between items-center text-label-caps text-[10px] tracking-wider relative z-50 shadow-sm w-full"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-2">
              <Plane size={12} className="animate-pulse" />
              <span>Welcome to the new era of pilot training. Skyly 2.0 is live.</span>
            </div>
            <button 
              className="hover:opacity-70 transition-opacity cursor-pointer" 
              onClick={() => setShowBanner(false)}
            >
              <X size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header Sticky Navigation */}
      <header className="sticky top-0 left-0 w-full z-40 bg-background/90 backdrop-blur-md border-b border-outline-variant/30 flex items-center h-[80px]">
        <div className="max-w-7xl mx-auto px-6 md:px-16 flex justify-between items-center w-full">
          
          {/* Logo */}
          <div 
            onClick={() => navigateTo('landing')}
            className="flex items-center gap-2 cursor-pointer select-none"
          >
            <img src="/logo.png" alt="Skyly Logo" className="h-12 w-auto object-contain" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 font-semibold text-sm">
            <button 
              onClick={() => navigateTo('landing')}
              className={`pb-1 transition-all cursor-pointer relative ${currentPage === 'landing' ? 'text-on-background font-bold' : 'text-on-surface-variant hover:text-on-background'}`}
            >
              Home
              {currentPage === 'landing' && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-full" />
              )}
            </button>
            <button 
              onClick={() => navigateTo('training')}
              className={`pb-1 transition-all cursor-pointer relative ${currentPage === 'training' || (currentPage === 'mock' && pageParams?.mode === 'practice') ? 'text-on-background font-bold' : 'text-on-surface-variant hover:text-on-background'}`}
            >
              Training
              {(currentPage === 'training' || (currentPage === 'mock' && pageParams?.mode === 'practice')) && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-full" />
              )}
            </button>
            <button 
              onClick={() => navigateTo('mock-config')}
              className={`pb-1 transition-all cursor-pointer relative ${currentPage === 'mock-config' || (currentPage === 'mock' && pageParams?.mode === 'custom-mock') ? 'text-on-background font-bold' : 'text-on-surface-variant hover:text-on-background'}`}
            >
              Mock Tests
              {(currentPage === 'mock-config' || (currentPage === 'mock' && pageParams?.mode === 'custom-mock')) && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-full" />
              )}
            </button>
          </nav>

          {/* Header Controls (CTA & Profile) */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => setIsWhatsAppOpen(true)}
              className="bg-primary text-white hover:bg-secondary px-5 py-2.5 rounded-lg text-sm font-semibold transition-all active:scale-95 cursor-pointer"
            >
              Join WhatsApp Community
            </button>

            <button 
              onClick={() => navigateTo('training')}
              className="bg-primary text-white hover:bg-secondary px-5 py-2.5 rounded-lg text-sm font-semibold transition-all active:scale-95 cursor-pointer flex items-center gap-1.5"
            >
              Start Learning &rarr;
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="md:hidden text-primary hover:text-secondary transition-colors cursor-pointer"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Navigation Side Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Dark blur backdrop */}
            <motion.div 
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-45 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Slide-out Sidebar Panel */}
            <motion.div 
              className="fixed right-0 top-0 h-full w-[280px] bg-surface-dim border-l border-outline-variant/30 z-50 flex flex-col p-6 gap-6 shadow-2xl md:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              {/* Header inside Side Menu */}
              <div className="flex justify-between items-center pb-4 border-b border-outline-variant/10">
                <span className="font-label-caps text-xs text-on-surface-variant tracking-wider uppercase font-semibold">Menu</span>
                <button 
                  className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X size={24} />
                </button>
              </div>
              
              {/* Menu Links */}
              <div className="flex flex-col gap-4">
                <button 
                  onClick={() => { navigateTo('landing'); setMobileMenuOpen(false); }}
                  className={`text-left py-2.5 font-headline-md text-xl transition-colors ${currentPage === 'landing' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-white'}`}
                >
                  Home
                </button>
                <button 
                  onClick={() => { navigateTo('training'); setMobileMenuOpen(false); }}
                  className={`text-left py-2.5 font-headline-md text-xl transition-colors ${currentPage === 'training' || (currentPage === 'mock' && pageParams?.mode === 'practice') ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-white'}`}
                >
                  Training Portal
                </button>
                <button 
                  onClick={() => { navigateTo('mock-config'); setMobileMenuOpen(false); }}
                  className={`text-left py-2.5 font-headline-md text-xl transition-colors ${currentPage === 'mock-config' || (currentPage === 'mock' && pageParams?.mode === 'custom-mock') ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-white'}`}
                >
                  Mock Tests
                </button>
              </div>

              {/* Buttons */}
              <div className="mt-auto flex flex-col gap-3">
                <button 
                  onClick={() => {
                    setIsWhatsAppOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="bg-primary text-white py-3.5 rounded-xl font-semibold text-xs tracking-wider text-center flex items-center justify-center gap-2 cursor-pointer shadow-md hover:bg-secondary active:scale-95 transition-all"
                >
                  Join WhatsApp Community
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content Layout Container */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
          >
            {currentPage === 'landing' && <LandingPage onNavigate={navigateTo} />}
            {currentPage === 'training' && <TrainingPage onNavigate={navigateTo} questionsData={questionsData} />}
            {currentPage === 'books' && <BooksPage params={pageParams} onNavigate={navigateTo} booksData={booksData} />}
            {currentPage === 'chapters' && <ChaptersPage params={pageParams} onNavigate={navigateTo} chaptersData={chaptersData} />}
            {currentPage === 'mock-config' && (
              <MockConfigPage 
                onNavigate={navigateTo} 
                questionsData={questionsData} 
                booksData={booksData} 
                chaptersData={chaptersData} 
              />
            )}
            {currentPage === 'mock' && <MockPage params={pageParams} onNavigate={navigateTo} questionsData={questionsData} />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer layout */}
      <footer className="bg-surface-container-low border-t border-outline-variant/20 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col md:flex-row justify-between items-center gap-8 w-full">
          <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 select-none">
              <img src="/logo.png" alt="Skyly Logo" className="h-10 w-auto object-contain" />
            </div>
            <p className="text-on-surface-variant font-body-md text-sm leading-relaxed max-w-xs">
              Zero cookies, zero tracking. Just focused aviation excellence. Built for pilots, by pilots.
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center md:items-end">
            <span className="font-label-caps text-xs text-on-surface-variant uppercase tracking-widest">Connect with us</span>
            <div className="flex gap-4">
              <button 
                onClick={() => setIsWhatsAppOpen(true)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-outline-variant/50 text-secondary hover:text-primary hover:border-primary hover:bg-surface-variant transition-all font-label-caps text-[10px] tracking-wider cursor-pointer"
              >
                <WhatsAppIcon />
                WhatsApp
              </button>
              <button 
                onClick={() => setIsTelegramOpen(true)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-outline-variant/50 text-secondary hover:text-primary hover:border-primary hover:bg-surface-variant transition-all font-label-caps text-[10px] tracking-wider cursor-pointer"
              >
                <TelegramIcon />
                Telegram
              </button>
            </div>
            <div className="font-label-caps text-[10px] text-outline tracking-wider text-center md:text-right mt-2">
              © 2026 Skyly.in - All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Support Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 floating-support-container">
        {/* Telegram FAB */}
        <motion.button
          onClick={() => setIsTelegramOpen(true)}
          className="w-12 h-12 rounded-full bg-[#24A1DE] text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform relative group cursor-pointer border-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
        >
          <TelegramIcon />
          <span className="absolute right-14 bg-surface-bright text-on-surface text-xs font-label-caps tracking-wider px-3 py-1.5 rounded-lg border border-outline-variant/20 shadow-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap">
            Telegram Support
          </span>
        </motion.button>

        {/* WhatsApp FAB */}
        <motion.button
          onClick={() => setIsWhatsAppOpen(true)}
          className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform relative group cursor-pointer border-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
        >
          <WhatsAppIcon />
          <span className="absolute right-14 bg-surface-bright text-on-surface text-xs font-label-caps tracking-wider px-3 py-1.5 rounded-lg border border-outline-variant/20 shadow-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap">
            WhatsApp Support
          </span>
        </motion.button>
      </div>

      {/* WhatsApp QR Code Modal */}
      <AnimatePresence>
        {isWhatsAppOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsWhatsAppOpen(false)}
            />
            
            {/* Modal Content */}
            <motion.div 
              className="bg-surface-bright border border-outline-variant/30 rounded-[32px] max-w-sm w-full p-8 shadow-2xl relative z-10 text-center"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              <button 
                onClick={() => setIsWhatsAppOpen(false)}
                className="absolute top-6 right-6 text-on-surface-variant hover:text-primary transition-colors p-1 cursor-pointer"
              >
                <X size={20} />
              </button>
              
              <div className="w-12 h-12 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mx-auto mb-4">
                <WhatsAppIcon />
              </div>
              
              <h3 className="font-display-lg text-2xl text-primary mb-2">Connect on WhatsApp</h3>
              <p className="font-body-md text-sm text-on-surface-variant mb-6 leading-relaxed">
                Scan the QR code below with your phone's camera to join our WhatsApp group directly.
              </p>
              
              {/* QR Code Image */}
              <div className="bg-white rounded-2xl p-4 border border-outline-variant/30 flex flex-col items-center justify-center max-w-[200px] mx-auto mb-6 shadow-sm">
                <img 
                  src="/whatsapp_qr.jpg" 
                  alt="WhatsApp Group QR Code" 
                  className="w-full h-auto object-contain rounded-lg animate-fade-in"
                />
              </div>
              
              <div className="flex flex-col gap-3">
                <a 
                  href="https://chat.whatsapp.com/F8wGIhCdwVSC5aadO4DPhQ?s=cl&p=a&ilr=4&amv=0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20ba5a] text-white py-3 rounded-full font-label-caps text-xs tracking-wider transition-all active:scale-95 block shadow-md text-center cursor-pointer"
                >
                  Join Group Directly
                </a>
                <button 
                  onClick={() => setIsWhatsAppOpen(false)}
                  className="font-label-caps text-xs text-secondary hover:text-primary transition-colors py-2 cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Telegram QR Code Modal */}
      <AnimatePresence>
        {isTelegramOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsTelegramOpen(false)}
            />
            
            {/* Modal Content */}
            <motion.div 
              className="bg-surface-bright border border-outline-variant/30 rounded-[32px] max-w-sm w-full p-8 shadow-2xl relative z-10 text-center"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              <button 
                onClick={() => setIsTelegramOpen(false)}
                className="absolute top-6 right-6 text-on-surface-variant hover:text-primary transition-colors p-1 cursor-pointer"
              >
                <X size={20} />
              </button>
              
              <div className="w-12 h-12 rounded-full bg-[#24A1DE]/10 text-[#24A1DE] flex items-center justify-center mx-auto mb-4">
                <TelegramIcon />
              </div>
              
              <h3 className="font-display-lg text-2xl text-primary mb-2">Connect on Telegram</h3>
              <p className="font-body-md text-sm text-on-surface-variant mb-6 leading-relaxed">
                Scan the QR code below or click the button to join our Telegram group directly.
              </p>
              
              {/* QR Code Image */}
              <div className="bg-white rounded-2xl p-4 border border-outline-variant/30 flex flex-col items-center justify-center max-w-[200px] mx-auto mb-6 shadow-sm">
                <img 
                  src="/telegram_qr.jpg" 
                  alt="Telegram Group QR Code" 
                  className="w-full h-auto object-contain rounded-lg animate-fade-in"
                />
              </div>
              
              <div className="flex flex-col gap-3">
                <a 
                  href="https://t.me/dgcartrgrp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#24A1DE] hover:bg-[#1f8ec4] text-white py-3 rounded-full font-label-caps text-xs tracking-wider transition-all active:scale-95 block shadow-md text-center cursor-pointer"
                >
                  Join Group Directly
                </a>
                <button 
                  onClick={() => setIsTelegramOpen(false)}
                  className="font-label-caps text-xs text-secondary hover:text-primary transition-colors py-2 cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

