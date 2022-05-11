import * as React from 'react';

import { ErrorMessage } from './index';
import { Input } from '../../Input';

export default {
  title: 'Components/Typography/ErrorMessage',
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
  textColor: '#fa1a1a',
};

_ErrorMessage.storyName = 'ErrorMessage';
