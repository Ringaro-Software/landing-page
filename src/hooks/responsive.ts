import { useMediaQuery } from 'react-responsive';
import defaultTheme from 'tailwindcss/defaultTheme';

export const useIsSmScreen = () => useMediaQuery({ minWidth: defaultTheme.screens.sm });
export const useIsMdScreen = () => useMediaQuery({ minWidth: defaultTheme.screens.md });
export const useIsLgScreen = () => useMediaQuery({ minWidth: defaultTheme.screens.lg });
export const useIsXlScreen = () => useMediaQuery({ minWidth: defaultTheme.screens.xl });
export const useIsXxlScreen = () => useMediaQuery({ minWidth: defaultTheme.screens['2xl'] });
