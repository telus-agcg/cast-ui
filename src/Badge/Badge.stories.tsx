import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs/react';

import { Badge } from '../';

storiesOf('Badge', module).add(
  'Badge',
  () => (
    <Badge
      badgeSize={select('badgeSize', ['sm', 'md', 'lg'], 'md')}
      badgeStyle={select(
        'badgeStyle',
        ['default', 'success', 'primary', 'secondary', 'danger', 'warning'],
        'default',
      )}
    >
      123
    </Badge>
  ),
  {
    info: {
      text: `
        ### Notes

        This is a badge
        `,
    },
  },
);
