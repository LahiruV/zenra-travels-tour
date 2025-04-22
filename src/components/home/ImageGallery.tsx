import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    // url: 'https://cdn.pixabay.com/photo/2021/02/09/16/51/elephants-5999125_1280.jpg',
    caption: 'gallery.beaches',
    size: 'large'
  },
  {
    url: 'https://images.unsplash.com/photo-1586846288010-25744d79a132?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'gallery.culture',
    size: 'small'
  },
  {
    url: 'https://images.unsplash.com/photo-1674810038664-03aca7d78036?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'gallery.nature',
    size: 'small'
  },
  {
    url: 'https://cdn.pixabay.com/photo/2018/03/18/00/59/mask-3235633_1280.jpg',
    caption: 'gallery.wildlife',
    size: 'small'
  },
  {
    url: 'https://cdn.pixabay.com/photo/2017/02/14/17/23/united-kingdom-2066475_1280.jpg',
    caption: 'gallery.temples',
    size: 'small'
  },
  {
    url: 'https://images.unsplash.com/photo-1624963145721-277432579507?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
            className={`relative overflow-hidden cursor-pointer ${image.size === 'large' ? 'col-span-2 row-span-2' : ''
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