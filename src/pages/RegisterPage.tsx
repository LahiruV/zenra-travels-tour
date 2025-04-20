import { AuthCard, RegisterForm } from '@zenra/components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const RegisterPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex">
      {/* Left side - Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <img
          src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2000&auto=format&fit=crop"
          alt="Sri Lanka Beach"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900 bg-opacity-30" />
        <motion.div 
          className="absolute bottom-0 left-0 right-0 p-8 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-2">{t('auth.register.imageTitle')}</h2>
          <p className="text-lg">{t('auth.register.imageSubtitle')}</p>
        </motion.div>
      </div>

      {/* Right side - Register Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">{t('auth.register.title')}</h2>
            <p className="mt-2 text-gray-600">
              {t('auth.register.haveAccount')}{' '}
              <Link to="/login" className="text-blue-600 hover:text-blue-500 font-medium">
                {t('auth.register.signIn')}
              </Link>
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <RegisterForm />
          </div>
        </motion.div>
      </div>
    </div>
  );
};