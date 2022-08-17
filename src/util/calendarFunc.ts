import { FlowData } from '@/components/period/calendar/options/NoteFlow';

const normalizeDate = (date: Date): Date => {
  const newDate = new Date(date);

  newDate.setUTCHours(8);
  newDate.setUTCMinutes(0);
  newDate.setUTCSeconds(0);
  newDate.setUTCMilliseconds(0);

  return newDate;
};

const today = normalizeDate(new Date());

const newToday = () => {
  return today;
};

const dayOfMiliseconds = 1000 * 60 * 60 * 24;
const weekOfMiliseconds = dayOfMiliseconds * 7;

const daysFrom = (date: Date, days: number) => {
  return normalizeDate(new Date(date.getTime() + dayOfMiliseconds * days));
};

const weeksFrom = (date: Date, weeks: number) => {
  return normalizeDate(new Date(date.getTime() + weekOfMiliseconds * weeks));
};

const findPrevMonday = (date: Date) => {
  const monday = new Date(date);
  monday.setDate(date.getDate() - ((date.getDay() + 6) % 7));
  return normalizeDate(monday);
};

const weekOfDates = (monday: Date, flowInfoFromStorage: FlowData): FlowData => {
  const days: FlowData = {};
  const mondayInTest = findPrevMonday(monday);
  const defaultFlow = 'none';

  for (let i = 0; i < 7; i++) {
    const step = i;
    const day = daysFrom(mondayInTest, step);
    const timestamp = day.getTime();
    const dayFlow = flowInfoFromStorage[timestamp] || defaultFlow;

    days[timestamp] = dayFlow;
  }

  return days;
};

const manyWeeks = (
  numWeeks: number,
  flowInfoFromStorage: FlowData
): FlowData => {
  const weeks: FlowData = {};
  for (let i = 0; i < numWeeks; i++) {
    const step = i;
    const monday = weeksFrom(findPrevMonday(today), -step);
    const week = weekOfDates(monday, flowInfoFromStorage);
    Object.assign(weeks, week);
  }
  return weeks;
};

export {
  dayOfMiliseconds,
  daysFrom,
  findPrevMonday,
  manyWeeks,
  newToday,
  normalizeDate,
  weekOfDates,
  weekOfMiliseconds,
  weeksFrom,
};

/*
const weekFactory = (date: Date, num: number) => {
  const weeks: { days: Date[] }[] = [];
  for (let i = 0; i < num; i++) {
    const step = i * 7;
    const weekToProcess = new Date(date.getTime());
    weekToProcess.setDate(date.getDate() - step);
    const mondayOfWeek = findMonday(weekToProcess);
    const days: Date[] = [];

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

*/
