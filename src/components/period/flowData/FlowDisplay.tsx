import { ComponentPropsWithoutRef, FC, PropsWithChildren } from 'react'
import { useCallback } from 'react'
import { BsDroplet } from 'react-icons/bs'

import clsxm from '@/lib/clsxm'

import {
  findColorClass,
  optionOfFlow,
} from '@/components/period/flowData/utils'

import {
  daysFrom,
  isEvenMonth,
  isToday,
  normalizeDate,
  produceYearMonthDay,
} from '@/util/calendarFunc'

type FlowDisplayProps = {
  date: Date
  flow?: optionOfFlow
  showLabel?: boolean
  handleClick?: (date: Date, flow: optionOfFlow) => void
  className?: string
} & ComponentPropsWithoutRef<'button'>

const cycleFlow = (flow: optionOfFlow) => {
  switch (flow) {
    case undefined:
      return 'light'
    case 'light':
      return 'average'
    case 'average':
      return 'heavy'
    case 'heavy':
      return undefined
  }
}

const FlowDisplay: FC<PropsWithChildren<FlowDisplayProps>> = ({
  handleClick,
  date,
  flow,
  showLabel = false,
  className,
}) => {
  const whenClicked = useCallback(() => {
    const nextFlow = cycleFlow(flow)

    handleClick && handleClick(date, nextFlow)
  }, [flow, handleClick, date])

  const isEmphasized = isToday(date)

  const yearMonthDay = produceYearMonthDay(date)

  const opacity = isEvenMonth(date) ? '50' : '100'

  const colorClass = findColorClass(flow)

  const dayOfMonth = yearMonthDay.split('-')[2]

  return (
    <button
      onClick={() => {
        whenClicked()
      }}
      aria-label={yearMonthDay}
      aria-describedby={`${yearMonthDay}-description`}
      role='button'
      className={clsxm(
        className,
        'group relative flex items-center justify-center bg-primary-200 transition-all ease-out',
        'hover:border-dark-dark hover:scale-110 hover:shadow-md active:scale-100',
        'rounded-md',
        'h-7 w-7 text-xs',
        'sm:h-8 sm:w-8 sm:text-sm',
        'md:text-md md:h-10 md:w-10',
        [opacity === '50' && ' bg-primary-300'],

        [isEmphasized ? 'border-2 border-black text-gray-900 opacity-100' : ''],
        colorClass
      )}
    >
      <label
        className={clsxm(
          'opacity-0 group-hover:opacity-100',
          [showLabel ? 'opacity-100' : ''],
          [isEmphasized ? 'opacity-100' : '']
        )}
      >
        {dayOfMonth}
      </label>
      <div
        aria-hidden='true'
        className={clsxm(
          ' absolute inset-0 flex flex-col items-center justify-center text-lg group-hover:hidden',
          [showLabel ? 'hidden' : ''],
          [flow === 'heavy' && '  scale-100 text-black'],
          [flow === 'average' && 'scale-90  text-black'],
          [flow === 'light' && '  scale-75  text-black']
        )}
      >
        <BsDroplet />
      </div>
      <span className='hidden' id={`${yearMonthDay}-description`}>
        {`logged flow` + (flow ? flow : 'none')}
      </span>
    </button>
  )
}

export default FlowDisplay

// export const produceWeek = (startDate: Date): JSX.Element[] => {
//   const startNormalized = normalizeDate(startDate)
//   const todayIs = newToday()
//   const week = [0, 1, 2, 3, 4, 5, 6].map((day) => {
//     const date = daysFrom(startNormalized, day)
//     const ISOstring = produceYearMonthDay(date)
//     const opacity = date.getMonth() % 2 === 0 ? 75 : 100
//     const isToday = date.getTime() === todayIs.getTime()
//     return (
//       <FlowDisplay
//         key={`${ISOstring}`}
//         yearMonthDay={ISOstring}
//         opacity={opacity}
//         isEmphasized={isToday}
//       />
//     )
//   })
//   return week
// }

export const produceWeek = (startDate: Date): Date[] => {
  const startNormalized = normalizeDate(startDate)
  const week = [0, 1, 2, 3, 4, 5, 6].map((day) => {
    return daysFrom(startNormalized, day)
  })
  return week
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

//   }

//   return days
// }
