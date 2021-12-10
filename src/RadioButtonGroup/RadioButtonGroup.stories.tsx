import * as React from 'react';
import { RadioButtonGroup, RadioButton } from '../';

export default {
  title: 'Components/Inputs/RadioButtonGroup',
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
    <RadioButton id="myInput1" disabled={false} value="1">
      One
    </RadioButton>
    <RadioButton id="myInput2" disabled={false} value="2">
      Two
    </RadioButton>
  </RadioButtonGroup>
);

_RadioButtonGroup.args = {
  name: 'myRadioButtonGroup',
  defaultChecked: '1',
};

_RadioButtonGroup.parameters = {
  info: {
    text: `
      ### Notes

      This is a RadioButtonGroup control
      `,
  },
};
