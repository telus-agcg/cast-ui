import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { number, boolean, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { Icon } from 'react-icons-kit';
import { ic_search as icSearch } from 'react-icons-kit/md';

import { Input, IconButton } from '../';

storiesOf('Input', module)
  .add('Basic', () => (
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
    'with Icon Button',
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

The Input component accepts 2 additional props, **icon** and **iconPosition** that allow the Input to prepend or append a *JSX.Element*, *React.Component*, *React.FunctionComponent* or a *string*.

In this example, the **icon** is the *Icon* component from [react-icons-kit](https://react-icons-kit.now.sh/)
        `,
      },
    },
  )
  .add(
    'with Icon 2',
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
          icon={<Icon size={20} icon={icSearch} />}
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

The Input component accepts 2 additional props, **icon** and **iconPosition** that allow the Input to prepend or append a *JSX.Element*, *React.Component*, *React.FunctionComponent* or a *string*.

In this example, the **icon** is the *Icon* component from [react-icons-kit](https://react-icons-kit.now.sh/)
        `,
      },
    },
  )
  .add('with Addon Text', () => {
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
        addonText={text('addonText', '$')}
        addonTextPosition={select(
          'addonTextPosition',
          ['right', 'left'],
          'right',
        )}
        onChange={e => {
          action('Changed!');
        }}
      />
    );
  })
  .add(
    'with all options',
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
          addonText={text('addonText', '$')}
          highlightFilled={boolean('highlightFilled', true)}
          isClearable={boolean('isClearable', true)}
          addonTextPosition={select(
            'addonTextPosition',
            ['right', 'left'],
            'right',
          )}
          icon={
            boolean('withIcon', true) ? (
              <Icon size={20} icon={icSearch} />
            ) : (
              undefined
            )
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

The Input component accepts 2 additional props, **addonText** and **addonTextPosition** that allow the Input to prepend or append a *string* or *character set* such as currency codes.

By using the *addonText* prop, the Input component text alignment is shifted to right otherwise it remains left or default.

In this example, the **addonText** is the dollar sign ($).
        `,
      },
    },
  );
