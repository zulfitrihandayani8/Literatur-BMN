import React from 'react';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onNavigate: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ isDark, toggleTheme, searchQuery, setSearchQuery, onNavigate }) => {
  return (
    <header className="sticky top-0 z-50 w-full glass-panel transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 gap-4">
          
          {/* 1. Logo Section */}
          <div 
            className="flex-shrink-0 flex items-center gap-3 group cursor-pointer min-w-fit"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="bg-primary-50 dark:bg-slate-800 p-1.5 rounded-lg border border-primary-100 dark:border-slate-700 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-1">
                <img 
                  src="https://website-perumahan.s3.ap-southeast-1.amazonaws.com/prod-storage/perumahan/logo_bawah/01hc9gwh0kry136fvcpws0w1a2/01k2nxftk6b7vgzz8vd7v64qrx.webp" 
                  alt="Logo KemenPKP" 
                  className="h-10 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerText = 'KemenPKP';
                  }}
                />
            </div>
            <div className="hidden lg:block">
                <h1 className="text-lg font-heading font-bold text-slate-800 dark:text-slate-100 tracking-tight leading-none group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                KemenPKP
                </h1>
                <h2 className="text-xs font-medium text-slate-500 dark:text-slate-400 tracking-wide">
                    BMN Guide
                </h2>
            </div>
          </div>

          {/* 2. Search Bar (Centered/Expanded) */}
          <div className="flex-1 max-w-xl px-2 lg:px-6">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-slate-400 group-focus-within:text-primary-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-slate-200 dark:border-slate-700 rounded-xl leading-5 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:bg-white dark:focus:bg-slate-800 focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 sm:text-sm transition-all shadow-sm hover:shadow-md"
                placeholder="Cari literatur, siklus, atau regulasi..."
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>
          
          {/* 3. Right Nav & Actions */}
          <div className="flex items-center gap-1 md:gap-4">
            {/* Top Navigation Links */}
            <nav className="hidden md:flex space-x-1">
              {[
                { label: 'Ruang Lingkup', id: 'scope' },
                { label: 'Regulasi', id: 'regulations' },
                { label: 'Diskusi', id: 'comments' }
              ].map((item, idx) => (
                <button 
                  key={idx}
                  onClick={() => onNavigate(item.id)}
                  className="relative px-3 py-2 rounded-lg text-sm text-slate-600 dark:text-slate-300 hover:text-primary-700 dark:hover:text-primary-400 font-medium transition-all group overflow-hidden focus:outline-none"
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500 origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </button>
              ))}
            </nav>
            
            <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-2 hidden md:block"></div>

            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all hover:scale-110 active:scale-95 focus:outline-none ring-offset-2 focus:ring-2 ring-primary-500"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? (
                <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Mobile Menu Toggle (Simplified) */}
            <button className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;