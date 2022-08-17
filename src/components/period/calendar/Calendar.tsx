/* eslint-disable no-case-declarations */
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
import { useMemo } from 'react';

import clsxm from '@/lib/clsxm';

import { FlowData } from '@/components/period/calendar/options/NoteFlow';

import { manyWeeks, normalizeDate } from '@/util/calendarFunc';

import BoxFactory from './BoxFactory';
import { useIsomorphicLocalStorage } from './useIsomorphicLocalStorage';

const numWeeks = 15;

const timestamp = String(normalizeDate(new Date()).getTime());

const Calendar: React.FC<React.ComponentPropsWithoutRef<'div'>> = () => {
  const [localFlowData, setFlowData] = useIsomorphicLocalStorage<FlowData>(
    'FLOWDATA',
    {} as FlowData
  );

  const handleChange = React.useCallback(
    (date: Date, howHeavy: string) => {
      const timestamp = String(date.getTime());

      setFlowData(
        (prev = {} as FlowData) =>
          ({
            ...prev,
            [timestamp]: howHeavy,
          } as FlowData)
      );
    },
    [setFlowData]
  );

  const weeks = useMemo(() => {
    return manyWeeks(numWeeks, localFlowData || {});
  }, [localFlowData]);
  return (
    <div className=' mx-auto  max-w-md p-2'>
      <div // 7 column grid for days of the week reverse the order
        // max height is 32 and overflow scroll is onlu horizontal
        className={clsxm(
          'grid grid-cols-7 gap-1',
          'mx-auto',
          'max-h-96 overflow-x-scroll',
          'h-full'
        )}
      >
        {Object.keys(weeks || {})
          .sort()
          .map((key) => {
            const date = new Date(Number(key));
            const howHeavy = (localFlowData || {})[key];
            return (
              <BoxFactory
                key={key}
                date={date}
                howHeavy={howHeavy}
                handleFunction={handleChange}
              />
            );
          })}
      </div>
      <div // flex - spread center
        className={clsxm(
          'flex flex-row items-center justify-around',
          'mx-auto'
        )}
      >
        {/* <button
          className='mx-auto rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'
          // onClick={() => {
          //   localStorage.setItem(
          //     'FLOWDATA',
          //     JSON.stringify(mockFlowInfoFromStorage)
          //   );
          //   console.log('mock data added to local storage');
          // }}
          onClick={() => setFlowData(mockFlowInfoFromStorage)}
        >
          Generate Mock
        </button> */}

        {/* <button
          className='mx-auto rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'
          // onclick stores weeks in local storage
          onClick={() => {
            localStorage.setItem('BOOM', JSON.stringify(weeks));
          }}
        >
          Store
        </button> */}
      </div>
    </div>
  );
};

export default Calendar;
