import * as React from 'react';

import { ToggleGroup, Toggle } from '../';

export default {
  title: 'ToggleGroup',
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

export const ToggleGroupWithTitle = args => (
  <ToggleGroup {...args}>
    <Toggle toggleSize={'md'} checked={true} disabled={false} value="1" />
  </ToggleGroup>
);

ToggleGroupWithTitle.args = {
  label: 'This is my label',
  vertical: false,
  labelSize: 'md',
};

ToggleGroupWithTitle.story = {
  name: 'ToggleGroup with Title',

  parameters: {
    info: {
      text: `
        ### Notes
        This is a InputGroup
      `,
    },
  },
};
