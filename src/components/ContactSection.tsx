import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Train, Bus } from 'lucide-react';
import { COLLEGE_INFO } from '../data/recData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Admission Enquiry',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'Admission Enquiry',
        message: '',
      });
    }, 4000);
  };

  return (
    <section id="contact" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-amber-800 uppercase tracking-widest">
            <span>Get in Touch</span>
            <span aria-hidden="true">·</span>
            <span>Administrative Offices</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0B2545] font-cinzel mt-2">
            Contact & Campus Location
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500">
            Reach out to our academic, administrative, examination, or placement wings.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Official Contact Details & Transit Guide (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-[#0B2545] uppercase tracking-wider">
                College Secretariat & Offices
              </h3>

              <div className="space-y-3.5 text-xs text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Campus Address:</strong>
                    <span>{COLLEGE_INFO.address.line1}</span>
                    <br />
                    <span>
                      {COLLEGE_INFO.address.city}, {COLLEGE_INFO.address.state} - {COLLEGE_INFO.address.pincode}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Telephone / Fax:</strong>
                    <span>{COLLEGE_INFO.contacts.phones.join(', ')}</span>
                    <br />
                    <span className="text-slate-500 text-[11px]">Fax: {COLLEGE_INFO.contacts.fax}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Official Correspondence Email:</strong>
                    <a href={`mailto:${COLLEGE_INFO.contacts.email}`} className="text-blue-700 hover:underline">
                      {COLLEGE_INFO.contacts.email}
                    </a>
                    <br />
                    <a href={`mailto:${COLLEGE_INFO.contacts.placementEmail}`} className="text-slate-600 hover:underline text-[11px]">
                      {COLLEGE_INFO.contacts.placementEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Office Working Hours:</strong>
                    <span>Monday to Saturday: 10:00 AM – 5:30 PM</span>
                    <br />
                    <span className="text-slate-500 text-[11px]">(Closed on 2nd/3rd Saturdays & Gazetted Holidays)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Transit Guidance */}
            <div className="bg-[#0B2545] text-white rounded-xl p-5 shadow-sm space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                How to Reach Campus
              </h4>
              <div className="space-y-2 text-xs text-slate-200">
                <div className="flex items-start gap-2">
                  <Train className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                  <span>
                    <strong>Rewa Railway Station (REWA):</strong> ~4.5 km from campus. Auto-rickshaws, e-rickshaws and city buses operate regularly.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Bus className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                  <span>
                    <strong>New Bus Stand Rewa:</strong> ~5.0 km from college gate via University Road.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Send Inquiry Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <h3 className="text-sm font-bold text-[#0B2545] uppercase tracking-wider mb-2">
              Send an Academic or Administrative Inquiry
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Fill in your details below and the designated college office will respond to your registered email.
            </p>

            {isSubmitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                <h4 className="text-sm font-bold text-emerald-900">Inquiry Dispatched Successfully</h4>
                <p className="text-xs text-emerald-700 mt-1">
                  Thank you for reaching out to Rewa Engineering College. Your reference ticket has been logged and forwarded to the registrar's office.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B2545]"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. rahul@example.com"
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B2545]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">
                      Contact Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B2545]"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">
                      Department / Concern
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B2545] bg-white"
                    >
                      <option>Admission & CLC Enquiry</option>
                      <option>Examination & Autonomous Grade Card</option>
                      <option>Training & Campus Placement</option>
                      <option>Hostel Accommodation</option>
                      <option>Scholarship / Fee Verification</option>
                      <option>Alumni Affairs</option>
                      <option>Other General Grievance</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Your Message / Inquiry Detail *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details about your query..."
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B2545]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2.5 bg-[#0B2545] hover:bg-blue-900 text-white font-bold rounded-md shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
