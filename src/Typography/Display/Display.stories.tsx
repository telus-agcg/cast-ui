import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Display } from './Display.component';

storiesOf('Typography', module).add(
  'Display',
  () => (
    <Display>27px Regular</Display>
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
