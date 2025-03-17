import { Meta, StoryObj } from '@storybook/react';
import { Checkbox, CHECKBOX_SIZE, CHECKBOX_STATE } from './Checkbox.component';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Interactions/Checkbox',
  component: Checkbox,
  argTypes: {
    value: {
      options: [
        CHECKBOX_STATE.EMPTY,
        CHECKBOX_STATE.CHECKED,
        CHECKBOX_STATE.INDETERMINATE,
      ],
      control: 'select',
    },
    cbSize: {
      options: [CHECKBOX_SIZE.SMALL, CHECKBOX_SIZE.MEDIUM, CHECKBOX_SIZE.LARGE],
      control: 'select',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const _Checkbox: Story = {
  args: {
    label: 'One',
    cbSize: CHECKBOX_SIZE.MEDIUM,
  },
};

export const Indeterminate: Story = {
  args: {
    label: 'Indeterminate',
    value: CHECKBOX_STATE.INDETERMINATE,
  },
};
