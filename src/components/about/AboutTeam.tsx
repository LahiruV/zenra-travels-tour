import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const teamMembers = [
  {
    key: 'sarah',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop',
  },
  {
    key: 'michael',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
  },
  {
    key: 'emily',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop',
  },
  {
    key: 'david',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
  },
  {
    key: 'sophia',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
  }
];

export const AboutTeam = () => {
  const { t } = useTranslation();

  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('about.team.title')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.key}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <img
              src={member.image}
              alt={t(`about.team.members.${member.key}.name`)}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {t(`about.team.members.${member.key}.name`)}
              </h3>
              <p className="text-blue-600 mb-3 text-sm">
                {t(`about.team.members.${member.key}.role`)}
              </p>
              <p className="text-gray-600">
                {t(`about.team.members.${member.key}.description`)}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};