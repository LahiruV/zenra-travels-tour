import { PageTransition, ContactForm, ContactInfo, TravelFeatures } from '@zenra/components';
import { useTranslation } from 'react-i18next';

export const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div 
            className="relative h-[300px] rounded-xl overflow-hidden mb-16 bg-cover bg-center"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=2070&auto=format&fit=crop")'
            }}
          >
            <div className="absolute inset-0 bg-blue-900 bg-opacity-40" />
            <div className="relative h-full flex items-center justify-center text-center z-10 px-4">
              <div>
                <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
                <p className="text-xl text-white max-w-2xl">
                  Let us help you plan your perfect Sri Lankan adventure
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <p className="text-xl text-gray-600">
              Whether you're dreaming of pristine beaches, ancient temples, or wildlife safaris,
              our travel experts are here to help create your perfect journey
            </p>
          </div>

          <TravelFeatures />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </div>
    </PageTransition>
  );
};