/*

import * as React from 'react';
import { useMemo } from 'react';

import clsxm from '@/lib/clsxm';

import { flowData } from '@/components/period/calendar/options/NoteFlow';

import { manyWeeks } from '@/util/calendarFunc';

import BoxFactory from '../BoxFactory';
import { useIsomorphicLocalStorage } from '../useIsomorphicLocalStorage';

const numWeeks = 15;

const Calendar: React.FC<React.ComponentPropsWithoutRef<'div'>> = () => {
  // wasScrolled is used to diable the bounce animation
  const [wasScrolled, setWasScrolled] = React.useState(false);
  // check if the calender was scrolled
  const handleScroll = () => {
    setWasScrolled(true);
  };

  const [localFlowData, setFlowData] = useIsomorphicLocalStorage<flowData>(
    'flowData',
    {} as flowData
  );

  const handleChange = React.useCallback(
    (date: Date, howHeavy: string) => {
      const timestamp = String(date.getTime());

      setFlowData(
        (prev = {} as flowData) =>
          ({
            ...prev,
            [timestamp]: howHeavy,
          } as flowData)
      );
    },
    [setFlowData]
  );

  const weeks = useMemo(() => {
    return manyWeeks(numWeeks, localFlowData || {});
  }, [localFlowData]);
  return (
    <div className='flex h-96 flex-col justify-center'>
      <div className='relative flex h-full max-h-96 w-full flex-grow  items-center justify-center'>
        <div
          className={clsxm(
            'relative ',
            'h-full max-h-96 w-full max-w-md',
            'flex flex-col-reverse justify-center',
            'overflow-y-scroll overscroll-x-none',
            ' bg-white',
            'm-4'
          )}
          onScroll={handleScroll}
        >
          <div
            className={clsxm(
              'grid grid-cols-7 ',
              'absolute snap-y snap-always',
              'inset-x-4 bottom-4 gap-4 ',
              'animate-showScroll',

              wasScrolled && ['animate-none']
            )}
          >
            {Object.keys(weeks || {})
              .sort()
              .map((key) => {
                const date = new Date(Number(key));
                const howHeavy = (localFlowData || {})[key];
                return (
                  <BoxFactory
                    key={key}
                    date={date}
                    howHeavy={howHeavy}
                    handleFunction={handleChange}
                  />
                );
              })}
          </div>
        </div>
      </div>
      <div
        className='mx-auto grid w-full max-w-md grid-cols-7 gap-4 rounded-b-lg bg-white px-4 
      pb-4'
      >
        {['Mu', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((day) => (
          <div
            className=' text-gray--dark mx-auto h-full rounded-b-xl bg-gray-light-dark px-2 pb-1 text-center text-xs'
            key={day}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
*/

// generate storybook

import { Meta, Story } from '@storybook/react/types-6-0'
import * as React from 'react'

import Calendar from '@/components/calendar/Calendar'

export default {
  title: 'Period/Calendar',
  component: Calendar,
  decorators: [(Story) => <div className='h-full bg-gray-400'>{Story()}</div>],
} as Meta

const Template: Story = (args) => <Calendar {...args} />
export const Default = Template.bind({})
Default.args = {}

// blank page

export const Blank = Template.bind({})
Blank.args = {}
