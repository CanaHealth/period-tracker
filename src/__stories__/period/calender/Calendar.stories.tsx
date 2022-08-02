import { ComponentStory, Meta } from '@storybook/react';

import * as calendarArgs from '@/lib/calendarArgs';

import Calender from '@/components/period/calendar/Calendar';

export default {
  title: 'Calender/Calender',
  component: Calender,
} as Meta;

const Template: ComponentStory<typeof Calender> = (args) => (
  <Calender {...args} />
);

export const NormalCalender = Template.bind({});
NormalCalender.args = {
  calender: [
    calendarArgs.HistoricalWeekArgs,
    calendarArgs.HistoricalWeekArgs,
    calendarArgs.HistoricalWeekWithOvulationArgs,
    calendarArgs.HistoricalWeekArgs,
    calendarArgs.FlowWeekArgs,
    calendarArgs.CurrentWeekArgs,
  ],
};
