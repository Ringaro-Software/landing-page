import { type FC } from 'react';
import { useIsMdScreen } from '../../hooks';
import { AppBarDesktop } from './app-bar-desktop';
import { AppBarMobile } from './app-bar-mobile';

export const AppBar: FC = () => {
  const isMdScreen = useIsMdScreen();

  return isMdScreen ? <AppBarDesktop /> : <AppBarMobile />;
};
