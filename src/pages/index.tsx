import { FlowData } from '@/components/period/calendar/options/NoteFlow';

import Calendar from '../components/period/calendar/Calendar';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F

// calender:
// BoxWithNoteFlowProps = { currentFlowData: FlowData }
// FlowData = {  howHeavy: string;  date: Date; }};

const findMonday = (date: Date) => {
  const monday = new Date(date);
  monday.setDate(date.getDate() - ((date.getDay() + 6) % 7));
  return monday;
};

// Create a cakender example by hardcoding one week of data.
const today = new Date();

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

const weeks = weekFactory(today, 5);

export default function HomePage() {
  return (
    <div className='h-screen'>
      <Calendar weeks={weeks} />
    </div>
  );
}
