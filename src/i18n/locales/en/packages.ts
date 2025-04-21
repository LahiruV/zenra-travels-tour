export const packages = {
  title: 'Explore Our Packages',
  subtitle: 'Discover our carefully curated travel packages for an unforgettable Sri Lankan experience',
  items: {
    culturalHeritage: {
      title: "Cultural Heritage Tour",
      description: "Explore ancient temples, historical sites, and traditional villages.",
      image: "https://images.unsplash.com/photo-1625467096769-fdd3ffac8c6e?q=80&w=800&auto=format&fit=crop",
      price: 1299,
      duration: "6 Days",
      groupSize: "Max 12 people",
      startDate: "Available year-round"
    },
    beachParadise: {
      title: "Beach Paradise Escape",
      description: "Relax on pristine beaches and enjoy water sports activities.",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800&auto=format&fit=crop",
      price: 999,
      duration: "5 Days",
      groupSize: "Max 10 people",
      startDate: "Available year-round"
    },
    wildlifeSafari: {
      title: "Wildlife Safari Adventure",
      description: "Encounter elephants, leopards, and exotic birds in their natural habitat.",
      image: "https://images.unsplash.com/photo-1562698013-ac13558052cd?q=80&w=800&auto=format&fit=crop",
      price: 1499,
      duration: "7 Days",
      groupSize: "Max 8 people",
      startDate: "Available year-round"
    }
  },
  filters: {
    duration: {
      label: 'Duration',
      all: 'All Durations',
      short: '1-3 Days',
      medium: '4-7 Days',
      long: '8+ Days'
    },
    price: {
      label: 'Price Range',
      all: 'All Prices',
      budget: '$0 - $1,000',
      standard: '$1,000 - $2,000',
      luxury: '$2,000+'
    }
  },
  booking: {
    title: 'Book Your Trip',
    form: {
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
      phone: 'Phone',
      travelDate: 'Travel Date',
      adults: 'Number of Adults',
      children: 'Number of Children',
      services: {
        title: 'Additional Services',
        meals: 'Include Meals',
        transport: 'Include Transport',
        accommodation: 'Include Accommodation'
      },
      specialRequests: {
        label: 'Special Requests',
        placeholder: 'Optional: Any dietary requirements or special accommodations'
      },
      submit: 'Book Now',
      perPerson: '/person'
    }
  }
};