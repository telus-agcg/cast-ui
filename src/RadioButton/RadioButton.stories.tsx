import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs/react';

import { RadioButton } from './RadioButton.component';
import { wInfo } from '../storybook-utils';

storiesOf('RadioButton', module).add(
  'RadioButton',
  wInfo(`

  ### Notes

  This is a RadioButton control

  ### Usage
  ~~~js
  <RadioButton
    id='myInput1'
    name='myRadioButtonGroup'
    disabled={false}
    rbSize='md'
    rbStyle='primary'
    value={1}
    >
    One
  </RadioButton>
  <RadioButton
    id='myInput2'
    name='myRadioButtonGroup'
    disabled={false}
    rbSize='md'
    rbStyle='primary'
    value={2}
    >
    Two
  </RadioButton>
  ~~~`)(() => (
    <>
      <RadioButton
        id="myInput1"
        name={text('name', 'myRadioButtonGroup')}
        checked={boolean('checked (button 1)', false)}
        disabled={boolean('disabled (button 1)', false)}
        rbSize={select('rbSize (button 1)', ['sm', 'md', 'lg'], 'md')}
        rbStyle={select(
          'rbStyle (button 1)',
          ['success', 'default', 'primary', 'danger', 'warning'],
          'primary',
        )}
        value="1"
      >
        One
      </RadioButton>
      <RadioButton
        id="myInput2"
        name={text('name (button 2)', 'myRadioButtonGroup')}
        checked={boolean('checked (button 2)', false)}
        disabled={false}
        rbSize={select('rbSize (button 2)', ['sm', 'md', 'lg'], 'md')}
        rbStyle={select(
          'rbStyle (button 2)',
          ['success', 'default', 'primary', 'danger', 'warning'],
          'primary',
        )}
        value="2"
      >
        Two
      </RadioButton>
    </>
  )),
);
