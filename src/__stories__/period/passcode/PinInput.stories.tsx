// PinInput.stories.tsx

import { ComponentStory, Meta } from '@storybook/react';

import PinInput from '@/components/pinCode/PinInput';

export default {
  title: 'Pin/PinInput',
  component: PinInput,
} as Meta;

const Template: ComponentStory<typeof PinInput> = (args) => (
  <PinInput {...args} />
);

/* note, PinInputProps are:
  placeholder: number;
  onChangeDigit: (value: number) => void;
*/

export const Default = Template.bind({});
Default.args = {
  placeholder: 0,
  onChangeDigit: (value: number) => {
    console.log(value);
  },
};
