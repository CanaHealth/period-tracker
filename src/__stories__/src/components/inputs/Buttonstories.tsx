import { ComponentStory, Meta } from '@storybook/react';

import Button from '@/components/buttons/Button';

export default {
  title: 'Inputs/Button',
  component: Button,
  viewMode: 'docs',
} as Meta;

const Template: ComponentStory<typeof Button> = (args) => (
  <div className=''>
    <Button {...args} />;
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};

export const Outline = Template.bind({});
Outline.args = {
  variant: 'outline',
  children: 'Button',
};

export const Ghost = Template.bind({});
Ghost.args = {
  variant: 'ghost',
  children: 'Button',
};

export const Light = Template.bind({});
Light.args = {
  variant: 'light',
  children: 'Button',
};

export const Dark = Template.bind({});
Dark.args = {
  variant: 'dark',
  children: 'Button',
};
