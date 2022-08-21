import { ComponentPropsWithoutRef, FC, PropsWithChildren } from 'react'

import clsxm from '@/lib/clsxm'

type DisplayTheDayProps = {
  onClick?: () => void
  onHoverClass?: string
  onActiveClass?: string
  onFocusClass?: string
  shouldTransition?: boolean
  className?: string
} & ComponentPropsWithoutRef<'div'>

const DisplayTheDay: FC<PropsWithChildren<DisplayTheDayProps>> = ({
  onClick,
  onHoverClass,
  onActiveClass,
  onFocusClass,
  shouldTransition,
  className,
  children,
}) => {
  // if onclick function exists set shouldOnClick to true
  const shouldOnClick = onClick ? true : false

  return (
    <div
      className={clsxm(
        '',
        className,
        onHoverClass,
        onActiveClass,
        onFocusClass,
        [shouldTransition && 'transition-all ease-out']
      )}
    >
      {children}
    </div>
  )
}

export default DisplayTheDay
