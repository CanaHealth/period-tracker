import { ComponentStory, Meta } from '@storybook/react';

import Box from '@/components/period/calendar/Box';

export default {
  title: 'Box',
  component: Box,
} as Meta;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  color: 'normal',
};

export const Flow = Template.bind({});
Flow.args = {
  color: 'flow',
  weekDay: 'Mo',
};

export const Ovulation = Template.bind({});
Ovulation.args = {
  color: 'ovulation',
  weekDay: 'Mo',
};
