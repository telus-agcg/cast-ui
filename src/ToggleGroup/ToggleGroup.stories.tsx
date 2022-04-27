import * as React from 'react';

import { ToggleGroup, Toggle } from '../';

export default {
  title: 'Components/Data Entry',
  component: ToggleGroup,
  argTypes: {
    theme: {
      table: {
        disable: true,
      },
    },
    label: {
      control: {
        type: 'text',
      },
    },
    vertical: {
      control: {
        type: 'boolean',
      },
    },
    labelSize: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },
  },
};

export const _ToggleGroup = args => (
  <ToggleGroup {...args}>
    <Toggle toggleSize={'md'} checked={true} disabled={false} value="1" />
  </ToggleGroup>
);

_ToggleGroup.args = {
  label: 'This is my label',
  vertical: false,
  labelSize: 'md',
};
