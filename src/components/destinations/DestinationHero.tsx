import { useTranslation } from 'react-i18next';
import { TextField } from '@zenra/widgets';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface DestinationHeroProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export const DestinationHero = ({ searchQuery, onSearchChange }: DestinationHeroProps) => {
  const { t } = useTranslation();

  return (
    <div 
      className="relative h-[400px] bg-cover bg-center"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=1920&auto=format&fit=crop")',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">{t('destinations.title')}</h1>
        <p className="text-xl text-center max-w-2xl mb-8">{t('destinations.subtitle')}</p>
        <div className="w-full max-w-md">
          <TextField
            label=""
            placeholder={t('destinations.searchPlaceholder')}
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            startIcon={<MagnifyingGlassIcon className="h-5 w-5" />}
          />
        </div>
      </div>
    </div>
  );
};