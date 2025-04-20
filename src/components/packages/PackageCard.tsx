import { useState } from 'react';
import { Button, Modal } from '@zenra/widgets';
import { CalendarDaysIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { Package, BookingFormData } from '@zenra/models';
import { BookingForm } from './BookingForm';

export const PackageCard = ({ 
  id,
  title,
  description,
  image,
  price,
  duration,
  groupSize,
  startDate,
}: Package) => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBooking = async (bookingData: BookingFormData) => {
    try {
      // Handle booking submission here
      console.log('Booking data:', bookingData);
      setIsBookingModalOpen(false);
    } catch (error) {
      console.error('Booking failed:', error);
    }
  };

  return (
    <>
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <ClockIcon className="h-5 w-5 mr-2" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <UserGroupIcon className="h-5 w-5 mr-2" />
            <span>{groupSize}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <CalendarDaysIcon className="h-5 w-5 mr-2" />
            <span>{startDate}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">
            ${price}
            <span className="text-sm text-gray-500 font-normal">/person</span>
          </div>
          <Button 
            variant="primary"
            onClick={() => setIsBookingModalOpen(true)}
          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
    
    <Modal
      open={isBookingModalOpen}
      onClose={() => setIsBookingModalOpen(false)}
      title="Book Your Trip"
    >
      <BookingForm
        packageId={id}
        packageName={title}
        onSubmit={handleBooking}
      />
    </Modal>
    </>
  );
};