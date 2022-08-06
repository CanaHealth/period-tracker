/*

A summary of what it is:
a button that launches a hidden component s a modal


A brief description of the behavior it makes possible:
grouping conceptually linked section of the UI more closely with the current action


A couple words about what it looks like from a user's experience:
I click a button and a model shows up

*/

import * as React from 'react';

import clsxm from '@/lib/clsxm';

import Box from '../period/calendar/Box';

type LaunchModalProps = {
  children: React.ReactNode;
  visible: boolean;
  className?: string;
  buttonOf?: React.ReactNode;
} & React.ComponentPropsWithoutRef<'div'>;

const LaunchModal: React.FC<LaunchModalProps> = ({
  className,
  visible,
  children,
  buttonOf = <Box />,
}) => {
  const [visibleBool, setVisible] = React.useState(visible);
  const modalRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (visibleBool) {
      modalRef.current?.focus();
    }
  }, [visibleBool]);

  const handleVisibility = () => {
    setVisible(!visibleBool);
  };

  return (
    <div className={clsxm('relative', className)}>
      <button
        aria-label='launch-modal'
        type='button'
        className={clsxm('', {
          hidden: visibleBool,
        })}
        onClick={handleVisibility}
      >
        {buttonOf}
      </button>

      <div
        aria-label='model'
        data-Testid='model'
        role='dialog'
        aria-hidden={!visibleBool}
        className={clsxm(
          'absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center space-y-4 rounded border-4 border-white p-16 shadow-md md:p-24',
          { hidden: !visibleBool }
        )}
        ref={modalRef}
      >
        <button
          aria-label='close-modal'
          type='button'
          className={clsxm(
            'absolute top-0 right-0 m-4 rounded-full border-4 border-white bg-gray-99 px-6 py-4 text-black hover:bg-gray-400 hover:text-white',
            {
              hidden: !visibleBool,
            }
          )}
          onClick={handleVisibility}
        >
          close
        </button>
        {children}
      </div>
    </div>
  );
};

export default LaunchModal;
