/*

* data structure:
  weeks:
    days[]:
      day:
        FlowData:
          - howHeavy: string;
          - date: Date;

* component heirarchy:  
  Calender uses BoxFactory to generate a week of boxes at a time.
  BoxFactory builds a Box using thats days corrisponding FlowData
  -   Box takes BoxProps { isCurrentDay, color, dayOfWeekLabel }
  -   NoteFlow takes and updates FlowData { howHeavy, date }
*/

import * as React from 'react';

import BoxFactory from '@/components/period/calendar/BoxFactory';
import { FlowData } from '@/components/period/calendar/options/NoteFlow';

type CalendarProps = {
  weeks: {
    days: FlowData[];
  }[];
} & React.ComponentPropsWithoutRef<'div'>;

const Calendar: React.FC<CalendarProps> = ({ weeks }: CalendarProps) => {
  return (
    <div className='mx-auto h-full max-w-md p-2'>
      {weeks.map((week, whichWeek) => (
        <div
          key={whichWeek}
          className='mx-auto flex flex-row items-center justify-evenly text-center align-middle'
        >
          {week.days.map((flowdata, index) => (
            <BoxFactory key={index} FlowData={flowdata} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Calendar;
