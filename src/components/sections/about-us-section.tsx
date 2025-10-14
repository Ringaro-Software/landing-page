import { type FC } from 'react';
import { SectionId } from '../../types/section-id';

export const AboutUsSection: FC = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* About Us Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            About Us
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            We are a team of passionate developers, designers, and strategists dedicated to
            turning your software dreams into reality through proven processes and cutting-edge technology.
          </p>
        </div>

        {/* Our Process */}
        <div id={SectionId.OurProcess} className="mb-16">
          <h3 className="mb-8 text-center text-2xl font-bold text-gray-900">Our Process</h3>
          <div className="grid gap-6 md:grid-cols-5">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h4 className="mb-3 text-xl font-semibold text-gray-900">Discovery</h4>
              <p className="text-gray-600">
                We deep-dive into your business goals, requirements, and challenges to create a strategic roadmap.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-white">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
                </svg>
              </div>
              <h4 className="mb-3 text-xl font-semibold text-gray-900">Design</h4>
              <p className="text-gray-600">
                Our design team creates intuitive, user-centered interfaces that align with your brand and objectives.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-600 text-white">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                </svg>
              </div>
              <h4 className="mb-3 text-xl font-semibold text-gray-900">Development</h4>
              <p className="text-gray-600">
                Using agile methodologies, we build scalable, secure, and high-performance software solutions.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-600 text-white">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                </svg>
              </div>
              <h4 className="mb-3 text-xl font-semibold text-gray-900">Delivery</h4>
              <p className="text-gray-600">
                We ensure seamless deployment, provide comprehensive testing, and offer ongoing support.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-white">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <h4 className="mb-3 text-xl font-semibold text-gray-900">Maintenance</h4>
              <p className="text-gray-600">
                Continuous monitoring, updates, and enhancements to keep your software running optimally.
              </p>
            </div>
          </div>
        </div>

        {/* What We Offer */}
        <div id={SectionId.OurTechStack} className="mb-16">
          <h3 className="mb-8 text-center text-2xl font-bold text-gray-900">What We Offer</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
              <div className="mb-4 text-3xl">🌐</div>
              <h4 className="mb-3 text-lg font-semibold text-gray-900">Web Development</h4>
              <p className="text-gray-600 text-sm">
                Modern, responsive websites and web applications built with the latest technologies like React, Vue, and Angular.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
              <div className="mb-4 text-3xl">📱</div>
              <h4 className="mb-3 text-lg font-semibold text-gray-900">Mobile Apps</h4>
              <p className="text-gray-600 text-sm">
                Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
              <div className="mb-4 text-3xl">☁️</div>
              <h4 className="mb-3 text-lg font-semibold text-gray-900">Cloud Solutions</h4>
              <p className="text-gray-600 text-sm">
                Scalable cloud infrastructure and serverless applications on AWS, Azure, and Google Cloud Platform.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
              <div className="mb-4 text-3xl">🤖</div>
              <h4 className="mb-3 text-lg font-semibold text-gray-900">AI & Machine Learning</h4>
              <p className="text-gray-600 text-sm">
                Intelligent solutions powered by machine learning, natural language processing, and computer vision.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
              <div className="mb-4 text-3xl">🔧</div>
              <h4 className="mb-3 text-lg font-semibold text-gray-900">API Development</h4>
              <p className="text-gray-600 text-sm">
                RESTful and GraphQL APIs that power your applications with secure, efficient data exchange.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
              <div className="mb-4 text-3xl">🛡️</div>
              <h4 className="mb-3 text-lg font-semibold text-gray-900">DevOps & Security</h4>
              <p className="text-gray-600 text-sm">
                CI/CD pipelines, automated testing, monitoring, and security best practices for robust deployments.
              </p>
            </div>
          </div>
        </div>

        {/* Our Team */}
        <div id={SectionId.OurTeam}>
          <h3 className="mb-4 text-center text-3xl font-bold text-gray-900">Our Expert Team</h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            A diverse team of specialists working together to deliver exceptional results
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Developers */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">Senior Developers</h4>
              <p className="text-gray-600 text-center leading-relaxed">
                Experienced full-stack engineers with expertise in modern frameworks and scalable architectures
              </p>
            </div>

            {/* UI/UX Designers */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">UI/UX Designers</h4>
              <p className="text-gray-600 text-center leading-relaxed">
                Creative designers crafting beautiful, intuitive interfaces that delight users
              </p>
            </div>

            {/* Solution Architects */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">Solution Architects</h4>
              <p className="text-gray-600 text-center leading-relaxed">
                System design experts creating robust, scalable architectures for complex solutions
              </p>
            </div>

            {/* QA Engineers */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">QA Engineers</h4>
              <p className="text-gray-600 text-center leading-relaxed">
                Detail-oriented testers ensuring quality, reliability, and bug-free deliverables
              </p>
            </div>

            {/* Business Analysts */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">Business Analysts</h4>
              <p className="text-gray-600 text-center leading-relaxed">
                Analytical minds translating business requirements into technical solutions
              </p>
            </div>

            {/* Project Managers */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">Project Managers</h4>
              <p className="text-gray-600 text-center leading-relaxed">
                Agile experts coordinating teams and ensuring on-time, on-budget delivery
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};