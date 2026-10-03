import React, { useState } from 'react';
import { Menu, X, ChevronDown, BookOpen, GraduationCap, Building2, Users, Bell, PhoneCall } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (sec: string) => void;
  onOpenAdmission: () => void;
  onSelectDepartment: (deptId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  setActiveSection,
  onOpenAdmission,
  onSelectDepartment,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    setOpenDropdown(null);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-40 bg-[#0B2545] text-white shadow-md border-b-2 border-amber-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-12 sm:h-13">
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-xs font-semibold uppercase tracking-wider">
            {/* Home */}
            <button
              onClick={() => scrollTo('hero')}
              className={`px-3 py-2 rounded transition-colors ${
                activeSection === 'hero' ? 'bg-[#133E87] text-amber-300' : 'text-slate-100 hover:text-amber-300 hover:bg-white/5'
              }`}
            >
              Home
            </button>

            {/* About REC Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setOpenDropdown('about')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                onClick={() => scrollTo('about')}
                className="flex items-center gap-1 px-3 py-2 rounded text-slate-100 hover:text-amber-300 hover:bg-white/5 transition-colors"
              >
                <span>About REC</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {openDropdown === 'about' && (
                <div className="absolute left-0 top-full w-56 bg-white text-slate-800 rounded-b-md shadow-xl border-t-2 border-amber-500 py-2 text-xs normal-case font-medium animate-in fade-in slide-in-from-top-1">
                  <button
                    onClick={() => scrollTo('about')}
                    className="w-full text-left px-4 py-2 hover:bg-blue-50 hover:text-[#0B2545] transition-colors"
                  >
                    Institutional Overview
                  </button>
                  <button
                    onClick={() => scrollTo('principal-desk')}
                    className="w-full text-left px-4 py-2 hover:bg-blue-50 hover:text-[#0B2545] transition-colors"
                  >
                    Principal's Message
                  </button>
                  <button
                    onClick={() => scrollTo('vision-mission')}
                    className="w-full text-left px-4 py-2 hover:bg-blue-50 hover:text-[#0B2545] transition-colors"
                  >
                    Vision & Mission
                  </button>
                  <button
                    onClick={() => scrollTo('administration')}
                    className="w-full text-left px-4 py-2 hover:bg-blue-50 hover:text-[#0B2545] transition-colors"
                  >
                    Board of Governors & Admin
                  </button>
                </div>
              )}
            </div>

            {/* Academics & Departments Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setOpenDropdown('academics')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                onClick={() => scrollTo('departments')}
                className="flex items-center gap-1 px-3 py-2 rounded text-slate-100 hover:text-amber-300 hover:bg-white/5 transition-colors"
              >
                <span>Academics</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {openDropdown === 'academics' && (
                <div className="absolute left-0 top-full w-64 bg-white text-slate-800 rounded-b-md shadow-xl border-t-2 border-amber-500 py-2 text-xs normal-case font-medium">
                  <div className="px-4 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    B.Tech & M.Tech Departments
                  </div>
                  <button
                    onClick={() => {
                      onSelectDepartment('cse');
                      scrollTo('departments');
                    }}
                    className="w-full text-left px-4 py-1.5 hover:bg-blue-50 hover:text-[#0B2545]"
                  >
                    Computer Science & Engg (CSE)
                  </button>
                  <button
                    onClick={() => {
                      onSelectDepartment('ece');
                      scrollTo('departments');
                    }}
                    className="w-full text-left px-4 py-1.5 hover:bg-blue-50 hover:text-[#0B2545]"
                  >
                    Electronics & Comm. Engg (ECE)
                  </button>
                  <button
                    onClick={() => {
                      onSelectDepartment('ee');
                      scrollTo('departments');
                    }}
                    className="w-full text-left px-4 py-1.5 hover:bg-blue-50 hover:text-[#0B2545]"
                  >
                    Electrical Engineering (EE)
                  </button>
                  <button
                    onClick={() => {
                      onSelectDepartment('me');
                      scrollTo('departments');
                    }}
                    className="w-full text-left px-4 py-1.5 hover:bg-blue-50 hover:text-[#0B2545]"
                  >
                    Mechanical Engineering (ME)
                  </button>
                  <button
                    onClick={() => {
                      onSelectDepartment('ce');
                      scrollTo('departments');
                    }}
                    className="w-full text-left px-4 py-1.5 hover:bg-blue-50 hover:text-[#0B2545]"
                  >
                    Civil Engineering (CE)
                  </button>
                  <button
                    onClick={() => {
                      onSelectDepartment('ash');
                      scrollTo('departments');
                    }}
                    className="w-full text-left px-4 py-1.5 hover:bg-blue-50 hover:text-[#0B2545]"
                  >
                    Applied Sciences & Humanities
                  </button>
                </div>
              )}
            </div>

            {/* Admissions */}
            <button
              onClick={() => scrollTo('admissions')}
              className="px-3 py-2 rounded text-slate-100 hover:text-amber-300 hover:bg-white/5 transition-colors"
            >
              Admissions
            </button>

            {/* Central Facilities */}
            <button
              onClick={() => scrollTo('facilities')}
              className="px-3 py-2 rounded text-slate-100 hover:text-amber-300 hover:bg-white/5 transition-colors"
            >
              Facilities
            </button>

            {/* Placement & Students */}
            <button
              onClick={() => scrollTo('placements')}
              className="px-3 py-2 rounded text-slate-100 hover:text-amber-300 hover:bg-white/5 transition-colors"
            >
              Training & Placement
            </button>

            {/* News & Notices */}
            <button
              onClick={() => scrollTo('notices')}
              className="px-3 py-2 rounded text-slate-100 hover:text-amber-300 hover:bg-white/5 transition-colors"
            >
              Notice Board
            </button>

            {/* Contact */}
            <button
              onClick={() => scrollTo('contact')}
              className="px-3 py-2 rounded text-slate-100 hover:text-amber-300 hover:bg-white/5 transition-colors"
            >
              Contact Us
            </button>
          </div>

          {/* Quick Apply CTA in Navbar */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={onOpenAdmission}
              className="px-3 py-1.5 text-xs font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded transition-colors shadow-sm"
            >
              Apply Online
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center justify-between w-full">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Menu Navigation
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={onOpenAdmission}
                className="px-2.5 py-1 text-xs font-bold text-slate-900 bg-amber-400 rounded"
              >
                Apply
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 rounded text-slate-200 hover:text-white hover:bg-white/10"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#071930] border-t border-slate-700/80 px-4 py-3 space-y-1 text-sm font-medium animate-in fade-in">
          <button
            onClick={() => scrollTo('hero')}
            className="w-full text-left px-3 py-2 rounded text-slate-200 hover:bg-white/5"
          >
            Home
          </button>
          <button
            onClick={() => scrollTo('about')}
            className="w-full text-left px-3 py-2 rounded text-slate-200 hover:bg-white/5"
          >
            About REC Rewa
          </button>
          <button
            onClick={() => scrollTo('departments')}
            className="w-full text-left px-3 py-2 rounded text-slate-200 hover:bg-white/5"
          >
            Academic Departments (CSE, ECE, EE, ME, CE)
          </button>
          <button
            onClick={() => scrollTo('admissions')}
            className="w-full text-left px-3 py-2 rounded text-slate-200 hover:bg-white/5"
          >
            Admissions & CLC 2026
          </button>
          <button
            onClick={() => scrollTo('facilities')}
            className="w-full text-left px-3 py-2 rounded text-slate-200 hover:bg-white/5"
          >
            Central Facilities & Library
          </button>
          <button
            onClick={() => scrollTo('placements')}
            className="w-full text-left px-3 py-2 rounded text-slate-200 hover:bg-white/5"
          >
            Training & Placement Cell
          </button>
          <button
            onClick={() => scrollTo('notices')}
            className="w-full text-left px-3 py-2 rounded text-slate-200 hover:bg-white/5"
          >
            Notice Board & Circulars
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="w-full text-left px-3 py-2 rounded text-slate-200 hover:bg-white/5"
          >
            Contact Information
          </button>
          <div className="pt-2 border-t border-slate-700">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmission();
              }}
              className="w-full py-2.5 text-center text-xs font-bold text-slate-900 bg-amber-400 rounded-md"
            >
              Start Admission Application (2026-27)
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
