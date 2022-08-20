/* eslint-disable no-case-declarations */
/*

* data structure:
  weeks:
    - days[]:
      > day:
        - FlowData:
          > howHeavy: string;
          > date: Date;

* component heirarchy:  
  Calender uses BoxFactory to generate a week of boxes at a time.
  BoxFactory builds a Box using thats days corrisponding FlowData
  -   Box takes BoxProps { date, color }
  -   NoteFlow takes and updates FlowData { howHeavy, date }
*/

import {
  ComponentPropsWithoutRef,
  FC,
  useCallback,
  useMemo,
  useState,
} from 'react'

import clsxm from '@/lib/clsxm'

import { FlowData } from '@/components/period/calendar/options/NoteFlow'

import { manyWeeks } from '@/util/calendarFunc'

import BoxFactory from './BoxFactory'
import { useIsomorphicLocalStorage } from './useIsomorphicLocalStorage'

const numWeeks = 15

const Calendar: FC<ComponentPropsWithoutRef<'div'>> = () => {
  // wasScrolled is used to diable the bounce animation
  const [wasScrolled, setWasScrolled] = useState(false)
  // check if the calender was scrolled
  const handleScroll = () => {
    setWasScrolled(true)
  }

  const [localFlowData, setFlowData] = useIsomorphicLocalStorage<FlowData>(
    'FLOWDATA',
    {} as FlowData
  )

  const handleChange = useCallback(
    (date: Date, howHeavy: string) => {
      const timestamp = String(date.getTime())

      setFlowData(
        (prev = {} as FlowData) =>
          ({
            ...prev,
            [timestamp]: howHeavy,
          } as FlowData)
      )
    },
    [setFlowData]
  )

  const weeks = useMemo(() => {
    return manyWeeks(numWeeks, localFlowData || {})
  }, [localFlowData])
  return (
    <div className='flex h-96 flex-col justify-center'>
      <div className='relative flex h-full max-h-96 w-full flex-grow  items-center justify-center'>
        <div
          className={clsxm(
            'relative ',
            'h-full max-h-96 w-full max-w-md',
            'flex flex-col-reverse justify-center',
            'overflow-y-scroll overscroll-x-none',
            ' bg-white',
            'm-4'
          )}
          onScroll={handleScroll}
        >
          <div
            className={clsxm(
              'grid grid-cols-7 ',
              'absolute snap-y snap-always',
              'inset-x-4 bottom-4 gap-4 ',
              'animate-showScroll',

              wasScrolled && ['animate-none']
            )}
          >
            {Object.keys(weeks || {})
              .sort()
              .map((key) => {
                const date = new Date(Number(key))
                const howHeavy = (localFlowData || {})[key]
                return (
                  <BoxFactory
                    key={key}
                    date={date}
                    howHeavy={howHeavy}
                    handleFunction={handleChange}
                  />
                )
              })}
          </div>
        </div>
      </div>
      <div
        className='mx-auto grid w-full max-w-md grid-cols-7 gap-4 rounded-b-lg bg-white px-4 
      pb-4'
      >
        {['Mu', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((day) => (
          <div
            className=' text-gray--dark mx-auto h-full  px-2 pb-1 text-center text-xs'
            key={day}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Calendar
