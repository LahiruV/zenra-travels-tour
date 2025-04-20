import { motion } from 'framer-motion';

const stats = [
  { label: 'Years of Experience', value: '15+' },
  { label: 'Happy Travelers', value: '50K+' },
  { label: 'Destinations', value: '100+' },
  { label: 'Local Guides', value: '50+' },
];

export const AboutStats = () => {
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
          <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
          <div className="text-sm text-gray-600">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
};