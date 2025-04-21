import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const images = [
  {
    url: 'https://images.pexels.com/photos/2161449/pexels-photo-2161449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    caption: 'gallery.beaches',
    size: 'large'
  },
  {
    url: 'https://images.pexels.com/photos/5273514/pexels-photo-5273514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    caption: 'gallery.culture',
    size: 'small'
  },
  {
    url: 'https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    caption: 'gallery.nature',
    size: 'small'
  },
  {
    url: 'https://images.pexels.com/photos/2387871/pexels-photo-2387871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    caption: 'gallery.wildlife',
    size: 'small'
  },
  {
    url: 'https://images.pexels.com/photos/5273516/pexels-photo-5273516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    caption: 'gallery.temples',
    size: 'small'
  },
  {
    url: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    caption: 'gallery.adventure',
    size: 'small'
  }
];

export const ImageGallery = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-white relative">
      <div className="grid grid-cols-3 auto-rows-[300px]">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className={`relative overflow-hidden cursor-pointer ${
                image.size === 'large' ? 'col-span-2 row-span-2' : ''
              }`}
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <img
                src={image.url}
                alt={t(`home.${image.caption}`)}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
      </div>
    </section>
  );
};