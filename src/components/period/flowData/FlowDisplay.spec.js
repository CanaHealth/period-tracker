import { describe, expect, it } from '@jest/globals'
import { render } from '@testing-library/react'

// import storybook
import { FlowLight } from '@/components/period/flowData/FlowDisplay.stories'

describe('FlowDisplay', () => {
  it('renders without crashing', () => {
    const { container } = render(<FlowLight />)
    expect(container).toBeInTheDocument()
  })
})
