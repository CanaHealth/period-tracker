const normalizeDate = (date: Date): Date => {
  const newDate = new Date(date);

  newDate.setHours(8);
  newDate.setMinutes(0);
  newDate.setSeconds(0);
  newDate.setMilliseconds(0);

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

const weekOfDates = (mondayOfWeek: Date) => {
  const days = [];
  const monday = findPrevMonday(mondayOfWeek);
  for (let i = 0; i < 7; i++) {
    const step = i;

    const day = new Date(monday.getTime());
    day.setDate(monday.getDate() + step);

    const howHeavy = 'none';
    const timestamp = day.getTime();

    days.push({ [timestamp]: howHeavy });
  }
  return days;
};

const manyWeeks = (weeks: number) => {
  const weeksArray = [];
  for (let i = 0; i < weeks; i++) {
    const step = i;
    const monday = weeksFrom(today, step);
    weeksArray.push(weekOfDates(monday));
  }
  return weeksArray;
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
