import { EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

export const ContactInfo = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        Our Contact Information
      </h2>
      
      <div className="space-y-8">
        <div className="flex items-start">
          <MapPinIcon className="h-6 w-6 text-blue-600 mt-1" />
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900">Address</h3>
            <p className="text-gray-600">
              45 Galle Face Terrace<br />
              Colombo 03<br />
              Sri Lanka
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <PhoneIcon className="h-6 w-6 text-blue-600 mt-1" />
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900">Phone</h3>
            <p className="text-gray-600">
              Local: +94 11 234 5678<br />
              International: +1 (555) 123-4567
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <EnvelopeIcon className="h-6 w-6 text-blue-600 mt-1" />
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900">Email</h3>
            <p className="text-gray-600">
              Bookings: bookings@zenratravels.com<br />
              Support: support@zenratravels.com
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <ClockIcon className="h-6 w-6 text-blue-600 mt-1" />
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900">Business Hours</h3>
            <p className="text-gray-600">
              Monday - Friday: 9:00 AM - 6:00 PM<br />
              Saturday: 10:00 AM - 4:00 PM<br />
              Sunday: Closed
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <GlobeAltIcon className="h-6 w-6 text-blue-600 mt-1" />
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900">Languages</h3>
            <p className="text-gray-600">
              English, Sinhala, Tamil, French, German
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};