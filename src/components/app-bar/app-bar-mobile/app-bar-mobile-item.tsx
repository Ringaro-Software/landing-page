import type { ClassValue } from 'clsx';
import { type FC } from 'react';
import type { SectionId } from '../../../types/section-id';
import { cn } from '../../../utils';
import { AppBarItemLabel } from '../app-bar-item-label';

export interface AppBarMobileItemProps {
  sectionId: SectionId;
  label: string;
  className?: ClassValue;
  onMenuItemClick: (sectionId: SectionId) => void;
}

export const AppBarMobileItem: FC<AppBarMobileItemProps> = ({ sectionId, label, className, onMenuItemClick }) => {
  return (
    <AppBarItemLabel
      className={cn(
        'px-4 py-2.5 text-sm text-gray-700 font-medium transition-all hover:bg-white/60 rounded-2xl',
        className
      )}
      onClick={() => onMenuItemClick(sectionId)}
    >
      {label}
    </AppBarItemLabel>
  );
};
