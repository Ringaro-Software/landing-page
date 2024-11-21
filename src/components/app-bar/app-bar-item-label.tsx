import { forwardRef, type ComponentPropsWithRef } from 'react';
import { cn } from '../../utils';

export const AppBarItemLabel = forwardRef<HTMLSpanElement, ComponentPropsWithRef<'span'>>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      {...props}
      className={cn('cursor-pointer whitespace-nowrap text-base text-white', className)}
    />
  )
);
