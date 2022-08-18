import * as React from 'react';
import { FC } from 'react';

import clsxm from '@/lib/clsxm';

import { findPrevMonday, newToday } from '@/util/calendarFunc';

const colorVarientSelector = {
  normal: 'border-gray-light border-2 bg-gray-mid-light',
  heavy: 'bg-flow-heavy',
  average: 'bg-flow-average',
  light: 'bg-flow-light',
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
  | 'heavy'
  | 'light'
  | 'average'
  | 'ovulation'
  | 'normal';

export type BoxProps = {
  date: Date;
  color?: ColorVariant; //  @default 'normal'
} & React.ComponentPropsWithoutRef<'div'>;

const Box: FC<BoxProps> = ({ color = 'normal', date }) => {
  const monthNumber = String(date.getDate());

  const today = newToday();
  const mondayOfToday = findPrevMonday(today);
  const mondayOfFlowData = findPrevMonday(date);
  const isCurrentWeek =
    mondayOfToday.toLocaleDateString() == mondayOfFlowData.toLocaleDateString();

  const isCurrentDay = today.toLocaleDateString() == date.toLocaleDateString();

  const DayOfWeekNum = date.getDay();

  const DayOfLabel = monthNumber;

  const currentWeekLabel = setDayOfWeekLabel(DayOfWeekNum);

  // change apacity of box depending if month is even or odd
  const isEvenMonth = date.getMonth() % 2 == 0;

  return (
    <div
      className={clsxm(
        'group relative flex h-8 w-8 items-center justify-center rounded-md text-xs',
        colorVarientSelector[color],
        [isEvenMonth ? 'opacity-50 shadow-lg' : 'opacity-100'],
        [isCurrentDay ? 'border-2 border-black text-black' : ' text-gray-700'],
        [isCurrentWeek ? '' : ' hover:bg-gray-dark-dark hover:text-white'],
        'transition-transform duration-200 ease-in-out',
        'hover:scale-110 hover:shadow-md',
        ' active:scale-100'
      )}
    >
      <div
        className={clsxm(
          ' absolute inset-0 flex items-center justify-center rounded-md text-xs',
          colorVarientSelector[color],
          [isCurrentWeek ? 'border-0' : 'hidden']
        )}
        aria-hidden={isCurrentWeek ? 'false' : 'true'}
      >
        {currentWeekLabel}
      </div>
      <span
        className={clsxm(
          'opacity-0 group-hover:opacity-100',
          'group-active:opacity-100',
          'group-focus:opacity-100',
          [isCurrentWeek ? 'hidden' : '']
        )}
        aria-hidden={isCurrentWeek}
      >
        {DayOfLabel}
      </span>
    </div>
  );
};

export default Box;
