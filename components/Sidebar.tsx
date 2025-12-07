import React from 'react';
import { cycles } from '../data';

interface SidebarProps {
  className?: string;
  onNavigate: (id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ className = '', onNavigate }) => {
  return (
    <aside className={`${className} sticky top-28 self-start max-h-[calc(100vh-8rem)] overflow-y-auto custom-scrollbar`}>
      <div className="pr-3 pb-4">
        <div className="mb-3 px-4">
          <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
            Daftar Siklus
          </h3>
        </div>
        
        <nav className="space-y-1">
          {cycles.map((cycle) => (
            <button
              key={cycle.id}
              onClick={() => onNavigate(`cycle-${cycle.id}`)}
              className="w-full text-left group flex items-start px-4 py-2 text-sm font-medium rounded-xl text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800 hover:text-primary-700 dark:hover:text-primary-400 hover:shadow-sm border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all duration-200 focus:outline-none"
            >
              <span className="flex-shrink-0 w-6 text-xs text-slate-400 dark:text-slate-500 group-hover:text-primary-500 dark:group-hover:text-primary-400 mt-0.5 font-mono">
                {String(cycle.id).padStart(2, '0')}.
              </span>
              <span className="flex-1 leading-snug">
                {cycle.title}
              </span>
            </button>
          ))}
        </nav>

        <div className="mt-8 mb-3 px-4">
          <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
            Menu Lainnya
          </h3>
        </div>
        <nav className="space-y-1">
          <button 
            onClick={() => onNavigate('scope')}
            className="w-full text-left flex items-center px-4 py-2.5 text-sm font-medium rounded-xl text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800 hover:text-primary-700 dark:hover:text-primary-400 hover:shadow-sm border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all focus:outline-none group"
          >
            <div className="w-5 h-5 mr-3 flex items-center justify-center rounded-md bg-slate-100 dark:bg-slate-800 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/30 text-slate-400 group-hover:text-primary-500 transition-colors">
               <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
               </svg>
            </div>
            Ruang Lingkup
          </button>
          <button 
            onClick={() => onNavigate('regulations')}
            className="w-full text-left flex items-center px-4 py-2.5 text-sm font-medium rounded-xl text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800 hover:text-primary-700 dark:hover:text-primary-400 hover:shadow-sm border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all focus:outline-none group"
          >
            <div className="w-5 h-5 mr-3 flex items-center justify-center rounded-md bg-slate-100 dark:bg-slate-800 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/30 text-slate-400 group-hover:text-primary-500 transition-colors">
               <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
               </svg>
            </div>
            Unduh Regulasi
          </button>
          <button 
            onClick={() => onNavigate('comments')}
            className="w-full text-left flex items-center px-4 py-2.5 text-sm font-medium rounded-xl text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800 hover:text-primary-700 dark:hover:text-primary-400 hover:shadow-sm border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all focus:outline-none group"
          >
            <div className="w-5 h-5 mr-3 flex items-center justify-center rounded-md bg-slate-100 dark:bg-slate-800 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/30 text-slate-400 group-hover:text-primary-500 transition-colors">
               <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
               </svg>
            </div>
            Diskusi
          </button>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;