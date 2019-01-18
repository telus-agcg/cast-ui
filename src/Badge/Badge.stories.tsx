import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs/react';

import { Badge } from './Badge.component';
import { wInfo } from '../storybook-utils';

storiesOf('Badge', module).add(
  'Badge',
  wInfo(`

  ### Notes

  This is a button

  ### Usage
  ~~~js
  <Badge
    label={'Enroll'}
    disabled={false}
    onClick={() => alert('hello there')}
  />
  ~~~`)(() => (
    <Badge
      badgeSize={select(
        'badgeSize',
        ['sm', 'md', 'lg'],
        'md',
      )}
      badgeStyle={select(
        'badgeStyle',
        ['success', 'default', 'primary', 'danger', 'warning'],
        'success',
      )}
    >
      123
    </Badge>
  )),
);
