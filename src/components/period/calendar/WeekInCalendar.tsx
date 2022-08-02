/*
A Functional calender component of 7 boxes to represent the days of the week.
We choose split the calender component into WeekInCalendar component to enable easy pagination.
*/
import * as React from 'react';

import Box, { BoxProps } from '@/components/period/calendar/Box';

export type WeekProps = {
  week: BoxProps[];
} & React.ComponentPropsWithoutRef<'div'>;

// isCurrentDay = false,
// color = 'normal',
// DayOfWeekLabel,

const WeekInCalendar: React.FC<WeekProps> = ({ week }) => {
  // we might want to set the DayOfWeekLabel based on the index of the object in the week array?
  return (
    <div className='flex items-center justify-between px-4 pt-3'>
      {week.map((boxProps, index) => {
        return <Box key={index} {...boxProps} />;
      })}
    </div>
  );
};
export default WeekInCalendar;
