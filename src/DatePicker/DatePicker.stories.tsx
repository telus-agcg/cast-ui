import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { number, boolean, select, text } from '@storybook/addon-knobs/react';

import { DatePicker } from '../';

storiesOf('DatePicker', module).add(
  'DatePicker',
  () => (
    <DatePicker
      id="datepicker"
      placeholder="Select start date"
      datePickerStyle={select(
        'datePickerStyle',
        ['success', 'default', 'primary', 'success', 'danger', 'warning'],
        'primary',
      )}
      datePickerSize={select('datePickerSize', ['sm', 'md', 'lg'], 'md')}
      dayPickerProps={{
        selectedDays: [
          new Date('2019-2-5'),
          { from: new Date('2019-4-5'), to: new Date('2019-4-9') },
        ],
      }}
      disabled={boolean('disabled', false)}
      invalid={boolean('invalid', false)}
      invalidText={text('invalidText', 'A valid value is required')}
      invalidTextColor={text('invalidTextColor', '')}
      maxLength={number('maxLength', 1000)}
      required={boolean('required', false)}
      withoutPicker={boolean('withoutPicker', true)}
    />
  ),
  {
    info: {
      text: `
        ### Notes

        This is a DatePicker, based on [react-day-picker](http://react-day-picker.js.org/).
        `,
    },
  },
);
