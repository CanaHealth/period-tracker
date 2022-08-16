/*

* data structure:
  weeks:
    - days[]:
      > day:
        - FlowData:
          > howHeavy: string;
          > date: Date;

* component heirarchy:  
  Calender uses BoxFactory to generate a week of boxes at a time.
  BoxFactory builds a Box using thats days corrisponding FlowData
  -   Box takes BoxProps { date, color }
  -   NoteFlow takes and updates FlowData { howHeavy, date }
*/

import * as React from 'react';

import BoxFactory from '@/components/period/calendar/BoxFactory';
import { FlowData } from '@/components/period/calendar/options/NoteFlow';

import { daysAgo, newToday } from '@/util/calenderFunc';

type CalendarProps = {
  weeks: {
    days: FlowData[];
  }[];
} & React.ComponentPropsWithoutRef<'div'>;

const today = newToday();

const mockFlowData = [
  { howHeavy: 'average', date: daysAgo(today, 1) },
  { howHeavy: 'heavy', date: daysAgo(today, 3) },
  { howHeavy: 'light', date: daysAgo(today, 5) },
  { howHeavy: 'average', date: daysAgo(today, 7) },
  { howHeavy: 'heavy', date: daysAgo(today, 9) },
  { howHeavy: 'average', date: daysAgo(today, 11) },
  { howHeavy: 'light', date: daysAgo(today, 13) },
  { howHeavy: 'heavy', date: daysAgo(today, 15) },
];

const Calendar: React.FC<CalendarProps> = ({ weeks }: CalendarProps) => {
  return (
    <div className=' relativemx-auto h-full max-w-md p-2'>
      {weeks.map((week, whichWeek) => (
        <div
          key={whichWeek}
          className='mx-auto flex flex-row items-center justify-evenly text-center align-middle'
        >
          {week.days.map((flowdata, index) => (
            <BoxFactory key={index} date={flowdata} />
          ))}
        </div>
      ))}

      <div // button to generate mock local data
      >
        <button
          className='rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700'
          onClick={() => {
            localStorage.setItem('FLOWDATA', JSON.stringify(mockFlowData));
          }}
        >
          Generate Mock Local Data
        </button>
      </div>
    </div>
  );
};

export default Calendar;
