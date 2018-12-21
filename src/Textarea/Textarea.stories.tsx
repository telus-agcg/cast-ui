import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { number, boolean, select } from '@storybook/addon-knobs/react';

import { Textarea } from './Textarea.component';
import { wInfo } from '../storybook-utils';

storiesOf('Textarea', module).add(
  'Textarea',
  wInfo(`

  ### Notes

  This is a Textarea

  ### Usage
  ~~~js
  <Textarea
    TextareaSize='md'
    disabled={false}
    type='text'
    required='false'
    autoComplete='on'
    maxLength='1000'}
  />
  ~~~`)(() => (
    <Textarea
      TextareaSize={select('TextareaSize', ['sm', 'md', 'lg'], 'md')}
      type={select('type', ['text', 'number', 'email', 'password'], 'text')}
      disabled={boolean('disabled', false)}
      required={boolean('required', false)}
      autoComplete={select('autoComplete', ['on', 'off'], 'on')}
      maxLength={number('maxLength', 1000)}
    />
  )),
);
