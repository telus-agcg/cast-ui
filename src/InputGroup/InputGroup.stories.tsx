import { Meta, StoryObj } from '@storybook/react';
import { InputGroup } from './InputGroup.component';
import { Input } from '../Input/Input.component';
import { CustomSelect } from '../Select/Select.component';

type InputGroupCustomArgs = React.ComponentProps<typeof InputGroup> &
  React.ComponentProps<typeof CustomSelect>;

const meta: Meta<InputGroupCustomArgs> = {
  title: 'Components/Interactions/Input',
  component: InputGroup,
  subcomponents: { CustomSelect: CustomSelect as React.ComponentType<unknown> },
};

export default meta;

type Story = StoryObj<InputGroupCustomArgs>;

export const _InputGroup: Story = {
  args: {
    label: 'Input Group',
    isDisabled: false,
    selectSize: 'md',
    invalid: false,
    invalidText: 'A valid value is required',
  },
  render: ({ label, isDisabled, selectSize, invalid, invalidText }) => {
    return (
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
          <CustomSelect
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
  },
};
