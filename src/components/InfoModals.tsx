import React from 'react';
import { X, ShieldAlert, Phone, Mail, CreditCard, ExternalLink, CheckCircle2 } from 'lucide-react';
import { COLLEGE_INFO } from '../data/recData';

interface AntiRaggingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AntiRaggingModal: React.FC<AntiRaggingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 my-8">
        <div className="bg-rose-900 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-6 h-6 text-rose-300" />
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-rose-200 block">
                Statutory Directive
              </span>
              <h3 className="text-base font-bold font-cinzel">
                Anti-Ragging Squad & Zero-Tolerance Policy
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-rose-200 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4 text-xs text-slate-700">
          <p className="leading-relaxed">
            In compliance with Supreme Court orders and AICTE / UGC Regulations, <strong>ragging in any form is completely banned</strong> inside and outside the campus of Rewa Engineering College.
          </p>

          <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl space-y-2">
            <h4 className="font-bold text-rose-950 text-xs uppercase tracking-wider">
              24x7 Emergency Contact Numbers
            </h4>
            <div className="space-y-1.5 text-rose-900">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5" />
                <span>National Toll Free Helpline: <strong>1800-180-5522</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5" />
                <span>Principal Office, REC: <strong>07662-233478</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5" />
                <span>Email: helpline@antiragging.in / prinrec.rwa@mp.gov.in</span>
              </div>
            </div>
          </div>

          <div className="space-y-1 text-slate-600">
            <div className="font-semibold text-slate-800">Punitive Actions for Ragging:</div>
            <ul className="list-disc pl-4 space-y-0.5 text-[11px]">
              <li>Suspension from attending classes and academic privileges.</li>
              <li>Withholding or cancelling scholarship / fellowship results.</li>
              <li>Debarring from representing the college in any national contest.</li>
              <li>Rustication / permanent expulsion from the institute and FIR lodging.</li>
            </ul>
          </div>

          <div className="pt-2 text-center">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-slate-900 text-white font-bold rounded-lg text-xs hover:bg-slate-800"
            >
              I Understand & Acknowledge
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface FeeInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAdmission: () => void;
}

export const FeeInfoModal: React.FC<FeeInfoModalProps> = ({ isOpen, onClose, onOpenAdmission }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 my-8">
        <div className="bg-[#0B2545] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CreditCard className="w-6 h-6 text-amber-400" />
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 block">
                Accounts & Finance Section
              </span>
              <h3 className="text-base font-bold font-cinzel">
                Online Fee Payment & Portals
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-slate-300 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4 text-xs text-slate-700">
          <p className="leading-relaxed">
            Students of Rewa Engineering College can pay semester tuition fees, hostel seat rent, and autonomous examination fees through designated official gateways:
          </p>

          <div className="space-y-3">
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between">
              <div>
                <strong className="block text-slate-900 text-xs">MP Online Portal Gateway</strong>
                <span className="text-slate-500 text-[11px]">Pay using Net Banking, UPI, Debit Card</span>
              </div>
              <a
                href="https://mponline.gov.in"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 bg-blue-700 text-white rounded font-bold text-[11px] flex items-center gap-1 hover:bg-blue-800"
              >
                <span>Pay Online</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between">
              <div>
                <strong className="block text-slate-900 text-xs">SBI Collect (State Bank of India)</strong>
                <span className="text-slate-500 text-[11px]">Select: MP &gt; Educational &gt; REC Rewa</span>
              </div>
              <a
                href="https://www.onlinesbi.sbi/sbicollect/"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 bg-blue-700 text-white rounded font-bold text-[11px] flex items-center gap-1 hover:bg-blue-800"
              >
                <span>SBI Collect</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-amber-950">
            <strong>Important Instructions:</strong>
            <p className="text-[11px] mt-1 leading-snug">
              Always retain the online transaction receipt. Submit a copy of the fee voucher along with semester registration form to your Department Head.
            </p>
          </div>

          <div className="pt-2 flex justify-end gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold rounded-lg text-xs"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenAdmission();
              }}
              className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-lg text-xs"
            >
              CLC Admission Fee Inquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
