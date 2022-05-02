import * as React from 'react';

import { InputGroup, Input } from '../';
import Select from '../Select';

export default {
  title: 'Components/Interactions/Input',
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

export const _InputGroup = ({
  label,
  isDisabled,
  selectSize,
  invalid,
  invalidText,
}) => (
  <div>
    <InputGroup data-testid="input-group1" label={label} inputSize="md">
      <Input
        id="my_input"
        data-testid="my-input"
        inputSize="md"
        type="text"
        disabled={false}
        required={false}
        autoComplete="on"
        maxLength={1000}
      />
    </InputGroup>
    <InputGroup
      data-testid="input-group2"
      label={label}
      inputSize="md"
      horizontal={true}
    >
      <Select
        id="my_select"
        data-testid="my-select"
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

_InputGroup.args = {
  label: 'Input Group label',
  isDisabled: false,
  selectSize: 'md',
  invalid: false,
  invalidText: 'A valid value is required',
};
