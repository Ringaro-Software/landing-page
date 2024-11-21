import { useEffect, type FC } from 'react';
import { AppBar, HeroSection, OurStoriesSection } from '../../components';
import { useGoToSection } from '../../hooks/section';
import { SectionId } from '../../types/section-id';

export const LandingPage: FC = () => {
  const goToSection = useGoToSection();

  const handleScrollend = () => {
    const sectionIdInViewport = Object.values(SectionId).find((sectionId) =>
      isElementInViewport(document.getElementById(sectionId))
    );

    if (sectionIdInViewport) {
      goToSection(sectionIdInViewport);
    }
  };

  useEffect(() => {
    document.addEventListener('scrollend', handleScrollend);

    return () => document.removeEventListener('scrollend', handleScrollend);
  }, []);

  return (
    <div className="flex flex-col items-center justify-start">
      <AppBar />
      <HeroSection />
      <OurStoriesSection />
    </div>
  );
};

const isElementInViewport = (element?: HTMLElement | null) => {
  if (!element) {
    return false;
  }

  const rect = element.getBoundingClientRect();
  return rect.top > 0 && rect.top < (window.innerHeight || document.documentElement.clientHeight);
};
