import * as React from 'react';

import { InputGroup, Input } from '../';
import Select from '../Select';

export default {
  title: 'InputGroup',
  component: InputGroup,
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
    },
    isDisabled: {
      control: {
        type: 'boolean',
      },
    },
    selectSize: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'select',
      },
    },
    invalid: {
      control: {
        type: 'boolean',
      },
    },
    invalidText: {
      control: {
        type: 'text',
      },
    },
    inputSize: {
      control: false,
    },
    horizontal: {
      control: false,
    },
    theme: {
      table: {
        disable: true,
      },
    },
  },
};

export const InputGroupWithTitle = ({
  label,
  isDisabled,
  selectSize,
  invalid,
  invalidText,
}) => (
  <div>
    <InputGroup label={label} inputSize="md">
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
    <InputGroup label={label} inputSize="md" horizontal={true}>
      <Select
        id="mySelect"
        isDisabled={isDisabled}
        selectSize={selectSize}
        invalid={invalid}
        invalidText={invalidText}
        options={[
          { value: 'chocolate', label: 'Chocolate' },
          { value: 'strawberry', label: 'Strawberry' },
          { value: 'vanilla', label: 'Vanilla' },
        ]}
      />
    </InputGroup>
  </div>
);

InputGroupWithTitle.args = {
  label: 'Input Group label',
  isDisabled: false,
  selectSize: 'md',
  invalid: false,
  invalidText: 'A valid value is required',
};

InputGroupWithTitle.story = {
  parameters: {
    info: {
      text: `
        ### Notes
        This is a InputGroup
      `,
    },
  },
};
