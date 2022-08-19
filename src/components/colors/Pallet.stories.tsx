import { ComponentStory, Meta } from '@storybook/react'

import ColorPalette from '@/components/colors/ColorPalette'

export default {
  title: 'Components/ColorPalette',
  component: ColorPalette,
  viewMode: 'docs',
} as Meta

const Template: ComponentStory<typeof ColorPalette> = (args) => (
  <ColorPalette {...args} />
)

const colors = {
  blue: { 63: '#5f62e4', 81: '#afbef1', 87: '#dcd9e3', 93: '#e7edf8' },
  electric_cyan: { 81: '#b8dee9', 91: '#d8fcfc', 95: '#eff4f9' },
  gray: {
    59: '#949799',
    72: '#b7bcba',
    98: '#f8fafc',
    99: '#fcfcfd',
    '99_': '#feffff',
  },
  flow: { heavy: '#FD9AA7', average: '#FCCCD3', light: '#FCE5E8' },
}

export const Default = Template.bind({})
Default.args = {
  colors: colors,
}
