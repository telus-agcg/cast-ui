import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import { RadioButtonGroup, RadioButton } from '../';

storiesOf('RadioButton', module).add(
  'RadioButtonGroup',
  () => (
    <RadioButtonGroup
      name={text('name', 'myRadioButtonGroup')}
      defaultChecked={text('defaultChecked', '1')}
      onChange={action('onChange')}
    >
      <RadioButton
        id="myInput1"
        data-testid="input1-radio-button"
        disabled={boolean('disabled (button 1)', false)}
        rbSize={select('rbSize (button 1)', ['sm', 'md', 'lg'], 'md')}
        value="1"
      >
        One
      </RadioButton>
      <RadioButton
        id="myInput2"
        data-testid="input2-radio-button"
        disabled={false}
        rbSize={select('rbSize (button 2)', ['sm', 'md', 'lg'], 'md')}
        value="2"
      >
        Two
      </RadioButton>
    </RadioButtonGroup>
  ),
  {
    info: {
      text: `
        ### Notes

        This is a RadioButtonGroup control
        `,
    },
  },
);
