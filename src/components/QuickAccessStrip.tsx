import React from 'react';
import { CreditCard, FileText, UserCheck, ShieldCheck, Download, Award, ExternalLink, HelpCircle } from 'lucide-react';

interface QuickAccessStripProps {
  onOpenAdmission: () => void;
  onOpenNotice: (category: string) => void;
  onOpenFeeInfo: () => void;
  onOpenAntiRagging: () => void;
}

export const QuickAccessStrip: React.FC<QuickAccessStripProps> = ({
  onOpenAdmission,
  onOpenNotice,
  onOpenFeeInfo,
  onOpenAntiRagging,
}) => {
  const quickActions = [
    {
      title: 'CLC Admission 2026',
      desc: 'College Level Counselling registration & vacant seat matrix',
      icon: UserCheck,
      color: 'text-blue-700 bg-blue-50 border-blue-200',
      action: onOpenAdmission,
    },
    {
      title: 'Online Fee Payment',
      desc: 'Semester tuition, exam & hostel fee gateway (MP Online/SBI)',
      icon: CreditCard,
      color: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      action: onOpenFeeInfo,
    },
    {
      title: 'RGPV Exam & Results',
      desc: 'Check autonomous examination notifications & grade cards',
      icon: FileText,
      color: 'text-amber-800 bg-amber-50 border-amber-200',
      action: () => onOpenNotice('Exam'),
    },
    {
      title: 'National Scholarship',
      desc: 'Post-Matric, Medhavi & NSP student scholarship portal',
      icon: Award,
      color: 'text-purple-700 bg-purple-50 border-purple-200',
      action: () => onOpenNotice('General'),
    },
    {
      title: 'Anti-Ragging Squad',
      desc: 'Zero-tolerance policy, internal committee & 24/7 helpline',
      icon: ShieldCheck,
      color: 'text-rose-700 bg-rose-50 border-rose-200',
      action: onOpenAntiRagging,
    },
    {
      title: 'Mandatory Disclosure',
      desc: 'AICTE approvals, NIRF data, audit reports & RTI officer',
      icon: Download,
      color: 'text-slate-700 bg-slate-100 border-slate-200',
      action: () => onOpenNotice('Academic'),
    },
  ];

  return (
    <div className="bg-slate-100 border-b border-slate-200 py-6 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3">
          {quickActions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <button
                key={idx}
                onClick={item.action}
                className="flex items-start gap-3 p-3 bg-white rounded-lg border border-slate-200/90 hover:border-blue-400 hover:shadow-md transition-all text-left group"
              >
                <div className={`p-2 rounded-md ${item.color} shrink-0 group-hover:scale-105 transition-transform`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xs font-bold text-slate-900 group-hover:text-blue-700 transition-colors truncate">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 line-clamp-2 mt-0.5 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
