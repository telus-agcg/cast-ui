import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { select, boolean } from '@storybook/addon-knobs';

import { Badge } from '../';

storiesOf('Badge', module).add(
  'Badge',
  () => (
    <Badge
      badgeSize={select('badgeSize', ['sm', 'md', 'lg'], 'md')}
      badgeStyle={select(
        'badgeStyle',
        ['success', 'primary', 'secondary', 'danger', 'warning'],
        'primary',
      )}
      lightMode={boolean('lightMode', false)}
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
