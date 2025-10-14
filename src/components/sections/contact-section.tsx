import { type FC, useState, FormEvent } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon, LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import emailjs from '@emailjs/browser';
import { SectionId } from '../../types/section-id';

// Custom marker icons
const createCustomIcon = (color: string) => new Icon({
  iconUrl: `data:image/svg+xml;base64,${btoa(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${color}" width="32" height="32">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
  `)}`,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
});

const londonIcon = createCustomIcon('#2563eb'); // blue-600
const timisoaraIcon = createCustomIcon('#2563eb'); // blue-600

// Coordinates
const londonCoords: LatLngTuple = [51.5074, -0.1278];
const timisoaraCoords: LatLngTuple = [45.7494, 21.2290];
const center: LatLngTuple = [48.5, 10.5]; // Centered between the two cities

export const ContactSection: FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    projectType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showStatusMessage, setShowStatusMessage] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration - replace these with your actual values from emailjs.com
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        company: formData.company,
        project_type: formData.projectType,
        message: formData.message,
        to_name: 'Your Company', // You can customize this
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus('success');
      setShowStatusMessage(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        projectType: '',
        message: ''
      });

      // Hide success message after 3 seconds
      setTimeout(() => {
        setShowStatusMessage(false);
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      setShowStatusMessage(true);

      // Hide error message after 5 seconds
      setTimeout(() => {
        setShowStatusMessage(false);
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id={SectionId.Contact} className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-4">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-2xl">
              <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to bring your vision to life? Drop us a message and let's start building something extraordinary.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-xl shadow-blue-100/50 border border-blue-100/20">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 bg-gray-50 border-0 rounded-xl text-gray-900 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-gray-50 border-0 rounded-xl text-gray-900 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-4 bg-gray-50 border-0 rounded-xl text-gray-900 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all"
              />

              <input
                type="text"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-4 py-4 bg-gray-50 border-0 rounded-xl text-gray-900 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all"
              />

              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleInputChange}
                className="w-full px-4 py-4 bg-gray-50 border-0 rounded-xl text-gray-900 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all"
              >
                <option value="">Project Type</option>
                <option value="web">Web Development</option>
                <option value="mobile">Mobile App Development</option>
                <option value="cloud">Cloud Solutions</option>
                <option value="ai">AI & Machine Learning</option>
                <option value="api">API Development</option>
                <option value="devops">DevOps & Security</option>
                <option value="other">Other</option>
              </select>

              <textarea
                name="message"
                rows={4}
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-4 bg-gray-50 border-0 rounded-xl text-gray-900 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all resize-none"
              ></textarea>

              {/* Status Messages */}
              {showStatusMessage && submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-xl flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}
              {showStatusMessage && submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-xl flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Failed to send message. Please try again or email us directly.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || submitStatus === 'success'}
                className={`w-full px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-lg disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 ${
                  submitStatus === 'success'
                    ? 'bg-green-500 text-white'
                    : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white hover:scale-[1.02] shadow-blue-600/25'
                } ${isSubmitting ? 'opacity-50' : ''}`}
              >
                {submitStatus === 'success' ? (
                  <>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Sent!
                  </>
                ) : isSubmitting ? (
                  'Sending...'
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>

          {/* Map and Contact Info */}
          <div className="space-y-5">
            {/* Interactive Map */}
            <div className="bg-gray-100 rounded-3xl overflow-hidden shadow-lg border border-gray-200" style={{ height: '275px' }}>
              <MapContainer
                center={center}
                zoom={4}
                className="w-full h-full"
                zoomControl={false}
                attributionControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
                touchZoom={false}
                dragging={false}
              >
                <TileLayer
                  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                  className="grayscale"
                />

                <Marker position={londonCoords} icon={londonIcon}>
                  <Popup>
                    <div className="text-center p-2">
                      <h3 className="font-semibold text-gray-900">London Office</h3>
                      <p className="text-sm text-gray-600">123 Tech Street, London EC1A 1BB</p>
                    </div>
                  </Popup>
                </Marker>

                <Marker position={timisoaraCoords} icon={timisoaraIcon}>
                  <Popup>
                    <div className="text-center p-2">
                      <h3 className="font-semibold text-gray-900">Timișoara Office</h3>
                      <p className="text-sm text-gray-600">Strada Titus Andronic 1, Timișoara 300254</p>
                    </div>
                  </Popup>
                </Marker>
              </MapContainer>
            </div>

            {/* Contact Cards */}
            <div className="grid gap-5">
              {/* Email Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">Email Us</h4>
                    <p className="text-blue-600 hover:text-blue-700 transition-colors cursor-pointer">office@ringaro-software.com</p>
                  </div>
                </div>
              </div>

              {/* Offices Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 text-lg mb-3">Our Offices</h4>
                    <div className="space-y-2">
                      <p className="font-medium text-gray-800">🇬🇧 London, UK</p>
                      <p className="font-medium text-gray-800">🇷🇴 Timișoara, Romania</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};