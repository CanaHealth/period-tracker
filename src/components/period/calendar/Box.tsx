import clsx from 'clsx';
import * as React from 'react';
import { FC } from 'react';

// prediction: true | false;

// export type Days = {
//   day: {
//     color?: 'normal' | 'flow' | 'ovulation';
//     weekDay?: 'Mo' | 'Tu' | 'We' | 'Th' | 'Fr' | 'Sa' | 'Su';
//     currentDay?: boolean;
//   };
// } & React.ComponentPropsWithoutRef<'div'>;
export type ColorVariant = 'normal' | 'flow' | 'ovulation';
export type WeekDay = 'Mo' | 'Tu' | 'We' | 'Th' | 'Fr' | 'Sa' | 'Su';

export type Day = {
  /**
   * @default false
   */
  isCurrentDay?: boolean;
  /**
   * @default 'normal'
   */
  color?: ColorVariant;
  label?: WeekDay;
};
export type BoxProps = React.ComponentPropsWithoutRef<'div'> & Day;

const colorClasses = {
  normal: 'bg-gray-200',
  flow: 'bg-magenta-94',
  ovulation: 'bg-blue-81',
};

const Box: FC<BoxProps> = ({
  isCurrentDay = false,
  color = 'normal',
  label,
  ...rest
}) => (
  <span
    className={clsx(
      'relative flex h-8 w-8 items-center justify-center rounded-md text-xs',
      colorClasses[color],
      [isCurrentDay ? 'border-2 border-black text-black' : 'text-gray-100']
    )}
    {...rest}
  >
    {label}
    {/* if the day is the current day, render a circle behind the parent dive that is larget than it*/}
  </span>
);

export default Box;
