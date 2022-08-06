import * as React from 'react';

import * as calendarArgs from '@/lib/calendarArgs';

import Calendar from '@/components/period/calendar/Calendar';
import CycleCircle from '@/components/period/extra/CycleCircle';
import InfoCallout from '@/components/period/InfoCallout';
import MenuButtons from '@/components/period/MenuButtons';
import TitleText from '@/components/period/TitleText';

const CalendarArgs = [
  calendarArgs.HistoricalWeekArgs,
  calendarArgs.HistoricalWeekArgs,
  calendarArgs.HistoricalWeekWithOvulationArgs,
  calendarArgs.HistoricalWeekArgs,
  calendarArgs.FlowWeekArgs,
  calendarArgs.CurrentWeekArgs,
];

const userName = 'Gianna';

export default function HomePage() {
  return (
    <main className='min-h-screen'>
      <section className=' mx-auto grid min-h-screen max-w-2xl grid-flow-row items-center bg-gray-100'>
        <div className='mx-3 mb-auto rounded-b-lg bg-white pb-4'>
          <Calendar calender={CalendarArgs} />
        </div>
        <section className='mx-3 my-auto mb-auto flex items-center justify-between'>
          <div>
            <TitleText username={userName} />
          </div>
          <div>
            <CycleCircle timeString='on day' numberString='5' />
          </div>
        </section>
        <div className=' flex  w-11/12 flex-col space-y-4 md:mr-auto'>
          <InfoCallout description='Chance of Pregnancy' value='low' />
          <InfoCallout description='Next Cycle In' value='2 weeks' />
        </div>
        <div className='mt-auto flex flex-row items-end justify-around p-2'>
          <MenuButtons size='sm'>⚙️</MenuButtons>
          <MenuButtons size='lg'>📝</MenuButtons>
          <MenuButtons size='sm'>📅</MenuButtons>
        </div>
      </section>
    </main>
  );
}
