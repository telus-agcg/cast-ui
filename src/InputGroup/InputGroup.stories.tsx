import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { InputGroup, Input } from '../';
import Select from '../Select';
import { text, boolean, select } from '@storybook/addon-knobs';

storiesOf('InputGroup', module).add(
  'InputGroup with Title',
  () => (
    <div>
      <InputGroup
        label={text('inputLabel', 'This is my label for Input Label')}
        inputSize="md"
      >
        <Input
          id="myInput"
          inputSize="md"
          type="text"
          disabled={false}
          required={false}
          autoComplete="on"
          maxLength={1000}
        />
      </InputGroup>
      <InputGroup
        label={text('selectLabel', 'This is my label for Select Component')}
        inputSize="md"
        horizontal={true}
      >
        <Select
          id="mySelect"
          isDisabled={boolean('disabled', false)}
          selectSize={select('selectSize', ['sm', 'md', 'lg'], 'md')}
          invalid={boolean('invalid', false)}
          invalidText={text('invalidText', 'A valid value is required')}
          invalidTextColor={text('invalidTextColor', '')}
          options={[
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' },
          ]}
        />
      </InputGroup>
    </div>
  ),
  {
    info: {
      text: `
        ### Notes
        This is a InputGroup
      `,
    },
  },
);
