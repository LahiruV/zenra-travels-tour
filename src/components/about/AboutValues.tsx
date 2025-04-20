import { motion } from 'framer-motion';
import { ShieldCheckIcon, GlobeAsiaAustraliaIcon, UserGroupIcon, SparklesIcon } from '@heroicons/react/24/outline';

const values = [
  {
    icon: ShieldCheckIcon,
    title: 'Trust & Reliability',
    description: 'We maintain the highest standards of service and transparency in all our operations.'
  },
  {
    icon: GlobeAsiaAustraliaIcon,
    title: 'Sustainable Tourism',
    description: 'Committed to eco-friendly practices and supporting local communities.'
  },
  {
    icon: UserGroupIcon,
    title: 'Personal Touch',
    description: 'Every journey is tailored to your preferences and travel style.'
  },
  {
    icon: SparklesIcon,
    title: 'Excellence',
    description: 'Continuously striving to exceed expectations in service quality.'
  }
];

export const AboutValues = () => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, index) => (
          <motion.div
            key={value.title}
            className="bg-white rounded-lg shadow-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <value.icon className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
            <p className="text-gray-600">{value.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};