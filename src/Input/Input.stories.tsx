import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { number, boolean, select, text } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import { ic_search as icSearch } from 'react-icons-kit/md/ic_search';

import { Input, IconButton } from '../';

storiesOf('Input', module)
  .add('Plain', () => (
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
      value={text('value', '')}
      onChange={e => {
        action('Changed!');
      }}
    />
  ))
  .add(
    'with Addon',
    () => {
      const inputSize = select('inputSize', ['sm', 'md', 'lg'], 'md');
      return (
        <Input
          id="myInput"
          type={select('type', ['text', 'number', 'email', 'password'], 'text')}
          autoComplete={select('autoComplete', ['on', 'off'], 'on')}
          disabled={boolean('disabled', false)}
          inputSize={inputSize}
          invalid={boolean('invalid', false)}
          invalidText={text('invalidText', 'A valid value is required')}
          invalidTextColor={text('invalidTextColor', '')}
          maxLength={number('maxLength', 1000)}
          placeholder={text('placeholder', 'Please enter some text')}
          required={boolean('required', false)}
          value={text('value', '')}
          icon={
            <IconButton
              icon={icSearch}
              rounded={false}
              btnSize={inputSize}
              onClick={e => alert('Searching....')}
            />
          }
          iconPosition={select('iconPosition', ['right', 'left'], 'right')}
          onChange={e => {
            action('Changed!');
          }}
        />
      );
    },
    {
      info: {
        text: `
        ### Notes

In this example, the **icon** is the *Icon* component from [react-icons-kit](https://react-icons-kit.now.sh/)
        `,
      },
    },
  );
