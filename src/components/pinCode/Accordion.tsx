import { Disclosure } from '@headlessui/react';
import * as React from 'react';

import clsxm from '@/lib/clsxm';

type AccordionProps = {
  btnText: string;
  description: string;
  className?: string;
} & React.ComponentPropsWithoutRef<'div'>;

const Accordion: React.FC<AccordionProps> = ({
  className,
  btnText,
  description,
}) => {
  // TODO:

  return (
    <div
      className={clsxm(
        [
          `
        mx-auto
        mt-8
        mb-4
        w-full
        max-w-2xl
        overflow-hidden
        rounded-lg
        bg-white
        shadow-lg
        `,
        ],
        className
      )}
    >
      <Disclosure>
        <Disclosure.Button className='py-2'>{btnText}</Disclosure.Button>
        <Disclosure.Panel className='text-gray-500'>
          {description}
        </Disclosure.Panel>
      </Disclosure>
    </div>
  );
};

export default Accordion;
