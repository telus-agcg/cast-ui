import * as React from 'react';
import { Checkbox } from '../';

export default {
  title: 'Components/Inputs/Checkbox',
  component: Checkbox,
  argTypes: {
    cbSize: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'inline-radio' },
    },
    checked: {
      control: { type: 'boolean' },
    },
    defaultChecked: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    displayStyle: {
      options: ['inline', 'stacked'],
      control: { type: 'inline-radio' },
    },
    indeterminate: {
      control: { type: 'boolean' },
    },
    invalid: {
      control: { type: 'boolean' },
    },
    invalidText: {
      control: { type: 'text' },
    },
    invalidTextColor: {
      control: { type: 'color' },
    },
    onChange: {
      action: { type: 'onChange' },
    },
    theme: {
      table: {
        disable: true,
      },
    },
    value: {
      control: false,
    },
    id: {
      control: false,
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'The Checkbox component improves the styling, layout and behavior of default checkbox input HTML element.',
      },
    },
  },
};

const _Checkbox = args => (
  <div>
    <Checkbox id="myInput1" value="1" data-testid="checkbox-1" {...args}>
      One
    </Checkbox>
  </div>
);

export const _Indeterminate = _Checkbox.bind({});
_Indeterminate.args = {
  cbSize: 'md',
  checked: true,
  disabled: false,
  displayStyle: 'inline',
  indeterminate: true,
  invalid: false,
  invalidText: 'A valid value is required',
  defaultChecked: true,
};

export const _Determinate = _Checkbox.bind({});
_Determinate.args = {
  cbSize: 'md',
  checked: true,
  disabled: false,
  displayStyle: 'inline',
  indeterminate: false,
  invalid: false,
  invalidText: 'A valid value is required',
  defaultChecked: true,
};
