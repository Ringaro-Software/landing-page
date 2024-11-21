import type { ClassValue } from 'clsx';
import { forwardRef, useRef, useState, type FC } from 'react';
import iconGray from '../../../assets/icons/sort-down-gray.png';
import iconWhite from '../../../assets/icons/sort-down-white.png';
import { useClickOutside } from '../../../hooks';
import { useCurrentSectionId, useGoToSection } from '../../../hooks/section';
import { SectionId } from '../../../types/section-id';
import { cn } from '../../../utils';
import { AppBarItemLabel } from '../app-bar-item-label';

export const AppBarDesktopItemAboutUs: FC = () => {
  const currentSectionId = useCurrentSectionId();
  const goToSection = useGoToSection();

  const isSelected =
    !!currentSectionId && [SectionId.OurProcess, SectionId.OurTechStack, SectionId.OurTeam].includes(currentSectionId);

  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen((prev) => !prev);

  const containerRef = useRef<HTMLSpanElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(() => setOpen(false), containerRef, dropdownRef);

  return (
    <div className="relative flex flex-col justify-center self-stretch">
      <AppBarItemLabel
        ref={containerRef}
        className={cn('flex gap-2', isSelected ? 'text-light-gray' : 'text-white')}
        onClick={toggleOpen}
      >
        About us
        <img
          src={isSelected ? iconGray : iconWhite}
          className={cn({
            'rotate-180 transition-transform': open,
          })}
        />
      </AppBarItemLabel>
      {open && (
        <AboutUsMenuDropdown
          ref={dropdownRef}
          currentSectionId={currentSectionId}
          onItemClick={(sectionId) => {
            goToSection(sectionId);
            setOpen(false);
          }}
        />
      )}
    </div>
  );
};

const AboutUsMenuDropdown = forwardRef<
  HTMLDivElement,
  { currentSectionId: SectionId; onItemClick: (sectionId: SectionId) => void }
>(({ currentSectionId, onItemClick }, ref) => {
  return (
    <div
      ref={ref}
      className="absolute left-1/2 top-[var(--appBarHeight)] flex -translate-x-1/2 flex-col items-stretch whitespace-nowrap bg-black bg-opacity-70"
    >
      <AboutUsMenuDropdownItem
        label="Our process"
        isSelected={currentSectionId === SectionId.OurProcess}
        className="border-b border-light-gray"
        onClick={() => onItemClick(SectionId.OurProcess)}
      />
      <AboutUsMenuDropdownItem
        label="What we offer"
        isSelected={currentSectionId === SectionId.OurTechStack}
        className="border-b border-light-gray"
        onClick={() => onItemClick(SectionId.OurTechStack)}
      />
      <AboutUsMenuDropdownItem
        label="Our team"
        isSelected={currentSectionId === SectionId.OurTeam}
        onClick={() => onItemClick(SectionId.OurTeam)}
      />
    </div>
  );
});

interface AboutUsMenuDropdownItemProps {
  label: string;
  isSelected: boolean;
  className?: ClassValue;
  onClick: () => void;
}

const AboutUsMenuDropdownItem: FC<AboutUsMenuDropdownItemProps> = ({ label, isSelected, className, onClick }) => {
  return (
    <span
      className={cn(
        'cursor-pointer px-6 py-2 text-center text-white',
        isSelected ? 'text-light-gray' : 'text-white',
        className
      )}
      onClick={onClick}
    >
      {label}
    </span>
  );
};
