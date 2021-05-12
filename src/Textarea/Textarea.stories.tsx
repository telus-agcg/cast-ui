import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { number, boolean, select, text } from '@storybook/addon-knobs/react';

import { Textarea } from '../';

storiesOf('Textarea', module).add(
  'Textarea',
  () => (
    <Textarea
      id={'myTextarea'}
      textareaSize={select('textareaSize', ['sm', 'md', 'lg'], 'md')}
      disabled={boolean('disabled', false)}
      invalid={boolean('invalid', false)}
      invalidText={text('invalidText', 'A valid value is required')}
      invalidTextColor={text('invalidTextColor', 'red')}
      maxLength={number('maxLength', 1000)}
      placeholder={text('placeholder', 'Placeholder Text')}
      required={boolean('required', false)}
      rows={number('rows', 8)}
      cols={number('cols', 60)}
    />
  ),
  {
    info: {
      text: `
        ### Notes

        This is a Textarea
        `,
    },
  },
);
