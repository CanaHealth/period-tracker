/*
A Functional calender component of 7 boxes to represent the days of the week.
We choose split the calender component into WeekInCalendar component to enable easy pagination.
*/
import * as React from 'react';

import BoxWithNoteFlow from '@/components/period/calendar/BoxWithNoteFlow';
import { FlowData } from '@/components/period/calendar/options/NoteFlow';

export type WeekProps = {
  week: [FlowData, FlowData, FlowData, FlowData, FlowData, FlowData, FlowData];
} & React.ComponentPropsWithoutRef<'div'>;

// isCurrentDay = false,
// color = 'normal',
// DayOfWeekLabel,

const WeekInCalendar: React.FC<WeekProps> = ({ week }) => {
  // we might want to set the DayOfWeekLabel based on the index of the object in the week array?
  return (
    <div className='mx-auto flex flex-row items-center justify-evenly text-center align-middle'>
      {week.map((flowdata, index) => (
        <BoxWithNoteFlow key={index} currentFlowData={flowdata} />
      ))}
    </div>
  );
};
export default WeekInCalendar;
