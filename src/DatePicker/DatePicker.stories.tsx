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
      control: {
        type: 'boolean',
      },
    },
    showIcon: {
      control: {
        type: 'boolean',
      },
    },
    iconPosition: {
      control: {
        options: ['right', 'left'],
        type: 'select',
      },
    },
    datePickerStyle: {
      control: {
        options: ['primary', 'secondary', 'success', 'warning', 'danger'],
        type: 'select',
      },
    },
    datePickerSize: {
      control: {
        options: ['sm', 'md', 'lg'],
        type: 'inline-radio',
      },
    },
    invalid: {
      control: {
        type: 'boolean',
      },
    },
    invalidText: {
      control: {
        type: 'text',
      },
    },
    invalidTextColor: {
      control: {
        type: 'color',
      },
    },
    monthsShown: {
      control: {
        type: 'number',
      },
    },
    className: {
      control: false,
    },
    withPortal: {
      control: {
        type: 'boolean',
      },
    },
    wrapperId: {
      control: false,
    },
    // onDateChange: {
    //   action: {
    //     type: 'onDateChange',
    //   },
    // },
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
