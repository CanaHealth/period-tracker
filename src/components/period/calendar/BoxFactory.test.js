import { useState } from 'react';

import clsxm from '@/lib/clsxm';

import Box from '@/components/period/calendar/Box';
import NoteFlow, {
  FlowData,
  FlowIntensity,
} from '@/components/period/calendar/options/NoteFlow';

// const today = new Date();

const today = new Date();

today.setHours(4);
today.setMinutes(0);
today.setMilliseconds(0);
today.setSeconds(0);

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

const howHeavyOptions: FlowIntensity[] = ['none', 'light', 'average', 'heavy'];

export type BoxFactoryInputs = {
  FlowData: FlowData,
} & React.ComponentPropsWithoutRef<'div'>;

const BoxFactory: React.FC<BoxFactoryInputs> = ({ FlowData }) => {
  const [flowdata, setFlowdata] = useState(FlowData);

  // useEffect(() => {
  //   if (localFlowData) {
  //     const localFlowDataCheck = getLocal(FlowData, localFlowData);
  //     setFlowdata(localFlowDataCheck);
  //   }
  // }, [FlowData]);

  const [open, setOpen] = useState(false);

  const handleDoubleClick = () => {
    setOpen(!open);
  };

  const handleClick = () => {
    const howHeavy = flowdata.howHeavy;
    const nextHowHeavy =
      howHeavyOptions[
        (howHeavyOptions.indexOf(howHeavy) + 1) % howHeavyOptions.length
      ];
    const nextFlowData = { ...flowdata, howHeavy: nextHowHeavy };
    setFlowdata(nextFlowData);
    manageLocalStorage(nextFlowData);
  };

  const ColorVariant = setColorVariant(flowdata.howHeavy);

  return (
    <div className={clsxm(' m-1 sm:m-2', '')}>
      <NoteFlow
        flowdata={flowdata}
        open={open}
        setOpen={setOpen}
        handleSubmit={setFlowdata}
      />

      <button onClick={handleClick} onDoubleClick={handleDoubleClick}>
        <Box color={ColorVariant} date={flowdata.date} />
      </button>
    </div>
  );
};

export default BoxFactory;
