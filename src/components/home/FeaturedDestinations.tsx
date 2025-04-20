import { AnimatedSection } from './AnimatedSection';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const FeaturedDestinations = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('home.featured.title')}</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[...Array(3)].map((_, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <motion.div 
                className="rounded-lg overflow-hidden shadow-lg"
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
            <img 
              src="https://images.unsplash.com/photo-1612862862126-865765df2ded?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Sigiriya Rock Fortress" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{t('home.featured.sigiriya.title')}</h3>
              <p className="text-gray-600">{t('home.featured.sigiriya.description')}</p>
            </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};