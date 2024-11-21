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
      className={cn('hover:underline', isSelected ? 'text-light-gray' : 'text-white')}
      onClick={() => goToSection(sectionId)}
    >
      {label}
    </AppBarItemLabel>
  );
};
