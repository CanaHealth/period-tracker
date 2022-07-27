/*
Generate an annotated Typescript file that generates a functional react component for a custom calender called 'WeekInCalendar'.
import Box from '@/components/period/calendar/Box' and use it as the day.

Consider that Box consumes the props:
color: 'normal' | 'flow' | 'ovulation'
weekDay?: 'Mo' | 'Tu' | 'We' | 'Th' | 'Fr' | 'Sa' | 'Su';

Outputs:
A Functional calender component of 7 boxes to represent tha days of the week.
The WeekInCalendar componenet accepts a json that defines the 7 Box.color and Box.weekDay props for each, indexed from left to right.
Include detailed documentation, a Jest Unit Test, and a component based story for Storybook JS.
*/
import * as React from 'react';

import Box, { BoxProps, Day } from '@/components/period/calendar/Box';
export type DayWithLabel = Omit<Day, 'label'> & Required<Pick<Day, 'label'>>;
// Create a week object type from this tuple type
export type Week = [
  mon: BoxProps,
  tue: BoxProps,
  wed: BoxProps,
  thu: BoxProps,
  fri: BoxProps,
  sat: BoxProps,
  sun: BoxProps
];

export type WeekProps = {
  week: Week;
  shouldDisplayCurrentDay?: boolean;
  // hadPeriodOn?: Date;
} & React.ComponentPropsWithoutRef<'div'>;

// const dateToDayLabel: Record<string, WeekDay> = {
//   Monday: 'Mo',
//   Tuesday: 'Tu',
//   Wednesday: 'We',
//   Thursday: 'Th',
//   Friday: 'Fr',
//   Saturday: 'Sa',
//   Sunday: 'Su',
// };

const WeekInCalendar: React.FC<WeekProps> = ({
  week,
  shouldDisplayCurrentDay = false,
}) => {
  return (
    <div className=' flex items-center justify-between px-4'>
      {week
        // date => BoxProps
        .map(({ label, ...day }) => {
          return {
            ...day,
            label: (shouldDisplayCurrentDay && label) || undefined,
          };
        })
        .map((day, index) => (
          <Box key={index} {...day} />
        ))}
    </div>
  );
};
export default WeekInCalendar;
