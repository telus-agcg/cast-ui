import * as React from 'react';

import { RadioButton } from '../';

export default {
  title: 'Components/Inputs',
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
  parameters: {
    docs: {
      description: {
        component:
          'The Radio Button component improves the styling, layout and behavior of default radio input HTML element.',
      },
    },
  },
};

export const _RadioButton = args => {
  return (
    <div>
      <RadioButton
        id="myInput1"
        data-testid="input1-radio-button"
        name="radio-buttons"
        value={1}
        {...args}
      >
        One
      </RadioButton>
      <RadioButton
        id="myInput2"
        data-testid="input2-radio-button"
        name="radio-buttons"
        value={2}
        {...args}
      >
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
