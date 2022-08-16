import { useState } from 'react';

import clsxm from '@/lib/clsxm';

import Box from '@/components/period/calendar/Box';
import { FlowIntensity } from '@/components/period/calendar/options/NoteFlow';

const setColorVariant = (howHeavy: FlowIntensity) => {
  switch (howHeavy) {
    case 'heavy':
      return 'flowHeavy';
    case 'light':
      return 'flowLight';
    case 'average':
      return 'flow';
    case 'none':
      return 'normal';
    default:
      return undefined;
  }
};

function useLocalStorage(key: string, initialValue: string) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      return initialValue;
    }
  });
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };
  return [storedValue, setValue];
}

const manageLocalStorage = (dateString: string, nextHowHeavy: string) => {
  if (nextHowHeavy === 'none') {
    localStorage.removeItem(dateString);
  } else {
    localStorage.setItem(dateString, nextHowHeavy);
  }
};

const howHeavyOptions: FlowIntensity[] = ['none', 'light', 'average', 'heavy'];

export type BoxFactoryInputs = {
  date: Date;
} & React.ComponentPropsWithoutRef<'div'>;

const BoxFactory: React.FC<BoxFactoryInputs> = ({ date }) => {
  const [open, setOpen] = useState(false);
  const [howHeavy, setHowHeavy] = useLocalStorage(
    String(date.getTime()),
    'none'
  );

  const handleDoubleClick = () => {
    setOpen(!open);
  };

  const handleClick = () => {
    const nextHowHeavy =
      howHeavyOptions[
        (howHeavyOptions.indexOf(howHeavy) + 1) % howHeavyOptions.length
      ];

    setHowHeavy(nextHowHeavy);

    const dateString = String(date.getTime());
    manageLocalStorage(dateString, nextHowHeavy);
  };

  const ColorVariant = setColorVariant(howHeavy);

  return (
    <div className={clsxm(' m-1 sm:m-2', '')}>
      {/* <NoteFlow
        flowdata={flowdata}
        open={open}
        setOpen={setOpen}
        handleSubmit={setFlowdata}
      /> */}

      <button
        data-testid='handle-flow-change'
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
      >
        <Box color={ColorVariant} date={date} />
      </button>
    </div>
  );
};

export default BoxFactory;

/*

const getLocalArray = (flowData: FlowData, localFlowData: string) => {
  if (localFlowData) {
    const localFlowDataArray = JSON.parse(localFlowData);
    const currentFlowData = flowData.date.getTime();

    const index = localFlowDataArray.findIndex((el: FlowData) => {
      const localDateHolder = new Date(el.date);
      return localDateHolder.getTime() === currentFlowData;
    });

    if (index !== -1) {
      return localFlowDataArray[index];
    }
  }
};

const manageLocalStorageArray = (nextFlowData: FlowData) => {
  const localFlowData = localStorage.getItem('FLOWDATA');

  if (localFlowData) {
    const localFlowDataArray = JSON.parse(localFlowData);
    const nextFlowDataDate = nextFlowData.date.getTime();

    const index = localFlowDataArray.findIndex((el: FlowData) => {
      const localDateHolder = new Date(el.date);
      return localDateHolder.getTime() === nextFlowDataDate;
    });

    if (index !== -1) {
      if (nextFlowData.howHeavy === 'none') {
        localFlowDataArray.splice(index, 1);
      } else {
        localFlowDataArray[index] = nextFlowData;
      }
    } else {
      localFlowDataArray.push(nextFlowData);
    }
    localStorage.setItem('FLOWDATA', JSON.stringify(localFlowDataArray));
  } else {
    localStorage.setItem('FLOWDATA', JSON.stringify([nextFlowData]));
  }
};

*/
