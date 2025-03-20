import { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from './DatePicker.component';

const description = `
This is a DatePicker is based on [react-datepicker](https://reactdatepicker.com/).
`;

const meta: Meta<typeof DatePicker> = {
  title: 'Components/Interactions/Date Picker',
  component: DatePicker,
  argTypes: {
    theme: {
      table: {
        disable: true,
      },
    },
    selectsRange: {
      control: 'boolean',
    },
    showIcon: {
      control: 'boolean',
    },
    iconPosition: {
      control: 'boolean',
      options: ['right', 'left'],
    },
    datePickerStyle: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger'],
    },
    datePickerSize: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
    invalid: {
      control: 'boolean',
    },
    invalidText: {
      control: 'text',
    },
    invalidTextColor: {
      control: 'color',
    },
    monthsShown: {
      control: 'number',
    },
    className: {
      control: false,
    },
    withPortal: {
      control: 'boolean',
    },
    wrapperId: {
      control: false,
    },
    onFocusChange: {
      control: false,
    },
  },
  parameters: {
    description,
  },
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

export const _DatePicker: Story = {
  args: {
    datePickerSize: 'md',
    datePickerStyle: 'primary',
    iconPosition: 'right',
    invalid: false,
    invalidText: 'A valid value is required',
    monthsShown: 1,
    placeholderText: 'Date',
    showIcon: true,
    withPortal: false,
  },
};
