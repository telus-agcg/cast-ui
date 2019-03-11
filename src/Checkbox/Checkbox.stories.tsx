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
      >
        Two
      </Checkbox>
    </div>
  ),
  {
    info: {
      text: `
        ### Notes

        This is a Checkbox control
      `,
    },
  },
);
