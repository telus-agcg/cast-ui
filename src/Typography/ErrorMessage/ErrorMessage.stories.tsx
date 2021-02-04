import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import { ErrorMessage } from './index';
import { Input } from '../../Input';

storiesOf('Typography', module).add(
  'ErrorMessage',
  () => (
    <div>
      <Input id="myInput" type="text" />
      <ErrorMessage
        id={text('id', 'some-id-error-msg')}
        message={text('message', 'This is an error message.')}
        textColor={text('textColor', '')}
      />
    </div>
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
