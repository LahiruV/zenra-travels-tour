import { AnimatedSection } from './AnimatedSection';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const destinations = [
  {
    id: 'kandy',
    image: 'https://images.pexels.com/photos/14041994/pexels-photo-14041994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'yala',
    image: 'https://images.pexels.com/photos/4769072/pexels-photo-4769072.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'galle',
    image: 'https://images.pexels.com/photos/27669335/pexels-photo-27669335/free-photo-of-the-old-town-of-santa-fe-with-a-tower-and-a-path.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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