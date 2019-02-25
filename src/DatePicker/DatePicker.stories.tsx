import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs/react';

import { DatePicker } from './DatePicker.component';
import { wInfo } from '../storybook-utils';

storiesOf('DatePicker', module).add(
  'DatePicker',
  wInfo(`

  ### Notes

  This is a DatePicker

  ### Usage
  ~~~js
    <DatePicker
      id="datepicker"
      placeholder="Select start date"
      datepickerstyle="primary"
      datepickersize="md"
    />
  ~~~`)(() => (
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
        // localeUtils: { ...LocaleUtils, formatMonthTitle },
      }}
    />
  )),
);
