import * as React from 'react';
import { RadioButtonGroup, RadioButton } from '../';

export default {
  title: 'Components/Interactions/Radio Button',
  component: RadioButtonGroup,
  argTypes: {
    theme: {
      table: {
        disable: true,
      },
    },
    name: {
      control: false,
    },
    defaultChecked: {
      control: false,
    },
    onChange: {
      action: 'onChange',
    },
    valueChecked: {
      control: false,
    },
  },
};

export const _RadioButtonGroup = args => (
  <RadioButtonGroup {...args}>
    <RadioButton
      id="myInput1"
      data-testid="input1-radio-button"
      disabled={false}
      value="1"
    >
      One
    </RadioButton>
    <RadioButton
      id="myInput2"
      data-testid="input2-radio-button"
      disabled={false}
      value="2"
    >
      Two
    </RadioButton>
  </RadioButtonGroup>
);

_RadioButtonGroup.args = {
  name: 'myRadioButtonGroup',
  defaultChecked: '1',
};
