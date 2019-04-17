import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Caption } from './Caption.component';

storiesOf('Typography', module).add(
  'Caption',
  () => <Caption>Example Caption</Caption>,
  {
    info: {
      text: `
        ### Notes

        Documentation and examples for Cast UI Caption.
        `,
    },
  },
);
