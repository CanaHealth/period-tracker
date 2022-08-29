const normalizeDate = (date: Date): Date => {
  const newDate = new Date(date)

  newDate.setUTCHours(8)
  newDate.setUTCMinutes(0)
  newDate.setUTCSeconds(0)
  newDate.setUTCMilliseconds(0)

  return newDate
}

const today = normalizeDate(new Date())

const isToday = (date: Date): boolean => {
  return date.getTime() === today.getTime()
}

const newToday = () => {
  return today
}

const produceYearMonthDay = (date: Date): string => {
  return date.toISOString().slice(0, 10)
}

const dayOfWeekFromISOString = (ISOdate: string): string => {
  return ISOdate.split('-')[2]
}

const dayOfMiliseconds = 1000 * 60 * 60 * 24
const weekOfMiliseconds = dayOfMiliseconds * 7

const daysFrom = (date: Date, days: number) => {
  return normalizeDate(new Date(date.getTime() + dayOfMiliseconds * days))
}

const weeksFrom = (date: Date, weeks: number) => {
  return normalizeDate(new Date(date.getTime() + weekOfMiliseconds * weeks))
}

const findPrevMonday = (date: Date) => {
  const monday = new Date(date)
  monday.setDate(date.getDate() - ((date.getDay() + 6) % 7))
  return normalizeDate(monday)
}

const isCurrentWeek = (date: Date): boolean => {
  return findPrevMonday(today).getTime() === findPrevMonday(date).getTime()
}

// const weekOfDates = (monday: Date, flowInfoFromStorage: flowData): flowData => {
//   const days: flowData = {}
//   const mondayInTest = findPrevMonday(monday)
//   const defaultFlow = 'none'

//   for (let i = 0; i < 7; i++) {
//     const step = i
//     const day = daysFrom(mondayInTest, step)
//     const timestamp = day.getTime()
//     const dayFlow = flowInfoFromStorage[timestamp] || defaultFlow

//     days[timestamp] = dayFlow
//   }

//   return days
// }

const produceMondays = (from: number, to: number): Date[] => {
  const mondays = []
  for (let i = from; i <= to; i++) {
    mondays.push(weeksFrom(findPrevMonday(today), i))
  }
  return mondays
}

const produceWeek = (startDate: Date): Date[] => {
  const startNormalized = normalizeDate(startDate)
  const week = [0, 1, 2, 3, 4, 5, 6].map((day) => {
    return daysFrom(startNormalized, day)
  })
  return week
}

const isEvenMonth = (date: Date): boolean => {
  return date.getMonth() % 2 === 0
}

// const manyWeeks = (
//   numWeeks: number,
//   flowInfoFromStorage: flowData
// ): flowData => {
//   const weeks: flowData = {}
//   for (let i = 0; i < numWeeks; i++) {
//     const step = i
//     const monday = weeksFrom(findPrevMonday(today), -step)
//     const week = weekOfDates(monday, flowInfoFromStorage)
//     Object.assign(weeks, week)
//   }
//   return weeks
// }

export {
  dayOfMiliseconds,
  dayOfWeekFromISOString,
  daysFrom,
  findPrevMonday,
  isCurrentWeek,
  isEvenMonth,
  isToday,
  // manyWeeks,
  newToday,
  normalizeDate,
  produceMondays,
  produceWeek,
  produceYearMonthDay,
  // weekOfDates,
  weekOfMiliseconds,
  weeksFrom,
}

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
