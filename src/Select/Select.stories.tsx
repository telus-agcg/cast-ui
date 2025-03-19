import * as React from 'react';
import styled from 'styled-components';
import { Link } from '../Typography/Link/Link.component';
import { Meta, StoryObj } from '@storybook/react';
import { CustomSelect } from './Select.component';

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
`;
const SLink = styled(Link)`
  margin-left: 5px;
`;
const description = `
This is a Select, based on the [react-select](https://github.com/JedWatson/react-select) library.

###### Important
The version of **react-select** used is **version 2** and it introduces a number of changes from version 1.
For example, the *selectedOption* prop cannot accept any simple values such as strings.
The recommended implementation can be found [here](https://react-select.com/upgrade-guide#simple-value)
Review the [upgrade guide](https://react-select.com/upgrade-guide) on what to expect if coming from version 1.
    `;

const meta: Meta<typeof CustomSelect> = {
  title: 'Components/Interactions/Select',
  component: CustomSelect,
  argTypes: {
    theme: {
      table: {
        disable: true,
      },
    },
    creatable: {
      control: 'boolean',
    },
    isMulti: {
      control: 'boolean',
    },
    isDisabled: {
      control: 'boolean',
    },
    isClearable: {
      control: 'boolean',
    },
    isFilterable: {
      control: 'boolean',
    },
    invalid: {
      control: 'boolean',
    },
    selectSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    optionType: {
      control: 'select',
      options: ['checkbox', 'default'],
    },
    invalidText: {
      control: 'text',
    },
    onChange: {
      action: {
        type: 'onChange',
      },
    },
    options: {
      control: false,
    },
    id: {
      control: false,
    },
    components: { control: false },
    formatGroupLabel: { control: false },
    value: { control: false },
    closeMenuOnSelect: { control: false },
    placeholder: { control: false },
    hideSelectedOptions: { control: false },
    selectedOption: { control: false },
    controlSpecificProps: { control: false },
    menuPortalTarget: { control: false },
  },
  parameters: {
    docs: {
      description,
    },
  },
};

export default meta;

type Story = StoryObj<typeof CustomSelect>;

export const _Select: Story = {
  args: {
    creatable: true,
    // dataTestId: 'single-select',
    isMulti: false,
    isDisabled: false,
    isClearable: false,
    isFilterable: false,
    selectSize: 'md',
    invalid: false,
    invalidText: 'A valid value is required',
    options: [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' },
    ],
    optionType: 'default',
  },
};

export const MultiSelect: Story = {
  args: {
    creatable: true,
    // dataTestId: 'multi-select',
    isMulti: true,
    isDisabled: false,
    isFilterable: false,
    selectSize: 'md',
    invalid: false,
    invalidText: 'A valid value is required',
    isClearable: false,
    options: [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' },
    ],
    optionType: 'default',
  },
};

export const MultiSelectWithCheckbox = (args) => (
  <MultiSelectCheckbox id="SampleCheckSelect" {...args} />
);
MultiSelectWithCheckbox.args = {
  creatable: true,
  isDisabled: false,
  isMulti: true,
  selectSize: 'md',
  invalid: false,
  isFilterable: true,
  invalidText: 'A valid value is required',
  isClearable: false,
  hideSelectedOptions: false,
  optionType: 'checkbox',
};

const colorOptions: any[] = [
  { value: 'blue', label: 'Blue' },
  { value: 'purple', label: 'Purple' },
  { value: 'red', label: 'Red' },
  { value: 'orange', label: 'Orange' },
  { value: 'white', label: 'White' },
  { value: 'black', label: 'Black' },
];

const flavorOptions: any[] = [
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'lemon', label: 'Lemon' },
  { value: 'cinnamon', label: 'Cinnamon' },
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'mint', label: 'Mint' },
];

const groupedOptions = [
  {
    label: 'Colors',
    options: colorOptions,
  },
  {
    label: 'Flavors',
    options: flavorOptions,
  },
];

const MultiSelectCheckbox = (args) => {
  const [selectedOptions, setSelectedOptions] = React.useState<any[]>([]);

  const handleOceanClick = () => {
    const redOption = colorOptions.find((o) => o.value === 'red');
    redOption.isDisabled = !redOption.isDisabled;
  };

  const handleSelect = (e) => {
    const newOceanOption = e.find((o) => o.value === 'ocean');
    const oldOceanOption = selectedOptions.find(
      (o: any) => o.value === 'ocean',
    );
    if (
      (newOceanOption && !oldOceanOption) ||
      (!newOceanOption && oldOceanOption)
    ) {
      handleOceanClick();
    }
    setSelectedOptions((_state) => e);
  };

  const formatGroupLabel = (data) => (
    <div>
      <span>{data.label}&nbsp;&nbsp;</span>
      <span>{data.options.length}</span>
    </div>
  );

  return (
    <FlexDiv>
      <CustomSelect
        {...args}
        id="SampleCheckSelect"
        data-testid={'multi-select-checkbox'}
        onChange={(e) => handleSelect(e)}
        selectedOption={selectedOptions}
        closeMenuOnSelect={false}
        formatGroupLabel={formatGroupLabel}
        options={groupedOptions}
      />
      <SLink onClick={() => setSelectedOptions([])}>Clear</SLink>
    </FlexDiv>
  );
};
