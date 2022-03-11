import * as React from 'react';
import { storiesOf } from '@storybook/react';
import DatePickerRange from '../DatePickerRange';
import { boolean, select, text } from '@storybook/addon-knobs/react';

storiesOf('DatePickerRange', module).add('DatePickerRange', () => (
  <DatePickerRange
    key="0"
    showDefaultInputIcon={boolean('showDefaultInputIcon', true)}
    inputIconPosition={select(
      'inputIconPosition',
      ['before', 'after'],
      'after',
    )}
    datePickerSize={select('datePickerSize', ['sm', 'md', 'lg'], 'md')}
    datePickerStyle={select(
      'datePickerStyle',
      ['primary', 'secondary', 'success', 'warning', 'danger'],
      'primary',
    )}
    invalid={boolean('invalid', false)}
    invalidText={text('invalidText', 'A valid value is required')}
    invalidTextColor={text('invalidTextColor', '')}
  />
));
