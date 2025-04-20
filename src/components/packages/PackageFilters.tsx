import { Dropdown } from '@zenra/widgets';
import { PackageFilters as PackageFiltersProps } from '@zenra/models';

export const PackageFilters = ({
  duration,
  setDuration,
  priceRange,
  setPriceRange,
}: PackageFiltersProps) => {
  const durationOptions = [
    { value: 'all', label: 'All Durations' },
    { value: '1-3', label: '1-3 Days' },
    { value: '4-7', label: '4-7 Days' },
    { value: '8+', label: '8+ Days' },
  ];

  const priceOptions = [
    { value: 'all', label: 'All Prices' },
    { value: '0-1000', label: '$0 - $1,000' },
    { value: '1000-2000', label: '$1,000 - $2,000' },
    { value: '2000+', label: '$2,000+' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      <Dropdown
        label="Duration"
        options={durationOptions}
        value={duration}
        onChange={setDuration}
      />
      <Dropdown
        label="Price Range"
        options={priceOptions}
        value={priceRange}
        onChange={setPriceRange}
      />
    </div>
  );
};