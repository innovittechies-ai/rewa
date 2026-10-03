import React from 'react';
import { Search, Sparkles, Award } from 'lucide-react';
import { CollegeLogo } from './CollegeLogo';
import { COLLEGE_INFO } from '../data/recData';

interface MainHeaderProps {
  onOpenAdmission: () => void;
  onSearch: (query: string) => void;
  searchQuery: string;
  language: 'EN' | 'HI';
}

export const MainHeader: React.FC<MainHeaderProps> = ({
  onOpenAdmission,
  onSearch,
  searchQuery,
  language,
}) => {
  return (
    <div className="bg-white border-b border-slate-200 py-3 sm:py-4 px-4 sm:px-6 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Emblem and Bilingual College Name */}
        <div className="flex items-center gap-3 sm:gap-4 w-full md:w-auto">
          <a href="#" className="flex items-center gap-3 sm:gap-4 group">
            <CollegeLogo size="lg" className="transition-transform group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-semibold text-amber-800 tracking-wide">
                {language === 'HI' ? 'मध्यप्रदेश शासन का स्वशासी संस्थान' : COLLEGE_INFO.hindiName}
              </span>
              <h1 className="text-lg sm:text-xl md:text-2xl font-black tracking-tight text-[#0B2545] font-cinzel leading-tight">
                {COLLEGE_INFO.name.toUpperCase()}
              </h1>
              <p className="text-[11px] sm:text-xs text-slate-600 font-medium">
                {COLLEGE_INFO.tagline} · Estd. 1964
              </p>
              <p className="hidden sm:block text-[10px] sm:text-[11px] text-slate-500">
                {COLLEGE_INFO.subTagline}
              </p>
            </div>
          </a>
        </div>

        {/* Right: Accreditations, Search & Apply CTA */}
        <div className="flex items-center justify-end gap-3 w-full md:w-auto shrink-0 flex-wrap">
          {/* Diamond Jubilee 60 Years Emblem */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-200/80">
            <Award className="w-5 h-5 text-amber-700 shrink-0" />
            <div className="text-left leading-none">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 block">Diamond Jubilee</span>
              <span className="text-xs font-black text-amber-950">60 Years (1964-2024)</span>
            </div>
          </div>

          {/* Quick Notice / Info Search */}
          <div className="relative w-full sm:w-56 md:w-60">
            <input
              type="text"
              placeholder="Search circulars, depts..."
              value={searchQuery}
              onChange={(e) => onSearch(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 focus:bg-white text-slate-800 transition-all placeholder:text-slate-400"
            />
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
          </div>

          {/* Apply Now Primary CTA */}
          <button
            onClick={onOpenAdmission}
            className="flex items-center justify-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 rounded-md shadow-sm hover:shadow transition-all whitespace-nowrap active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-amber-200" />
            <span>Apply Now 2026-27</span>
          </button>
        </div>
      </div>
    </div>
  );
};
