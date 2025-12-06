import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import CycleCard from './components/CycleCard';
import ReferenceList from './components/ReferenceList';
import CommentSection from './components/CommentSection';
import ScopeSection from './components/ScopeSection';
import { cycles } from './data';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Function to handle navigation with search reset and smooth scroll
  const handleScrollTo = (id: string) => {
    if (searchQuery) {
      setSearchQuery('');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const filteredCycles = cycles.filter(cycle => {
    const query = searchQuery.toLowerCase();
    return (
      cycle.title.toLowerCase().includes(query) ||
      cycle.description.toLowerCase().includes(query) ||
      cycle.content.some(para => para.toLowerCase().includes(query))
    );
  });

  return (
    <div className="min-h-screen font-sans relative transition-colors duration-300 overflow-x-hidden">
      
      {/* --- ANIMATED BACKGROUND LAYERS --- */}
      
      {/* 1. Base Color Layer */}
      <div className="fixed inset-0 bg-slate-50 dark:bg-slate-950 z-0 transition-colors duration-300"></div>
      
      {/* 2. Animated Blobs (Optimized for No Flickering) */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Blob 1: Top Left - Blue */}
        <div 
          className="absolute -top-[10%] -left-[10%] w-[40rem] h-[40rem] bg-blue-300/30 dark:bg-blue-600/20 rounded-full blur-[80px] animate-blob transform-gpu"
          style={{ willChange: 'transform' }}
        ></div>
        
        {/* Blob 2: Top Right - Sky/Cyan - Delayed */}
        <div 
          className="absolute top-[5%] -right-[10%] w-[35rem] h-[35rem] bg-sky-300/30 dark:bg-sky-500/20 rounded-full blur-[80px] animate-blob animation-delay-2000 transform-gpu"
          style={{ willChange: 'transform' }}
        ></div>
        
        {/* Blob 3: Bottom Left - Indigo - Delayed */}
        <div 
          className="absolute bottom-[10%] -left-[5%] w-[45rem] h-[45rem] bg-indigo-300/30 dark:bg-indigo-500/20 rounded-full blur-[80px] animate-blob animation-delay-4000 transform-gpu"
          style={{ willChange: 'transform' }}
        ></div>

        {/* Blob 4: Bottom Right - Cyan - Delayed */}
        <div 
          className="absolute -bottom-[10%] -right-[5%] w-[30rem] h-[30rem] bg-cyan-300/30 dark:bg-cyan-500/20 rounded-full blur-[80px] animate-blob animation-delay-2000 transform-gpu"
          style={{ willChange: 'transform' }}
        ></div>
      </div>

      {/* 3. Grid Pattern Overlay */}
      <div 
        className="fixed inset-0 z-0 opacity-[0.4] dark:opacity-[0.1] pointer-events-none"
        style={{
          backgroundImage: isDark 
            ? 'radial-gradient(#94a3b8 1px, transparent 1px)' 
            : 'radial-gradient(#cbd5e1 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      ></div>

      {/* --- CONTENT WRAPPER --- */}
      <div className="relative z-10">
        <Header 
          isDark={isDark} 
          toggleTheme={toggleTheme} 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onNavigate={handleScrollTo}
        />
        
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12">
            
            <div className="hidden lg:block lg:w-64 xl:w-72 flex-shrink-0">
               <Sidebar onNavigate={handleScrollTo} />
            </div>

            <main className="flex-1 min-w-0 space-y-12">
              {!searchQuery && (
                <section className="text-center lg:text-left space-y-4 mb-8 pt-4 animate-fade-in-up">
                  <div className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold tracking-wide uppercase mb-2 border border-blue-200 dark:border-blue-800 backdrop-blur-sm">
                    Panduan Digital
                  </div>
                  <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 dark:text-slate-100 leading-tight">
                    Siklus Pengelolaan BMN
                  </h2>
                  <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                    Referensi lengkap tata kelola Barang Milik Negara dari perencanaan hingga pengawasan dalam satu panduan interaktif.
                  </p>
                </section>
              )}

              {!searchQuery && (
                <section id="scope" className="animate-fade-in-up delay-100 scroll-mt-24">
                  <ScopeSection />
                </section>
              )}

              <section id="cycles" className="scroll-mt-24 animate-fade-in-up delay-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-heading font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                    {searchQuery ? `Hasil Pencarian: "${searchQuery}"` : 'Materi Siklus'}
                    <span className="text-sm font-normal text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full ml-2">
                      {filteredCycles.length}
                    </span>
                  </h3>
                  {!searchQuery && <div className="h-px flex-1 mx-6 bg-slate-200 dark:bg-slate-700"></div>}
                </div>

                {filteredCycles.length > 0 ? (
                  <div className="grid grid-cols-1 gap-6">
                    {filteredCycles.map((cycle) => (
                      <div key={cycle.id} id={`cycle-${cycle.id}`} className="scroll-mt-28">
                        <CycleCard cycle={cycle} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-slate-50/50 dark:bg-slate-800/50 rounded-2xl p-12 text-center border-2 border-dashed border-slate-200 dark:border-slate-700 backdrop-blur-sm">
                    <svg className="mx-auto h-12 w-12 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="mt-2 text-sm font-medium text-slate-900 dark:text-slate-100">Tidak ditemukan</h3>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      Coba kata kunci lain untuk mencari materi.
                    </p>
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="mt-4 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
                    >
                      Reset Pencarian
                    </button>
                  </div>
                )}
              </section>

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start scroll-mt-24 pt-8 border-t border-slate-200 dark:border-slate-800" id="regulations">
                <section>
                  <ReferenceList />
                </section>

                <section id="comments" className="scroll-mt-24">
                  <CommentSection />
                </section>
              </div>

            </main>
          </div>
        </div>

        <footer className="glass-panel border-t-0 mt-20 py-8 shadow-inner">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
              &copy; {new Date().getFullYear()} BMN Quick Guide. Kementerian Perumahan dan Kawasan Permukiman.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;