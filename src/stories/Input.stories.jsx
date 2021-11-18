import React from 'react';

import { Input } from '../components/Input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Input {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'Label',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Label',
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  label: 'Label',
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  label: 'Label',
};
