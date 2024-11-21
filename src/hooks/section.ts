import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { SectionId } from '../types/section-id';

export type GoToSectionFn = (sectionId: SectionId) => void;

export const useGoToSection = (): GoToSectionFn => {
  const { hash, search } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.querySelector(hash || `#${SectionId.Hero}`)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, [hash]);

  const goToSection: GoToSectionFn = (sectionId) => {
    navigate(sectionId !== SectionId.Hero ? `#${sectionId}${search}` : '/');
  };

  return goToSection;
};

export const useCurrentSectionId = (): SectionId => {
  const { hash } = useLocation();
  const sectionIdFromHash = hash ? hash.substring(1) : '';

  if (Object.values(SectionId).includes(sectionIdFromHash as SectionId)) {
    return sectionIdFromHash as SectionId;
  }

  return SectionId.Hero;
};
