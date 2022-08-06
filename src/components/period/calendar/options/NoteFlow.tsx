/*
We are working inside extremely well written software repository that included detailed documentation. 
The following information will help us carefully choose the typescript code for the job

A brief description of the behavior the React Functional Component makes possible:
A user selects how heavy her period was, to store the information, so that she can track her cycle.

A summary of what the React Functional Component is:
A modal of three square buttons that pops up after you pick a date to add a note too from a calendar.

A couple words about what the React Functional Component looks like from a user's experience:
A large rectangle that fills the field of view in some creative way. There will be three options, with a custom icon in each.
the one all the way to the left is 'low' with an icon of just half a drop filled in
the middle option is 'average' with the full drop icon colored in.
and the final is high with two drops filled in.
*/

import * as React from 'react';
import { BsDroplet, BsDropletFill, BsDropletHalf } from 'react-icons/bs';

import clsxm from '@/lib/clsxm';

const greyButtonClass = 'bg-gray-200 text-gray-600';

export const defaultProps: NoteFlowProps = {
  flowdata: { howHeavy: 'none', dataID: 'tyv4t4wf4t' },
  buttonProps: [
    {
      icon: <BsDroplet />,
      text: 'low',
    },

    {
      icon: <BsDropletHalf />,
      text: 'average',
    },

    {
      icon: <BsDropletFill />,
      text: 'high',
    },
  ],
};

type FlowData = {
  howHeavy: string;
  dataID: string;
};

export type NoteFlowProps = {
  flowdata: FlowData;

  buttonProps: {
    icon: React.ReactNode;
    text: string;
  }[];
  className?: string;
} & React.ComponentPropsWithoutRef<'div'>;

const NoteFlow: React.FC<NoteFlowProps> = ({
  flowdata,
  buttonProps,
  className,
}) => {
  const [howHeavy, setHowHeavy] = React.useState(flowdata.howHeavy);
  const handleSetHowHeavy = (newHowHeavy: string) => {
    setHowHeavy(newHowHeavy);
  };

  // TODO Handle Save Flow Data to local storage and add a Submit button to the modal

  return (
    <div className={clsxm('', className)}>
      <h1 className='w-full text-2xl font-semibold'>Todays flow: {howHeavy}</h1>
      <div className=' flex flex-col-reverse items-center justify-center md:flex-row'>
        {buttonProps.map((button, index) => (
          <button
            aria-label={button.text}
            key={index}
            type='button'
            className={clsxm(
              'm-2 flex h-44 w-44 flex-col items-center justify-center rounded border-2 border-white shadow-sm hover:shadow-md',

              button.text == howHeavy
                ? 'border border-blue-93'
                : greyButtonClass
            )}
            onClick={() => handleSetHowHeavy(button.text)}
          >
            <div // dynamically set the color
              className={clsxm(
                'flex flex-col items-center justify-center text-center align-middle',
                button.text == howHeavy ? 'text-indigo-600' : 'text-gray-600'
              )}
            >
              {button.icon}
              {button.text}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default NoteFlow;
