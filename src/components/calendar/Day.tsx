import { ComponentPropsWithoutRef, FC } from 'react'

import clsxm from '@/lib/clsxm'

import FlowDisplay from '@/components/period/flowData/FlowDisplay'
import { flow } from '@/components/period/flowData/utils'

type DayProps = {
  date: Date
  flow?: flow
  className?: string
  onClick?: () => void
} & ComponentPropsWithoutRef<'div'>

const Day: FC<DayProps> = ({ date, flow, className, onClick }) => {
  return (
    <div className={clsxm('', className)}>
      <FlowDisplay date={date} flow={flow} onClick={onClick} />
    </div>
  )
}

export default Day
