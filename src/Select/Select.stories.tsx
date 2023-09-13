import * as React from 'react';
import { Link, Select } from '../';
import styled from 'styled-components';

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

export default {
  title: 'Components/Interactions/Select',
  component: Select,
  argTypes: {
    theme: {
      table: {
        disable: true,
      },
    },
    creatable: {
      control: {
        type: 'boolean',
      },
    },
    isMulti: {
      control: {
        type: 'boolean',
      },
    },
    isDisabled: {
      control: {
        type: 'boolean',
      },
    },
    isClearable: {
      control: {
        type: 'boolean',
      },
    },
    isSearchable: {
      control: {
        type: 'boolean',
      },
    },
    invalid: {
      control: {
        type: 'boolean',
      },
    },
    selectSize: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },
    optionType: {
      control: {
        type: 'select',
        options: ['checkbox', 'default'],
      },
    },
    invalidText: {
      control: {
        type: 'text',
      },
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
      description: {
        component: description,
      },
    },
  },
};

const _Select = args => (
  <>
    <Select id={'SampleSelect'} data-testid={args.dataTestId} {...args} />
  </>
);

export const Regular = _Select.bind({});
Regular.args = {
  creatable: true,
  dataTestId: 'single-select',
  isMulti: false,
  isDisabled: false,
  isClearable: false,
  isSearchable: false,
  selectSize: 'md',
  invalid: false,
  invalidText: 'A valid value is required',
  options: [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ],
  optionType: 'default',
};

export const MultiSelect = _Select.bind({});
MultiSelect.args = {
  creatable: true,
  dataTestId: 'multi-select',
  isMulti: true,
  isDisabled: false,
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
};

export const MultiSelectWithCheckbox = args => (
  <MultiSelectCheckbox id="SampleCheckSelect" {...args} />
);
MultiSelectWithCheckbox.args = {
  creatable: true,
  isDisabled: false,
  isMulti: true,
  selectSize: 'md',
  invalid: false,
  invalidText: 'A valid value is required',
  isClearable: false,
  hideSelectedOptions: false,
  optionType: 'checkbox',
};

const colorOptions: any[] = [
  { value: 'ocean', label: 'Ocean', color: '#00B8D9' },
  { value: 'blue', label: 'Blue', color: '#0052CC' },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630' },
  { value: 'orange', label: 'Orange', color: '#FF8B00', isDisabled: true },
];

const flavorOptions: any[] = [
  { value: 'ocean', label: 'Ocean', color: '#00B8D9' },
  { value: 'blue', label: 'Blue', color: '#0052CC' },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630' },
  { value: 'orange', label: 'Orange', color: '#FF8B00', isDisabled: true },
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

const MultiSelectCheckbox = args => {
  const [selectedOptions, setSelectedOptions] = React.useState<any[]>([]);

  const handleOceanClick = () => {
    const redOption = colorOptions.find(o => o.value === 'red');
    redOption.isDisabled = !redOption.isDisabled;
  };

  const handleSelect = e => {
    const newOceanOption = e.find(o => o.value === 'ocean');
    const oldOceanOption = selectedOptions.find(
      (o: any) => o.value === 'ocean',
    );
    if (
      (newOceanOption && !oldOceanOption) ||
      (!newOceanOption && oldOceanOption)
    ) {
      handleOceanClick();
    }
    setSelectedOptions(state => e);
  };

  const formatGroupLabel = data => (
    <div>
      <span>{data.label}</span>
      <span>{data.options.length}</span>
    </div>
  );

  return (
    <FlexDiv>
      <Select
        id="SampleCheckSelect"
        data-testid={'multi-select-checkbox'}
        onChange={e => handleSelect(e)}
        selectedOption={selectedOptions}
        closeMenuOnSelect={false}
        formatGroupLabel={formatGroupLabel}
        options={groupedOptions}
        {...args}
      />
      <SLink onClick={() => setSelectedOptions([])}>Clear</SLink>
    </FlexDiv>
  );
};
