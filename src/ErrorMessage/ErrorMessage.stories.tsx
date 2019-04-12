import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';

import { ErrorMessage } from '../index';

storiesOf('ErrorMessage', module).add(
  'ErrorMessage',
  () => (
    <ErrorMessage
      id={text('id', 'some-id-error-msg')}
      message={text('message', 'This is an error message.')}
      textColor={text('textColor', '')}
    />
  ),
  {
    info: {
      text: `
        ### Notes

        This is an Error Message
        `,
    },
  },
);
