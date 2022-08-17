import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { CopyBlock, monoBlue } from 'react-code-blocks';

import clsxm from '@/lib/clsxm';

import BigButton from '@/components/period/calendar/options/BigButton';
import Spinner from '@/components/Spinner';

type AcceptModalProps = {
  open?: boolean;
  setOpen?: (open: boolean) => void;
  handleSubmit?: () => void;
  data?: string;
  loading?: boolean;
  launchBlockExplorer?: () => void;
  blockExplorer?: boolean;
  className?: string;
} & React.ComponentPropsWithoutRef<'div'>;

const AcceptModal: React.FC<AcceptModalProps> = ({
  handleSubmit,
  setOpen,
  open,
  loading,
  blockExplorer,
  launchBlockExplorer,
  className,
  data,
}) => {
  const setOpener =
    setOpen ||
    (() => {
      !open;
    });

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        className={clsxm('relative z-10', className)}
        onClose={() => setOpener(false)}
      >
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-50 bg-opacity-75 transition-opacity' />
        </Transition.Child>
        <div className='fixed inset-0 z-10 overflow-y-auto'>
          <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className=' relative flex flex-col justify-center space-y-12'>
                <div
                  className={clsxm(
                    'mx-auto flex w-max flex-col items-center justify-center'
                  )}
                >
                  {loading && (
                    <div className=' absolute inset-0 z-10 flex h-full w-full flex-col items-center justify-center bg-white opacity-95'>
                      <Spinner />
                    </div>
                  )}

                  <div className='relative my-auto flex h-96 w-96 max-w-md transform flex-col justify-between overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:p-6'>
                    <div className={clsxm('flex flex-col items-center')}>
                      Save on-chain
                    </div>
                    <div className='overflow-x-auto'>
                      <CopyBlock
                        language='json'
                        text={data}
                        codeBlock
                        theme={monoBlue}
                        showLineNumbers={false}
                      />
                    </div>

                    <div>
                      {' '}
                      <h3>Solana balance:</h3>
                      <p>0.022 SOL</p>
                    </div>

                    <div className='my-2 flex flex-col items-center justify-center'>
                      {blockExplorer ? (
                        <BigButton
                          OnClickDo={launchBlockExplorer}
                          text='View on Block Explorer'
                          className='text-sm'
                          iconLocation='r'
                          height='20'
                        />
                      ) : (
                        <BigButton
                          OnClickDo={handleSubmit}
                          text='Accept'
                          iconLocation='r'
                          height='20'
                        />
                      )}
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default AcceptModal;

/*

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { BsDroplet, BsDropletFill, BsDropletHalf } from 'react-icons/bs';

import clsxm from '@/lib/clsxm';

import NoteFlowButtons, { buttonsProps } from '../period/calendar/options/NoteFlowButtons';
import BigButton from '@/components/period/calendar/options/BigButton';

export type FlowIntensity = 'light' | 'heavy' | 'average' | 'none';

export type FlowData = {
  [key: string]: FlowIntensity;
};

export type NoteFlowProps = {
  flowdata: FlowData;
  buttons?: buttonsProps;
  className?: string;
  open?: boolean;
  setOpen?: (open: boolean) => void;
  handleSubmit?: (flowdata: FlowData) => void;
} & React.ComponentPropsWithoutRef<'div'>;

const NoteFlow: React.FC<NoteFlowProps> = ({
  handleSubmit,
  setOpen,
  open,
  flowdata,
  buttons = [
    { icon: <BsDroplet />, text: 'light' },
    { icon: <BsDropletHalf />, text: 'average' },
    { icon: <BsDropletFill />, text: 'heavy' },
  ],
  className,
}) => {
  // don't allow submit data if no selection has been made
  //use effect to manage canSubmit state
  const [canSubmit, setCanSubmit] = useState(false);

  const setOpener =
    setOpen ||
    (() => {
      !open;
    });
  const handleSubmited =
    handleSubmit ||
    (() => {
      flowdata;
    });

  useEffect(() => {
    if (flowdata.howHeavy !== 'none') {
      setCanSubmit(true);
    } else {
      setCanSubmit(false);
    }
  }, [flowdata.howHeavy]);
  // create funtion that checks canSubmit state and if true, calls handleSubmit with flowdata
  const handleSubmitFlowdata = () => {
    if (canSubmit) {
      setOpener(false);
    } else {
      alert('Please select a flow or close the dialog');
    }
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        className={clsxm('relative z-10', className)}
        onClose={() => setOpener(false)}
      >
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-50 bg-opacity-75 transition-opacity' />
        </Transition.Child>
        <div className='fixed inset-0 z-10 overflow-y-auto'>
          <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className='relative my-auto transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:p-6'>
                <Dialog.Title>{flowdata.date.toDateString()}</Dialog.Title>
                <div className='absolute top-0 right-0 hidden pt-4 pr-4 sm:block'>
                  <button
                    type='button'
                    className='rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                    onClick={() => setOpener(false)}
                  >
                    <span className='sr-only'>Close</span>
                    <AiFillCloseCircle className='h-6 w-6' aria-hidden='true' />
                  </button>
                </div>
                <div className='mt-5 sm:mt-4 sm:flex sm:flex-row-reverse'>
                  <div className=' flex flex-col-reverse items-center justify-center md:flex-row'>
                    {buttons.map((button, index) => (
                      <NoteFlowButtons
                        key={index}
                        renderButton={button}
                        index={index}
                        flowdata={flowdata}
                        handleSubmit={handleSubmited}
                      />
                    ))}
                  </div>
                </div>

                <div className='mt-4 flex items-center justify-center'>
                  <div className='inline-flex' role='group'>
                    <button
                      type='button'
                      aria-label='set to none'
                      onClick={() => {
                        handleSubmited({
                          ...flowdata,
                          howHeavy: 'none',
                        });
                        setOpener(false);
                      }}
                      className={clsxm(
                        ' bg-gray-light-dark shadow-sm ',
                        'flex flex-col items-center justify-center',
                        'mx-auto py-4',
                        ' w-24',
                        'rounded-l-sm ',
                        'hover:bg-gray-300 hover:shadow-lg',
                        'focus:bg-gray-300 focus:outline-none focus:ring-4',
                        'transition duration-150 ease-in-out',
                        'text-xs'
                      )}
                    >
                      set as none
                    </button>
                    <button
                      type='button'
                      aria-label='submit'
                      onClick={handleSubmitFlowdata}
                      className={clsxm(
                        'border-4 bg-gray-light-dark shadow-sm ',
                        'flex flex-col items-center justify-center',
                        'mx-auto py-4',
                        ' w-20',
                        'rounded-r-lg border-2 border-gray-100',
                        'hover:bg-gray-300 hover:shadow-lg',
                        'focus:bg-gray-300 focus:outline-none focus:ring-4',
                        'transition duration-150 ease-in-out',
                        'text-xs',
                        ''
                      )}
                    >
                      submit
                    </button>
                  </div>
                </div>

                <button></button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default NoteFlow;


*/
