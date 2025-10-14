import { type FC } from 'react';
import { SectionId } from '../../types/section-id';
import { useGoToSection } from '../../hooks/section';
import logo from '../../assets/logo/logo-black.png';

export const HeroSection: FC = () => {
  const goToSection = useGoToSection();

  return (
    <section id={SectionId.Hero} className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center animate-in fade-in duration-700">
          {/* Logo on mobile, text on desktop */}
          <img src={logo} alt="Ringaro" className="md:hidden mx-auto mb-8 w-64 animate-in slide-in-from-bottom-4 duration-700" />
          <h1 className="hidden md:flex mb-8 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl text-gray-900 animate-in slide-in-from-bottom-4 duration-700 items-center justify-center">
            &lt;/ Your Vision, <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Our Expertise</span> <span className="text-purple-600 inline-block translate-y-2">&gt;</span>
          </h1>
          <p className="mb-12 max-w-3xl mx-auto text-xl text-gray-600 md:text-2xl leading-[1.7] animate-in slide-in-from-bottom-4 duration-700 delay-100">
            We transform your ideas into powerful software solutions. Partner with our expert development team
            to accelerate your business growth through cutting-edge technology.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row justify-center animate-in slide-in-from-bottom-4 duration-700 delay-200">
            <button
              className="group rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-1 hover:scale-105 active:scale-95"
              onClick={() => goToSection(SectionId.Contact)}
            >
              <span className="flex items-center justify-center gap-2">
                Start Your Project
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            <button
              className="rounded-2xl bg-white border-2 border-gray-200 px-8 py-4 text-lg font-semibold text-gray-900 transition-all hover:border-gray-300 hover:shadow-lg hover:-translate-y-1 hover:scale-105 active:scale-95"
              onClick={() => goToSection(SectionId.OurStories)}
            >
              View Our Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
