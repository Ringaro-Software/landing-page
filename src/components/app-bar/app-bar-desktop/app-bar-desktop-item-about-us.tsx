import type { ClassValue } from 'clsx';
import { forwardRef, useRef, useState, type FC } from 'react';
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
        className={cn(
          'flex items-center gap-1 px-4 py-2 text-sm font-medium transition-all cursor-pointer rounded-full',
          isSelected
            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
            : 'text-gray-700 hover:bg-white/70 hover:text-gray-900'
        )}
        onClick={toggleOpen}
      >
        About us
        <svg className={cn('w-3.5 h-3.5 transition-transform', { 'rotate-180': open })} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
        </svg>
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
      className="absolute left-1/2 top-full -translate-x-1/2 flex flex-col items-stretch whitespace-nowrap bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-100/50 mt-2 overflow-hidden p-1"
    >
      <AboutUsMenuDropdownItem
        label="Our process"
        isSelected={currentSectionId === SectionId.OurProcess}
        onClick={() => onItemClick(SectionId.OurProcess)}
      />
      <AboutUsMenuDropdownItem
        label="What we offer"
        isSelected={currentSectionId === SectionId.OurTechStack}
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
        'cursor-pointer px-4 py-2 text-sm text-center font-medium transition-all rounded-xl',
        isSelected
          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
          : 'text-gray-700 hover:bg-gray-100',
        className
      )}
      onClick={onClick}
    >
      {label}
    </span>
  );
};
