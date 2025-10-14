import type { ClassValue } from 'clsx';
import { useState, type FC } from 'react';
import { SectionId } from '../../../types/section-id';
import { cn } from '../../../utils';
import { AppBarItemLabel } from '../app-bar-item-label';

export interface AppBarMobileItemAboutUsProps {
  onMenuItemClick: (sectionId: SectionId) => void;
}

export const AppBarMobileItemAboutUs: FC<AppBarMobileItemAboutUsProps> = ({ onMenuItemClick }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen((prev) => !prev);

  return (
    <div className="flex w-full flex-col">
      <AppBarItemLabel
        className="flex items-center justify-between gap-2 px-4 py-2.5 text-sm text-gray-700 font-medium transition-all hover:bg-white/60 rounded-2xl"
        onClick={toggleOpen}
      >
        About us
        <svg className={cn('w-3.5 h-3.5 transition-transform', { 'rotate-180': open })} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
        </svg>
      </AppBarItemLabel>
      {open && (
        <div className="flex flex-col ml-4 mt-1 bg-white/40 rounded-2xl p-1">
          <AboutUsSubMenuItem
            label="Our process"
            onClick={() => onMenuItemClick(SectionId.OurProcess)}
          />
          <AboutUsSubMenuItem
            label="What we offer"
            onClick={() => onMenuItemClick(SectionId.OurTechStack)}
          />
          <AboutUsSubMenuItem
            label="Our team"
            onClick={() => onMenuItemClick(SectionId.OurTeam)}
          />
        </div>
      )}
    </div>
  );
};

interface AboutUsSubMenuItemProps {
  label: string;
  className?: ClassValue;
  onClick: () => void;
}

const AboutUsSubMenuItem: FC<AboutUsSubMenuItemProps> = ({ label, className, onClick }) => {
  return (
    <span
      className={cn(
        'cursor-pointer px-3 py-2 text-gray-600 text-xs transition-all hover:bg-white/60 rounded-xl',
        className
      )}
      onClick={onClick}
    >
      {label}
    </span>
  );
};
