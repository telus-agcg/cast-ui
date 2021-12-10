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
};

const _Checkbox = args => (
  <div>
    <Checkbox id="myInput1" value="1" {...args}>
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

_Checkbox.parameters = {
  info: {
    text: `
      ### Notes

              The Checkbox component improves the styling, layout and behavior of default checkbox input HTML element.

      ##### Disabled
      Disabled checkbox are supported. The disabled attribute will apply a lighter color to help indicate the input’s state.

      ##### Display Style
              By default, any number of checkboxes that are immediate sibling will be *vertically stacked* and appropriately spaced.

              Alternatively, group checkboxes on the same horizontal row by settings the **displayStyle** prop to **inline**

    `,
  },
};
