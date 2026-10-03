import React, { useState } from 'react';
import { Cpu, Radio, Zap, Cog, Building2, FlaskConical, Users, BookOpen, Layers, CheckCircle2 } from 'lucide-react';
import { DEPARTMENTS_DATA, Department } from '../data/recData';

interface DepartmentsSectionProps {
  selectedDeptId: string;
  onSelectDepartment: (id: string) => void;
  onOpenAdmission: () => void;
}

export const DepartmentsSection: React.FC<DepartmentsSectionProps> = ({
  selectedDeptId,
  onSelectDepartment,
  onOpenAdmission,
}) => {
  const [activeTab, setActiveTab] = useState<string>(selectedDeptId || 'cse');

  const activeDept = DEPARTMENTS_DATA.find((d) => d.id === activeTab) || DEPARTMENTS_DATA[0];

  const getDeptIcon = (id: string) => {
    switch (id) {
      case 'cse':
        return <Cpu className="w-4 h-4" />;
      case 'ece':
        return <Radio className="w-4 h-4" />;
      case 'ee':
        return <Zap className="w-4 h-4" />;
      case 'me':
        return <Cog className="w-4 h-4" />;
      case 'ce':
        return <Building2 className="w-4 h-4" />;
      default:
        return <FlaskConical className="w-4 h-4" />;
    }
  };

  return (
    <section id="departments" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-amber-800 uppercase tracking-widest">
            <span>Academic Excellence</span>
            <span aria-hidden="true">·</span>
            <span>Undergraduate & Postgraduate</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0B2545] font-cinzel mt-2">
            Engineering Departments & Courses
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500">
            AICTE-approved undergraduate B.Tech programs and postgraduate M.Tech specializations governed by RGPV Bhopal and autonomous academic regulations.
          </p>
        </div>

        {/* Department Selector Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {DEPARTMENTS_DATA.map((dept) => {
            const isSelected = activeDept.id === dept.id;
            return (
              <button
                key={dept.id}
                onClick={() => {
                  setActiveTab(dept.id);
                  onSelectDepartment(dept.id);
                }}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap border ${
                  isSelected
                    ? 'bg-[#0B2545] text-amber-300 border-[#0B2545] shadow-sm'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {getDeptIcon(dept.id)}
                <span>{dept.shortName}</span>
                <span className="text-[10px] font-mono text-slate-400">({dept.intake})</span>
              </button>
            );
          })}
        </div>

        {/* Selected Department Overview Card */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Info: Meta, HOD, Degrees (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block">
                  Department of
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#0B2545] font-cinzel mt-1">
                  {activeDept.name}
                </h3>
                <div className="flex items-center gap-3 text-xs text-slate-500 font-medium mt-2">
                  <span>Estd. {activeDept.established}</span>
                  <span aria-hidden="true">·</span>
                  <span>Approved Intake: {activeDept.intake} Seats/Year</span>
                  <span aria-hidden="true">·</span>
                  <span>HOD: {activeDept.hodName}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {activeDept.description}
              </p>

              {/* Degrees Offered */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Programs & Degrees Awarded
                </h4>
                <div className="space-y-1.5">
                  {activeDept.degrees.map((deg, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 p-2 bg-white rounded border border-slate-200 text-xs font-semibold text-slate-800"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                      <span>{deg}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Apply for this branch */}
              <button
                onClick={onOpenAdmission}
                className="w-full py-2.5 text-xs font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm transition-all text-center"
              >
                Apply for {activeDept.shortName} Admission (CLC 2026)
              </button>
            </div>

            {/* Right Info: Specialized Laboratories & Key Highlights (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Laboratories Box */}
              <div className="bg-white p-5 rounded-xl border border-slate-200">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0B2545] uppercase tracking-wider mb-3">
                  <Layers className="w-4 h-4 text-blue-700" />
                  <span>Specialized Departmental Laboratories</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeDept.laboratories.map((lab, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 bg-slate-50 rounded border border-slate-100 text-xs text-slate-800 font-medium flex items-start gap-2"
                    >
                      <span className="text-blue-700 font-bold">•</span>
                      <span>{lab}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Highlights */}
              <div className="bg-white p-5 rounded-xl border border-slate-200">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0B2545] uppercase tracking-wider mb-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Academic & Placement Highlights</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-700">
                  {activeDept.keyHighlights.map((hl, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold mt-0.5">✔</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
