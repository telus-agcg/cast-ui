import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs/react';

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
