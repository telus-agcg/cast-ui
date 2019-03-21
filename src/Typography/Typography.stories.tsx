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
      disable : true,
    },
  },
);
