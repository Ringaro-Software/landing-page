import type { FC } from 'react';
import logo from '../../../assets/logo/logo-white.png';
import { SectionId } from '../../../types/section-id';
import { useGoToSection } from '../../../hooks/section';
import { AppBarDesktopItem } from './app-bar-desktop-item';
import { AppBarDesktopItemAboutUs } from './app-bar-desktop-item-about-us';

export const AppBarDesktop: FC = () => {
  const goToSection = useGoToSection();

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] w-full pt-4 px-4">
      <div className="flex min-h-[var(--appBarHeight)] w-full items-center justify-center">
        <div className="flex w-full max-w-[var(--layoutMaxWidth)] flex-nowrap items-center justify-between px-8 py-3 bg-white/70 backdrop-blur-xl rounded-3xl shadow-lg border border-white/50 transition-all duration-300 hover:shadow-xl">
          <img
            src={logo}
            className="h-14 w-24 object-cover filter brightness-0 cursor-pointer transition-transform duration-200 hover:scale-105"
            alt="logo"
            onClick={() => goToSection(SectionId.Hero)}
          />
          <nav className="flex items-center gap-2">
            <AppBarDesktopItem
              sectionId={SectionId.Hero}
              label="Home"
            />
            <AppBarDesktopItem
              sectionId={SectionId.OurMission}
              label="Our Mission"
            />
            <AppBarDesktopItemAboutUs />
            <AppBarDesktopItem
              sectionId={SectionId.OurStories}
              label="Partners"
            />
            <AppBarDesktopItem
              sectionId={SectionId.Contact}
              label="Contact"
            />
          </nav>
        </div>
      </div>
    </div>
  );
};
