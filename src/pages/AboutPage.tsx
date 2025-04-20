import { PageTransition } from '../components/PageTransition';

export const AboutPage = () => {
  return (
    <PageTransition>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About TravelWorld</h1>
          <p className="text-xl text-gray-600">Your trusted partner in creating unforgettable travel experiences</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2010, TravelWorld has been helping travelers discover the world's most beautiful destinations. 
              Our passion for travel and dedication to customer satisfaction has made us a leading name in the travel industry.
            </p>
            <p className="text-gray-600">
              We believe that travel has the power to transform lives, broaden perspectives, and create lasting memories. 
              That's why we're committed to providing exceptional travel experiences for all our clients.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              To inspire and enable people to explore the world, experience different cultures, and create unforgettable memories 
              through carefully curated travel experiences.
            </p>
            <p className="text-gray-600">
              We strive to make travel accessible, sustainable, and enriching for everyone while maintaining the highest 
              standards of service and professionalism.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Guidance</h3>
              <p className="text-gray-600">Professional travel experts with years of experience and local knowledge</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Service</h3>
              <p className="text-gray-600">Customized travel packages tailored to your preferences and needs</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Best Value</h3>
              <p className="text-gray-600">Competitive prices without compromising on quality and experience</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Start Your Journey Today</h2>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
            Contact Us
          </button>
        </div>
      </main>
    </PageTransition>
  );
};