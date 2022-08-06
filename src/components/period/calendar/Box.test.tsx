import * as React from 'react';
import { FC } from 'react';

import clsxm from '@/lib/clsxm';

export type ColorVariant = 'normal' | 'flow' | 'ovulation'; // "flow" indicates when a user had or will have a period

export type DayOfWeekLabel = 'Mo' | 'Tu' | 'We' | 'Th' | 'Fr' | 'Sa' | 'Su';

export type BoxProps = {
  isCurrentDay?: boolean; // @default false
  color?: ColorVariant; // @default 'normal'
  DayOfWeekLabel?: DayOfWeekLabel;
} & React.ComponentPropsWithoutRef<'div'>;

const colorVarientSelector = {
  normal: 'bg-gray-200', // @default
  flow: 'bg-magenta-94',
  ovulation: 'bg-blue-100',
};

const Box: FC<BoxProps> = ({
  isCurrentDay = false,
  color = 'normal',
  DayOfWeekLabel,
}) => (
  <span
    className={clsxm(
      'relative flex h-8 w-8 items-center justify-center rounded-md text-xs',
      colorVarientSelector[color],
      [isCurrentDay ? 'border-2 border-black text-black' : ' text-gray-700']
    )}
  >
    {DayOfWeekLabel}
  </span>
);

export default Box;
