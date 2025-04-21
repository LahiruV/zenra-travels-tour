import { LoginForm } from '@zenra/components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Snackbar } from '@zenra/widgets';
import { LoginCredentials } from '@zenra/models';
import { useLogin } from '@zenra/services';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export const LoginPage = () => {
  const { t } = useTranslation();
  const { loginMutate } = useLogin();
  const [notification, setNotification] = useState({
    open: false,
    message: '',
    type: 'success' as const
  });

  const handleCloseNotification = () => {
    setNotification(prev => ({ ...prev, open: false }));
  };

  const handleLogin = async (email: string, password: string) => {
    const payload: LoginCredentials = {
      email,
      password
    };

    loginMutate(payload, {
      onSuccess: (response) => {
        setNotification({
          open: true,
          message: 'Login successful! Welcome back.',
          type: 'success'
        });
        console.log('Login successful:', response);
      },
      onError: (error) => {
        setNotification({
          open: true,
          message: 'Login failed. Please check your credentials.',
          type: 'error'
        });
        console.error('Login error:', error);
      },
    });
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <img
          src="https://images.unsplash.com/photo-1588598198321-9735fd52455b?q=80&w=2070&auto=format&fit=crop"
          alt="Sri Lanka Temple"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900 bg-opacity-30" />
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-8 text-white"
        // initial={{ opacity: 0, y: 20 }}
        // animate={{ opacity: 1, y: 0 }}
        // transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-2">{t('auth.login.imageTitle')}</h2>
          <p className="text-lg">{t('auth.login.imageSubtitle')}</p>
        </motion.div>
      </div>

      {/* Right side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <motion.div
          className="w-full max-w-md"
        // initial={{ opacity: 0, x: 20 }}
        // animate={{ opacity: 1, x: 0 }}
        // transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-8">
            <Link
              to="/"
              className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors mb-4"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              <span>{t('common.backToHome')}</span>
            </Link>
            <h2 className="text-3xl font-bold text-gray-900">{t('auth.login.title')}</h2>
            <p className="mt-2 text-gray-600">
              {t('auth.login.noAccount')}{' '}
              <Link to="/register" className="text-blue-600 hover:text-blue-500 font-medium">
                {t('auth.login.signUp')}
              </Link>
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <LoginForm onSubmit={handleLogin} />
          </div>
        </motion.div>
      </div>
      <Snackbar
        open={notification.open}
        message={notification.message}
        type={notification.type}
        onClose={handleCloseNotification}
      />
    </div>
  );
};