import { motion } from 'framer-motion';
import { COMPANY_NAME } from '@zenra/constants';

export const AboutStory = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
        <div className="prose prose-lg">
          <p>
            Founded in 2010, {COMPANY_NAME} emerged from a simple yet powerful vision: to showcase 
            the breathtaking beauty and rich cultural heritage of Sri Lanka to the world. What began 
            as a small team of passionate travel enthusiasts has grown into a leading travel company, 
            trusted by thousands of travelers from across the globe.
          </p>
          <p>
            Our journey has been marked by countless memorable experiences, satisfied customers, and 
            strong partnerships with local communities. We've grown not just in size, but in our 
            understanding of what makes a journey truly special.
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
        <div className="prose prose-lg">
          <p>
            Our mission is to create transformative travel experiences that inspire, educate, and 
            connect people with the heart and soul of Sri Lanka. We believe that travel has the power 
            to broaden perspectives, foster cultural understanding, and create lasting positive impact.
          </p>
          <p>
            We are committed to sustainable tourism practices that benefit local communities while 
            preserving Sri Lanka's natural beauty and cultural heritage for future generations.
          </p>
        </div>
      </motion.div>
    </div>
  );
};