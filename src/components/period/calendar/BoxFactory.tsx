import { useState } from 'react';

import clsxm from '@/lib/clsxm';

import Box from '@/components/period/calendar/Box';
import { FlowIntensity } from '@/components/period/calendar/options/NoteFlow';

const setColorVariant = (howHeavy: FlowIntensity) => {
  switch (howHeavy) {
    case 'heavy':
      return 'heavy';
    case 'light':
      return 'light';
    case 'average':
      return 'average';
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
    <div className={clsxm('flex snap-end items-center justify-center', '')}>
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
