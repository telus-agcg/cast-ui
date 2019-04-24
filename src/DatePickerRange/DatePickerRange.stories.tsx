import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { DatePickerRange } from '../DatePickerRange';
import { boolean, select } from '@storybook/addon-knobs/react';

storiesOf('DatePickerRange', module).add('DatePickerRange', () => (
  <DatePickerRange
    showDefaultInputIcon={boolean('showDefaultInputIcon', true)}
    inputIconPosition={select(
      'inputIconPosition',
      ['before', 'after'],
      'before',
    )}
    small={boolean('isSmall', true)}
  />
));
