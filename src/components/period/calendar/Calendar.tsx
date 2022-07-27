/*
Generate an annotated Typescript file that generates a functional react component for a custom calender called 'Calendar'.
import Box from '@/components/period/calendar/WeekInCalendar' and use it as a week of 7 days in the calender.

Consider that WeekInCalendar consumes the props:
  week: {
    [key: string]: {
      color: 'normal' | 'flow' | 'ovulation';
      weekDay?: 'Mo' | 'Tu' | 'We' | 'Th' | 'Fr' | 'Sa' | 'Su';
      currentDay?: boolean;
    };
  };

Outputs:
A Functional Calendar component of n WeekInCalendar compoenent to represent the weeks of the month.
The Calendar componenet accepts a json of that defines the n number of WeekInCalendar.week indexed from bottom to top.
Include detailed documentation.
*/

import * as React from 'react';

import WeekInCalendar from '@/components/period/calendar/WeekInCalendar';
import { Week } from '@/components/period/calendar/WeekInCalendar';

type CalendarProps = Week[] & React.ComponentPropsWithoutRef<'div'>;

export default function Calendar({ weeks }: CalendarProps) {
  return (
    <div>
      {weeks.map((week, index) => {
        return <WeekInCalendar key={index} week={week} />;
      })}
    </div>
  );
}
