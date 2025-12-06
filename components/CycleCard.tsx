import React, { useState } from 'react';
import { CycleData } from '../types';

interface CycleCardProps {
  cycle: CycleData;
}

const CycleCard: React.FC<CycleCardProps> = ({ cycle }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Helper to render content with basic formatting
  const renderContent = (text: string, idx: number) => {
    // Check for Headers (###)
    if (text.startsWith('###')) {
      return (
        <h4 key={idx} className="text-sm font-bold text-primary-700 dark:text-primary-400 mt-5 mb-2 uppercase tracking-wide border-l-4 border-primary-500 pl-3">
          {text.replace('###', '').trim()}
        </h4>
      );
    }
    
    // Check for List Items (• or -)
    if (text.startsWith('•') || text.startsWith('-')) {
      return (
        <div key={idx} className="flex items-start mb-1.5 ml-1">
          <span className="text-primary-500 dark:text-primary-400 mr-2 mt-1.5 text-[8px] flex-shrink-0">●</span>
          <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
            {text.substring(1).trim()}
          </p>
        </div>
      );
    }

    // Numbered lists
    if (/^\d+\./.test(text)) {
        return (
            <p key={idx} className="mb-2 text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium pl-1">
                {text}
            </p>
        );
    }

    // Standard Paragraph
    return (
      <p key={idx} className="mb-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed text-justify">
        {text}
      </p>
    );
  };

  return (
    <div className={`group card-white rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:shadow-lg ${isExpanded ? 'ring-2 ring-primary-500/20 dark:ring-primary-500/30 shadow-md' : ''}`}>
      
      {/* Decorative gradient blob */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary-50 dark:bg-slate-800/50 rounded-full blur-3xl pointer-events-none group-hover:bg-primary-100 dark:group-hover:bg-slate-700/50 transition-colors opacity-60 duration-500"></div>

      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
          <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 dark:from-primary-600 dark:to-primary-800 text-white font-bold text-lg shadow-md border border-primary-400 dark:border-primary-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-primary-500/20">
            {cycle.id}
          </span>
          <h3 className="text-xl font-heading font-bold text-slate-800 dark:text-slate-100 leading-tight group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors">
            {cycle.title}
          </h3>
        </div>
        
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed border-l-2 border-primary-200 dark:border-primary-800 pl-4 transition-colors group-hover:border-primary-400">
          {cycle.description}
        </p>
        
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[3000px] opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
            {/* Narrative Content */}
            <div className="mb-6 text-slate-700 dark:text-slate-300">
              {cycle.content.map((paragraph, idx) => renderContent(paragraph, idx))}
            </div>

            {/* Regulations List inside Card */}
            {cycle.regulations.length > 0 && (
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-200 dark:border-slate-700 shadow-sm">
                <h4 className="text-xs font-bold text-primary-700 dark:text-primary-400 uppercase tracking-wider mb-3 flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Dasar Hukum & Referensi
                </h4>
                <ul className="space-y-2">
                  {cycle.regulations.map((reg, idx) => (
                    <li key={idx}>
                      <a 
                        href={reg.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`flex items-start text-xs group/link ${reg.url === '#' ? 'cursor-default' : 'hover:text-primary-600 dark:hover:text-primary-400'}`}
                      >
                        <svg className="w-3 h-3 text-primary-500 dark:text-primary-400 mr-2 flex-shrink-0 mt-0.5 transition-transform group-hover/link:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        <span className={`${reg.url === '#' ? 'text-slate-400 dark:text-slate-500' : 'text-primary-600 dark:text-primary-400 underline decoration-primary-300 dark:decoration-primary-700 underline-offset-2 group-hover/link:text-primary-700 dark:group-hover/link:text-primary-300 transition-colors'}`}>
                          {reg.title}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="mt-auto pt-2">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full py-2.5 px-4 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold tracking-wide transition-all border border-slate-200 dark:border-slate-700 hover:border-primary-200 dark:hover:border-primary-800 flex items-center justify-center group/btn shadow-sm active:scale-[0.98]"
          >
            {isExpanded ? 'Tutup Materi' : 'Buka Materi'}
            <svg 
              className={`w-4 h-4 ml-2 transition-transform duration-300 text-slate-500 dark:text-slate-400 group-hover/btn:text-slate-800 dark:group-hover/btn:text-slate-200 ${isExpanded ? 'rotate-180' : 'group-hover/btn:translate-y-0.5'}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CycleCard;