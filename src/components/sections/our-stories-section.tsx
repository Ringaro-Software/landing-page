import { type FC, useState, useEffect } from 'react';
import { SectionId } from '../../types/section-id';

// Portfolio projects data
const portfolioProjects = [
  {
    title: 'AI-Powered Logistics Platform',
    clientName: 'M.A.R.S.',
    clientLogo: 'https://marsapp.ai/images/logo.png',
    isComposite: true,
    description: 'Complete fleet management and freight marketplace connecting carriers with shippers for any cargo size across Europe.',
    technologies: ['React', 'NestJS', 'AWS', 'Docker', 'AI/ML', 'AI Agent'],
    image: '/images/logos/mars.png',
    fullDescription: 'Handled the complete development of M.A.R.S. (Management Application For Route Strategy), an AI-powered digital platform revolutionizing freight transportation across Europe. Working from existing designs, we built the entire system handling everything from small courier packages to full truckloads, featuring automated freight matching through SPOT platform, AI-driven route optimization, and comprehensive fleet management tools. Trucks of all sizes can register, find cargo, bid on freight requests, and manage deliveries through dedicated mobile apps.',
    challenge: 'European logistics companies struggled with fragmented systems for different cargo types, inefficient route planning, and poor fleet utilization. Small shipments were unprofitable due to manual coordination, while carriers had empty return trips, wasting fuel and time.',
    solution: 'Built a unified cloud-based marketplace with AI-powered algorithms that intelligently match shipments with suitable vehicles based on size, route, timing, and pricing. Implemented real-time driver communication, digital proof of delivery, automated invoicing, transparent carrier ratings, and fleet analytics dashboard. Integrated both courier services and freight exchange on one platform, supporting all vehicle types from vans to heavy-duty trucks.',
    results: ['70% faster freight matching', '45% increase in truck utilization', '80% reduction in coordination time', 'Pan-European coverage'],
  },
  {
    title: 'Premium Tiny House Network Platform',
    clientName: 'MyLodge',
    clientLogo: 'https://ja-ic.com/assets/img/Portfolio/MyLODGE_logo_PNG.png',
    description: 'Ultra-modern tiny house booking platform connecting travelers with sustainable nature getaways across Europe.',
    technologies: ['Astro', 'NestJS', 'PostgreSQL', 'Flutter', 'IoT'],
    image: '/images/logos/MYLODGE.jpg',
    fullDescription: 'Designed and developed MyLodge from the ground up, a startup reimagining tourism with ultra-modern and posh tiny house sites across Europe. We handled the complete end-to-end delivery including UI/UX design, platform development, and implementation. The platform connects discerning travelers with beautifully designed tiny house getaways in nature\'s best hideouts while enabling landowners to monetize their property. Features mobile apps for iOS and Android, smart lock integration for contactless check-in, booking management, and a profit-sharing model that supports local communities. Built with a focus on premiumness, sustainability, and digital innovation.',
    challenge: 'Traditional vacation rentals lacked sustainable, design-forward tiny house options while landowners with beautiful natural properties had no easy way to monetize their space. Travelers seeking unique, responsible travel experiences struggled to find premium tiny house accommodations that combined luxury with sustainability.',
    solution: 'Built a comprehensive digital platform and mobile apps that connect travelers with a curated network of premium tiny houses across Europe. Implemented IoT integration for smart locks enabling contactless check-in, created a profit-sharing model for landowners, developed booking and property management tools, and established a brand focused on premiumness and sustainability. Added features for discovering nature hideouts and supporting local communities.',
    results: ['Pan-European tiny house network', 'Sustainable tourism model', 'Profit-sharing with local landowners', 'iOS & Android apps launched'],
  },
  {
    title: 'THG Quota Trading Platform',
    clientName: 'Carbonify',
    clientLogo: 'https://carbonify-prod-tc-asset-uploads.s3-eu-central-1.amazonaws.com/carbonify/carbonify.svg',
    description: 'Digital platform enabling electric vehicle owners to monetize their environmental impact through THG quota trading.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'AWS'],
    image: '/images/logos/carbonify.png',
    fullDescription: 'Collaborated with Carbonify\'s internal team to deliver Germany\'s leading THG (greenhouse gas) quota trading platform that simplifies the process for electric vehicle owners to claim and sell their environmental certificates. We provided development support and technical expertise to help bring their vision to life. The platform features automated document processing, flexible payout options, and real-time quota valuation. Processes over 300,000 THG quotas annually with guaranteed payouts.',
    challenge: 'Electric vehicle owners faced complex bureaucracy and lengthy processes to claim their THG quota premiums. The manual application process deterred many from accessing their rightful environmental incentives, leaving money on the table.',
    solution: 'Built an intuitive web platform with streamlined registration, automated document verification, and instant premium calculations. Implemented multiple payout tiers (Express and Standard), integrated with government databases for verification, and created a transparent tracking system. Added multilingual support and responsive design for mobile access.',
    results: ['300,000+ quotas processed annually', 'Average 5-minute registration time', '98% customer satisfaction rate', 'Market-leading premium rates'],
  },
  {
    title: 'AI-Powered DNA-Based Nutrition & Wellness Platform',
    clientName: 'Spectrum',
    clientLogo: null,
    description: 'An AI-powered app that uses DNA reports and generates personalized meal plans and supplement plans based on your body composition and DNA results reports.',
    technologies: ['Astro', 'Node.js', 'Python', 'AI/ML', 'AI Agent'],
    image: '/images/logos/spectrum.png',
    fullDescription: 'Designed and developed Spectrum from concept to launch, a personalized nutrition and wellness platform that analyzes DNA test results and body composition data to create customized meal plans and supplement recommendations. We handled the complete design and development process, creating an intuitive user experience and robust technical architecture. The platform uses advanced algorithms to interpret genetic markers and translate them into actionable health insights.',
    challenge: 'Traditional nutrition advice is generic and doesn\'t account for individual genetic differences. Users struggle to understand DNA reports and translate them into practical dietary changes.',
    solution: 'Built an intelligent platform that processes DNA reports and body composition data, using AI to generate personalized meal plans and supplement recommendations. Implemented an intuitive interface that explains genetic insights in simple terms and provides actionable nutrition guidance.',
    results: ['Personalized plans based on genetic data', 'Improved user health outcomes', 'Simplified DNA report interpretation', 'Custom supplement recommendations'],
  },
];

