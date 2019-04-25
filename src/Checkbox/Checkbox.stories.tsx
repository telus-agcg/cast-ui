import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import { Checkbox } from '../';

storiesOf('Checkbox', module).add(
  'Checkbox',
  () => (
    <div>
      <Checkbox
        id="myInput1"
        cbSize={select('cbSize', ['sm', 'md', 'lg'], 'md')}
        defaultChecked={true}
        disabled={boolean('disabled (checkbox 1)', false)}
        onChange={action('onChange 1')}
        value="1"
        indeterminate={boolean("indeterminate (checkbox 1)", true)}
        checked={boolean('checked (checkbox 1)', true)}
				displayStyle={select("displayStyle", ["inline", "stacked"], "inline")}
      >
        One
      </Checkbox>
      <Checkbox
        id="myInput2"
        cbSize={select('cbSize (checkbox 2)', ['sm', 'md', 'lg'], 'md')}
        defaultChecked={true}
        disabled={boolean('disabled (checkbox 2)', false)}
        onChange={action('onChange 2')}
        value="2"
        indeterminate={boolean("indeterminate (checkbox 2)", false)}
        checked={boolean('checked (checkbox 2)', true)}
				displayStyle={select("displayStyle", ["inline", "stacked"], "inline")}
      >
        Two
      </Checkbox>
    </div>
  ),
  {
    info: {
      text: `
        ### Notes

				The Checkbox component improves the styling, layout and behavior of default checkbox input HTML element.

        ##### Disabled
        Disabled checkbox are supported. The disabled attribute will apply a lighter color to help indicate the input’s state.

        ##### Display Style
				By default, any number of checkboxes that are immediate sibling will be *vertically stacked* and appropriately spaced.
				
				Alternatively, group checkboxes on the same horizontal row by settings the **displayStyle** prop to **inline**

      `,
    },
  },
);
