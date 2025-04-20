import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const CallToAction = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <motion.section 
      className="py-16 bg-blue-600"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">{t('home.cta.title')}</h2>
        <p className="text-xl text-white mb-8">{t('home.cta.subtitle')}</p>
        <motion.button 
          onClick={() => navigate('/packages')}
          className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t('home.cta.button')}
        </motion.button>
      </div>
    </motion.section>
  );
};