// Partner logos
const partners = [
  { name: 'M.A.R.S.', logo: 'https://marsapp.ai/images/logo.png', isComposite: true, isText: false },
  { name: 'MyLodge', logo: 'https://ja-ic.com/assets/img/Portfolio/MyLODGE_logo_PNG.png', isComposite: false, isText: false },
  { name: 'Carbonify', logo: 'https://carbonify-prod-tc-asset-uploads.s3-eu-central-1.amazonaws.com/carbonify/carbonify.svg', isComposite: false, isText: false },
  { name: 'Spectrum', logo: null, isComposite: false, isText: true },
  { name: 'BogoExpress', logo: 'https://www.bogoexpress.ro/logo.svg', isComposite: false, isText: false },
  { name: 'Thinslices', logo: '/images/logos/thinslices-logo.png', isComposite: false, isText: false },
  { name: 'JA-IC', logo: 'https://ja-ic.com/assets/img/jaicalt.png', isComposite: false, isText: false },
  { name: 'M.A.R.S.', logo: 'https://marsapp.ai/images/logo.png', isComposite: true, isText: false },
  { name: 'MyLodge', logo: 'https://ja-ic.com/assets/img/Portfolio/MyLODGE_logo_PNG.png', isComposite: false, isText: false },
  { name: 'Carbonify', logo: 'https://carbonify-prod-tc-asset-uploads.s3-eu-central-1.amazonaws.com/carbonify/carbonify.svg', isComposite: false, isText: false },
  { name: 'Spectrum', logo: null, isComposite: false, isText: true },
  { name: 'BogoExpress', logo: 'https://www.bogoexpress.ro/logo.svg', isComposite: false, isText: false },
  { name: 'Thinslices', logo: '/images/logos/thinslices-logo.png', isComposite: false, isText: false },
  { name: 'JA-IC', logo: 'https://ja-ic.com/assets/img/jaicalt.png', isComposite: false, isText: false },
];

