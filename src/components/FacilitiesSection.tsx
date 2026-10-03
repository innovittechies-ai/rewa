import React from 'react';
import { BookOpen, Cpu, Home, Network, Trophy, Coffee, CheckCircle } from 'lucide-react';
import { FACILITIES_DATA } from '../data/recData';
import libraryImg from '../assets/images/campus_library_1791010113299.jpg';
import labImg from '../assets/images/engineering_lab_1791010131911.jpg';

interface FacilitiesSectionProps {
  onOpenCampusTour: () => void;
}

export const FacilitiesSection: React.FC<FacilitiesSectionProps> = ({ onOpenCampusTour }) => {
  const getFacilityIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-blue-700" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-amber-700" />;
      case 'Home':
        return <Home className="w-5 h-5 text-emerald-700" />;
      case 'Network':
        return <Network className="w-5 h-5 text-purple-700" />;
      case 'Trophy':
        return <Trophy className="w-5 h-5 text-rose-700" />;
      case 'Coffee':
        return <Coffee className="w-5 h-5 text-amber-800" />;
      default:
        return <BookOpen className="w-5 h-5 text-blue-700" />;
    }
  };

  return (
    <section id="facilities" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-slate-200 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-amber-800 uppercase tracking-widest">
              <span>Campus Infrastructure</span>
              <span aria-hidden="true">·</span>
              <span>250-Acre Perimeter</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0B2545] font-cinzel mt-1">
              Central Facilities & Amenities
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Fostering academic discovery, student well-being, residential comfort, and technological excellence.
            </p>
          </div>

          <button
            onClick={onOpenCampusTour}
            className="px-4 py-2 text-xs font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded shadow-sm transition-colors shrink-0"
          >
            View Photo Gallery & Campus Map
          </button>
        </div>

        {/* Featured Visual Grid: Library & High-Tech Labs with generated images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Card 1: Central Library */}
          <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm flex flex-col group">
            <div className="relative h-56 sm:h-64 overflow-hidden">
              <img
                src={libraryImg}
                alt="Central Academic Digital Library at REC Rewa"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 block">
                  Knowledge Hub
                </span>
                <h3 className="text-lg sm:text-xl font-bold font-cinzel">
                  Central Academic & Digital Library
                </h3>
                <p className="text-xs text-slate-200 mt-1">
                  55,000+ technical volumes, DELNET subscription, and air-conditioned digital learning lab.
                </p>
              </div>
            </div>
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-600">
              <span>Automated RFID circulation</span>
              <span>·</span>
              <span>GATE reading wing</span>
              <span>·</span>
              <span className="font-semibold text-blue-900">Open 8:00 AM - 8:00 PM</span>
            </div>
          </div>

          {/* Card 2: State-of-the-Art Labs */}
          <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm flex flex-col group">
            <div className="relative h-56 sm:h-64 overflow-hidden">
              <img
                src={labImg}
                alt="Modern Engineering Research Laboratory at REC Rewa"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 block">
                  Advanced Research & Testing
                </span>
                <h3 className="text-lg sm:text-xl font-bold font-cinzel">
                  Specialized Engineering Laboratories
                </h3>
                <p className="text-xs text-slate-200 mt-1">
                  High-voltage machinery, AI compute clusters, UTM testing machines, and VLSI EDA suites.
                </p>
              </div>
            </div>
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-600">
              <span>Govt. PWD testing consultancy</span>
              <span>·</span>
              <span>TEQIP grants</span>
              <span>·</span>
              <span className="font-semibold text-emerald-800">Industry-grade equipment</span>
            </div>
          </div>
        </div>

        {/* Facilities Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACILITIES_DATA.map((facility) => (
            <div
              key={facility.id}
              className="bg-white rounded-xl p-5 border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-lg bg-slate-100 shrink-0">
                    {getFacilityIcon(facility.icon)}
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    {facility.category}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-slate-900 leading-snug">
                  {facility.name}
                </h3>
                <p className="text-xs font-semibold text-amber-800 mt-0.5">
                  {facility.stats}
                </p>

                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {facility.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100">
                <ul className="space-y-1">
                  {facility.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-600">
                      <span className="text-blue-700 font-bold">•</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
