import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { number, boolean, select, text } from '@storybook/addon-knobs/react';

import { Input } from './Input.component';
import { wInfo } from '../storybook-utils';

storiesOf('Input', module).add(
  'Input',
  wInfo(`

  ### Notes

  This is an Input

  ### Usage
  ~~~js
  <Input
    id='myInput'
    type='text'
    autoComplete='on'
    disabled={false}
    inputSize='md'
    invalid={false}
    invalidText='A valid value is required'
    maxLength='1000'
    placeholder='Please enter some text'
    required='false'
  />
  ~~~`)(() => (
    <Input
      id="myInput"
      type={select('type', ['text', 'number', 'email', 'password'], 'text')}
      autoComplete={select('autoComplete', ['on', 'off'], 'on')}
      disabled={boolean('disabled', false)}
      inputSize={select('inputSize', ['sm', 'md', 'lg'], 'md')}
      invalid={boolean('invalid', false)}
      invalidText={text('invalidText', 'A valid value is required')}
      maxLength={number('maxLength', 1000)}
      placeholder={text('placeholder', 'Please enter some text')}
      required={boolean('required', false)}
    />
  )),
);
