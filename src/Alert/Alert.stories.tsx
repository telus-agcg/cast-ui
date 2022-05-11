import * as React from 'react';
import { Alert } from '../';

export default {
  title: 'Components/Feedback/Alert',
  component: Alert,
  argTypes: {
    alertStyle: {
      options: ['success', 'primary', 'secondary', 'danger', 'warning'],
      control: { type: 'select' },
    },
    lightMode: {
      control: { type: 'boolean' },
    },
    theme: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'The default theme mode, for an Alert is dark.',
      },
    },
  },
};

export const _Alert = args => (
  <Alert {...args}>Reminder: Sales meeting at Rm 223 in 10 minutes</Alert>
);

_Alert.args = {
  alertStyle: 'primary',
  lightMode: false,
};
