import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs/react';

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
    inputSize='md'
    disabled={false}
    options={[
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' },
    ]}
  />~~~`)(() => (
    <Select
      inputSize={select('inputSize', ['sm', 'md', 'lg'], 'md')}
      disabled={boolean('disabled', false)}
      options={[
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ]}
    />
  )),
);
