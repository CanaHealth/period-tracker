import { ComponentPropsWithoutRef, FC, PropsWithChildren } from 'react'

import clsxm from '@/lib/clsxm'

type WeekGridProps = {
  backgroundColor?: 'gray-light' | 'gray-dark' | 'primary'
  className?: string
  isEmphasized?: boolean
} & ComponentPropsWithoutRef<'div'>

const WeekGrid: FC<PropsWithChildren<WeekGridProps>> = ({
  className,
  backgroundColor,
  isEmphasized = false,
  children,
}) => {
  // set size class

  return (
    <div
      className={clsxm(
        'relative  grid grid-cols-7 place-content-center place-items-center px-12',
        'h-12 sm:h-14 md:h-16',
        className
      )}
    >
      {children}
      <div
        className={clsxm(
          'absolute inset-x-8 inset-y-0 -z-10 h-full rounded-md border-b border-gray-200',
          [backgroundColor === 'gray-light' && 'bg-slate-100'],
          [backgroundColor === 'gray-dark' && 'bg-white'],
          [
            isEmphasized &&
              'rounded-none border-b-2 border-t-2 border-primary-500',
          ],

          className
        )}
      />
    </div>
  )
}

export default WeekGrid
