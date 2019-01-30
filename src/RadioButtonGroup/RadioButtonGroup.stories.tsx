import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs/react';
import { wInfo } from '../storybook-utils';
import { action } from '@storybook/addon-actions';
import RadioButton from '../RadioButton/RadioButton.component';
import RadioButtonGroup from './RadioButtonGroup.component';

storiesOf('RadioButton', module).add(
  'RadioButtonGroup',
  wInfo(`

  ### Notes

  This is a RadioButtonGroup control

  ### Usage
  ~~~js
  <RadioButtonGroup
    name='myRadioButtonGroup'
    defaultChecked='1'
    onChange={fn}
  >
    <RadioButton
      id='myInput1'
      disabled={false}
      rbSize='md'
      rbStyle='primary'
      value='1'
      >
      One
    </RadioButton>
    <RadioButton
      id='myInput2'
      name='myRadioButtonGroup'
      disabled={false}
      rbSize='md'
      rbStyle='primary'
      value='2'
      >
      Two
    </RadioButton>
  </RadioButtonGroup>
  ~~~`)(() => (
    <RadioButtonGroup
      name={text('name', 'myRadioButtonGroup')}
      defaultChecked={text('defaultChecked', '1')}
      onChange={action('onChange')}
    >
      <RadioButton
        id="myInput1"
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
    </RadioButtonGroup>
  )),
);
