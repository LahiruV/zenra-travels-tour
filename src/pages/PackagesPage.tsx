import { useState } from 'react';
import { PackageCard } from '../components/packages/PackageCard';
import { PackageFilters } from '../components/packages/PackageFilters';
import { PageTransition } from '../components/PageTransition';

interface Package {
  title: string;
  description: string;
  image: string;
  price: number;
  duration: string;
  groupSize: string;
  startDate: string;
}

export const PackagesPage = () => {
  const [duration, setDuration] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const allPackages = [
    {
      id: '1',
      title: "Cultural Heritage Tour",
      description: "Explore ancient temples, historical sites, and traditional villages.",
      image: "https://images.unsplash.com/photo-1625467096769-fdd3ffac8c6e?q=80&w=800&auto=format&fit=crop",
      price: 1299,
      duration: "6 Days",
      groupSize: "Max 12 people",
      startDate: "Available year-round"
    },
    {
      id: '2',
      title: "Beach Paradise Escape",
      description: "Relax on pristine beaches and enjoy water sports activities.",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800&auto=format&fit=crop",
      price: 999,
      duration: "5 Days",
      groupSize: "Max 10 people",
      startDate: "Available year-round"
    },
    {
      id: '3',
      title: "Wildlife Safari Adventure",
      description: "Encounter elephants, leopards, and exotic birds in their natural habitat.",
      image: "https://images.unsplash.com/photo-1562698013-ac13558052cd?q=80&w=800&auto=format&fit=crop",
      price: 1499,
      duration: "7 Days",
      groupSize: "Max 8 people",
      startDate: "Available year-round"
    }
  ];

  const filterPackages = (packages: Package[]) => {
    return packages.filter(pkg => {
      // Filter by duration
      if (duration !== 'all') {
        const days = parseInt(pkg.duration);
        switch (duration) {
          case '1-3':
            if (days > 3) return false;
            break;
          case '4-7':
            if (days < 4 || days > 7) return false;
            break;
          case '8+':
            if (days < 8) return false;
            break;
        }
      }

      // Filter by price range
      if (priceRange !== 'all') {
        const [min, max] = priceRange.split('-').map(Number);
        if (max) {
          if (pkg.price < min || pkg.price > max) return false;
        } else if (pkg.price < min) return false;
      }

      return true;
    });
  };

  const filteredPackages = filterPackages(allPackages);

  return (
    <PageTransition>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Explore Our Packages</h1>
        <p className="text-xl text-gray-600">
          Discover our carefully curated travel packages for an unforgettable Sri Lankan experience
        </p>
      </div>

      <PackageFilters
        duration={duration}
        setDuration={setDuration}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPackages.map((pkg, index) => (
          <PackageCard key={index} {...pkg} />
        ))}
      </div>
      </main>
    </PageTransition>
  );
};