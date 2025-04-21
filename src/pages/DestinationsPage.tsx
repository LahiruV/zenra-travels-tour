import { useState } from 'react';
import { PageTransition } from '../components/PageTransition';
import { DestinationHero, DestinationGrid } from '@zenra/components';
import { useTranslation } from 'react-i18next';

const destinationIds = [
  {
    id: 'sigiriya',
    image: "https://images.unsplash.com/photo-1612862862126-865765df2ded?q=80&w=3174&auto=format&fit=crop",
  },
  {
    id: 'kandy',
    image: "https://images.unsplash.com/photo-1562698013-ac13558052cd?w=900&auto=format&fit=crop",
  },
  {
    id: 'unawatuna',
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 'ella',
    image: "https://images.unsplash.com/photo-1586033921061-25b5f082f3e1?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 'weligama',
    image: "https://images.unsplash.com/photo-1586861203927-800a5acdcc4d?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 'anuradhapura',
    image: "https://images.unsplash.com/photo-1625467096769-fdd3ffac8c6e?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 'galle',
    image: "https://images.unsplash.com/photo-1586598198321-9735fd52455b?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 'arugambay',
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 'colombo',
    image: "https://images.unsplash.com/photo-1590677197180-1c1bac219562?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 'negombo',
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2000&auto=format&fit=crop",
  }
];

export const DestinationsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { t } = useTranslation();

  const filteredDestinations = destinationIds.filter(destination =>
    t(`destinations.locations.${destination.id}.name`).toLowerCase().includes(searchQuery.toLowerCase()) ||
    t(`destinations.locations.${destination.id}.region`).toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50">
        <DestinationHero
          searchQuery={searchQuery}
          onSearchChange={(value) => setSearchQuery(value)}
        />
        <DestinationGrid destinations={filteredDestinations} />
      </div>
    </PageTransition>
  );
};