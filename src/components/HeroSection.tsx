import React from 'react';
import { ArrowRight, Compass, GraduationCap, Building, Award, CheckCircle2 } from 'lucide-react';
import heroCampusImg from '../assets/images/hero_campus_building_1791010079354.jpg';

interface HeroSectionProps {
  onOpenAdmission: () => void;
  onExploreDepartments: () => void;
  onOpenCampusTour: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenAdmission,
  onExploreDepartments,
  onOpenCampusTour,
}) => {
  return (
    <section id="hero" className="relative bg-[#07162c] text-white overflow-hidden">
      {/* Background Campus Image with measured academic scrim */}
      <div className="absolute inset-0">
        <img
          src={heroCampusImg}
          alt="Rewa Engineering College Main Administrative and Academic Block"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:transition-transform motion-safe:duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Multilayered high-contrast gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07162c]/95 via-[#07162c]/85 to-[#0b2545]/75"></div>
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#07162c]/40 to-[#07162c]/90"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="max-w-3xl">
          {/* Institutional Trust Kicker (no pill, clean typography) */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-amber-400 mb-3">
            <span>Autonomous Govt. Institution</span>
            <span aria-hidden="true">·</span>
            <span>Estd. 1964</span>
            <span aria-hidden="true">·</span>
            <span>AICTE Approved</span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-cinzel text-white leading-tight tracking-tight drop-shadow-md">
            Rewa Engineering College
          </h1>

          <p className="mt-2 text-base sm:text-lg md:text-xl font-medium text-amber-300 font-academic-serif italic">
            Empowering Technocrats & Innovators in the Vindhya Region for Over 6 Decades
          </p>

          <p className="mt-4 text-sm sm:text-base text-slate-200 leading-relaxed font-normal max-w-2xl">
            Established by the Government of Madhya Pradesh, REC Rewa is one of Central India's premier engineering institutions. Offering rigorous undergraduate and postgraduate programs in CSE, ECE, Electrical, Mechanical, and Civil Engineering with industry-aligned laboratories and dedicated placement training.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              onClick={onOpenAdmission}
              className="px-6 py-3 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded shadow-md hover:shadow-lg transition-all flex items-center gap-2 group active:scale-95"
            >
              <span>Apply for Admissions 2026-27</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onExploreDepartments}
              className="px-5 py-3 text-sm font-semibold text-white bg-slate-800/80 hover:bg-slate-700/90 border border-slate-600 rounded transition-all flex items-center gap-2"
            >
              <GraduationCap className="w-4 h-4 text-amber-400" />
              <span>Explore Programs & Syllabus</span>
            </button>

            <button
              onClick={onOpenCampusTour}
              className="px-4 py-3 text-sm font-medium text-slate-200 hover:text-white hover:bg-white/10 rounded transition-all flex items-center gap-1.5"
            >
              <Compass className="w-4 h-4 text-amber-300" />
              <span>Virtual Campus Tour</span>
            </button>
          </div>

          {/* Adjacency Trust Markers */}
          <div className="mt-10 pt-6 border-t border-slate-700/70 grid grid-cols-2 sm:grid-cols-4 gap-4 text-slate-300">
            <div>
              <div className="text-xl sm:text-2xl font-black text-amber-400 font-cinzel">60+</div>
              <div className="text-xs text-slate-400 font-medium">Years of Academic Legacy</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-amber-400 font-cinzel">250+</div>
              <div className="text-xs text-slate-400 font-medium">Acres Green Campus</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-amber-400 font-cinzel">15,000+</div>
              <div className="text-xs text-slate-400 font-medium">Global Engineering Alumni</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-amber-400 font-cinzel">86.4%</div>
              <div className="text-xs text-slate-400 font-medium">Campus Placement Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
