import React from 'react';
import { cycles } from '../data';

const ReferenceList: React.FC = () => {
  return (
    <div className="card-white rounded-2xl shadow-sm overflow-hidden h-full flex flex-col">
      <div className="p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/80 sticky top-0 z-10 backdrop-blur-sm">
        <h3 className="text-lg font-heading font-bold text-slate-800 dark:text-slate-100 flex items-center">
          <svg className="w-5 h-5 mr-2 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Pusat Unduhan Regulasi
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 pl-7">
          Kumpulan peraturan lengkap berdasarkan siklus pengelolaan BMN
        </p>
      </div>
      
      <div className="overflow-y-auto scroll-smooth custom-scrollbar flex-1 max-h-[600px] lg:max-h-none">
        {cycles.map((cycle) => (
          cycle.regulations.length > 0 && (
            <div key={cycle.id} className="border-b border-slate-100 dark:border-slate-800 last:border-0">
              <div className="px-6 py-3 bg-slate-50 dark:bg-slate-800 border-b border-slate-100 dark:border-slate-800">
                <h4 className="text-xs font-bold text-primary-700 dark:text-primary-400 uppercase tracking-wider">
                  {cycle.id}. {cycle.title}
                </h4>
              </div>
              <div className="divide-y divide-slate-100 dark:divide-slate-800">
                {cycle.regulations.map((item, idx) => (
                  <a 
                    key={idx} 
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`flex items-start px-6 py-4 transition-all duration-200 group ${item.url === '#' ? 'cursor-default opacity-60' : 'hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:pl-7'}`}
                  >
                    <div className="flex-shrink-0 mr-4 mt-0.5">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${item.url === '#' ? 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500' : 'bg-red-50 dark:bg-red-900/20 text-red-500 dark:text-red-400 group-hover:bg-red-100 dark:group-hover:bg-red-900/40 group-hover:scale-110'}`}>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className={`text-sm font-medium transition-colors line-clamp-2 ${item.url === '#' ? 'text-slate-400 dark:text-slate-500' : 'text-slate-800 dark:text-slate-200 group-hover:text-primary-700 dark:group-hover:text-primary-400'}`}>
                        {item.title}
                      </h4>
                      {item.url === '#' && (
                        <span className="text-[10px] text-amber-600 dark:text-amber-500 italic mt-0.5 block">
                          *Link belum tersedia
                        </span>
                      )}
                    </div>
                    {item.url !== '#' && (
                      <div className="ml-4 flex-shrink-0 self-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 -translate-x-2 group-hover:translate-x-0">
                        <svg className="w-5 h-5 text-slate-300 dark:text-slate-600 group-hover:text-primary-500 dark:group-hover:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </div>
                    )}
                  </a>
                ))}
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default ReferenceList;