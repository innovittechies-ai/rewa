import React from 'react';
import { Phone, Mail, ShieldAlert, Eye, Volume2, Globe } from 'lucide-react';
import { COLLEGE_INFO } from '../data/recData';

interface TopGovtBarProps {
  highContrast: boolean;
  setHighContrast: (val: boolean) => void;
  fontSize: 'normal' | 'large' | 'larger';
  setFontSize: (size: 'normal' | 'large' | 'larger') => void;
  language: 'EN' | 'HI';
  setLanguage: (lang: 'EN' | 'HI') => void;
  onOpenNotice: (title: string) => void;
}

export const TopGovtBar: React.FC<TopGovtBarProps> = ({
  highContrast,
  setHighContrast,
  fontSize,
  setFontSize,
  language,
  setLanguage,
}) => {
  return (
    <div className="bg-[#07162c] text-slate-200 border-b border-slate-700/50 text-xs py-1.5 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2">
        {/* Left: Govt Affiliation & Contact */}
        <div className="flex items-center flex-wrap gap-x-4 gap-y-1">
          <div className="flex items-center gap-1.5 font-medium text-amber-400">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Government of Madhya Pradesh</span>
          </div>
          <span className="hidden sm:inline text-slate-500">|</span>
          <div className="hidden md:flex items-center gap-1 text-slate-300">
            <span>RGPV Affiliated</span>
            <span>·</span>
            <span>AICTE Approved</span>
            <span>·</span>
            <span>DTE Code: {COLLEGE_INFO.dteCode}</span>
          </div>
        </div>

        {/* Right: Accessibility & Language Controls */}
        <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
          {/* Phone */}
          <a
            href={`tel:${COLLEGE_INFO.contacts.phones[0]}`}
            className="hidden lg:flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
          >
            <Phone className="w-3 h-3 text-amber-400" />
            <span>{COLLEGE_INFO.contacts.phones[0]}</span>
          </a>

          {/* Email */}
          <a
            href={`mailto:${COLLEGE_INFO.contacts.email}`}
            className="hidden xl:flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
          >
            <Mail className="w-3 h-3 text-amber-400" />
            <span>{COLLEGE_INFO.contacts.email}</span>
          </a>

          {/* Anti-ragging emergency link */}
          <a
            href="#anti-ragging"
            className="flex items-center gap-1 text-rose-300 hover:text-rose-100 font-medium transition-colors"
          >
            <ShieldAlert className="w-3 h-3 text-rose-400" />
            <span className="hidden sm:inline">Anti-Ragging:</span>
            <span>1800-180-5522</span>
          </a>

          {/* Font Resizing Controls */}
          <div className="flex items-center border border-slate-700 rounded bg-slate-900/60 p-0.5">
            <button
              onClick={() => setFontSize('normal')}
              title="Normal font size"
              className={`px-1.5 py-0.5 rounded text-[11px] font-semibold transition-colors ${
                fontSize === 'normal' ? 'bg-amber-500 text-slate-950' : 'text-slate-300 hover:text-white'
              }`}
            >
              A-
            </button>
            <button
              onClick={() => setFontSize('large')}
              title="Medium font size"
              className={`px-1.5 py-0.5 rounded text-[11px] font-semibold transition-colors ${
                fontSize === 'large' ? 'bg-amber-500 text-slate-950' : 'text-slate-300 hover:text-white'
              }`}
            >
              A
            </button>
            <button
              onClick={() => setFontSize('larger')}
              title="Large font size"
              className={`px-1.5 py-0.5 rounded text-[11px] font-semibold transition-colors ${
                fontSize === 'larger' ? 'bg-amber-500 text-slate-950' : 'text-slate-300 hover:text-white'
              }`}
            >
              A+
            </button>
          </div>

          {/* High Contrast Mode Toggle */}
          <button
            onClick={() => setHighContrast(!highContrast)}
            className={`flex items-center gap-1 px-2 py-0.5 rounded border transition-colors ${
              highContrast
                ? 'bg-amber-400 text-slate-950 border-amber-400 font-semibold'
                : 'border-slate-700 bg-slate-900/60 text-slate-300 hover:text-white'
            }`}
            title="Toggle High Contrast for Accessibility"
          >
            <Eye className="w-3 h-3" />
            <span className="hidden sm:inline">High Contrast</span>
          </button>

          {/* Language Switcher */}
          <button
            onClick={() => setLanguage(language === 'EN' ? 'HI' : 'EN')}
            className="flex items-center gap-1 px-2 py-0.5 rounded border border-slate-700 bg-slate-900/60 text-slate-200 hover:text-white transition-colors"
            title="Switch Language"
          >
            <Globe className="w-3 h-3 text-amber-400" />
            <span className="font-semibold">{language === 'EN' ? 'हिन्दी' : 'English'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
