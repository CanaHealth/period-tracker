import {
  ComponentPropsWithoutRef,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
} from 'react'

import clsxm from '@/lib/clsxm'

import { cycleFlow, flowData } from '@/components/period/flowData/utils'

import { Data } from '@/context/Data'
import { isCurrentWeek } from '@/util/calendarFunc'
import {
  findWeekday,
  isEvenMonth,
  isTodayCheck,
  produceYearMonthDay,
} from '@/util/calendarFunc'

import Droplet from './Droplet'

export type FlowDisplayProps = {
  date: Date
  // handleClick?: (date: Date, flow: optionOfFlow) => void
  className?: string
} & ComponentPropsWithoutRef<'button'>

const FlowDisplay: FC<PropsWithChildren<FlowDisplayProps>> = ({
  date,
  className,
}) => {
  const timestamp = String(date.getTime())
  const { state, setState } = useContext(Data)

  const flow = state[timestamp]

  const whenClicked = useCallback(() => {
    const nextFlow = cycleFlow(flow)
    if (nextFlow) {
      setState((prevState: flowData) => ({
        ...prevState,
        [timestamp]: nextFlow,
      }))
    } else {
      setState((prevState: flowData) => {
        //creste new object that contains everything except prevState[timestamp]
        const { [timestamp]: _, ...newState } = prevState
        return newState
      })
    }
  }, [flow, setState, timestamp])

  const isToday = isTodayCheck(date)

  const yearMonthDay = produceYearMonthDay(date)

  const dayOfMonth = yearMonthDay.split('-')[2]

  const firstDayOfMonth = dayOfMonth === '01'

  const monthName = date.toDateString().split(' ')[1]

  const dayOfWeek = findWeekday(date)

  return (
    <button
      //  Button background color handles the color for flow, and today.
      onClick={() => {
        whenClicked()
      }}
      aria-describedby={`${yearMonthDay}-description`}
      role='button'
      className={clsxm(
        className,
        'hover:border-dark-dark md:text-md group relative flex h-9 w-9 items-center justify-center rounded-md bg-brand-200 text-sm transition-all ease-out hover:scale-110 hover:shadow-md active:scale-100 sm:w-12 md:h-12',
        [
          isEvenMonth(date) ? 'bg-brand-200' : 'bg-brand-100',
          isToday && 'border-slate-600 bg-slate-800 text-white opacity-100',
          isCurrentWeek(date) && 'border-2 border-slate-200',
          flow && `bg-flow-${flow} text-black`,
        ]
      )}
    >
      <label
        // This lable handles the on hover display
        // the display hierarchy is: 1) Flow 2) New Month 3) Day of week
        htmlFor={yearMonthDay}
        id='weekday-or-month-label'
        aria-hidden='true'
        className={clsxm('flex items-center justify-center', [
          !flow && !firstDayOfMonth && !isToday && 'hidden group-hover:flex',
        ])}
      >
        {flow ? (
          <Droplet flow={flow} />
        ) : firstDayOfMonth ? (
          monthName
        ) : (
          dayOfWeek
        )}
      </label>

      <span className='sr-only' id={`${yearMonthDay}-description`}>
        {`logged flow` + (flow ? flow : 'none')}
      </span>
    </button>
  )
}

export default FlowDisplay
