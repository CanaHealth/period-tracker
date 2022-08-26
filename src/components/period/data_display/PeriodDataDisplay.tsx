import {
  ComponentPropsWithoutRef,
  FC,
  PropsWithChildren,
  ReactNode,
} from 'react'

import clsxm from '@/lib/clsxm'

type opacityOptions = '50' | '75' | '100' | 50 | 75 | 100

type PeriodDataDisplayProps = {
  label: string
  icon?: ReactNode
  shape?: string
  bgColor?: string
  opacity?: opacityOptions
  onClick?: () => void
  className?: string
} & ComponentPropsWithoutRef<'button'>

const PeriodDataDisplay: FC<PropsWithChildren<PeriodDataDisplayProps>> = ({
  bgColor = 'bg-gray-mid-light',
  opacity = '100',
  onClick,
  className,
  label,
}) => {
  // TODO:

  return (
    <button
      onClick={onClick}
      aria-label={label}
      className={clsxm(
        'group flex items-center justify-center transition-all ease-out',
        className,
        'hover:border-dark-dark hover:scale-110 hover:shadow-md',
        'h-7 w-7 rounded-md sm:h-8 sm:w-8',
        bgColor,
        [opacity ? `opacity-${opacity}` : 'opacity-100']
      )}
    >
      <div
        // make the lable visible on hover
        className={clsxm('opacity-0 group-hover:opacity-100', [
          label ? 'opacity-100' : '',
        ])}
      >
        {label}
      </div>
    </button>
  )
}

export default PeriodDataDisplay

/*

* composition of the dailyPerdiodDataDisplay

Shape: small rounded square

Color: light, average, heavy

Opacity:
  0.5: even months
  1: odd months

label:
  day in month - 1..31
  icon:  iBsDroplet, iBsDropletHalf, iBsDropletFill,
  defualt: dayInMonth
*/
