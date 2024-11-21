import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import { LIGHT_GRAY } from '../../../constants';

export type AppBarMobileMenuButtonProps = ComponentPropsWithoutRef<'button'> & {
  iconFill: 'black' | 'white' | 'light-gray';
};

export const AppBarMobileMenuButton = forwardRef<HTMLButtonElement, AppBarMobileMenuButtonProps>((props, ref) => {
  const { iconFill, ...buttonProps } = props;

  return (
    <button
      {...buttonProps}
      ref={ref}
    >
      <svg
        width="30"
        height="20"
        viewBox="0 0 30 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 20V16.6667H30V20H0ZM0 11.6667V8.33333H30V11.6667H0ZM0 3.33333V0H30V3.33333H0Z"
          fill={iconFill === 'light-gray' ? LIGHT_GRAY : iconFill}
        />
      </svg>
    </button>
  );
});
