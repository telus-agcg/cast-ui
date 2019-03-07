import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Typography } from './Typography.component';
import { wInfo } from '../storybook-utils';

storiesOf('Typography', module).add(
  'Typography',
  wInfo(`

  ### Notes

  Documentation and examples for Cast UI typography.

  ### Usage
  ~~~js
  <Typography />
  ~~~`)(() => (
    <Typography />
  )),
);
