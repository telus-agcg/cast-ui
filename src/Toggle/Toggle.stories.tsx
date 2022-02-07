import * as React from 'react';

import { Toggle } from '../';

export default {
  title: 'Components/Inputs/Toggle',
  component: Toggle,
  argTypes: {
    toggleSize: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },
    checked: {
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onChange: {
      action: 'onChange',
    },
    id: {
      control: false,
    },
    defaultChecked: {
      control: false,
    },
    label: {
      control: false,
    },
    value: {
      control: false,
    },
    theme: {
      table: {
        disable: true,
      },
    },
  },
};

export const _Toggle = args => (
  <div>
    <Toggle id="toggleId" {...args} value="1">
      One
    </Toggle>
  </div>
);

_Toggle.args = {
  toggleSize: 'md',
  checked: true,
  disabled: false,
};
