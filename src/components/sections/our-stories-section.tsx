import { type FC } from 'react';
import { SectionId } from '../../types/section-id';
import { PageSection } from '../page-section';

export const OurStoriesSection: FC = () => {
  return <PageSection sectionId={SectionId.OurStories}>OurStoriesSection</PageSection>;
};
