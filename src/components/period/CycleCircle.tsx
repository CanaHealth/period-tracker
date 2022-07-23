import * as React from 'react';

type CycleCircleProps = {
  timeString: string;
  numberString: string;
} & React.ComponentPropsWithoutRef<'div'>;

export default function CycleCircle({
  timeString,
  numberString,
  ...rest
}: CycleCircleProps) {
  return (
    <div
      className=' border-gray-22 flex h-20 w-20 flex-col items-center justify-center rounded-full border-4'
      {...rest}
    >
      <p className='text-xs'>{timeString}</p>
      <p className='text-2xl font-bold'>{numberString}</p>
    </div>
  );
}
