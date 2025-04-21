import { useTranslation } from 'react-i18next';

interface DestinationCardProps {
  id: string;
  image: string;
}

export const DestinationCard = ({ id, image }: DestinationCardProps) => {
  const { t } = useTranslation();
  const location = `destinations.locations.${id}`;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <img
        src={image}
        alt={t(`${location}.name`)}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{t(`${location}.name`)}</h2>
            <p className="text-blue-600">{t(`${location}.region`)}</p>
          </div>
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
            {t(`${location}.bestTime`)}
          </span>
        </div>
        
        <p className="text-gray-600 mb-6">{t(`${location}.description`)}</p>
        
        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 mb-2">Highlights</h3>
          <div className="flex flex-wrap gap-2">
            {t(`${location}.highlights`, { returnObjects: true }).map((highlight: string, index: number) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Activities</h3>
          <div className="flex flex-wrap gap-2">
            {t(`${location}.activities`, { returnObjects: true }).map((activity: string, index: number) => (
              <span
                key={index}
                className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full"
              >
                {activity}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};