import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number, select, text } from '@storybook/addon-knobs';
import { DatePicker } from '../';

storiesOf('DatePicker', module).add(
  'DatePicker',
  () => (
    <DatePicker
      key="0"
      showDefaultInputIcon={boolean('showDefaultInputIcon', true)}
      inputIconPosition={select(
        'inputIconPosition',
        ['before', 'after'],
        'after',
      )}
      datePickerStyle={select(
        'datePickerStyle',
        ['primary', 'secondary', 'success', 'warning', 'danger'],
        'primary',
      )}
      datePickerSize={select('datePickerSize', ['sm', 'md', 'lg'], 'md')}
      invalid={boolean('invalid', false)}
      invalidText={text('invalidText', 'A valid value is required')}
      invalidTextColor={text('invalidTextColor', '')}
      numberOfMonths={number('numberOfMonths', 1)}
      withPortal
    />
  ),
  {
    info: {
      text: `
        ### Notes

        This is a DatePicker, based on [react-dates](http://airbnb.io/react-dates), which you must install in your app. To initialize, you should include the following line in your app.
        You'll also need to include moment.js as a dependency.

        import 'react-dates/initialize';
        import 'react-dates/lib/css/_datepicker.css';
        `,
    },
  },
);
