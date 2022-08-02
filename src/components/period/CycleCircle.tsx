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
      className=' border-gray-22 flex h-32 w-32 flex-col items-center justify-center rounded-full border-4'
      {...rest}
    >
      <p className='text-md'>{timeString}</p>
      <p className='text-4xl font-bold'>{numberString}</p>
    </div>
  );
}
