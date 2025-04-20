import { useState } from 'react';
import { TextField, Button, Checkbox, FormGroup } from '@zenra/widgets';
import { UserIcon, EnvelopeIcon, PhoneIcon, CalendarDaysIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { BookingFormData, BookingFormProps } from '@zenra/models';

export const BookingForm = ({ packageName, onSubmit, isLoading }: BookingFormProps) => {
  const [formData, setFormData] = useState<BookingFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    travelDate: '',
    adults: 1,
    children: 0,
    includeMeals: false,
    includeTransport: false,
    includeAccommodation: false,
    specialRequests: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: e.target.type === 'checkbox' ? e.target.checked : value
    }));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Book {packageName}</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TextField
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            startIcon={<UserIcon className="h-5 w-5" />}
          />
          
          <TextField
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            startIcon={<UserIcon className="h-5 w-5" />}
          />
        </div>

        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          startIcon={<EnvelopeIcon className="h-5 w-5" />}
        />

        <TextField
          label="Phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          required
          startIcon={<PhoneIcon className="h-5 w-5" />}
        />

        <TextField
          label="Travel Date"
          name="travelDate"
          type="date"
          value={formData.travelDate}
          onChange={handleChange}
          required
          startIcon={<CalendarDaysIcon className="h-5 w-5" />}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TextField
            label="Number of Adults"
            name="adults"
            type="number"
            min="1"
            value={formData.adults}
            onChange={handleChange}
            required
            startIcon={<UserGroupIcon className="h-5 w-5" />}
          />
          
          <TextField
            label="Number of Children"
            name="children"
            type="number"
            min="0"
            value={formData.children}
            onChange={handleChange}
            startIcon={<UserGroupIcon className="h-5 w-5" />}
          />
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Additional Services</h3>
          <FormGroup>
            <Checkbox
              checked={formData.includeMeals}
              onChange={handleChange}
              name="includeMeals"
              label="Include Meals"
            />
            <Checkbox
              checked={formData.includeTransport}
              onChange={handleChange}
              name="includeTransport"
              label="Include Transport"
            />
            <Checkbox
              checked={formData.includeAccommodation}
              onChange={handleChange}
              name="includeAccommodation"
              label="Include Accommodation"
            />
          </FormGroup>
        </div>

        <TextField
          label="Special Requests"
          name="specialRequests"
          multiline
          rows={4}
          value={formData.specialRequests}
          onChange={handleChange}
          helperText="Optional: Any dietary requirements or special accommodations"
        />

        <Button
          type="submit"
          variant="primary"
          size="large"
          fullWidth
          loading={isLoading}
        >
          Book Now
        </Button>
      </form>
    </div>
  );
};