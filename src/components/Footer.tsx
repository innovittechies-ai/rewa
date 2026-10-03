import React from 'react';
import { CollegeLogo } from './CollegeLogo';
import { COLLEGE_INFO } from '../data/recData';
import { MapPin, Phone, Mail, ChevronRight, ShieldAlert, Award, ExternalLink, Globe } from 'lucide-react';

interface FooterProps {
  onOpenAdmission: () => void;
  onOpenNotice: (cat: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmission, onOpenNotice }) => {
  return (
    <footer className="bg-[#07162c] text-slate-300 border-t-4 border-amber-500 text-xs">
      {/* Top Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Col 1: Institute Brand & Identity (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <CollegeLogo size="md" />
              <div>
                <span className="text-[11px] font-semibold text-amber-400 block">
                  {COLLEGE_INFO.hindiName}
                </span>
                <h3 className="text-base font-bold text-white font-cinzel leading-tight">
                  {COLLEGE_INFO.name}
                </h3>
                <p className="text-[11px] text-slate-400">
                  Autonomous Govt. College · Estd. 1964
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Rewa Engineering College is an autonomous government institution dedicated to quality engineering education, ethical values, and cutting-edge research in Central India.
            </p>

            <div className="pt-2 text-xs space-y-1.5 text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  {COLLEGE_INFO.address.line1}, {COLLEGE_INFO.address.city}, {COLLEGE_INFO.address.state} - {COLLEGE_INFO.address.pincode}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{COLLEGE_INFO.contacts.phones.join(' / ')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={`mailto:${COLLEGE_INFO.contacts.email}`} className="hover:text-white transition-colors">
                  {COLLEGE_INFO.contacts.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Academics & Branches (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 pb-2 border-b border-slate-700/80">
              Engineering Disciplines
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#departments" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  <span>Computer Science & Engineering</span>
                </a>
              </li>
              <li>
                <a href="#departments" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  <span>Electronics & Communication</span>
                </a>
              </li>
              <li>
                <a href="#departments" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  <span>Electrical Engineering</span>
                </a>
              </li>
              <li>
                <a href="#departments" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  <span>Mechanical Engineering</span>
                </a>
              </li>
              <li>
                <a href="#departments" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  <span>Civil Engineering</span>
                </a>
              </li>
              <li>
                <a href="#departments" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  <span>Post Graduate M.Tech Programs</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Student & Institute Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 pb-2 border-b border-slate-700/80">
              Useful Portals
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={onOpenAdmission} className="hover:text-amber-300 transition-colors text-left flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  <span>CLC Admissions</span>
                </button>
              </li>
              <li>
                <a href="#facilities" className="hover:text-amber-300 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  <span>Central Library</span>
                </a>
              </li>
              <li>
                <a href="#placements" className="hover:text-amber-300 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  <span>Placement Cell</span>
                </a>
              </li>
              <li>
                <button onClick={() => onOpenNotice('Tenders')} className="hover:text-amber-300 transition-colors text-left flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  <span>Tenders & Quotes</span>
                </button>
              </li>
              <li>
                <a href="#anti-ragging" className="hover:text-amber-300 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  <span>Anti-Ragging Cell</span>
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-300 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  <span>Mandatory AICTE</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Statutory & Emergency (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 pb-2 border-b border-slate-700/80">
              Government Affiliations
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <a
                href="https://www.rgpv.ac.in"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2 rounded bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200"
              >
                <span>Rajiv Gandhi Proudyogiki Vishwavidyalaya</span>
                <ExternalLink className="w-3 h-3 text-amber-400" />
              </a>
              <a
                href="https://dte.mponline.gov.in"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2 rounded bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200"
              >
                <span>Directorate of Technical Education (MP)</span>
                <ExternalLink className="w-3 h-3 text-amber-400" />
              </a>
              <a
                href="https://www.aicte-india.org"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2 rounded bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200"
              >
                <span>AICTE, New Delhi</span>
                <ExternalLink className="w-3 h-3 text-amber-400" />
              </a>
            </div>

            <div className="p-3 bg-red-950/40 border border-red-900/50 rounded-lg text-rose-300">
              <span className="block font-bold text-[11px] uppercase tracking-wider mb-1 flex items-center gap-1">
                <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
                Anti-Ragging 24x7 Helpline
              </span>
              <p className="text-[11px] leading-snug">
                Toll Free: 1800-180-5522 / National Anti-Ragging Portal. Ragging in any form is strictly banned and punishable by law.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Declarations */}
      <div className="bg-[#040e1d] border-t border-slate-800 py-4 px-4 sm:px-6 text-[11px] text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Rewa Engineering College, Rewa (M.P.). All Rights Reserved.
            <span className="block sm:inline sm:ml-2 text-slate-500">
              (Govt. Autonomous Institution | DTE Code: 0103)
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>·</span>
            <a href="#disclaimer" className="hover:text-white transition-colors">Terms of Use</a>
            <span>·</span>
            <a href="#sitemap" className="hover:text-white transition-colors">Site Map</a>
            <span>·</span>
            <a href="https://recrewa.ac.in" target="_blank" rel="noreferrer" className="text-amber-400 hover:underline">
              recrewa.ac.in
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
