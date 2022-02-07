import * as React from 'react';

import { Button } from '../';

const componentDescription = `
Cast UI custom buttons come with support for multiple sizes, states and semantic styles ideal for use for action in forms, dialogs and more.
      `;

export default {
  title: 'Components/Inputs/Button',
  component: Button,
  argTypes: {
    outline: {
      control: {
        type: 'boolean',
      },
    },
    selected: {
      control: {
        type: 'boolean',
      },
    },
    btnStyle: {
      options: ['success', 'primary', 'secondary', 'danger', 'warning'],
      control: { type: 'select' },
    },
    btnSize: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'radio',
      },
    },
    backgroundColor: {
      control: {
        type: 'color',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: { action: 'onClick' },
    theme: {
      table: {
        disable: true,
      },
    },
    value: {
      control: false,
    },
  },
  parameters: {
    docs: {
      description: {
        component: componentDescription,
      },
    },
  },
};

export const _Button = args => (
  <Button id={'testId'} {...args}>
    Submit Button
  </Button>
);

_Button.args = {
  outline: false,
  selected: false,
  btnStyle: 'primary',
  btnSize: 'md',
  disabled: false,
};
