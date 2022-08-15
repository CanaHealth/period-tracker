import * as React from 'react';

import { FlowData } from '@/components/period/calendar/options/NoteFlow';

const findMonday = (date: Date) => {
  const monday = new Date(date);
  monday.setDate(date.getDate() - ((date.getDay() + 6) % 7));
  return monday;
};

const buildMockFlowData = (): FlowData[] => {
  const today = new Date();
  const mondayOfWeek = findMonday(today);
  const days: FlowData[] = [];

  for (let j = 0; j < 7; j++) {
    const step = j;

    const day = new Date(mondayOfWeek.getTime());
    day.setDate(mondayOfWeek.getDate() + step * 2);

    const howHeavy = 'none';

    days.push({ howHeavy, date: day });
  }
  return days;
};

const mockFlowData = buildMockFlowData();

export default function CalPage() {
  return (
    <main>
      <section className='layout min-h-screen py-20'>
        {JSON.stringify(mockFlowData)}
      </section>
    </main>
  );
}
