import { ComponentStory, Meta } from '@storybook/react';

import WeekInCalendar from '@/components/period/calendar/WeekInCalendar';

export default {
  title: 'WeekInCalendar',
  component: WeekInCalendar,
} as Meta;

const Template: ComponentStory<typeof WeekInCalendar> = (args) => (
  <WeekInCalendar {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  week: {
    days: [{}, {}, {}, {}, {}, {}, {}],
  },
};

export const CurrentWeek = Template.bind({});
CurrentWeek.args = {
  week: {
    days: [
      { color: 'normal', weekDay: 'Mo', currentDay: true },
      { color: 'normal', weekDay: 'Tu' },
      { color: 'normal', weekDay: 'We' },
      { color: 'normal', weekDay: 'Th' },
      { color: 'normal', weekDay: 'Fr' },
      { color: 'normal', weekDay: 'Sa' },
      { color: 'normal', weekDay: 'Su' },
    ],
  },
};

export const InFlow = Template.bind({});
InFlow.args = {
  week: {
    days: [
      { color: 'flow', weekDay: 'Mo' },
      { color: 'flow', weekDay: 'Tu', currentDay: true },
      { color: 'flow', weekDay: 'We' },
      { color: 'flow', weekDay: 'Th' },
      { color: 'flow', weekDay: 'Fr' },
      { color: 'flow', weekDay: 'Sa' },
      { color: 'flow', weekDay: 'Su' },
    ],
  },
};

export const Ovulation = Template.bind({});
Ovulation.args = {
  week: {
    days: [
      { color: 'normal', weekDay: 'Mo' },
      { color: 'normal', weekDay: 'Tu' },
      { color: 'ovulation', weekDay: 'We', currentDay: true },
      { color: 'ovulation', weekDay: 'Th' },
      { color: 'ovulation', weekDay: 'Fr' },
      { color: 'ovulation', weekDay: 'Sa' },
      { color: 'ovulation', weekDay: 'Su' },
    ],
  },
};

export const Imposible = Template.bind({});
Imposible.args = {
  week: {
    days: [
      { color: 'ovulation', weekDay: 'Mo', currentDay: true },
      { color: 'normal', weekDay: 'Tu', currentDay: true },
      { color: 'flow', weekDay: 'We', currentDay: true },
      { color: 'flow', weekDay: 'Th' },
      { color: 'flow' },
      { color: 'flow' },
      { color: 'flow' },
    ],
  },
};
