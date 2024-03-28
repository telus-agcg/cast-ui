import * as React from 'react';
import DatePickerRange from '../DatePickerRange';

export default {
  title: 'Components/Interactions/Date Picker',
  component: DatePickerRange,
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
    id: {
      control: false,
    },
    readOnly: {
      control: false,
    },
    onDatesChange: {
      control: false,
    },
    onFocusChange: {
      control: false,
    },
  },
};

export const _DatePickerRange = args => <DatePickerRange key="0" {...args} />;

_DatePickerRange.args = {
  datePickerSize: 'md',
  datePickerStyle: 'primary',
  iconPosition: 'right',
  invalid: false,
  invalidText: 'A valid value is required',
  monthsShown: 1,
  placeholderText: 'Start Date - End Date',
  showIcon: true,
  withPortal: false,
};
