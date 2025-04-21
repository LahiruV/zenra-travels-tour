import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const AboutStats = () => {
  const { t } = useTranslation();
  
  const stats = [
    { 
      value: t('about.stats.experience.value'),
      label: t('about.stats.experience.label')
    },
    { 
      value: t('about.stats.travelers.value'),
      label: t('about.stats.travelers.label')
    },
    { 
      value: t('about.stats.destinations.value'),
      label: t('about.stats.destinations.label')
    },
    { 
      value: t('about.stats.guides.value'),
      label: t('about.stats.guides.label')
    }
  ];

  return (
    <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6 -mt-16 mb-16">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="bg-white rounded-lg shadow-lg p-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
          <div className="text-sm text-text/60">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
};