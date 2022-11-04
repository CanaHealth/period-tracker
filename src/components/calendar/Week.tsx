import { ComponentPropsWithoutRef, FC, memo, PropsWithChildren } from 'react'

import clsxm from '@/lib/clsxm'

import FlowDisplay from '@/components/period/flowData/FlowDisplay'

import { isCurrentWeek } from '@/util/calendarFunc'

type WeekGridProps = {
  week: Date[]
  backgroundColor?: 'gray-light' | 'gray-dark' | 'brand'
  className?: string
  // isEmphasized?: boolean
} & ComponentPropsWithoutRef<'div'>

const WeekGrid: FC<PropsWithChildren<WeekGridProps>> = ({
  week,
  className,
}) => {
  return (
    <>
      {week.map((date, index) => {
        return <FlowDisplay key={index} date={date} />
      })}
      <div
        className={clsxm(
          'absolute inset-x-0 inset-y-0 -z-10 h-full rounded-md  border-slate-200',
          [isCurrentWeek(week[0]) && 'rounded-none bg-brand-300'],
          className
        )}
      />
    </>
  )
}

export default memo(WeekGrid)
