import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs/react';

import { DatePicker } from '../';

storiesOf('DatePicker', module).add(
  'DatePicker',
  () => (
    <DatePicker
      id="datepicker"
      placeholder="Select start date"
      datePickerStyle={select(
        'datePickerStyle',
        ['default', 'success', 'primary', 'success', 'danger', 'warning'],
        'default',
      )}
      datePickerSize={select('datePickerSize', ['sm', 'md', 'lg'], 'md')}
      dayPickerProps={{
        selectedDays: [
          new Date('2019-2-5'),
          { from: new Date('2019-4-5'), to: new Date('2019-4-9') },
        ],
      }}
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
