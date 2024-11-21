import type { FC } from 'react';
import logo from '../../../assets/logo/logo-white.png';
import { SectionId } from '../../../types/section-id';
import { AppBarDesktopItem } from './app-bar-desktop-item';
import { AppBarDesktopItemAboutUs } from './app-bar-desktop-item-about-us';

export const AppBarDesktop: FC = () => {
  return (
    <div className="sticky top-0 flex min-h-[var(--appBarHeight)] w-full items-stretch justify-center bg-black">
      <div className="flex w-full max-w-[var(--layoutMaxWidth)] flex-nowrap items-center justify-between px-[var(--layoutPaddingX)] lg:justify-start lg:gap-16">
        <img
          src={logo}
          className="h-24 w-32 object-cover lg:mr-auto"
          alt="logo"
        />
        <AppBarDesktopItem
          sectionId={SectionId.Hero}
          label="Home"
        />
        <AppBarDesktopItem
          sectionId={SectionId.OurMission}
          label="Our mission"
        />
        <AppBarDesktopItemAboutUs />
        <AppBarDesktopItem
          sectionId={SectionId.OurStories}
          label="Our stories"
        />
        <AppBarDesktopItem
          sectionId={SectionId.Contact}
          label="Contact us"
        />
      </div>
    </div>
  );
};
