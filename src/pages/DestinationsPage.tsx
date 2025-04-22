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
    id: 'jaffna',
    image: "https://images.pexels.com/photos/18711586/pexels-photo-18711586/free-photo-of-nallur-kandaswamy-temple-jaffna-sri-lanka.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 'nilaweli',
    image: "https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 'polonnaruwa',
    image: "https://images.pexels.com/photos/5273514/pexels-photo-5273514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 'yala',
    image: "https://images.pexels.com/photos/4969233/pexels-photo-4969233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 'rekawa',
    image: "https://images.pexels.com/photos/1618606/pexels-photo-1618606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 'mirissa',
    image: "https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 'nuwaraeliya',
    image: "https://images.pexels.com/photos/2187971/pexels-photo-2187971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 'kandy',
    image: "https://images.unsplash.com/photo-1562698013-ac13558052cd?w=900&auto=format&fit=crop",
  },
  {
    id: 'unawatuna',
    image: "https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 'ella',
    image: "https://images.pexels.com/photos/2403209/pexels-photo-2403209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 'weligama',
    image: "https://images.unsplash.com/photo-1520242279429-1f64b18816ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 'anuradhapura',
    image: "https://images.unsplash.com/photo-1659244352464-75e539618056?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 'galle',
    image: "https://images.pexels.com/photos/27669343/pexels-photo-27669343/free-photo-of-a-building-with-arched-windows-and-arched-columns.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 'arugambay',
    image: "https://images.pexels.com/photos/1654489/pexels-photo-1654489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 'colombo',
    image: "https://images.unsplash.com/photo-1565135382393-c100c8b0a129?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 'negombo',
    image: "https://images.unsplash.com/photo-1561150018-8bb356679537?q=80&w=2044&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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