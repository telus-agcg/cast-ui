import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import { Toggle } from '../';

storiesOf('Toggle', module).add(
  'Toggle',
  () => (
    <div>
      <Toggle
        id="toggleId"
        data-testid="toggle"
        toggleSize={select('toggleSize', ['sm', 'md', 'lg'], 'md')}
        checked={boolean('checked', true)}
        disabled={boolean('disabled', false)}
        onChange={action('onChange 1')}
        value="1"
      >
        One
      </Toggle>
    </div>
  ),
  {
    info: {
      text: `
        ### Notes

        This is a Toggle control
        `,
    },
  },
);
