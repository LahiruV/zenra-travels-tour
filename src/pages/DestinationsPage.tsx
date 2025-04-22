import { useState } from 'react';
import { PageTransition } from '../components/PageTransition';
import { DestinationHero, DestinationGrid } from '@zenra/components';
import { useTranslation } from 'react-i18next';

const destinationIds = [
  {
    id: 'mirissa',
    image: "https://www.eatsandretreats.com/travel/wp-content/uploads/2019/01/shutterstock_128911427.jpg",
  },
  {
    id: 'sigiriya',
    image: "https://images.unsplash.com/photo-1612862862126-865765df2ded?q=80&w=3174&auto=format&fit=crop",
  },
  {
    id: 'ella',
    image: "https://images.pexels.com/photos/2403209/pexels-photo-2403209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 'kandy',
    image: "https://images.unsplash.com/photo-1562698013-ac13558052cd?w=900&auto=format&fit=crop",
  },
  {
    id: 'jaffna',
    image: "https://images.unsplash.com/photo-1658658160464-b018548d6648?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 'nilaweli',
    image: "https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 'anuradhapura',
    image: "https://images.unsplash.com/photo-1653151106733-eadfaf201962?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 'unawatuna',
    image: "https://plus.unsplash.com/premium_photo-1669748157617-a3a83cc8ea23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 'yala',
    image: "https://images.unsplash.com/photo-1619183318129-cd95bc882275?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 'polonnaruwa',
    image: "https://images.unsplash.com/photo-1709729508706-87741ec2d50a?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    id: 'weligama',
    image: "https://images.unsplash.com/photo-1520242279429-1f64b18816ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 'nuwaraeliya',
    image: "https://images.unsplash.com/photo-1586193804147-64d5c02ef9c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 'rekawa',
    image: "https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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