import { FlowData } from '@/components/period/calendar/options/NoteFlow';
import TitleText from '@/components/period/extra/TitleText';

import Calendar from '../components/period/calendar/Calendar';

const findMonday = (date: Date) => {
  const monday = new Date(date);
  monday.setDate(date.getDate() - ((date.getDay() + 6) % 7));
  return monday;
};

const weekFactory = (date: Date, num: number) => {
  const weeks: { days: FlowData[] }[] = [];
  for (let i = 0; i < num; i++) {
    const step = i * 7;
    const weekToProcess = new Date(date.getTime());
    weekToProcess.setDate(date.getDate() - step);
    const mondayOfWeek = findMonday(weekToProcess);
    const days: FlowData[] = [];

    for (let j = 0; j < 7; j++) {
      const step = j;

      const day = new Date(mondayOfWeek.getTime());
      day.setDate(mondayOfWeek.getDate() + step);

      const howHeavy = 'none';

      days.push({ howHeavy, date: day });
    }
    weeks.unshift({ days });
  }

  return weeks;
};

const today = new Date();
const weeks = weekFactory(today, 5);
const userName = 'Gianna';

export default function HomePage() {
  return (
    <main className='min-h-screen'>
      <div className='mx-auto flex h-screen max-w-md flex-col justify-between'>
        <div className='mx-3 rounded-b-lg bg-gray-98'>
          <Calendar weeks={weeks} />
        </div>
        <div className='mx-8 mb-auto mt-16'>
          <TitleText username={userName} />
        </div>
      </div>
    </main>
  );
}

/*
          <div className=' flex  w-11/12 flex-col space-y-4 md:mr-auto'>
            <InfoCallout description='Chance of Pregnancy' value='low' />
            <InfoCallout description='Next Cycle In' value='2 weeks' />
          </div>

                      <CycleCircle timeString='on day' numberString='5' />

        div className='relative flex flex-row items-end justify-around p-2'>
          <MenuButtons size='sm'>⚙️</MenuButtons>
          <MenuButtons size='lg'>📝</MenuButtons>
          <MenuButtons size='sm'>📅</MenuButtons>
          <div className='absolute inset-0 -z-10 rounded-t-3xl bg-gray-98' />
        </div>
*/
