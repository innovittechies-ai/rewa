import React from 'react';
import { Target, Compass, BookCheck, Shield, Award, Users, CheckCircle } from 'lucide-react';
import { COLLEGE_INFO } from '../data/recData';
import principalImg from '../assets/images/principal_portrait_1791010094850.jpg';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-amber-800 uppercase tracking-widest">
            <span>Institute Profile</span>
            <span aria-hidden="true">·</span>
            <span>Since 1964</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0B2545] font-cinzel mt-2">
            About Rewa Engineering College
          </h2>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed font-academic-serif italic">
            "A premier autonomous government institution imparting world-class technical education and shaping technocrats for national progress."
          </p>
        </div>

        {/* 2-Column Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Principal's Desk & Leadership (5 Cols) */}
          <div id="principal-desk" className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-xl border border-slate-200/90 p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 pb-5 border-b border-slate-100">
                <img
                  src={principalImg}
                  alt={COLLEGE_INFO.principal.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl object-cover border-2 border-amber-500 shadow-sm shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="text-center sm:text-left">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 block">
                    Leadership Desk
                  </span>
                  <h3 className="text-lg font-bold text-[#0B2545] mt-0.5">
                    {COLLEGE_INFO.principal.name}
                  </h3>
                  <p className="text-xs font-semibold text-slate-600">
                    {COLLEGE_INFO.principal.designation}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    {COLLEGE_INFO.principal.qualifications}
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Principal's Message
                </h4>
                <blockquote className="text-xs text-slate-700 leading-relaxed font-academic-serif italic border-l-2 border-amber-500 pl-3">
                  "{COLLEGE_INFO.principal.message}"
                </blockquote>
              </div>
            </div>

            {/* Quick Accreditation Box */}
            <div className="bg-[#0B2545] text-white p-5 rounded-xl shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Statutory & Institutional Status</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-200">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Autonomous Institute of Department of Technical Education, Govt. of M.P.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Permanently affiliated to Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Approved by All India Council for Technical Education (AICTE), New Delhi</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Selected under World Bank supported TEQIP Project for institutional strengthening</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Institutional History, Vision, Mission & Values (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* History Narrative */}
            <div className="bg-white rounded-xl border border-slate-200/90 p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[#0B2545] font-cinzel mb-3">
                Historical Heritage & Foundation
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                Rewa Engineering College (formerly known as Government Engineering College, Rewa) was founded in the historic year <strong>1964</strong> by the Government of Madhya Pradesh to accelerate engineering education and industrialization across Central India. Over the last six decades, the institution has expanded its intellectual horizons from civil, electrical, and mechanical branches to advanced disciplines such as Computer Science, Electronics & Communication, and Post-Graduate research programs.
              </p>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Spread across an expansive <strong>250-acre green campus</strong> in the Kuthulia area of Rewa, the institute possesses a complete ecosystem comprising academic lecture complexes, specialized laboratory wings, administrative buildings, central library, residential quarters, hostels, and modern sports grounds.
              </p>
            </div>

            {/* Vision & Mission Cards */}
            <div id="vision-mission" className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-amber-50/70 border border-amber-200/80 p-5 rounded-xl">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-sm mb-2">
                  <Target className="w-4 h-4 text-amber-700" />
                  <span>Institutional Vision</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  To emerge as an acclaimed center of excellence in technical education and research that nurtures intellectually competent, ethically sound, and socially responsive engineering leaders who contribute substantially to technological advancement and societal well-being.
                </p>
              </div>

              <div className="bg-blue-50/70 border border-blue-200/80 p-5 rounded-xl">
                <div className="flex items-center gap-2 text-blue-900 font-bold text-sm mb-2">
                  <Compass className="w-4 h-4 text-blue-700" />
                  <span>Institutional Mission</span>
                </div>
                <ul className="text-xs text-slate-700 space-y-1.5 list-disc pl-4">
                  <li>Deliver outcome-based engineering curricula aligned with contemporary industry needs.</li>
                  <li>Build modern laboratories and foster research collaborations with national premier bodies.</li>
                  <li>Inculcate entrepreneurial mindset, professional ethics, and sustainable practices.</li>
                </ul>
              </div>
            </div>

            {/* Core Values Matrix */}
            <div className="bg-white rounded-xl border border-slate-200/90 p-5 shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Core Institutional Pillars
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <div className="text-xs font-bold text-slate-900">Academic Rigor</div>
                  <p className="text-[11px] text-slate-600 mt-1">
                    Continuous evaluation, autonomous syllabus updates, and practical hands-on pedagogy.
                  </p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <div className="text-xs font-bold text-slate-900">Industry Relevance</div>
                  <p className="text-[11px] text-slate-600 mt-1">
                    Internships, Microsoft COE certifications, and active campus recruitment drives.
                  </p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <div className="text-xs font-bold text-slate-900">Inclusivity & Merit</div>
                  <p className="text-[11px] text-slate-600 mt-1">
                    Transparent MP DTE admissions, affirmative scholarships, and student support cells.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
