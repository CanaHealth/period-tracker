import { Meta, Story } from '@storybook/react/types-6-0'
import * as React from 'react'

import FlowDisplay from '@/components/period/flowData/FlowDisplay'

import { daysFrom, newToday } from '@/util/calendarFunc'

export default {
  title: 'Period/DataDisplay',
  component: FlowDisplay,
} as Meta

const today = newToday()

const tomorrow = daysFrom(today, 1)

const Template: Story = (args) => (
  <FlowDisplay {...args} />
)