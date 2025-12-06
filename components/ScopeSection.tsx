import React from 'react';
import { scopeData } from '../data';

const ScopeSection: React.FC = () => {
  return (
    <div className="card-white rounded-2xl p-8 shadow-md mb-12 relative overflow-hidden group/card">
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-80 transition-all duration-700 group-hover/card:w-2/3 group-hover/card:opacity-100"></div>

      <div className="mb-8 text-center relative z-10">
        <h2 className="text-2xl font-heading font-bold text-slate-800 dark:text-slate-100 mb-3">Ruang Lingkup Pengelolaan BMN</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-10 relative z-10">
        <div className="space-y-8">
          {/* Definition */}
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm transition-transform hover:scale-[1.02] duration-300">
            <h3 className="text-lg font-bold text-primary-700 dark:text-primary-400 mb-3 flex items-center">
              <svg className="w-5 h-5 mr-2 animate-pulse-soft" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Definisi BMN/BMD
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
              {scopeData.definition}
            </p>
          </div>

          {/* Sources */}
          <div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Sumber Perolehan
            </h3>
            <div className="space-y-4">
              {scopeData.sources.map((source, idx) => (
                <div key={idx} className="pl-4 border-l-2 border-primary-200 dark:border-slate-700 hover:border-primary-500 dark:hover:border-primary-400 transition-colors duration-300 group/source">
                  <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1 group-hover/source:text-primary-700 dark:group-hover/source:text-primary-400 transition-colors">{source.title}</h4>
                  {source.description && (
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{source.description}</p>
                  )}
                  {source.items && (
                    <ul className="space-y-1 mt-2">
                      {source.items.map((item, i) => (
                        <li key={i} className="text-sm text-slate-600 dark:text-slate-400 flex items-start">
                           <span className="text-primary-500 dark:text-primary-400 mr-2 text-[10px] mt-1 transition-transform group-hover/source:scale-125">●</span>
                           {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Principles */}
        <div>
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-center">
            <svg className="w-5 h-5 mr-2 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Asas Pengelolaan
          </h3>
          <div className="grid grid-cols-1 gap-3">
            {scopeData.principles.map((principle, idx) => (
              <div key={idx} className="flex items-start p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:border-primary-200 dark:hover:border-primary-700 hover:-translate-y-1 hover:shadow-md group">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-600 dark:bg-primary-500 text-white text-xs font-bold flex items-center justify-center mr-3 mt-0.5 group-hover:bg-primary-500 dark:group-hover:bg-primary-400 group-hover:scale-110 transition-all">
                  {idx + 1}
                </span>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors">{principle.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScopeSection;