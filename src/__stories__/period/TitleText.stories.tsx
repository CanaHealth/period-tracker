import { ComponentStory, Meta } from '@storybook/react';

import TitleText from '@/components/period/TitleText';

export default {
  title: 'TitleText',
  component: TitleText,
} as Meta;

const Template: ComponentStory<typeof TitleText> = (args) => (
  <TitleText {...args} />
);

export const ShortName = Template.bind({});
ShortName.args = {
  username: 'Gianna',
};
