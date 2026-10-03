import React from 'react';

interface CollegeLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const CollegeLogo: React.FC<CollegeLogoProps> = ({ className = '', size = 'md' }) => {
  const dimension = size === 'sm' ? 44 : size === 'lg' ? 72 : 56;

  return (
    <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
      <svg
        width={dimension}
        height={dimension}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-sm select-none"
      >
        {/* Outer Circular Ring */}
        <circle cx="50" cy="50" r="47" fill="#0B2545" stroke="#D97706" strokeWidth="2.5" />
        <circle cx="50" cy="50" r="42" fill="#0E3360" stroke="#FBBF24" strokeWidth="1" strokeDasharray="2 1.5" />

        {/* Outer Cogwheel / Gear Teeth */}
        {[...Array(12)].map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const x1 = 50 + 44 * Math.cos(angle);
          const y1 = 50 + 44 * Math.sin(angle);
          const x2 = 50 + 48 * Math.cos(angle);
          const y2 = 50 + 48 * Math.sin(angle);
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#F59E0B"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          );
        })}

        {/* Inner Shield / Center Plate */}
        <circle cx="50" cy="50" r="32" fill="#071930" stroke="#F59E0B" strokeWidth="1.5" />

        {/* Atomic Orbitals / Circuit Lines */}
        <ellipse cx="50" cy="50" rx="26" ry="10" stroke="#38BDF8" strokeWidth="0.8" opacity="0.6" transform="rotate(-30 50 50)" />
        <ellipse cx="50" cy="50" rx="26" ry="10" stroke="#38BDF8" strokeWidth="0.8" opacity="0.6" transform="rotate(30 50 50)" />

        {/* Open Engineering Book Base */}
        <path
          d="M 32 62 Q 50 58 68 62 L 68 53 Q 50 49 32 53 Z"
          fill="#FFFFFF"
          stroke="#0F172A"
          strokeWidth="0.8"
        />
        <path
          d="M 50 52 L 50 61"
          stroke="#0F172A"
          strokeWidth="0.8"
        />

        {/* Diya / Flame of Knowledge */}
        <path
          d="M 44 48 C 44 51 56 51 56 48 C 54 45 52 45 50 42 C 48 45 46 45 44 48 Z"
          fill="#D97706"
        />
        <path
          d="M 48 44 C 48 41 50 35 50 35 C 50 35 52 41 52 44 C 52 46 48 46 48 44 Z"
          fill="#FDE047"
        />

        {/* Estd 1964 Banner */}
        <rect x="33" y="70" width="34" height="9" rx="2" fill="#D97706" stroke="#FEF08A" strokeWidth="0.5" />
        <text
          x="50"
          y="76.5"
          fill="#071930"
          fontSize="5.5"
          fontWeight="bold"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
          letterSpacing="0.5px"
        >
          ESTD 1964
        </text>

        {/* Circular text top */}
        <text
          x="50"
          y="23"
          fill="#FDE047"
          fontSize="4"
          fontWeight="700"
          textAnchor="middle"
          letterSpacing="0.5px"
        >
          REWA ENGINEERING
        </text>
      </svg>
    </div>
  );
};
