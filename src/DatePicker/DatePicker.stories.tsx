import * as React from 'react';
import { DatePicker } from '../';

const descriptionComponent = `
This is a DatePicker, based on [react-dates](http://airbnb.io/react-dates), which you must install in your app. To initialize, you should include the following line in your app.
You'll also need to include moment.js as a dependency.

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
`;

export default {
  title: 'Components/Inputs',
  component: DatePicker,
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
    numberOfMonths: {
      control: {
        type: 'number',
      },
    },
    className: {
      control: false,
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

export const _DatePicker = args => <DatePicker key="0" {...args} withPortal />;

_DatePicker.args = {
  showDefaultInputIcon: true,
  inputIconPosition: 'after',
  datePickerStyle: 'primary',
  datePickerSize: 'md',
  invalid: false,
  invalidText: 'A valid value is required',
  numberOfMonths: 1,
};
