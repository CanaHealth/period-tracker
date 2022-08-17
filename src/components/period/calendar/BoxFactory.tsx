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

const howHeavyOptions: FlowIntensity[] = ['light', 'average', 'heavy', 'none'];

export type BoxFactoryInputs = {
  date: Date;
  howHeavy: FlowIntensity;
  handleFunction: (date: Date, howHeavy: string) => void;
} & React.ComponentPropsWithoutRef<'div'>;

const BoxFactory: React.FC<BoxFactoryInputs> = ({
  date,
  howHeavy,
  handleFunction,
}) => {
  const [open, setOpen] = useState(false);

  const handleDoubleClick = () => {
    setOpen(!open);
  };

  const handleClick = () => {
    const nextHowHeavy =
      howHeavyOptions[
        (howHeavyOptions.indexOf(howHeavy) + 1) % howHeavyOptions.length
      ];

    handleFunction(date, nextHowHeavy);
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
