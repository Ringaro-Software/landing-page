import { useRef, useState, type FC } from 'react';
import logo from '../../../assets/logo/logo-black.png';
import { useClickOutside } from '../../../hooks';
import { useGoToSection } from '../../../hooks/section';
import { SectionId } from '../../../types/section-id';
import { cn } from '../../../utils';
import { AppBarMobileItem } from './app-bar-mobile-item';
import { AppBarMobileItemAboutUs } from './app-bar-mobile-item-about-us';
import { AppBarMobileMenuButton } from './app-bar-mobile-menu-button';
import { AppBarItemLabel } from '../app-bar-item-label';

export const AppBarMobile: FC = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen((prev) => !prev);

  const closeMenu = () => setOpen(false);

  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const menuContainerRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(() => setOpen(false), menuButtonRef, menuContainerRef);

  const goToSection = useGoToSection();

  const handleMenuItemClick = (sectionId: SectionId) => {
    goToSection(sectionId);
    closeMenu();
  };

  return (
    <div className="sticky top-0 flex min-h-[var(--appBarHeight)] w-full items-center px-4 pt-4 z-50">
      <div className="flex w-full items-center bg-white/70 backdrop-blur-xl rounded-3xl shadow-lg border border-white/50 px-3 py-2">
        <AppBarMobileMenuButton
          ref={menuButtonRef}
          className="z-50"
          iconFill="black"
          onClick={toggleOpen}
        />
      </div>
      <div
        ref={menuContainerRef}
        className={cn(
          'fixed left-0 top-0 flex h-screen w-[min(300px,85%)] flex-col items-stretch gap-2 bg-gradient-to-br from-blue-50 to-purple-50 pb-8 pt-[calc(var(--appBarHeight)_+_20px)] px-6 shadow-2xl transition-transform duration-300 z-40',
          {
            '-translate-x-full': !open,
          }
        )}
      >
        <AppBarItemLabel
          className="px-4 py-2.5 flex items-center justify-center transition-all hover:bg-white/60 rounded-2xl"
          onClick={() => handleMenuItemClick(SectionId.Hero)}
        >
          <img src={logo} alt="Home" className="h-16 w-auto object-contain" />
        </AppBarItemLabel>
        <AppBarMobileItem
          sectionId={SectionId.OurMission}
          label="Our mission"
          onMenuItemClick={handleMenuItemClick}
        />
        <AppBarMobileItemAboutUs onMenuItemClick={handleMenuItemClick} />
        <AppBarMobileItem
          sectionId={SectionId.OurStories}
          label="Our stories"
          onMenuItemClick={handleMenuItemClick}
        />
        <AppBarMobileItem
          sectionId={SectionId.Contact}
          label="Contact us"
          className="mt-auto"
          onMenuItemClick={handleMenuItemClick}
        />
      </div>
      {open && (
        <div
          className="fixed inset-0 bg-black/20 transition-opacity duration-300 z-30"
          onClick={closeMenu}
        />
      )}
    </div>
  );
};
