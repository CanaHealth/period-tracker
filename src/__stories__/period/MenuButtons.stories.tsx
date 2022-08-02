import { ComponentStory, Meta } from '@storybook/react';

import MenuButtons from '@/components/period/MenuButtons';

export default {
  title: 'MenuButtons',
  component: MenuButtons,
} as Meta;

const Template: ComponentStory<typeof MenuButtons> = (args) => (
  <MenuButtons {...args} />
);

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  children: <>📝</>,
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  children: <>📅</>,
};
