import * as React from 'react';

import clsxm from '@/lib/clsxm';

import {
  FlowIntensity,
  NoteFlowProps,
} from '@/components/period/calendar/options/NoteFlow';

export type buttonProp = {
  icon: React.ReactNode;
  text: FlowIntensity;
  className?: string;
};

export type buttonsProps = buttonProp[];

type NoteFlowButtonsProps = {
  renderButton: buttonProp;
  flowdata: NoteFlowProps['flowdata'];
  index: number;
  handleSubmit: (flowdata: NoteFlowProps['flowdata']) => void;

  className?: string;
} & React.ComponentPropsWithoutRef<'div'>;

const NoteFlowButtons: React.FC<NoteFlowButtonsProps> = ({
  flowdata,
  renderButton,
  index,
  className,
  handleSubmit,
}) => {
  // TODO:

  return (
    <button
      aria-label={renderButton.text}
      key={index}
      type='button'
      className={clsxm(
        'm-2 flex h-24 w-44 flex-col items-center justify-center rounded border-2 border-white shadow-sm hover:shadow-md md:h-44',
        className,
        renderButton.text == flowdata.howHeavy
          ? 'border border-blue-93'
          : 'bg-gray-200 text-gray-600'
      )}
      onClick={() => handleSubmit({ ...flowdata, howHeavy: renderButton.text })}
    >
      <div // dynamically set the color
        className={clsxm(
          'flex flex-col items-center justify-center text-center align-middle',
          renderButton.text == flowdata.howHeavy
            ? 'text-indigo-600'
            : 'text-gray-600'
        )}
      >
        {renderButton.icon}
        {renderButton.text}
      </div>
    </button>
  );
};

export default NoteFlowButtons;
