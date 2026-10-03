import React from 'react';
import { CheckCircle2, FileCheck, HelpCircle, ArrowRight, DollarSign, CalendarCheck } from 'lucide-react';
import { DEPARTMENTS_DATA } from '../data/recData';

interface AdmissionsSectionProps {
  onOpenAdmission: () => void;
  onOpenNotice: (category: string) => void;
}

export const AdmissionsSection: React.FC<AdmissionsSectionProps> = ({
  onOpenAdmission,
  onOpenNotice,
}) => {
  const steps = [
    {
      step: '01',
      title: 'Entrance Examination',
      desc: 'Candidates appear in JEE (Main) conducted by NTA or state quota examination.',
    },
    {
      step: '02',
      title: 'DTE MP Online Counselling',
      desc: 'Register at dte.mponline.gov.in and select Rewa Engineering College (Code: 0103) as top preference.',
    },
    {
      step: '03',
      title: 'Document Verification',
      desc: 'Verify 10th/12th marks, JEE scorecard, domicile, and category certificates at designated ARC centers.',
    },
    {
      step: '04',
      title: 'Institutional CLC Round',
      desc: 'For vacant or leftover seats, participate in College Level Counselling directly on campus.',
    },
  ];

  return (
    <section id="admissions" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-amber-800 uppercase tracking-widest">
            <span>Join REC Rewa</span>
            <span aria-hidden="true">·</span>
            <span>Academic Year 2026-27</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0B2545] font-cinzel mt-2">
            Admissions & Counselling
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500">
            Transparent, merit-based admission procedure supervised by Directorate of Technical Education (DTE), Government of Madhya Pradesh.
          </p>
        </div>

        {/* 4-Step Admission Procedure */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="p-5 bg-white rounded-xl border border-slate-200 relative shadow-sm"
            >
              <div className="text-2xl font-black text-amber-600 font-cinzel mb-2 tabular-nums">
                {s.step}
              </div>
              <h3 className="text-sm font-bold text-slate-900 leading-snug">
                {s.title}
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Seat Matrix & Fee Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Seat Matrix Table (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
              <h3 className="text-sm font-bold text-[#0B2545] uppercase tracking-wider">
                Approved B.Tech & M.Tech Seat Matrix
              </h3>
              <span className="text-xs font-mono text-slate-500">DTE Code: 0103</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500 uppercase tracking-wider font-semibold">
                    <th className="py-2.5">Branch / Discipline</th>
                    <th className="py-2.5">Duration</th>
                    <th className="py-2.5 text-right">Sanctioned Intake</th>
                    <th className="py-2.5 text-right">TFW / EWS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {DEPARTMENTS_DATA.filter((d) => d.id !== 'ash').map((dept) => (
                    <tr key={dept.id} className="hover:bg-slate-50 transition-colors">
                      <td className="py-2.5 font-semibold text-slate-900">
                        {dept.name} ({dept.shortName})
                      </td>
                      <td className="py-2.5 text-slate-500">4 Years (8 Sem)</td>
                      <td className="py-2.5 text-right font-mono font-bold text-blue-900 tabular-nums">
                        {dept.intake} Seats
                      </td>
                      <td className="py-2.5 text-right font-mono text-slate-600 tabular-nums">
                        +5% TFW
                      </td>
                    </tr>
                  ))}
                  <tr className="hover:bg-slate-50 bg-amber-50/40">
                    <td className="py-2.5 font-semibold text-slate-900">
                      M.Tech (Thermal Engg / Transportation)
                    </td>
                    <td className="py-2.5 text-slate-500">2 Years (4 Sem)</td>
                    <td className="py-2.5 text-right font-mono font-bold text-amber-900 tabular-nums">
                      36 Seats
                    </td>
                    <td className="py-2.5 text-right font-mono text-slate-600 tabular-nums">
                      GATE / Merit
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between text-[11px] text-slate-500">
              <span>* Reservation as per MP State Government policy</span>
              <button
                onClick={() => onOpenNotice('Admissions')}
                className="text-blue-700 hover:underline font-semibold"
              >
                View Latest CLC Vacancy Notice →
              </button>
            </div>
          </div>

          {/* Fee & Financial Aid Box (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-sm font-bold text-[#0B2545] uppercase tracking-wider mb-3">
                Government Subsidized Fee Structure
              </h3>
              <p className="text-xs text-slate-600 mb-4">
                As a state government autonomous engineering institution, academic tuition fees at REC Rewa are highly subsidized:
              </p>

              <div className="space-y-2 text-xs text-slate-700">
                <div className="flex justify-between p-2 rounded bg-slate-50 border border-slate-100">
                  <span className="font-medium">Tuition Fee (Per Semester)</span>
                  <span className="font-mono font-bold text-slate-900">₹12,500</span>
                </div>
                <div className="flex justify-between p-2 rounded bg-slate-50 border border-slate-100">
                  <span className="font-medium">Institutional & Exam Charges</span>
                  <span className="font-mono font-bold text-slate-900">₹3,200</span>
                </div>
                <div className="flex justify-between p-2 rounded bg-slate-50 border border-slate-100">
                  <span className="font-medium">Hostel Rent (Per Semester)</span>
                  <span className="font-mono font-bold text-slate-900">₹4,800</span>
                </div>
                <div className="flex justify-between p-2 rounded bg-amber-50 border border-amber-200 font-bold text-amber-950">
                  <span>Approx. Annual Academic Fee</span>
                  <span className="font-mono">~₹31,400</span>
                </div>
              </div>

              <div className="mt-4 p-3 bg-emerald-50 rounded-lg border border-emerald-200 text-xs text-emerald-900">
                <div className="font-bold flex items-center gap-1 mb-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Scholarship & TFW Waivers Available</span>
                </div>
                <span>
                  100% tuition reimbursement under MP Medhavi Chhatra Yojana, Post-Matric SC/ST/OBC schemes, and AICTE Pragati & Saksham initiatives.
                </span>
              </div>

              <button
                onClick={onOpenAdmission}
                className="mt-5 w-full py-3 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm transition-all text-center flex items-center justify-center gap-2 group"
              >
                <span>Initiate Admission Enquiry / CLC Form</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
