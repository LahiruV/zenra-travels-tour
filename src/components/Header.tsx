import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY_NAME } from '@zenra/constants';
import { useTranslation } from 'react-i18next';
import { LanguageSelector } from './LanguageSelector';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm relative">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
        <div className="absolute left-4 sm:left-6 lg:left-8">
          <Link to="/" className="text-2xl font-bold text-primary">{COMPANY_NAME}</Link>
        </div>
        
        <div className="hidden md:flex space-x-8 mx-auto">
          <Link 
            to="/destinations" 
            className={`${isActive('/destinations') ? 'text-primary font-medium' : 'text-text/60'} hover:text-primary transition-colors`}
          >
            {t('nav.destinations')}
          </Link>
          <Link 
            to="/packages" 
            className={`${isActive('/packages') ? 'text-primary font-medium' : 'text-text/60'} hover:text-primary transition-colors`}
          >
            {t('nav.packages')}
          </Link>
          <Link 
            to="/about" 
            className={`${isActive('/about') ? 'text-primary font-medium' : 'text-text/60'} hover:text-primary transition-colors`}
          >
            {t('nav.about')}
          </Link>
          <Link 
            to="/contact" 
            className={`${isActive('/contact') ? 'text-primary font-medium' : 'text-text/60'} hover:text-primary transition-colors`}
          >
            {t('nav.contact')}
          </Link>
        </div>
        
        <div className="absolute right-4 sm:right-6 lg:right-8 flex items-center space-x-4">
          <LanguageSelector />
          <Link 
            to="/login" 
            className={`${isActive('/login') ? 'text-primary font-medium' : 'text-text/60'} hover:text-primary transition-colors`}
          >
            {t('nav.login')}
          </Link>
        </div>

        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              to="/destinations" 
              className={`block px-3 py-2 ${isActive('/destinations') ? 'text-primary font-medium' : 'text-text/60'} hover:text-primary transition-colors`}
            >
              {t('nav.destinations')}
            </Link>
            <Link 
              to="/packages" 
              className={`block px-3 py-2 ${isActive('/packages') ? 'text-primary font-medium' : 'text-text/60'} hover:text-primary transition-colors`}
            >
              {t('nav.packages')}
            </Link>
            <Link 
              to="/about" 
              className={`block px-3 py-2 ${isActive('/about') ? 'text-primary font-medium' : 'text-text/60'} hover:text-primary transition-colors`}
            >
              {t('nav.about')}
            </Link>
            <Link 
              to="/contact" 
              className={`block px-3 py-2 ${isActive('/contact') ? 'text-primary font-medium' : 'text-text/60'} hover:text-primary transition-colors`}
            >
              {t('nav.contact')}
            </Link>
            <Link 
              to="/login" 
              className={`block px-3 py-2 ${isActive('/login') ? 'text-primary font-medium' : 'text-text/60'} hover:text-primary transition-colors`}
            >
              {t('nav.login')}
            </Link>
            <div className="px-3 py-2"><LanguageSelector /></div>
          </div>
        </div>
      )}
    </header>
  );
};