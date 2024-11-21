import { type FC } from 'react';
import logo from '../../assets/logo/logo-black.png';
import { SectionId } from '../../types/section-id';
import { PageSection } from '../page-section';

export const HeroSection: FC = () => {
  return (
    <PageSection sectionId={SectionId.Hero}>
      <header className="flex justify-center">
        <img
          src={logo}
          className="max-h-80"
          alt="logo"
        />
      </header>
    </PageSection>
  );
};
