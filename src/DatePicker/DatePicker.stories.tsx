import * as React from 'react';
import { DatePicker } from '..';

const descriptionComponent = `
This is a DatePicker, based on [react-dates](http://airbnb.io/react-dates), which you must install in your app. To initialize, you should include the following line in your app.
You'll also need to include moment.js as a dependency.

<code style="margin-bottom: 5px">import 'react-dates/initialize';</code><br>
<code>import 'react-dates/lib/css/_datepicker.css';</code>
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
  showIcon: true,
  datePickerStyle: 'primary',
  datePickerSize: 'md',
  invalid: false,
  invalidText: 'A valid value is required',
  numberOfMonths: 1,
  withPortal: true,
};
