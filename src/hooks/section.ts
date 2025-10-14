import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { SectionId } from '../types/section-id';

export type GoToSectionFn = (sectionId: SectionId) => void;

export const useGoToSection = (): GoToSectionFn => {
  const { hash, search } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!hash) return;

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        const yOffset = -120; // Offset to show space above the section and clear the header
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 50);

    return () => clearTimeout(timeoutId);
  }, [hash]);

  const goToSection: GoToSectionFn = (sectionId) => {
    if (sectionId === SectionId.Hero) {
      navigate('/');
      // Scroll to top for Hero section
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 50);
    } else {
      navigate(`#${sectionId}${search}`);
    }
  };

  return goToSection;
};

export const useCurrentSectionId = (): SectionId => {
  const [currentSection, setCurrentSection] = useState<SectionId>(SectionId.Hero);

  useEffect(() => {
    const sections = Object.values(SectionId).map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the section with the largest intersection ratio
        let maxRatio = 0;
        let mostVisibleSection: SectionId | null = null;

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostVisibleSection = entry.target.id as SectionId;
          }
        });

        // Only update if we found a visible section with at least 20% visibility
        if (mostVisibleSection && maxRatio > 0.2) {
          setCurrentSection(mostVisibleSection);
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        rootMargin: '-20% 0px -20% 0px' // Focus on the middle 60% of viewport
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return currentSection;
};
