import { AnimatedSection } from './AnimatedSection';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const Experiences = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('home.experiences.title')}</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[...Array(4)].map((_, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">{t('home.experiences.cultural.title')}</h3>
                  <p className="text-gray-600">{t('home.experiences.cultural.description')}</p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};