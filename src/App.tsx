import React, { useState } from 'react';
import { TopGovtBar } from './components/TopGovtBar';
import { MainHeader } from './components/MainHeader';
import { Navbar } from './components/Navbar';
import { AnnouncementsMarquee } from './components/AnnouncementsMarquee';
import { HeroSection } from './components/HeroSection';
import { QuickAccessStrip } from './components/QuickAccessStrip';
import { NoticeBoardSection } from './components/NoticeBoardSection';
import { AboutSection } from './components/AboutSection';
import { DepartmentsSection } from './components/DepartmentsSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { PlacementSection } from './components/PlacementSection';
import { AdmissionsSection } from './components/AdmissionsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AdmissionModal } from './components/AdmissionModal';
import { NoticeDetailModal } from './components/NoticeDetailModal';
import { CampusTourModal } from './components/CampusTourModal';
import { AntiRaggingModal, FeeInfoModal } from './components/InfoModals';
import { NOTICES_DATA, Notice } from './data/recData';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);
  const [admissionModalOpen, setAdmissionModalOpen] = useState(false);
  const [campusTourModalOpen, setCampusTourModalOpen] = useState(false);
  const [antiRaggingModalOpen, setAntiRaggingModalOpen] = useState(false);
  const [feeModalOpen, setFeeModalOpen] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'larger'>('normal');
  const [language, setLanguage] = useState<'EN' | 'HI'>('EN');
  const [selectedDeptId, setSelectedDeptId] = useState('cse');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSelectNoticeByTitle = (title: string) => {
    const notice = NOTICES_DATA.find((n) => n.title.toLowerCase().includes(title.toLowerCase()));
    if (notice) {
      setSelectedNotice(notice);
    } else {
      setSelectedNotice(NOTICES_DATA[0]);
    }
  };

  const handleScrollTo = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const fontSizeClass =
    fontSize === 'larger' ? 'text-lg' : fontSize === 'large' ? 'text-base' : 'text-sm';

  return (
    <div
      className={`min-h-screen flex flex-col font-sans transition-all duration-200 ${
        highContrast ? 'high-contrast' : 'bg-slate-50 text-slate-800'
      } ${fontSizeClass}`}
    >
      {/* 1. Government Operational Accessibility & Contact Strip */}
      <TopGovtBar
        highContrast={highContrast}
        setHighContrast={setHighContrast}
        fontSize={fontSize}
        setFontSize={setFontSize}
        language={language}
        setLanguage={setLanguage}
        onOpenNotice={handleSelectNoticeByTitle}
      />

      {/* 2. Institutional Bilingual Header with College Seal */}
      <MainHeader
        onOpenAdmission={() => setAdmissionModalOpen(true)}
        onSearch={(query) => {
          setSearchQuery(query);
          if (query.trim()) {
            handleScrollTo('notices');
          }
        }}
        searchQuery={searchQuery}
        language={language}
      />

      {/* 3. Deep Navy Academic Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenAdmission={() => setAdmissionModalOpen(true)}
        onSelectDepartment={(deptId) => {
          setSelectedDeptId(deptId);
          handleScrollTo('departments');
        }}
      />

      {/* 4. Live Breaking Announcements Ticker */}
      <AnnouncementsMarquee
        onSelectNotice={(notice) => setSelectedNotice(notice)}
        onViewAllNotices={() => handleScrollTo('notices')}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Academic Scrim */}
        <HeroSection
          onOpenAdmission={() => setAdmissionModalOpen(true)}
          onExploreDepartments={() => handleScrollTo('departments')}
          onOpenCampusTour={() => setCampusTourModalOpen(true)}
        />

        {/* Fast-Track Services Bar */}
        <QuickAccessStrip
          onOpenAdmission={() => setAdmissionModalOpen(true)}
          onOpenNotice={(cat) => {
            const notice = NOTICES_DATA.find((n) => n.category === cat) || NOTICES_DATA[0];
            setSelectedNotice(notice);
          }}
          onOpenFeeInfo={() => setFeeModalOpen(true)}
          onOpenAntiRagging={() => setAntiRaggingModalOpen(true)}
        />

        {/* Latest News & Notice Board Section */}
        <NoticeBoardSection
          onSelectNotice={(notice) => setSelectedNotice(notice)}
          externalSearchQuery={searchQuery}
        />

        {/* About REC Rewa & Principal's Desk Section */}
        <AboutSection />

        {/* Academic Departments & Courses Section */}
        <DepartmentsSection
          selectedDeptId={selectedDeptId}
          onSelectDepartment={(id) => setSelectedDeptId(id)}
          onOpenAdmission={() => setAdmissionModalOpen(true)}
        />

        {/* Central Facilities & Modern Labs Showcase */}
        <FacilitiesSection onOpenCampusTour={() => setCampusTourModalOpen(true)} />

        {/* Admissions & Seat Matrix Section */}
        <AdmissionsSection
          onOpenAdmission={() => setAdmissionModalOpen(true)}
          onOpenNotice={(cat) => {
            const notice = NOTICES_DATA.find((n) => n.category === cat) || NOTICES_DATA[0];
            setSelectedNotice(notice);
          }}
        />

        {/* Training & Placement Cell Section */}
        <PlacementSection />

        {/* Contact & Location Guidance Section */}
        <ContactSection />
      </main>

      {/* Comprehensive Institutional Footer */}
      <Footer
        onOpenAdmission={() => setAdmissionModalOpen(true)}
        onOpenNotice={(cat) => {
          const notice = NOTICES_DATA.find((n) => n.category === cat) || NOTICES_DATA[0];
          setSelectedNotice(notice);
        }}
      />

      {/* Interactive Modals */}
      <AdmissionModal
        isOpen={admissionModalOpen}
        onClose={() => setAdmissionModalOpen(false)}
      />

      <NoticeDetailModal
        notice={selectedNotice}
        onClose={() => setSelectedNotice(null)}
      />

      <CampusTourModal
        isOpen={campusTourModalOpen}
        onClose={() => setCampusTourModalOpen(false)}
      />

      <AntiRaggingModal
        isOpen={antiRaggingModalOpen}
        onClose={() => setAntiRaggingModalOpen(false)}
      />

      <FeeInfoModal
        isOpen={feeModalOpen}
        onClose={() => setFeeModalOpen(false)}
        onOpenAdmission={() => setAdmissionModalOpen(true)}
      />
    </div>
  );
}
