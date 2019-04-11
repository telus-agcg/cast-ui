import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Digits } from './Digits.component';

storiesOf('Typography', module).add(
  'Digits',
  () => <Digits>Example Digits</Digits>,
  {
    info: {
      text: `
        ### Notes

        Documentation and examples for Cast UI Digits.
        `,
    },
  },
);
