import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs/react';

import { RadioButton } from '../';
import { action } from '@storybook/addon-actions';

storiesOf('RadioButton', module).add(
  'RadioButton',
  () => (
    <div>
      <RadioButton
        id="myInput1"
        disabled={boolean('disabled', false)}
        rbSize={select('rbSize', ['sm', 'md', 'lg'], 'md')}
        value="1"
        onChange={action('Button 1 changed')}
        checked={boolean('checked', true)}
        displayStyle={select('displayStyle', ['inline', 'stacked'], 'inline')}
      >
        One
      </RadioButton>
      <br />
      <br />
      <br />
      <RadioButton
        id="myInput2"
        disabled={boolean('disabled', false)}
        rbSize={select('rbSize', ['sm', 'md', 'lg'], 'md')}
        value="1"
        displayStyle={select('displayStyle', ['inline', 'stacked'], 'inline')}
      >
        One
      </RadioButton>
    </div>
  ),
  {
    info: {
      text: `
        ### Notes

				The Radio Button component improves the styling, layout and behavior of default radio input HTML element.

        ##### Disabled
        Disabled radio buttons are supported. The disabled attribute will apply a lighter color to help indicate the input’s state.

        ##### Display Style
				By default, any number of radio buttons that are immediate sibling will be *vertically stacked* and appropriately spaced.
				
				Alternatively, group radio buttons on the same horizontal row by settings the **displayStyle** prop to **inline**

        `,
    },
  },
);
