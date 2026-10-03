import React from 'react';
import { Briefcase, TrendingUp, Building, Award, CheckCircle, Quote } from 'lucide-react';
import { PLACEMENT_STATS, ALUMNI_TESTIMONIALS } from '../data/recData';

export const PlacementSection: React.FC = () => {
  return (
    <section id="placements" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-amber-800 uppercase tracking-widest">
            <span>Career Pathways</span>
            <span aria-hidden="true">·</span>
            <span>Training & Corporate Relations</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0B2545] font-cinzel mt-2">
            Training & Placement Cell
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500">
            Dedicated pre-placement training, aptitude coaching, coding marathons, and campus recruitment drives with premier Fortune 500 companies and PSUs.
          </p>
        </div>

        {/* Numerical Placement Rigor (No pills, clean tabular numbers) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 text-center">
            <span className="text-xs uppercase font-bold text-slate-500 tracking-wider block">
              Highest Package
            </span>
            <div className="text-2xl sm:text-3xl font-black text-[#0B2545] font-cinzel mt-1 tabular-nums">
              {PLACEMENT_STATS.highestPackage}
            </div>
            <span className="text-[11px] text-slate-500 block mt-1">International / IT offer</span>
          </div>

          <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 text-center">
            <span className="text-xs uppercase font-bold text-slate-500 tracking-wider block">
              Average Package
            </span>
            <div className="text-2xl sm:text-3xl font-black text-amber-700 font-cinzel mt-1 tabular-nums">
              {PLACEMENT_STATS.averagePackage}
            </div>
            <span className="text-[11px] text-slate-500 block mt-1">Across all branches</span>
          </div>

          <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 text-center">
            <span className="text-xs uppercase font-bold text-slate-500 tracking-wider block">
              Eligible Placement Rate
            </span>
            <div className="text-2xl sm:text-3xl font-black text-emerald-700 font-cinzel mt-1 tabular-nums">
              {PLACEMENT_STATS.placementRate}
            </div>
            <span className="text-[11px] text-slate-500 block mt-1">Consistent year-on-year</span>
          </div>

          <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 text-center">
            <span className="text-xs uppercase font-bold text-slate-500 tracking-wider block">
              Visiting Recruiters
            </span>
            <div className="text-2xl sm:text-3xl font-black text-blue-900 font-cinzel mt-1 tabular-nums">
              {PLACEMENT_STATS.visitingCompanies}
            </div>
            <span className="text-[11px] text-slate-500 block mt-1">Multinational & Core EPC</span>
          </div>
        </div>

        {/* Corporate Recruiters Grid */}
        <div className="mb-14">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-6">
            <h3 className="text-sm font-bold text-[#0B2545] uppercase tracking-wider">
              Major Corporate Recruiters & Partners
            </h3>
            <span className="text-xs text-slate-500">Regular Campus Visitors</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {PLACEMENT_STATS.topRecruiters.map((rec, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-lg border border-slate-200 bg-white hover:border-blue-400 hover:shadow-sm transition-all text-center flex flex-col justify-center items-center"
              >
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-900 font-bold text-xs flex items-center justify-center mb-1.5 font-cinzel">
                  {rec.name.charAt(0)}
                </div>
                <h4 className="text-xs font-bold text-slate-900 leading-tight">
                  {rec.name}
                </h4>
                <span className="text-[10px] text-slate-500 mt-0.5">
                  {rec.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Distinguished Alumni Reflections */}
        <div className="bg-[#0B2545] text-white rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-5 h-5 text-amber-400" />
            <h3 className="text-lg font-bold font-cinzel text-white">
              Notable Alumni Legacy (1964 - Present)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ALUMNI_TESTIMONIALS.map((alumnus, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col justify-between"
              >
                <blockquote className="text-xs text-slate-200 leading-relaxed font-academic-serif italic mb-4">
                  "{alumnus.quote}"
                </blockquote>
                <div className="pt-3 border-t border-white/10">
                  <h4 className="text-xs font-bold text-amber-300">
                    {alumnus.name}
                  </h4>
                  <div className="text-[11px] text-slate-400">{alumnus.batch}</div>
                  <div className="text-[11px] text-slate-300 font-medium mt-0.5">
                    {alumnus.designation}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
