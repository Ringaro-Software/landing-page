import { useMediaQuery } from 'react-responsive';
import defaultTheme from 'tailwindcss/defaultTheme';

export const useIsMdScreen = () => useMediaQuery({ minWidth: defaultTheme.screens.md });
