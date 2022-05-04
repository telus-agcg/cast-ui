import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Display } from './Display.component';
import { select } from '@storybook/addon-knobs/react';

storiesOf('Typography', module).add(
  'Display',
  () => (
    <Display size={select('Display size', [10, 20], 10)}>
      Example Display
    </Display>
  ),
  {
    info: {
      text: `
        ### Notes

        Documentation and examples for Cast UI Display.
        `,
    },
  },
);
