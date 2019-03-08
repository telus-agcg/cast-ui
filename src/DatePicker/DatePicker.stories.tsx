import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs/react';

import { DatePicker } from './DatePicker.component';

storiesOf('DatePicker', module).add(
  'DatePicker',
  () => (
    <DatePicker
      id="datepicker"
      placeholder="Select start date"
      datepickerstyle={select(
        'datepickerstyle',
        ['success', 'default', 'primary', 'danger', 'warning'],
        'primary',
      )}
      datepickersize={select('datepickersize', ['sm', 'md', 'lg'], 'md')}
      dayPickerProps={{
        selectedDays: [
          new Date('2019-2-5'),
          { from: new Date('2019-2-5'), to: new Date('2019-2-9') },
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
