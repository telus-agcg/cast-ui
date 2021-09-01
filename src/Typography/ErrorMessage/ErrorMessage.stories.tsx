import * as React from 'react';

import { ErrorMessage } from './index';
import { Input } from '../../Input';

export default {
  title: 'Typography',
  component: ErrorMessage,
  argTypes: {
    theme: {
      table: {
        disable: true,
      },
    },
    message: {
      control: 'text',
    },
    textColor: {
      control: 'color',
    },
  },
};

export const _ErrorMessage = args => (
  <div>
    <Input id="myInput" type="text" />
    <ErrorMessage id="some-id-error-msg" {...args} />
  </div>
);

_ErrorMessage.args = {
  message: 'This is an error message.',
};

_ErrorMessage.story = {
  name: 'ErrorMessage',

  parameters: {
    info: {
      text: `
        ### Notes

        This is an Error Message
        `,
    },
  },
};
