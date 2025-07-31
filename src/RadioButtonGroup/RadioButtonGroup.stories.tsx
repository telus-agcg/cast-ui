import { Meta, StoryObj } from '@storybook/react';
import { RadioButtonGroup } from './RadioButtonGroup.component';
import { RadioButton } from '../RadioButton/RadioButton.component';

const meta: Meta<typeof RadioButtonGroup> = {
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

export default meta;

type Story = StoryObj<typeof RadioButtonGroup>;

export const _RadioButtonGroup: Story = {
  args: {
    name: 'myRadioButtonGroup',
    defaultChecked: '1',
  },
  render: (args) => {
    return (
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
  },
};
