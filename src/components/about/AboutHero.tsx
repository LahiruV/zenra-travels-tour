import { motion } from 'framer-motion';
import { COMPANY_NAME } from '@zenra/constants';

export const AboutHero = () => {
  return (
    <div 
      className="relative h-[300px] bg-cover bg-center"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1588598198321-9735fd52455b?q=80&w=2070&auto=format&fit=crop")',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4 max-w-6xl mx-auto">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About {COMPANY_NAME}
        </motion.h1>
        <motion.p 
          className="text-xl text-center max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Your trusted partner in creating unforgettable travel experiences since 2010
        </motion.p>
      </div>
    </div>
  );
};