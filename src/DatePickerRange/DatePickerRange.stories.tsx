import * as React from 'react';
import { storiesOf } from '@storybook/react';
import DatePickerRange from '../DatePickerRange';
import { boolean, select } from '@storybook/addon-knobs/react';

storiesOf('DatePickerRange', module).add('DatePickerRange', () => [
  <DatePickerRange
    key="0"
    showDefaultInputIcon={boolean('showDefaultInputIcon', true)}
    inputIconPosition={select(
      'inputIconPosition',
      ['before', 'after'],
      'after',
    )}
    datePickerSize={select('datePickerSize', ['sm', 'md', 'lg'], 'md')}
  />,
  <br key="br0" />,
  <DatePickerRange
    key="1"
    showDefaultInputIcon={boolean('showDefaultInputIcon', true)}
    inputIconPosition={select(
      'inputIconPosition',
      ['before', 'after'],
      'after',
    )}
    datePickerSize={select('datePickerSize', ['sm', 'md', 'lg'], 'md')}
    small
  />,
  <br key="br1" />,
  <DatePickerRange
    key="2"
    showDefaultInputIcon={boolean('showDefaultInputIcon', true)}
    inputIconPosition={select(
      'inputIconPosition',
      ['before', 'after'],
      'after',
    )}
    datePickerSize={select('datePickerSize', ['sm', 'md', 'lg'], 'md')}
    regular
  />,
  <br key="br2" />,
  <DatePickerRange
    key="3"
    showDefaultInputIcon={boolean('showDefaultInputIcon', true)}
    inputIconPosition={select(
      'inputIconPosition',
      ['before', 'after'],
      'after',
    )}
    datePickerSize={select('datePickerSize', ['sm', 'md', 'lg'], 'md')}
    block
  />,
]);
