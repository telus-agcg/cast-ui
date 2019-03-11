import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs/react';

import { RadioButton } from '../';
import { action } from '@storybook/addon-actions';

storiesOf('RadioButton', module).add(
  'RadioButton',
  () => (
    <RadioButton
      id="myInput1"
      disabled={boolean('disabled', false)}
      rbSize={select('rbSize', ['sm', 'md', 'lg'], 'md')}
      value="1"
      onChange={action('Button 1 changed')}
      checked={boolean('checked', true)}
    >
      One
    </RadioButton>
  ),
  {
    info: {
      text: `
        ### Notes

        This is a RadioButton control
        `,
    },
  },
);
