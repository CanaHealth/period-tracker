import { ComponentStory, Meta } from '@storybook/react';

import WeekInCalendar from '@/components/period/calendar/WeekInCalendar';

export default {
  title: 'Calender/Week',
  component: WeekInCalendar,
} as Meta;

const Template: ComponentStory<typeof WeekInCalendar> = (args) => (
  <WeekInCalendar {...args} />
);

// note, the defualt values for a Box component are:
// isCurrentDay = false,
// color = 'normal',
// DayOfWeekLabel = undefined

// which means that the an empty object will render a normal, historical or future box

// Diplay the current week with wednesday as the current day.
export const CurrentWeek = Template.bind({});
CurrentWeek.args = {
  week: [
    { DayOfWeekLabel: 'Mo' },
    { DayOfWeekLabel: 'Tu' },
    { isCurrentDay: true, DayOfWeekLabel: 'We' },
    { DayOfWeekLabel: 'Th' },
    { DayOfWeekLabel: 'Fr' },
    { DayOfWeekLabel: 'Sa' },
    { DayOfWeekLabel: 'Su' },
  ],
};

export const HistoricalWeek = Template.bind({});
// A historical week has only color but no current day or DayOfWeekLabel.
// Which means it can be an array of 7 empty objects because color defualts to normal.
HistoricalWeek.args = {
  week: [{}, {}, {}, {}, {}, {}, {}],
};

export const FlowWeek = Template.bind({});
// Display a CurrentWeek with color flow - leave out isCurrentDay for every day except the current day; wednesday.
FlowWeek.args = {
  week: [
    { color: 'flow', DayOfWeekLabel: 'Mo' },
    { color: 'flow', DayOfWeekLabel: 'Tu' },
    { color: 'flow', isCurrentDay: true, DayOfWeekLabel: 'We' },
    { color: 'flow', DayOfWeekLabel: 'Th' },
    { color: 'flow', DayOfWeekLabel: 'Fr' },
    { color: 'flow', DayOfWeekLabel: 'Sa' },
    { color: 'flow', DayOfWeekLabel: 'Su' },
  ],
};
