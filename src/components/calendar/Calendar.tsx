import {
  ComponentPropsWithoutRef,
  createRef,
  FC,
  useEffect,
  useState,
} from 'react'
import { CgCalendarToday } from 'react-icons/cg'
import { Virtuoso, VirtuosoHandle } from 'react-virtuoso'

import Week from '@/components/calendar/Week'

import { DataProvider } from '@/context/Data'
import { calcWeeksBetween } from '@/util/calendarFunc'
import { produceMondays, produceWeekOfDates } from '@/util/calendarFunc'

type CalendarProps = {
  hasChanged?: () => void
} & ComponentPropsWithoutRef<'div'>

// const produceWeek = (monday: Date,): Date[] => {
//   const week = produceWeekOfDates(monday)
//   const weekOfFlowData = {} as flowData
//   week.map((date) => {
//     const timestamp = date.getTime()
//     return (weekOfFlowData[timestamp] = 'light')
//   })
//   return weekOfFlowData
// }

// const generateWeeks = (base: number, range: number): Date[][] => {
//   const mondays = produceMondays(base, base + range)
//   const weeks = mondays.map((monday) => produceWeekOfDates(monday))
//   return weeks
// }

const generateWeeks = (base: number, range: number): Date[][] => {
  const mondays = produceMondays(base, base + range)
  const weeks = mondays.map((monday) => produceWeekOfDates(monday))
  return weeks
}

const addWeekBetweenTag = (week: Date[]) => {
  // calculate the number of weeks between now and week[0]
  const weeksBetween = calcWeeksBetween(week[0]) - 2
  const weeksBetweenMod4 = weeksBetween % 4
  const showsWeeksBetweenTag = weeksBetweenMod4 == 0 && weeksBetween != 0

  if (showsWeeksBetweenTag) {
    return (
      <div
        id='weeks-between-tag'
        aria-label='Number of weeks between now and here'
        className='col-span-7 my-2 min-h-max w-full bg-brand-100 py-1 text-center text-xs text-brand-900'
      >
        {weeksBetween < 0 ? (
          <div>{`${weeksBetween * -1} weeks ago`}</div>
        ) : (
          <div>{`${weeksBetween} weeks in the future`}</div>
        )}
      </div>
    )
  }
}

const Calendar: FC<CalendarProps> = ({ hasChanged }) => {
  const [base, setBase] = useState(-50)
  const [todayIndex, setTodaysIndex] = useState(Math.abs(base))
  const [range, setRange] = useState(todayIndex * 2)
  const [weeks, setWeeks] = useState<Date[][]>(generateWeeks(base, range))

  useEffect(() => {
    setTodaysIndex(Math.abs(base))
    setRange(todayIndex * 2)
    setWeeks(generateWeeks(base, range))
  }, [base, range, todayIndex])

  const ref = createRef<VirtuosoHandle>()

  return (
    <DataProvider>
      <div className='relative mx-auto'>
        <div className='absolute left-0 z-10 h-full w-5 appearance-none rounded-b-xl border-l-2 border-brand-300' />
        <div className='absolute right-0 z-10 h-full w-5 appearance-none rounded-b-xl border-r-2 border-brand-300' />
        <div className='absolute bottom-0 z-10 h-5 w-full appearance-none rounded-b-xl border-b-2 border-brand-300' />
        <Virtuoso
          endReached={() => {
            setBase(base - 50)
          }}
          startReached={() => {
            setBase(base - 50)
          }}
          style={{
            height: '50vh',
          }}
          ref={ref}
          initialTopMostItemIndex={todayIndex - 2}
          className=' lg:max-w-x h-1/2 w-screen max-w-screen-xs sm:max-w-lg md:max-w-lg'
          data={weeks}
          itemContent={(i, week: Date[]) => {
            return (
              <>
                {addWeekBetweenTag(week)}
                <div
                  id='week-grid'
                  className='relative mx-auto grid h-16 grid-cols-7 place-content-center place-items-center px-1 sm:h-20 '
                >
                  <Week key={i} week={week} />
                </div>
              </>
            )
          }}
        />
        <div className='relative w-full'>
          <button
            id='scroll-to-today'
            onClick={() =>
              ref.current?.scrollToIndex({ index: todayIndex, align: 'center' })
            }
            className='absolute -top-20 right-8  flex h-12 w-12 items-center justify-center  rounded-full border border-brand-300 bg-white shadow-md hover:scale-110 hover:bg-brand-400 hover:text-white hover:shadow-xl active:scale-95 active:bg-white active:text-slate-700 sm:right-10 sm:-top-24 sm:h-16 sm:w-16'
          >
            <CgCalendarToday className=' h-full w-full p-2 text-brand-200' />
          </button>
        </div>
      </div>
    </DataProvider>
  )
}

export default Calendar
