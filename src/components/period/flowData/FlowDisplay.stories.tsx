import { Meta, Story } from '@storybook/react/types-6-0'
import * as React from 'react'

import FlowDisplay from '@/components/period/flowData/FlowDisplay'

import { daysFrom, newToday } from '@/util/calendarFunc'

export default {
  title: 'Period/DataDisplay',
  component: FlowDisplay,
} as Meta

const today = newToday()

const Template: Story = (args) => (
  <FlowDisplay date={daysFrom(today, -2)} {...args} />
)

const Today = Template.bind({})
Today.args = {
  showLabel: true,
  isEmphasized: true,
}

const ShowDay = Template.bind({})
ShowDay.args = {
  showLabel: true,
}

const NoLabel = Template.bind({})
NoLabel.args = {
  showLabel: false,
}

const Small = Template.bind({})
Small.args = {
  size: 'sm',
}

const Large = Template.bind({})
Large.args = {
  size: 'lg',
}

export const FlowUndefined = Template.bind({})
FlowUndefined.args = {
  flow: undefined,
}

export const FlowHeavy = Template.bind({})
FlowHeavy.args = {
  flow: 'heavy',
}
export const FlowAverage = Template.bind({})
FlowAverage.args = {
  flow: 'average',
}

export const FlowLight = Template.bind({})
FlowLight.args = {
  flow: 'light',
}
