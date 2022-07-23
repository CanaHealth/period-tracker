import * as React from 'react';

type BoxProps = {
  color: 'normal' | 'flow' | 'ovulation';
  weekDay?: 'Mo' | 'Tu' | 'We' | 'Th' | 'Fr' | 'Sa' | 'Su';
  // prediction: true | false;
} & React.ComponentPropsWithoutRef<'div'>;

export default function Box({ color = 'normal', weekDay }: BoxProps) {
  const colorClasses = {
    normal: 'bg-gray-200',
    flow: 'bg-magenta-94',
    ovulation: 'bg-blue-81',
  };

  return (
    <span
      className={
        'flex h-8 w-8 items-center justify-center rounded-md text-xs ' +
        colorClasses[color]
      }
    >
      {weekDay}
    </span>
  );
}
