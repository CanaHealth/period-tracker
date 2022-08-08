import { useState } from 'react';

import clsxm from '@/lib/clsxm';

import Box, { BoxProps } from '@/components/period/calendar/Box';
import NoteFlow, {
  FlowData,
  FlowIntensity,
} from '@/components/period/calendar/options/NoteFlow';

const setDayOfWeekLabel = (num: number) => {
  switch (num) {
    case 1:
      return 'Mo';
    case 2:
      return 'Tu';
    case 3:
      return 'We';
    case 4:
      return 'Th';
    case 5:
      return 'Fr';
    case 6:
      return 'Sa';
    case 0:
      return 'Su';
    default:
      return undefined;
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

export type BoxFactoryInputs = {
  FlowData: FlowData;
} & React.ComponentPropsWithoutRef<'div'>;

const BoxFactory: React.FC<BoxFactoryInputs> = ({ FlowData }) => {
  const [flowdata, setFlowdata] = useState(FlowData);
  const [open, setOpen] = useState(false);

  const findMonday = (date: Date) => {
    const monday = new Date();
    monday.setDate(date.getDate() - ((date.getDay() + 6) % 7));
    return monday;
  };

  const today = new Date();
  const mondayOfToday = findMonday(today);
  const mondayOfFlowData = findMonday(flowdata.date);
  const isCurrentWeek =
    mondayOfToday.toLocaleDateString() == mondayOfFlowData.toLocaleDateString();

  const isCurrentDay =
    today.toLocaleDateString() == flowdata.date.toLocaleDateString();

  const ColorVariant = setColorVariant(flowdata.howHeavy);

  const DayOfWeekNum = flowdata.date.getDay();

  const DayOfWeekLabel = isCurrentWeek
    ? setDayOfWeekLabel(DayOfWeekNum)
    : undefined;

  const box: BoxProps = {
    isCurrentDay: isCurrentDay,
    color: ColorVariant,
    DayOfWeekLabel: DayOfWeekLabel,
  };
  return (
    <div className={clsxm('m-1 sm:m-2', '')}>
      <NoteFlow
        flowdata={flowdata}
        open={open}
        setOpen={setOpen}
        handleSubmit={setFlowdata}
      />

      <button onClick={() => setOpen(true)}>
        <Box {...box} />
      </button>
    </div>
  );
};

export default BoxFactory;
