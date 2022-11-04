export const normalizeDate = (date: Date): Date => {
  const newDate = new Date(date)

  newDate.setUTCHours(8)
  newDate.setUTCMinutes(0)
  newDate.setUTCSeconds(0)
  newDate.setUTCMilliseconds(0)

  return newDate
}

export const today = normalizeDate(new Date())

export const isTodayCheck = (date: Date): boolean => {
  return date.getTime() === today.getTime()
}

export const newToday = () => {
  return today
}

export const produceYearMonthDay = (date: Date): string => {
  return date.toISOString().slice(0, 10)
}

export const dayOfWeekFromISOString = (ISOdate: string): string => {
  return ISOdate.split('-')[2]
}

export const dayOfMiliseconds = 1000 * 60 * 60 * 24
export const weekOfMiliseconds = dayOfMiliseconds * 7

export const daysFrom = (date: Date, days: number) => {
  return normalizeDate(new Date(date.getTime() + dayOfMiliseconds * days))
}

export const weeksFrom = (date: Date, weeks: number) => {
  return normalizeDate(new Date(date.getTime() + weekOfMiliseconds * weeks))
}

export const findPrevMonday = (date: Date) => {
  const monday = new Date(date)
  monday.setDate(date.getDate() - ((date.getDay() + 6) % 7))
  return normalizeDate(monday)
}

export const isCurrentWeek = (date: Date): boolean => {
  return findPrevMonday(today).getTime() === findPrevMonday(date).getTime()
}

export const calcWeeksBetween = (date: Date) =>
  Math.floor((date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24 * 7) + 1)

export const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

export const findWeekday = (date: Date): string => {
  return weekdays[date.getDay()]
}

export const produceMondays = (from: number, to: number): Date[] => {
  const mondays = []
  for (let i = from; i <= to; i++) {
    mondays.push(weeksFrom(findPrevMonday(today), i))
  }
  return mondays
}

export const produceWeekOfDates = (startDate: Date): Date[] => {
  const startNormalized = findPrevMonday(startDate)
  const week = [0, 1, 2, 3, 4, 5, 6].map((day) => {
    return daysFrom(startNormalized, day)
  })
  return week
}

export const isEvenMonth = (date: Date): boolean => {
  return date.getMonth() % 2 === 0
}
