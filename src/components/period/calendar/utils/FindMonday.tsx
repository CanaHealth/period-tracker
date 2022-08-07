import * as React from 'react';

import clsxm from '@/lib/clsxm';

type FindMondayProps = {
  date: Date;
  className?: string;
} & React.ComponentPropsWithoutRef<'div'>;

const FindMonday: React.FC<FindMondayProps> = ({ date, className }) => {
  // function for finding the previous monday relative to the date past in props
  const findMonday = (date: Date) => {
    const monday = new Date();
    monday.setDate(date.getDate() - ((date.getDay() + 6) % 7));
    return monday;
  };

  const today = new Date();
  const currentPrevMonday = findMonday(today);
  const mondayOfDate = findMonday(date);
  const currentWeek =
    currentPrevMonday.toLocaleDateString() == mondayOfDate.toLocaleDateString();

  return (
    <div className={clsxm('', className)}>
      <h1 className=' bg-flow-default '>Today:</h1>
      <p>{today.toLocaleDateString()}</p>
      <h1>Date:</h1>
      <p>{date.toLocaleDateString()}</p>
      <h1>Current Previous Monday</h1>
      <p>{currentPrevMonday.toLocaleDateString()}</p>
      <h1>Previous Monday of Date:</h1>
      <p>{mondayOfDate.toLocaleDateString()}</p>
      <h1>Current Week:</h1>
      <p>{currentWeek ? 'true' : 'false'}</p>
    </div>
  );
};

export default FindMonday;
