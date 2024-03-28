import * as React from 'react';
import { DatePicker } from '..';

const descriptionComponent = `
This is a DatePicker is based on [react-datepicker](https://reactdatepicker.com/).

`;

export default {
  title: 'Components/Interactions/Date Picker',
  component: DatePicker,
  argTypes: {
    theme: {
      table: {
        disable: true,
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
    onDateChange: {
      action: {
        type: 'onDateChange',
      },
    },
    onFocusChange: {
      control: false,
    },
  },
  parameters: {
    docs: {
      description: {
        component: descriptionComponent,
      },
    },
  },
};

export const _DatePicker = args => <DatePicker key="0" {...args} />;

_DatePicker.args = {
  datePickerSize: 'md',
  datePickerStyle: 'primary',
  iconPosition: 'right',
  invalid: false,
  invalidText: 'A valid value is required',
  monthsShown: 1,
  placeholderText: 'Date',
  showIcon: true,
  withPortal: false,
};
