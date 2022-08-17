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

import { manyWeeks } from '@/util/calendarFunc';

import BoxFactory from './BoxFactory';
import { useIsomorphicLocalStorage } from './useIsomorphicLocalStorage';

const numWeeks = 15;

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
    <div className='relative flex h-full max-h-96 w-full flex-grow  items-center justify-center'>
      <div
        className={clsxm(
          'relative ',
          'h-full max-h-96 w-full max-w-md',
          'flex flex-col-reverse justify-center',
          'overflow-y-scroll overscroll-x-none',
          'rounded-b-lg bg-gray-light-dark',
          'm-4'
        )}
      >
        <div
          className={clsxm(
            'grid grid-cols-7 ',
            'absolute snap-y snap-always',
            'inset-x-4 bottom-4 gap-4 '
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
      </div>
    </div>
  );
};

export default Calendar;
