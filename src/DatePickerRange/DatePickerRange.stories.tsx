import * as React from 'react';
import DatePickerRange from '../DatePickerRange';

export default {
  title: 'Components/Inputs',
  component: DatePickerRange,
  argTypes: {
    theme: {
      table: {
        disable: true,
      },
    },
    showDefaultInputIcon: {
      control: {
        type: 'boolean',
      },
    },
    inputIconPosition: {
      control: {
        options: ['before', 'after'],
        type: 'inline-radio',
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
    className: {
      control: false,
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
  showDefaultInputIcon: true,
  inputIconPosition: 'after',
  datePickerStyle: 'primary',
  datePickerSize: 'md',
  invalid: false,
  invalidText: 'A valid value is required',
};
