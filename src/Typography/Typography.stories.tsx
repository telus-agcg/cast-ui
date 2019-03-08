import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Typography } from './Typography.component';

storiesOf('Typography', module).add(
  'Typography',
  () => (
    <Typography />
  ),
  {
    info: {
      text: `
        ### Notes

        Documentation and examples for Cast UI typography.
        `,
    },
  },
);