import { type FC } from 'react';
import { AppBar, HeroSection, OurMissionSection, AboutUsSection, OurStoriesSection, ContactSection, Footer } from '../../components';

export const LandingPage: FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <AppBar />
      <main className="flex-1">
        <HeroSection />
        <OurMissionSection />
        <AboutUsSection />
        <OurStoriesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};
