import type { ClassValue } from 'clsx';
import { type FC, type PropsWithChildren } from 'react';
import type { SectionId } from '../types/section-id';
import { cn } from '../utils';

export type PageSectionProps = PropsWithChildren<{
  sectionId: SectionId;
  className?: ClassValue;
}>;

export const PageSection: FC<PageSectionProps> = ({ sectionId, className, children }) => {
  return (
    <div
      id={sectionId}
      className={cn(
        'flex min-h-[calc(100dvh_-_var(--appBarHeight))] w-full max-w-[var(--layoutMaxWidth)] snap-start scroll-mt-[var(--appBarHeight)] flex-col items-center justify-center px-[var(--layoutPaddingX)] py-10 md:py-14',
        className
      )}
    >
      {children}
    </div>
  );
};
