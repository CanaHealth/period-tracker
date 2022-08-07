import * as React from 'react';
import { useEffect, useState } from 'react';

import FindMonday from '@/components/period/calendar/utils/FindMonday';

export default function MondayPage() {
  // useEffect to get todays date
  const [today, setToday] = useState(new Date());
  useEffect(() => {
    setToday(new Date());
  }, []);

  return (
    <main>
      <section className='layout min-h-screen py-20'>
        <FindMonday date={today} />
      </section>
    </main>
  );
}
