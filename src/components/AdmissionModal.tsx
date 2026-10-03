import React, { useState } from 'react';
import { X, CheckCircle2, GraduationCap, ArrowRight, Printer } from 'lucide-react';
import { CollegeLogo } from './CollegeLogo';
import { COLLEGE_INFO } from '../data/recData';

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdmissionModal: React.FC<AdmissionModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    fatherName: '',
    email: '',
    phone: '',
    category: 'General',
    pcmScore: '',
    jeeRank: '',
    preferredBranch: 'Computer Science & Engineering',
    domicileMP: 'Yes',
  });

  const [receiptNumber, setReceiptNumber] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    setReceiptNumber(`REC-2026-CLC-${randomCode}`);
  };

  const resetForm = () => {
    setReceiptNumber(null);
    setFormData({
      fullName: '',
      fatherName: '',
      email: '',
      phone: '',
      category: 'General',
      pcmScore: '',
      jeeRank: '',
      preferredBranch: 'Computer Science & Engineering',
      domicileMP: 'Yes',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl border border-slate-200 my-8">
        {/* Modal Header */}
        <div className="bg-[#0B2545] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CollegeLogo size="sm" />
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 block">
                Admissions 2026-27 (CLC Round)
              </span>
              <h3 className="text-base font-bold font-cinzel leading-tight">
                Admission Application & Enquiry
              </h3>
            </div>
          </div>
          <button
            onClick={resetForm}
            className="p-1 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {receiptNumber ? (
            <div className="text-center py-4 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h4 className="text-lg font-bold text-slate-900 font-cinzel">
                Application Registered Successfully!
              </h4>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-left text-xs space-y-2">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500 font-medium">Receipt / Token No:</span>
                  <span className="font-mono font-bold text-blue-900 text-sm">{receiptNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Applicant:</span>
                  <span className="font-semibold text-slate-900">{formData.fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Selected Branch:</span>
                  <span className="font-semibold text-slate-900">{formData.preferredBranch}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Category:</span>
                  <span className="font-semibold text-slate-900">{formData.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Reporting Date for CLC:</span>
                  <span className="font-bold text-amber-700">Oct 12, 2026 at 9:30 AM</span>
                </div>
                <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-200">
                  Please report to the Administrative Block, REC Rewa with your original 10th/12th marksheets, JEE scorecard, and photocopy set.
                </div>
              </div>

              <div className="flex gap-3 justify-center pt-2">
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center gap-1.5"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Acknowledgment</span>
                </button>
                <button
                  onClick={resetForm}
                  className="px-5 py-2 text-xs font-bold text-white bg-[#0B2545] hover:bg-blue-900 rounded-lg"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <p className="text-slate-600 mb-2">
                Register your interest for College Level Counselling (CLC) round for vacant seats in B.Tech programs.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Candidate Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Candidate name as in 10th"
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B2545]"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Father's / Guardian's Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fatherName}
                    onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })}
                    placeholder="Father's name"
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B2545]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="applicant@gmail.com"
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B2545]"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="10-digit mobile number"
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B2545]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Social Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B2545] bg-white"
                  >
                    <option>General</option>
                    <option>OBC (Non-Creamy)</option>
                    <option>SC</option>
                    <option>ST</option>
                    <option>EWS</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    12th PCM Marks (%) *
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    required
                    value={formData.pcmScore}
                    onChange={(e) => setFormData({ ...formData, pcmScore: e.target.value })}
                    placeholder="e.g. 84.5"
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B2545]"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    JEE Main 2026 CRL Rank
                  </label>
                  <input
                    type="text"
                    value={formData.jeeRank}
                    onChange={(e) => setFormData({ ...formData, jeeRank: e.target.value })}
                    placeholder="e.g. 124500"
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B2545]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">
                  Preferred Engineering Discipline *
                </label>
                <select
                  value={formData.preferredBranch}
                  onChange={(e) => setFormData({ ...formData, preferredBranch: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B2545] bg-white font-medium"
                >
                  <option>Computer Science & Engineering (60 Seats)</option>
                  <option>Electronics & Communication Engineering (60 Seats)</option>
                  <option>Electrical Engineering (60 Seats)</option>
                  <option>Mechanical Engineering (60 Seats)</option>
                  <option>Civil Engineering (60 Seats)</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2.5 text-xs font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <span>Submit Admission Registration</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
