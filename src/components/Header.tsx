import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { COMPANY_NAME } from '@zenra/constants';
import { useTranslation } from 'react-i18next';
import { LanguageSelector } from './LanguageSelector';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <header className="bg-white shadow-sm relative">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
        <div className="absolute left-4 sm:left-6 lg:left-8">
          <Link to="/" className="text-2xl font-bold text-blue-600">{COMPANY_NAME}</Link>
        </div>
        
        <div className="hidden md:flex space-x-8 mx-auto">
          <Link to="/destinations" className="text-gray-600 hover:text-blue-600">{t('nav.destinations')}</Link>
          <Link to="/packages" className="text-gray-600 hover:text-blue-600">{t('nav.packages')}</Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-600">{t('nav.about')}</Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-600">{t('nav.contact')}</Link>
        </div>
        
        <div className="absolute right-4 sm:right-6 lg:right-8 flex items-center space-x-4">
          <LanguageSelector />
          <Link to="/login" className="text-gray-600 hover:text-blue-600">{t('nav.login')}</Link>
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
            <Link to="/destinations" className="block px-3 py-2 text-gray-600 hover:text-blue-600">{t('nav.destinations')}</Link>
            <Link to="/packages" className="block px-3 py-2 text-gray-600 hover:text-blue-600">{t('nav.packages')}</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-600 hover:text-blue-600">{t('nav.about')}</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-600 hover:text-blue-600">{t('nav.contact')}</Link>
            <Link to="/login" className="block px-3 py-2 text-gray-600 hover:text-blue-600">{t('nav.login')}</Link>
            <div className="px-3 py-2"><LanguageSelector /></div>
          </div>
        </div>
      )}
    </header>
  );
};