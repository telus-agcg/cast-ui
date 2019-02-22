import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { select, boolean } from '@storybook/addon-knobs/react';

import { Alert } from './Alert.component';
import { wInfo } from '../storybook-utils';

storiesOf('Alert', module).add(
  'Alert',
  wInfo(`

  ### Notes

  This is a Alert

  The default theme mode is dark.

  ### Usage
  ~~~js
  <Alert
    alertStyle='primary'
    lightMode=true
  >
    Reminder: Sales meeting at Rm 223 in 10 minutes
  </Alert>
  ~~~`)(() => (
    <Alert
      alertStyle={select(
        'alertStyle',
        ['success', 'primary', 'secondary', 'danger', 'warning'],
        'primary',
      )}
      lightMode={boolean('lightMode', false)}
    >
      Reminder: Sales meeting at Rm 223 in 10 minutes
    </Alert>
  )),
);
