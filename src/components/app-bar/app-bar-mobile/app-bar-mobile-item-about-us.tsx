import type { ClassValue } from 'clsx';
import { useState, type FC } from 'react';
import icon from '../../../assets/icons/sort-down-gray.png';
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
    <div className="flex w-full flex-col items-center px-6">
      <AppBarItemLabel
        className="flex gap-2 px-4 text-light-gray"
        onClick={toggleOpen}
      >
        About us
        <img
          src={icon}
          className={cn({
            'rotate-180 transition-transform': open,
          })}
        />
      </AppBarItemLabel>
      {open && (
        <div className="flex flex-col pl-[30%]">
          <AboutUsSubMenuItem
            label="Our process"
            className="border-b border-light-gray"
            onClick={() => onMenuItemClick(SectionId.OurProcess)}
          />
          <AboutUsSubMenuItem
            label="What we offer"
            className="border-b border-light-gray"
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
      className={cn('cursor-pointer py-2 text-light-gray', className)}
      onClick={onClick}
    >
      {label}
    </span>
  );
};