export const OurStoriesSection: FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject !== null) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';

      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [selectedProject]);

  return (
    <>
      <section id={SectionId.OurStories} className="bg-white py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Partners Carousel */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Trusted By</h3>
            <h2 className="text-4xl font-bold text-gray-900">Our Partners</h2>
          </div>

          {/* Infinite Scroll Carousel */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-12">
              {/* Duplicate partners for seamless loop */}
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center justify-center w-40 h-20 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                >
                  {partner.isComposite ? (
                    <div className="flex items-baseline gap-1">
                      <img src={partner.logo!} alt={partner.name} className="h-8 object-contain" />
                      <span className="text-2xl font-bold text-gray-800">.A.R.S.</span>
                    </div>
                  ) : partner.isText ? (
                    <span className="text-2xl font-bold text-black">{partner.name}</span>
                  ) : (
                    <img src={partner.logo!} alt={partner.name} className="max-w-[120px] max-h-[60px] object-contain" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Portfolio Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our recent work and see how we help businesses achieve their digital goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolioProjects.map((project, index) => (
              <div
                key={index}
                onClick={() => setSelectedProject(index)}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                <div className="relative overflow-hidden h-64 bg-gradient-to-br from-blue-100 to-purple-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-semibold">
                      View Details →
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    {project.isComposite ? (
                      <div className="flex items-baseline gap-1">
                        <img src={project.clientLogo!} alt={project.clientName} className="h-8 object-contain" />
                        <span className="text-2xl font-bold text-gray-800">.A.R.S.</span>
                      </div>
                    ) : project.clientLogo ? (
                      <img src={project.clientLogo} alt={project.clientName} className="h-8 object-contain" />
                    ) : (
                      <span className="text-2xl font-bold text-black">{project.clientName}</span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </section>

      {/* Project Modal */}
      {selectedProject !== null && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[10000] flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Project Image */}
            <div className="relative h-[600px] bg-white overflow-hidden flex items-center justify-center p-8">
              <img
                src={portfolioProjects[selectedProject].image}
                alt={portfolioProjects[selectedProject].title}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Project Content */}
            <div className="p-8 md:p-12">
              <div className="mb-6">
                {portfolioProjects[selectedProject].isComposite ? (
                  <div className="flex items-baseline gap-1">
                    <img src={portfolioProjects[selectedProject].clientLogo!} alt={portfolioProjects[selectedProject].clientName} className="h-10 object-contain" />
                    <span className="text-3xl font-bold text-gray-800">.A.R.S.</span>
                  </div>
                ) : portfolioProjects[selectedProject].clientLogo ? (
                  <img src={portfolioProjects[selectedProject].clientLogo} alt={portfolioProjects[selectedProject].clientName} className="h-10 object-contain" />
                ) : (
                  <span className="text-3xl font-bold text-black">{portfolioProjects[selectedProject].clientName}</span>
                )}
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {portfolioProjects[selectedProject].title}
              </h2>

              <div className="flex flex-wrap gap-2 mb-8">
                {portfolioProjects[selectedProject].technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Overview</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {portfolioProjects[selectedProject].fullDescription}
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">The Challenge</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {portfolioProjects[selectedProject].challenge}
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Solution</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {portfolioProjects[selectedProject].solution}
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Results & Impact</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {portfolioProjects[selectedProject].results.map((result, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-green-50 p-4 rounded-xl border border-green-200">
                        <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-800 font-medium">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
};