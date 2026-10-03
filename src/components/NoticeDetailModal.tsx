import React, { useState } from 'react';
import { X, Download, Printer, Check, FileText } from 'lucide-react';
import { CollegeLogo } from './CollegeLogo';
import { COLLEGE_INFO, Notice } from '../data/recData';

interface NoticeDetailModalProps {
  notice: Notice | null;
  onClose: () => void;
}

export const NoticeDetailModal: React.FC<NoticeDetailModalProps> = ({ notice, onClose }) => {
  const [downloaded, setDownloaded] = useState(false);

  if (!notice) return null;

  const handleDownload = () => {
    setDownloaded(true);
    // Trigger virtual text file download representing the official circular
    const blob = new Blob(
      [
        `REWA ENGINEERING COLLEGE, REWA (M.P.)\n(An Autonomous Institution of Govt. of Madhya Pradesh)\n\n` +
          `Ref No: ${notice.refNo}\nDate: ${notice.date}\nCategory: ${notice.category}\n\n` +
          `SUBJECT: ${notice.title}\n\n` +
          `${notice.content}\n\n` +
          `Issued by: ${notice.signatory}\nFor: Principal, Rewa Engineering College\n`,
      ],
      { type: 'text/plain;charset=utf-8' }
    );
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = notice.attachmentName;
    link.click();
    URL.revokeObjectURL(url);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 my-8">
        {/* Modal Top Control Bar */}
        <div className="bg-[#0B2545] text-white px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-bold uppercase tracking-wider">Official Document Reader</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-slate-300 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Official Letterhead Representation */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="text-center pb-5 border-b-2 border-slate-900/80">
            <div className="flex justify-center mb-2">
              <CollegeLogo size="md" />
            </div>
            <h2 className="text-sm font-semibold text-amber-900 uppercase tracking-wide">
              {COLLEGE_INFO.hindiName}
            </h2>
            <h1 className="text-lg sm:text-xl font-black text-[#0B2545] font-cinzel leading-tight">
              {COLLEGE_INFO.name.toUpperCase()}
            </h1>
            <p className="text-[11px] text-slate-600 font-medium">
              (An Autonomous Institution of Government of Madhya Pradesh | Estd. 1964)
            </p>
            <p className="text-[10px] text-slate-500">
              University Road, Kuthulia, Rewa (M.P.) - 486002 | Email: {COLLEGE_INFO.contacts.email}
            </p>
          </div>

          {/* Reference Meta */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-600 pb-3 border-b border-slate-200">
            <div>
              <span className="text-slate-400 font-sans">Ref No: </span>
              <strong className="text-slate-900">{notice.refNo}</strong>
            </div>
            <div>
              <span className="text-slate-400 font-sans">Date: </span>
              <strong className="text-slate-900">{notice.date}</strong>
            </div>
          </div>

          {/* Subject & Body */}
          <div className="space-y-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-900 block">
                Subject / Notification
              </span>
              <h3 className="text-base font-bold text-slate-900 leading-snug mt-1">
                {notice.title}
              </h3>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-xl text-xs sm:text-sm text-slate-800 leading-relaxed font-academic-serif">
              {notice.content}
            </div>
          </div>

          {/* Signatory Box */}
          <div className="pt-6 flex justify-end">
            <div className="text-right text-xs">
              <div className="font-mono text-[10px] text-slate-400 mb-1">
                [Digitally Signed By Authority]
              </div>
              <strong className="block text-slate-900">{notice.signatory}</strong>
              <span className="text-slate-600">Rewa Engineering College, Rewa (M.P.)</span>
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
            <span className="text-[11px] text-slate-500 font-mono">
              Attachment: {notice.attachmentName}
            </span>

            <div className="flex gap-2">
              <button
                onClick={() => window.print()}
                className="px-3.5 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded flex items-center gap-1.5 transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print</span>
              </button>
              <button
                onClick={handleDownload}
                className="px-4 py-1.5 text-xs font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded flex items-center gap-1.5 shadow-sm transition-colors"
              >
                {downloaded ? <Check className="w-3.5 h-3.5 text-emerald-800" /> : <Download className="w-3.5 h-3.5" />}
                <span>{downloaded ? 'Downloaded' : 'Download Document'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
