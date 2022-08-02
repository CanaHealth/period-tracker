// Box.stories.tsx
// Generate a components storybook story for the box.tsx compoenents

import { ComponentStory, Meta } from '@storybook/react';

import Box from '@/components/period/calendar/Box';

export default {
  title: 'Calender/Day',
  component: Box,
  argTypes: {
    isCurrentDay: { control: 'boolean' },
    color: { options: ['normal', 'flow', 'ovulation'] },
    DayOfWeekLabel: { options: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'] },
  },
} as Meta;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

// note, the defualt values for a Box component are:
// isCurrentDay = false,
// color = 'normal',
// DayOfWeekLabel = undefined

// which means that the an empty object will render a normal, historical or future box

export const CurrentDay = Template.bind({});
// Diplay wednesday as the current day.
CurrentDay.args = {
  isCurrentDay: true,
  color: 'normal',
  DayOfWeekLabel: 'We',
};

export const InFlow = Template.bind({});
InFlow.args = {
  isCurrentDay: false,
  color: 'flow',
  DayOfWeekLabel: 'We',
};

export const InOvulation = Template.bind({});
InOvulation.args = {
  isCurrentDay: false,
  color: 'ovulation',
  DayOfWeekLabel: 'We',
};
