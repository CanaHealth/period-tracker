/*

import {
  ComponentPropsWithoutRef,
  FC,
  PropsWithChildren,
  ReactNode,
} from 'react'

import clsxm from '@/lib/clsxm'

type opacity = '50' | '75' | '100'

type PeriodDataDisplayProps = {
  onHoverClass?: string
  onActiveClass?: string
  onFocusClass?: string
  className?: string
  shape?: string
  color?: string
  opacity?: opacity
  label?: ReactNode
  onClick?: () => void
} & ComponentPropsWithoutRef<'div'>

const PeriodDataDisplay: FC<PropsWithChildren<PeriodDataDisplayProps>> = ({
  onHoverClass = 'hover:scale-110 hover:shadow-md hover:border-dark-dark',
  onActiveClass = '',
  onFocusClass = '',
  shape = 'rounded-md w-7 h-7 sm:w-8 sm:h-8',
  color = 'bg-gray-mid-light',
  opacity = '100',
  onClick,
  className,
  label,
}) => {
  // TODO:

  return (
    <button
      onClick={onClick}
      className={clsxm(
        'flex items-center justify-center transition-all ease-out',
        className,
        onHoverClass,
        onActiveClass,
        onFocusClass,
        shape,
        color,
        [opacity ? `opacity-${opacity}` : 'opacity-100']
      )}
    >
      {label}
    </button>
  )
}

export default PeriodDataDisplay

*/

/* eslint-disable unused-imports/no-unused-imports */
import { afterAll, clearAllMocks, describe, expect, it, screen } from '@jest/globals'
import { cleanup, fireEvent, render } from '@testing-library/react'
import { axe } from 'jest-axe'

import PeriodDataDisplay from '@/components/period/data_display/PeriodDataDisplay'

afterAll(() => {
  clearAllMocks()
  cleanup()
  localStorage.clear()
})

const defualtPeriodDataDisplayProps = {
  label: (
    <div>
      <span>label</span>
    </div>
  )
}



describe('PeriodDataDisplay', () => {
  // accessibility testsß
  it('should have no a11y violations', async () => {
    const { container } = render(<PeriodDataDisplay {...defualtPeriodDataDisplayProps} />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  // unit tests
  it('should render', () => {
    render(<PeriodDataDisplay {...defualtPeriodDataDisplayProps} />)
  })



})
