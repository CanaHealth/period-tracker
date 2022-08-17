import { Disclosure, Transition } from '@headlessui/react';
import * as React from 'react';
import { HiChevronUp } from 'react-icons/hi';

import clsxm from '@/lib/clsxm';

type AccordionProps = {
  title?: string;
  description?: string | React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<'div'>;

const Accordion: React.FC<AccordionProps> = ({
  className,
  title,
  description,
}) => {
  // TODO:

  return (
    <div className='w-full px-4 pt-16'>
      <div className='mx-auto w-full max-w-md rounded-2xl bg-white p-2'>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={clsxm(
                  'group transform transition-transform duration-200 ease-in-out',
                  'flex w-full justify-between rounded-lg',
                  'px-4 py-2 ',
                  'text-left text-sm font-medium',
                  'bg-primary-light text-black ',
                  'hover:bg-gray-dark-dark hover:text-white',
                  // 'active:scale-95',
                  'focus:outline-none focus-visible:ring focus-visible:ring-primary-mid focus-visible:ring-opacity-75'
                )}
              >
                <span>{title}</span>
                <HiChevronUp
                  className={clsxm(
                    [open && 'rotate-180  '],
                    ' group-hover:text-white',
                    'h-5 w-5 text-black duration-75 ease-in-out'
                  )}
                />
              </Disclosure.Button>
              <Transition
                enter='transition duration-100 origin-top ease-out'
                enterFrom='transform scale-y-0 opacity-0'
                enterTo='transform scaley-y-100 opacity-100'
                leave='transition duration-75 ease-in'
                leaveFrom='transform scale-100 opacity-100'
                leaveTo='transform scale-95 opacity-0'
              >
                <Disclosure.Panel className='flex items-center justify-center break-words bg-gray-light-mid py-4 text-sm text-black '>
                  {description}
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default Accordion;
