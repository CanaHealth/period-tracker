import { ComponentPropsWithoutRef, FC, useState } from 'react'

import clsxm from '@/lib/clsxm'

import WeekGrid from '@/components/calendar/WeekGrid'
import FlowDisplay from '@/components/period/flowData/FlowDisplay'
import { flowData, optionOfFlow } from '@/components/period/flowData/utils'

import { isCurrentWeek, produceMondays, produceWeek } from '@/util/calendarFunc'

type CalendarProps = {
  className?: string
} & ComponentPropsWithoutRef<'div'>

const Calendar: FC<CalendarProps> = ({ className }) => {
  const [flowDataState, setFlowData] = useState<flowData>({})

  const updateFlowDataState = (date: Date, flow: optionOfFlow) => {
    const timestamp = String(date.getTime())
    setFlowData((prevFlowData) => ({
      ...prevFlowData,
      [timestamp]: flow,
    }))
  }

  const mondays = produceMondays(-2, 2)

  return (
    <div className={clsxm('', className)}>
      <div className=' box-content max-h-96 animate-showScroll overflow-hidden'>
        {mondays.map((monday, i) => {
          const backgroundColor = i % 2 === 0 ? 'gray-dark' : 'gray-light'
          return (
            <WeekGrid
              key={i}
              backgroundColor={backgroundColor}
              isEmphasized={isCurrentWeek(monday)}
            >
              {produceWeek(monday).map((date, j) => {
                const flow = flowDataState[String(date.getTime())]
                return (
                  <FlowDisplay
                    key={j}
                    date={date}
                    flow={flow}
                    handleClick={updateFlowDataState}
                  />
                )
              })}
            </WeekGrid>
          )
        })}
      </div>
      <WeekGrid>
        {['Mu', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((day) => (
          <div
            className='mx-auto bg-transparent text-center text-xs text-gray-700'
            key={day}
          >
            {day}
          </div>
        ))}
      </WeekGrid>
    </div>
  )
}

export default Calendar

/*

                  <FlowDisplay
                    key={j}
                    onClick={() => {})
                    date={date}

                  />

*/
