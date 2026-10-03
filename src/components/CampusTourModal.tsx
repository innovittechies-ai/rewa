import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Building, BookOpen, Cpu, Home, Trophy } from 'lucide-react';
import heroCampusImg from '../assets/images/hero_campus_building_1791010079354.jpg';
import libraryImg from '../assets/images/campus_library_1791010113299.jpg';
import labImg from '../assets/images/engineering_lab_1791010131911.jpg';

interface CampusTourModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CampusTourModal: React.FC<CampusTourModalProps> = ({ isOpen, onClose }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  if (!isOpen) return null;

  const slides = [
    {
      title: 'Main Administrative & Academic Complex',
      category: 'Campus Heritage',
      desc: 'The iconic institutional building established in 1964, surrounded by lush manicured botanical gardens, administrative offices, and academic lecture halls.',
      image: heroCampusImg,
      icon: Building,
    },
    {
      title: 'Central Digital Academic Library',
      category: 'Knowledge Infrastructure',
      desc: 'Houses 55,000+ engineering titles, high-speed 1Gbps connected digital terminals, and a quiet air-conditioned reading floor for research scholars.',
      image: libraryImg,
      icon: BookOpen,
    },
    {
      title: 'Advanced Engineering Research Labs',
      category: 'Technical Centers',
      desc: 'Equipped with industry-grade machines, AI high-performance computing nodes, robotic testbeds, and material testing UTM equipment.',
      image: labImg,
      icon: Cpu,
    },
  ];

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const current = slides[activeSlide];
  const Icon = current.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl border border-slate-200 my-8">
        {/* Header */}
        <div className="bg-[#0B2545] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Building className="w-5 h-5 text-amber-400" />
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 block">
                250-Acre Campus Showcase
              </span>
              <h3 className="text-base font-bold font-cinzel">
                Rewa Engineering College Virtual Tour
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

        {/* Media Frame */}
        <div className="relative h-72 sm:h-96 bg-black">
          <img
            src={current.image}
            alt={current.title}
            className="w-full h-full object-cover transition-opacity duration-300"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors"
            aria-label="Previous Photo"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors"
            aria-label="Next Photo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Slide Description Overlay */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
              <Icon className="w-4 h-4" />
              <span>{current.category}</span>
            </div>
            <h4 className="text-lg sm:text-xl font-bold font-cinzel">
              {current.title}
            </h4>
            <p className="text-xs text-slate-200 mt-1 max-w-2xl leading-relaxed">
              {current.desc}
            </p>
          </div>
        </div>

        {/* Thumbnails & Tour Facts */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex gap-2">
            {slides.map((s, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`h-12 w-20 rounded-md overflow-hidden border-2 transition-all ${
                  activeSlide === idx ? 'border-amber-500 scale-105 shadow' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          <div className="text-right text-xs text-slate-500">
            <span className="font-semibold text-slate-800">Campus Location:</span> University Road, Kuthulia, Rewa
            <span className="block text-[11px] text-slate-400">4.5 km from Rewa Railway Station</span>
          </div>
        </div>
      </div>
    </div>
  );
};
