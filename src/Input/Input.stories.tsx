import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { number, boolean, select, text } from '@storybook/addon-knobs/react';

import { Input } from '../';

storiesOf('Input', module).add(
  'Input',
  () => (
    <Input
      id="myInput"
      type={select('type', ['text', 'number', 'email', 'password'], 'text')}
      autoComplete={select('autoComplete', ['on', 'off'], 'on')}
      disabled={boolean('disabled', false)}
      inputSize={select('inputSize', ['sm', 'md', 'lg'], 'md')}
      invalid={boolean('invalid', false)}
      invalidText={text('invalidText', 'A valid value is required')}
      invalidTextColor={text('invalidTextColor', '')}
      maxLength={number('maxLength', 1000)}
      placeholder={text('placeholder', 'Please enter some text')}
      required={boolean('required', false)}
    />
  ),
  {
    info: {
      text: `
        ### Notes

        This is an Input
        `,
    },
  },
);
