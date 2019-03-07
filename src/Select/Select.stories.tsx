import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs/react';

import Select from './Select.component';

storiesOf('Select', module).add(
  'Select',
  () => (
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
  ),
  {
    info: {
      text: `
        ### Notes

        This is a Select, based on the react-select component
        `,
    },
  },
);
