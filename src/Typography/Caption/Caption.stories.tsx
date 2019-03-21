import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Caption } from './Caption.component';

storiesOf('Typography', module).add(
  'Caption',
  () => (
    <Caption>Roboto Light 12</Caption>
  ),
  {
    info: {
      text: `
        ### Notes

        Documentation and examples for Cast UI Caption.
        `,
    },
  },
);
