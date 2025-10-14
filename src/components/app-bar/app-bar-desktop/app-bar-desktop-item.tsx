import { type FC } from 'react';
import { useCurrentSectionId, useGoToSection } from '../../../hooks/section';
import type { SectionId } from '../../../types/section-id';
import { cn } from '../../../utils';
import { AppBarItemLabel } from '../app-bar-item-label';

export interface AppBarDesktopItemProps {
  sectionId: SectionId;
  label: string;
}

export const AppBarDesktopItem: FC<AppBarDesktopItemProps> = ({ sectionId, label }) => {
  const goToSection = useGoToSection();
  const currentSectionId = useCurrentSectionId();

  const isSelected = currentSectionId === sectionId;

  return (
    <AppBarItemLabel
      className={cn(
        'px-4 py-2 text-sm font-medium transition-all cursor-pointer rounded-full hover:-translate-y-0.5',
        isSelected
          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
          : 'text-gray-700 hover:bg-white/70 hover:text-gray-900 hover:shadow-sm'
      )}
      onClick={() => goToSection(sectionId)}
    >
      {label}
    </AppBarItemLabel>
  );
};
