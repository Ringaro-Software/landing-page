import { type FC } from 'react';
import { SectionId } from '../../types/section-id';

export const OurMissionSection: FC = () => {
  return (
    <section id={SectionId.OurMission} className="bg-white py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Our Mission
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 shadow-lg">
            <h3 className="mb-4 text-2xl font-semibold text-gray-900">
              Empowering Innovation Through Technology
            </h3>
            <p className="mb-4 text-gray-600 leading-[1.8]">
              We believe that great software has the power to transform businesses and change lives.
              Our mission is to bridge the gap between visionary ideas and technical excellence,
              delivering solutions that not only meet today's needs but anticipate tomorrow's challenges.
            </p>
            <p className="text-gray-600 leading-[1.8]">
              Through our collaborative approach and deep technical expertise, we help companies
              scale faster, operate more efficiently, and stay ahead of the competition.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="mb-2 text-3xl font-bold text-blue-600">10+</div>
              <div className="text-gray-700 text-sm font-medium">Industries Served</div>
            </div>
            <div className="rounded-2xl bg-white p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="mb-2 text-3xl font-bold text-green-600">20+</div>
              <div className="text-gray-700 text-sm font-medium">Happy Clients</div>
            </div>
            <div className="rounded-2xl bg-white p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="mb-2 text-3xl font-bold text-purple-600">5+</div>
              <div className="text-gray-700 text-sm font-medium">Years Experience</div>
            </div>
            <div className="rounded-2xl bg-white p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="mb-2 text-3xl font-bold text-orange-600">24/7</div>
              <div className="text-gray-700 text-sm font-medium">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};