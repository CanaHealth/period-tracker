import * as React from 'react';

type InfoCalloutProps = {
  description: string;
  value: string;
} & React.ComponentPropsWithoutRef<'div'>;

export default function InfoCallout({ description, value }: InfoCalloutProps) {
  return (
    <div className='mr-4 flex items-center justify-between rounded-md bg-gray-200 p-1'>
      <span className='ml-2'>{description}</span>
      <span className='w-24 rounded-md bg-white px-2 text-center font-bold'>
        {value}
      </span>
    </div>
  );
}
