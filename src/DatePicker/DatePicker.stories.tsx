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
    />
  )),
);
