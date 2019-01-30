import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs/react';

import RadioButton from './RadioButton.component';
import { wInfo } from '../storybook-utils';
import { action } from '@storybook/addon-actions';

storiesOf('RadioButton', module).add(
  'RadioButton',
  wInfo(`

  ### Notes

  This is a RadioButton control

  ### Usage
  ~~~js
  <RadioButton
    id='myInput1'
    disabled={false}
    rbSize='md'
    rbStyle='primary'
    value={1}
    checked={true}
    onChange={fn()}
    >
    One
  </RadioButton>
  ~~~`)(() => (
    <RadioButton
      id="myInput1"
      disabled={boolean('disabled', false)}
      rbSize={select('rbSize', ['sm', 'md', 'lg'], 'md')}
      rbStyle={select(
        'rbStyle',
        ['success', 'default', 'primary', 'danger', 'warning'],
        'primary',
      )}
      value="1"
      onChange={action('Button 1 changed')}
      checked={boolean('checked', true)}
    >
      One
    </RadioButton>
  )),
);
