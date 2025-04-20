import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/packages');
  };

  return (
    <div 
      className="relative h-[600px] bg-cover bg-center" 
      style={{ 
        backgroundImage: 'url("https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=1920&auto=format&fit=crop")',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="text-white max-w-2xl">
          <motion.h1 
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t('home.hero.title')}
          </motion.h1>
          <motion.p 
            className="text-xl mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {t('home.hero.subtitle')}
          </motion.p>
          <motion.button 
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleExploreClick}
          >
            {t('home.hero.exploreButton')}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};