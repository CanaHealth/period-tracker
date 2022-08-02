import { ComponentStory, Meta } from '@storybook/react';

import InfoCallout from '@/components/period/InfoCallout';

export default {
  title: 'InfoCallout',
  component: InfoCallout,
} as Meta;

const Template: ComponentStory<typeof InfoCallout> = (args) => (
  <InfoCallout {...args} />
);

export const Preggo = Template.bind({});
Preggo.args = {
  description: 'Chance of Preggo',
  value: 'low',
};

export const NextCycle = Template.bind({});
NextCycle.args = {
  description: 'Next Cycle In',
  value: '2 weeks',
};
