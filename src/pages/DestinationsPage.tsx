import { useState } from 'react';
import { TextField } from '../widgets';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { PageTransition } from '../components/PageTransition';

const destinations = [
  {
    id: 1,
    name: "Sigiriya",
    region: "Cultural Triangle",
    description: "Ancient palace and fortress complex, known as the 'Lion Rock', featuring stunning frescoes and landscaped gardens.",
    image: "https://images.unsplash.com/photo-1612862862126-865765df2ded?q=80&w=3174&auto=format&fit=crop",
    highlights: [
      "UNESCO World Heritage Site",
      "5th Century Palace Ruins",
      "Ancient Frescoes",
      "Mirror Wall",
      "Lion Gate",
      "Water Gardens"
    ],
    bestTime: "January to March",
    activities: [
      "Rock Climbing",
      "Archaeological Tours",
      "Photography",
      "Bird Watching"
    ]
  },
  {
    id: 2,
    name: "Kandy",
    region: "Central Province",
    description: "The last royal capital of Sri Lanka, home to the Temple of the Tooth Relic and surrounded by misty hills.",
    image: "https://images.unsplash.com/photo-1562698013-ac13558052cd?w=900&auto=format&fit=crop",
    highlights: [
      "Temple of the Tooth",
      "Kandy Lake",
      "Royal Botanical Gardens",
      "Cultural Shows",
      "Traditional Markets"
    ],
    bestTime: "December to April",
    activities: [
      "Cultural Tours",
      "Temple Visits",
      "Tea Factory Tours",
      "Nature Walks"
    ]
  },
  {
    id: 3,
    name: "Unawatuna",
    region: "Southern Province",
    description: "A picturesque beach destination known for its coral reefs, sea turtles, and laid-back atmosphere.",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800&auto=format&fit=crop",
    highlights: [
      "Golden Sandy Beach",
      "Coral Reefs",
      "Japanese Peace Pagoda",
      "Beach Restaurants",
      "Jungle Beach"
    ],
    bestTime: "November to April",
    activities: [
      "Snorkeling",
      "Scuba Diving",
      "Beach Relaxation",
      "Surfing",
      "Yoga"
    ]
  },
  {
    id: 4,
    name: "Ella",
    region: "Uva Province",
    description: "A scenic mountain village famous for its tea plantations, hiking trails, and breathtaking views.",
    image: "https://images.unsplash.com/photo-1586033921061-25b5f082f3e1?q=80&w=2000&auto=format&fit=crop",
    highlights: [
      "Nine Arch Bridge",
      "Ella Rock",
      "Little Adam's Peak",
      "Tea Plantations",
      "Ravana Falls"
    ],
    bestTime: "January to March",
    activities: [
      "Hiking",
      "Tea Plantation Tours",
      "Train Journeys",
      "Photography",
      "Waterfall Visits"
    ]
  }
];

export const DestinationsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDestinations = destinations.filter(destination =>
    destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    destination.region.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=1920&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Discover Sri Lanka's Most Beautiful Places
          </h1>
          <p className="text-xl text-center max-w-2xl mb-8">
            From ancient cities to pristine beaches, explore the diverse destinations of this tropical paradise
          </p>
          <div className="w-full max-w-md">
            <TextField
              label=""
              placeholder="Search destinations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              startIcon={<MagnifyingGlassIcon className="h-5 w-5" />}
            />
          </div>
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredDestinations.map((destination) => (
            <div key={destination.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{destination.name}</h2>
                    <p className="text-blue-600">{destination.region}</p>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    {destination.bestTime}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-6">{destination.description}</p>
                
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Highlights</h3>
                  <div className="flex flex-wrap gap-2">
                    {destination.highlights.map((highlight, index) => (
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
                    {destination.activities.map((activity, index) => (
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
          ))}
        </div>
      </div>
      </div>
    </PageTransition>
  );
};