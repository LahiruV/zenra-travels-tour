import { Hero } from '@zenra/components'
import { FeaturedDestinations, Experiences, CustomerExperience, CallToAction } from '@zenra/components';
import { PageTransition } from '@zenra/components';

export const HomePage = () => {
  return (
    <PageTransition>
      <Hero />
      <FeaturedDestinations />
      <Experiences />
      <CustomerExperience />
      <CallToAction />
    </PageTransition>
  );
};