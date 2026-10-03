import React, { useState, useMemo } from 'react';
import { Bell, Calendar, Download, FileText, ChevronRight, ExternalLink, Filter, Search } from 'lucide-react';
import { NOTICES_DATA, UPCOMING_EVENTS, QUICK_LINKS, Notice } from '../data/recData';

interface NoticeBoardSectionProps {
  onSelectNotice: (notice: Notice) => void;
  externalSearchQuery?: string;
}

export const NoticeBoardSection: React.FC<NoticeBoardSectionProps> = ({
  onSelectNotice,
  externalSearchQuery = '',
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [localSearch, setLocalSearch] = useState<string>('');

  const categories = ['All', 'Admissions', 'Academic', 'Exam', 'Placement', 'Tenders'];

  const filteredNotices = useMemo(() => {
    return NOTICES_DATA.filter((n) => {
      const matchCat = activeCategory === 'All' || n.category === activeCategory;
      const query = (localSearch || externalSearchQuery).toLowerCase();
      const matchQuery =
        !query ||
        n.title.toLowerCase().includes(query) ||
        n.refNo.toLowerCase().includes(query) ||
        n.category.toLowerCase().includes(query);
      return matchCat && matchQuery;
    });
  }, [activeCategory, localSearch, externalSearchQuery]);

  return (
    <section id="notices" className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-slate-200 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-widest">
              <span>Official Circulars</span>
              <span aria-hidden="true">·</span>
              <span>Updated Daily</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0B2545] font-cinzel mt-1">
              Notice Board & Announcements
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Official notifications, examination circulars, college counselling, and university orders.
            </p>
          </div>

          {/* Quick Notice Search */}
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search circulars..."
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B2545] text-slate-800"
            />
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
          </div>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Notice List (8 Cols) */}
          <div className="lg:col-span-8 flex flex-col">
            {/* Interactive Filter Tabs (functional button tabs) */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-4 scrollbar-none border-b border-slate-100">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                    activeCategory === cat
                      ? 'bg-[#0B2545] text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Notices Container */}
            <div className="space-y-3 flex-1">
              {filteredNotices.length > 0 ? (
                filteredNotices.map((notice) => (
                  <div
                    key={notice.id}
                    onClick={() => onSelectNotice(notice)}
                    className="p-4 rounded-lg border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all bg-slate-50/50 hover:bg-white cursor-pointer group flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                        <span className="font-semibold text-blue-900">{notice.category}</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono">{notice.refNo}</span>
                        <span aria-hidden="true">·</span>
                        <span className="tabular-nums">{notice.date}</span>
                        {notice.isNew && (
                          <span className="bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.2 rounded uppercase">
                            NEW
                          </span>
                        )}
                      </div>

                      <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
                        {notice.title}
                      </h3>

                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {notice.content}
                      </p>
                    </div>

                    <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-200">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectNotice(notice);
                        }}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#0B2545] group-hover:text-blue-700 bg-blue-50 px-2.5 py-1.5 rounded hover:bg-blue-100 transition-colors"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>View Notice</span>
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-8 text-center bg-slate-50 rounded-lg border border-dashed border-slate-300">
                  <p className="text-sm text-slate-500">No notices found for this category or search query.</p>
                  <button
                    onClick={() => {
                      setActiveCategory('All');
                      setLocalSearch('');
                    }}
                    className="mt-2 text-xs font-semibold text-blue-700 underline"
                  >
                    Reset filters
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Events & External Links (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Upcoming Events Box */}
            <div className="bg-slate-50 rounded-xl border border-slate-200 p-5 shadow-sm">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-200 text-[#0B2545]">
                <Calendar className="w-4 h-4 text-amber-600" />
                <h3 className="text-sm font-bold uppercase tracking-wider">Events Calendar 2026</h3>
              </div>

              <div className="mt-4 space-y-4">
                {UPCOMING_EVENTS.map((event, idx) => (
                  <div key={idx} className="flex gap-3 items-start pb-3 border-b border-slate-200/80 last:border-0 last:pb-0">
                    <div className="bg-[#0B2545] text-white p-2 rounded text-center shrink-0 w-14">
                      <span className="block text-[10px] uppercase font-bold tracking-wider text-amber-300">
                        {event.date.split(' ')[0]}
                      </span>
                      <span className="block text-base font-black leading-tight tabular-nums">
                        {event.date.split(' ')[1].replace(',', '')}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 leading-snug">
                        {event.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">{event.organizer}</p>
                      <span className="inline-block text-[10px] text-amber-800 font-medium mt-1">
                        📍 {event.venue}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Government & University Portals */}
            <div className="bg-gradient-to-br from-slate-900 to-[#0B2545] text-white rounded-xl p-5 shadow-md">
              <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-1.5">
                <span>Direct Portal Links</span>
              </h3>
              <div className="space-y-2">
                {QUICK_LINKS.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-2 rounded bg-white/5 hover:bg-white/10 text-xs font-medium text-slate-200 hover:text-white transition-colors"
                  >
                    <span>{link.label}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
