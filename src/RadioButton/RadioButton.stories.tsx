import * as React from 'react';

import { RadioButton } from '../';

export default {
  title: 'Components/Inputs/RadioButton',
  component: RadioButton,
  argTypes: {
    theme: {
      table: {
        disable: true,
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    rbSize: {
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
    displayStyle: {
      control: {
        type: 'inline-radio',
        options: ['inline', 'stacked'],
      },
    },
    id: {
      control: false,
    },
    name: {
      control: false,
    },
    defaultChecked: {
      control: false,
    },
    value: {
      control: false,
    },
  },
};

export const _RadioButton = args => {
  return (
    <div>
      <RadioButton id="myInput1" name="input1" value={1} {...args}>
        One
      </RadioButton>
      <RadioButton id="myInput1" name="input1" value={2} {...args}>
        Two
      </RadioButton>
    </div>
  );
};

_RadioButton.args = {
  disabled: false,
  rbSize: 'md',
  checked: true,
  displayStyle: 'inline',
};

_RadioButton.parameters = {
  info: {
    text: `
        ### Notes

                The Radio Button component improves the styling, layout and behavior of default radio input HTML element.

        ##### Disabled
        Disabled radio buttons are supported. The disabled attribute will apply a lighter color to help indicate the input’s state.

        ##### Display Style
                By default, any number of radio buttons that are immediate sibling will be *vertically stacked* and appropriately spaced.
                
                Alternatively, group radio buttons on the same horizontal row by settings the **displayStyle** prop to **inline**

        `,
  },
};
