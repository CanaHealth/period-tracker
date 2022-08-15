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

import { daysAgo } from '@/util/calenderFunc';

type CalendarProps = {
  weeks: {
    days: FlowData[];
  }[];
} & React.ComponentPropsWithoutRef<'div'>;

const mockFlowData = [
  { howHeavy: 'average', date: daysAgo(1) },
  { howHeavy: 'heavy', date: daysAgo(3) },
  { howHeavy: 'light', date: daysAgo(5) },
  { howHeavy: 'average', date: daysAgo(7) },
  { howHeavy: 'heavy', date: daysAgo(9) },
  { howHeavy: 'average', date: daysAgo(11) },
  { howHeavy: 'light', date: daysAgo(13) },
  { howHeavy: 'heavy', date: daysAgo(15) },
];

const Calendar: React.FC<CalendarProps> = ({ weeks }: CalendarProps) => {
  // const LocalFlowInit: FlowData[] = () => {
  //   const localFlow: FlowData[] = localStorage.getItem('FLOWDATA')
  //     ? JSON.parse(localStorage.getItem('FLOWDATA'))
  //     : [{ howHeavy: 'heavy', date: new Date(today.getDate()) }];
  //   return localFlow;
  // };
  // const [localFlow, setLocalFlow] = React.useState(LocalFlowInit);

  // create a react context to store local storage

  // const [localFlow, setLocalFlow] = React.useState([]);
  // useEffect(() => {
  //   const localData = window.localStorage.getItem('FLOWDATA');
  //   if (localData) {
  //     setLocalFlow(JSON.parse(localData));
  //   }
  // }, []);

  // const localFlowDataContext = React.createContext(localData);

  return (
    <>
      {/* <localFlowDataContext.Provider value={localData}> */}
      <div className=' relativemx-auto h-full max-w-md p-2'>
        {/* <button className=' absolute inset-0 z-10 bg-white opacity-50'></button> */}
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
      {/* </localFlowDataContext.Provider> */}
    </>
  );
};

export default Calendar;
