import { useRef, useState, type FC } from 'react';
import { useClickOutside } from '../../../hooks';
import { useGoToSection } from '../../../hooks/section';
import { SectionId } from '../../../types/section-id';
import { cn } from '../../../utils';
import { AppBarMobileItem } from './app-bar-mobile-item';
import { AppBarMobileItemAboutUs } from './app-bar-mobile-item-about-us';
import { AppBarMobileMenuButton } from './app-bar-mobile-menu-button';

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
    <div className="sticky top-0 flex min-h-[var(--appBarHeight)] w-full items-center bg-white px-[var(--layoutPaddingX)]">
      <AppBarMobileMenuButton
        ref={menuButtonRef}
        className="z-10"
        iconFill={open ? 'light-gray' : 'black'}
        onClick={toggleOpen}
      />
      <div
        ref={menuContainerRef}
        className={cn(
          'absolute left-0 top-0 flex h-screen w-[min(250px,100%)] flex-col items-center gap-10 bg-black bg-opacity-90 pb-10 pt-[calc(var(--appBarHeight)_+_40px)] text-light-gray transition-all duration-300',
          {
            'opacity-0': !open,
            '-translate-x-full': !open,
          }
        )}
      >
        <AppBarMobileItem
          sectionId={SectionId.Hero}
          label="Home"
          onMenuItemClick={handleMenuItemClick}
        />
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
    </div>
  );
};
