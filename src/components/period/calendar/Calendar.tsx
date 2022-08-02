/*
Generate a Functional Calendar component of n WeekInCalendar compoenent to represent the weeks of the month.
The Calendar componenet accepts a json of that defines the n number of WeekInCalendar.week indexed from bottom to top.
Include detailed documentation.
*/

import * as React from 'react';

import WeekInCalendar, {
  WeekProps,
} from '@/components/period/calendar/WeekInCalendar';

type CalendarType = {
  calender: WeekProps[];
} & React.ComponentPropsWithoutRef<'div'>;

type CalendarProps = CalendarType & React.ComponentPropsWithoutRef<'div'>;

const Calendar: React.FC<CalendarProps> = ({ calender }) => {
  return (
    <div className=' mx-auto max-w-md'>
      {calender.map((week, index) => {
        return <WeekInCalendar key={index} {...week} />;
      })}
    </div>
  );
};

export default Calendar;

/*
type ColorVariant = 'normal' | 'flow' | 'ovulation'; // "flow" indicates when a user had or will have a period

type DayOfWeekLabel = 'Mo' | 'Tu' | 'We' | 'Th' | 'Fr' | 'Sa' | 'Su';

type BoxProps = {
  isCurrentDay?: boolean; 
  color?: ColorVariant;
  DayOfWeekLabel?: DayOfWeekLabel;
} & React.ComponentPropsWithoutRef<'div'>;

type Week = [
  mon: BoxProps,
  tue: BoxProps,
  wed: BoxProps,
  thu: BoxProps,
  fri: BoxProps,
  sat: BoxProps,
  sun: BoxProps
];

type WeekProps = {
  week: Week;
} & React.ComponentPropsWithoutRef<'div'>;

*/
