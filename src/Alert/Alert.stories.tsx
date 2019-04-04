import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { select, boolean } from '@storybook/addon-knobs/react';

import { Alert } from '../';

storiesOf('Alert', module).add(
  'Alert',
  () => (
    <Alert
      alertStyle={select(
        'alertStyle',
        ['default', 'success', 'primary', 'secondary', 'danger', 'warning'],
        'primary',
      )}
      lightMode={boolean('lightMode', false)}
    >
      Reminder: Sales meeting at Rm 223 in 10 minutes
    </Alert>
  ),
  {
    info: {
      text: `
        ### Notes

        This is a Alert

        The default theme mode is dark.
        `,
    },
  },
);
