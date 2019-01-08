import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs/react';

import Select from './Select.component';
import { wInfo } from '../storybook-utils';

storiesOf('Select', module).add(
  'Select',
  wInfo(`

  ### Notes

  This is a Select, based on the react-select component

  ### Usage
  ~~~js
  <Select
    id="mySelect"
    inputSize='md'
    disabled={false}
    invalid={false}
    invalidText='A valid value is required'
    options={[
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' },
    ]}
  />~~~`)(() => (
    <Select
      id="mySelect"
      disabled={boolean('disabled', false)}
      inputSize={select('inputSize', ['sm', 'md', 'lg'], 'md')}
      invalid={boolean('invalid', false)}
      invalidText={text('invalidText', 'A valid value is required')}
      options={[
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ]}
    />
  )),
);
