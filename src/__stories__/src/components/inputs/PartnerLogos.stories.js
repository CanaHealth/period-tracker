import Logo from '@/components/images/logos/Logo';

export default {
  title: 'Media/Partners Logo',
  component: Logo,
};
const Template = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
  PartnersLogo: 'AGNR',
};
