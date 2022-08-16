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

import clsxm from '@/lib/clsxm';

import { FlowData } from '@/components/period/calendar/options/NoteFlow';

import { manyWeeks, newToday, normalizeDate } from '@/util/calendarFunc';

import BoxFactory from './BoxFactory';

const today = newToday();
const numWeeks = 5;

export const mockFlowInfoFromStorage = {
  '1660996800000': 'light',
  '1660737600000': 'average',
  '1660910400000': 'heavy',
  '1660651200000': 'heavy',
  '1660824000000': 'heavy',
};

function useLocalStorage(key: string, initialValue: FlowData) {
  const [storedValue, setStoredValue] = React.useState(() => {
    const defaultValues = manyWeeks(numWeeks, initialValue);

    if (typeof window === 'undefined') {
      return defaultValues;
    }
    try {
      const item = window.localStorage.getItem(key);

      if (item === null) {
        return defaultValues;
      } else {
        const weeks = manyWeeks(numWeeks, JSON.parse(item));
        return weeks;
      }
    } catch (error) {
      // If error also return initialValue
      return defaultValues;
    }
  });
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value: FlowData[]) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);

      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      // A more advanced implementation would handle the error case
    }
  };
  return [storedValue, setValue];
}

const timestamp = String(normalizeDate(new Date()).getTime());

const Calendar: React.FC<React.ComponentPropsWithoutRef<'div'>> = () => {
  const [weeksOfFlowData, setFlowData] = useLocalStorage('FLOWDATA', {
    [timestamp]: 'none',
  });

  // useEffect(() => {
  //   const
  //   setFlowData(weeksOfFlowData);

  return (
    <div className='relative mx-auto h-full max-w-md p-2'>
      <div // 7 column grid for days of the week reverse the order
        className={clsxm('grid grid-cols-7 gap-1', 'mx-auto')}
      >
        {Object.keys(weeksOfFlowData)
          .reverse()
          .map((key) => {
            const date = new Date(Number(key));
            const color = weeksOfFlowData[key];
            return <BoxFactory key={key} date={date} color={color} />;
          })}
      </div>
      <div // flex - spread center
        className={clsxm(
          'flex flex-row items-center justify-around',
          'mx-auto'
        )}
      >
        <button
          className='mx-auto rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700'
          onClick={() => {
            localStorage.setItem(
              'FLOWDATA',
              JSON.stringify(mockFlowInfoFromStorage)
            );
            console.log('mock data added to local storage');
          }}
        >
          Generate Mock
        </button>

        <button
          className='mx-auto rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700'
          onClick={() => {
            localStorage.setItem(
              'FLOWDATA_ALL',
              JSON.stringify(weeksOfFlowData)
            );
          }}
        >
          Store
        </button>
      </div>
    </div>
  );
};

export default Calendar;
