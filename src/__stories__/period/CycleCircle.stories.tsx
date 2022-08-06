import { ComponentStory, Meta } from '@storybook/react';

import CycleCircle from '@/components/period/extra/CycleCircle';

export default {
  title: 'CycleCircle',
  component: CycleCircle,
} as Meta;

const Template: ComponentStory<typeof CycleCircle> = (args) => (
  <CycleCircle {...args} />
);

export const Week = Template.bind({});
Week.args = {
  timeString: 'in week',
  numberString: '4',
};

export const Day = Template.bind({});
Day.args = {
  timeString: 'on day',
  numberString: '6',
};
