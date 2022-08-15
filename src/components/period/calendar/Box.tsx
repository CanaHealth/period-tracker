import * as React from 'react';
import { FC } from 'react';

import clsxm from '@/lib/clsxm';

const colorVarientSelector = {
  normal: 'bg-gray-200', // @default
  flowHeavy: 'bg-flow-heavy',
  flow: 'bg-flow-average',
  flowLight: 'bg-flow-light',
  ovulation: 'bg-blue-100',
};

const setDayOfWeekLabel = (num: number) => {
  switch (num) {
    case 1:
      return 'Mo';
    case 2:
      return 'Tu';
    case 3:
      return 'We';
    case 4:
      return 'Th';
    case 5:
      return 'Fr';
    case 6:
      return 'Sa';
    case 0:
      return 'Su';
    default:
      return undefined;
  }
};

export type ColorVariant =
  | 'flowHeavy'
  | 'flowLight'
  | 'flow'
  | 'ovulation'
  | 'normal';

export type BoxProps = {
  date: Date;
  color?: ColorVariant; //  @default 'normal'
} & React.ComponentPropsWithoutRef<'div'>;

const Box: FC<BoxProps> = ({ color = 'normal', date }) => {
  const monthNumber = String(date.getDate());

  const findMonday = (date: Date) => {
    const monday = new Date();
    monday.setDate(date.getDate() - ((date.getDay() + 6) % 7));
    return monday;
  };

  const today = new Date();
  const mondayOfToday = findMonday(today);
  const mondayOfFlowData = findMonday(date);
  const isCurrentWeek =
    mondayOfToday.toLocaleDateString() == mondayOfFlowData.toLocaleDateString();

  const isCurrentDay = today.toLocaleDateString() == date.toLocaleDateString();

  const DayOfWeekNum = date.getDay();

  const DayOfLabel = monthNumber;

  const currentWeekLabel = setDayOfWeekLabel(DayOfWeekNum);

  return (
    <div
      className={clsxm(
        'group relative flex h-8 w-8 items-center justify-center rounded-md text-xs',
        colorVarientSelector[color],
        [isCurrentDay ? 'border-2 border-black text-black' : ' text-gray-700'],
        [isCurrentWeek ? '' : ' hover:text-gray-700'],
        'transition-transform duration-200 ease-in-out',
        'hover:scale-110 hover:shadow-md',
        ' active:scale-100'
      )}
    >
      <div
        className={clsxm(
          ' absolute inset-0 flex items-center justify-center rounded-md text-xs',
          colorVarientSelector[color],
          [isCurrentWeek ? '' : 'hidden']
        )}
      >
        {currentWeekLabel}
      </div>
      <span
        className={clsxm(
          ' opacity-0 group-hover:opacity-100',
          'group-active:opacity-100',
          'group-focus:opacity-100',
          [isCurrentWeek ? 'hidden' : '']
        )}
      >
        {DayOfLabel}
      </span>
    </div>
  );
};

export default Box;
