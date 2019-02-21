import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs/react';

import { Alert } from './Alert.component';
import { wInfo } from '../storybook-utils';

storiesOf('Alert', module).add(
  'Alert',
  wInfo(`

  ### Notes

  This is a Alert

  ### Usage
  ~~~js
  <Alert
    alertStyle='success'
  >
    123
  </Alert>
  ~~~`)(() => (
    <Alert
      alertStyle={select(
        'alertStyle',
        ['success', 'default', 'primary', 'danger', 'warning'],
        'primary',
      )}
      theme={select(
        'theme',
        ['default', 'dark'],
        'default',
      )}
    >
      Reminder: Sales meeting at Rm 223 in 10 minutes
    </Alert>
  )),
);
