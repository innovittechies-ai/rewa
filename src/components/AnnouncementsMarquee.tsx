import React from 'react';
import { Bell, Flame, ChevronRight } from 'lucide-react';
import { NOTICES_DATA, Notice } from '../data/recData';

interface AnnouncementsMarqueeProps {
  onSelectNotice: (notice: Notice) => void;
  onViewAllNotices: () => void;
}

export const AnnouncementsMarquee: React.FC<AnnouncementsMarqueeProps> = ({
  onSelectNotice,
  onViewAllNotices,
}) => {
  return (
    <div className="bg-amber-500 text-slate-950 flex items-stretch border-b border-amber-600 overflow-hidden shadow-inner text-xs font-medium">
      {/* Ticker Badge */}
      <div className="bg-red-700 text-white px-3 sm:px-4 py-2 flex items-center gap-1.5 shrink-0 font-bold uppercase tracking-wider shadow-sm z-10">
        <Flame className="w-3.5 h-3.5 text-amber-300 animate-bounce" />
        <span className="hidden sm:inline">Latest Announcements</span>
        <span className="sm:hidden">Notices</span>
      </div>

      {/* Marquee Body */}
      <div className="relative flex-1 overflow-hidden flex items-center py-1.5">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8 pl-4">
          {NOTICES_DATA.concat(NOTICES_DATA).map((notice, idx) => (
            <button
              key={`${notice.id}-${idx}`}
              onClick={() => onSelectNotice(notice)}
              className="inline-flex items-center gap-2 hover:underline text-slate-950 font-semibold cursor-pointer group"
            >
              {notice.isNew && (
                <span className="bg-red-700 text-white text-[10px] font-black px-1.5 py-0.2 rounded-sm uppercase tracking-wider animate-pulse">
                  NEW
                </span>
              )}
              <span className="group-hover:text-red-900 transition-colors">
                {notice.title}
              </span>
              <span className="text-slate-800 text-[11px] font-normal">
                ({notice.date})
              </span>
              <span className="text-slate-500 mx-2">|</span>
            </button>
          ))}
        </div>
      </div>

      {/* View All Button */}
      <button
        onClick={onViewAllNotices}
        className="hidden md:flex items-center gap-1 px-3 py-2 bg-amber-600 hover:bg-amber-700 text-slate-950 hover:text-white font-bold shrink-0 transition-colors z-10"
        title="View All Notices"
      >
        <span>All Notices</span>
        <ChevronRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
