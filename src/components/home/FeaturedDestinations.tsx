import { AnimatedSection } from './AnimatedSection';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const destinations = [
  {
    id: 'kandy',
    image: 'https://images.unsplash.com/photo-1625467096769-fdd3ffac8c6e?q=80&w=1920&auto=format&fit=crop'
  },
  {
    id: 'yala',
    image: 'https://images.unsplash.com/photo-1562698013-ac13558052cd?q=80&w=1920&auto=format&fit=crop'
  },
  {
    id: 'galle',
    image: 'https://images.unsplash.com/photo-1586611292717-f828b167408c?q=80&w=1920&auto=format&fit=crop'
  }
];

export const FeaturedDestinations = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('home.featured.title')}</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <motion.div 
                className="rounded-lg overflow-hidden shadow-lg"
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
            <img 
              src={destination.image}
              alt={t(`home.featured.${destination.id}.title`)}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{t(`home.featured.${destination.id}.title`)}</h3>
              <p className="text-gray-600">{t(`home.featured.${destination.id}.description`)}</p>
            </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};