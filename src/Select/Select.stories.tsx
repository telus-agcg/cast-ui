import * as React from 'react';
import { Link, Select } from '../';
import styled from 'styled-components';

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
`;

export default {
  title: 'Select',
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
    highlightFilled: {
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
};

const _Select = args => (
  <>
    <Select id={'SampleSelect'} {...args} />
  </>
);

export const RegularSelect = _Select.bind({});
RegularSelect.args = {
  creatable: true,
  isMulti: false,
  isDisabled: false,
  isClearable: false,
  isSearchable: false,
  highlightFilled: false,
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

_Select.story = {
  parameters: {
    info: {
      text: `
### Notes

This is a Select, based on the [react-select](https://github.com/JedWatson/react-select) library.

###### Important

The version of **react-select** used is **version 2** and it introduces a number of changes from version 1.

For example, the *selectedOption* prop cannot accept any simple values such as strings.

The recommended implementation can be found [here](https://react-select.com/upgrade-guide#simple-value)

Review the [upgrade guide](https://react-select.com/upgrade-guide) on what to expect if coming from version 1.
      `,
    },
  },
};

export const MultiSelect = _Select.bind({});
MultiSelect.args = {
  creatable: true,
  isMulti: true,
  isDisabled: false,
  selectSize: 'md',
  invalid: false,
  invalidText: 'A valid value is required',
  isClearable: false,
  highlightFilled: false,
  options: [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ],
  optionType: 'default',
};

MultiSelect.story = {
  parameters: {
    info: {
      text: `
### Notes

This is a MultiSelect, based on the [react-select](https://github.com/JedWatson/react-select) library.

###### Important

The version of **react-select** used is **version 2** and it introduces a number of changes from version 1.

For example, the *selectedOption* prop cannot accept any simple values such as strings.

The recommended implementation can be found [here](https://react-select.com/upgrade-guide#simple-value)

Review the [upgrade guide](https://react-select.com/upgrade-guide) on what to expect if coming from version 1.
      `,
    },
  },
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
  highlightFilled: false,
  hideSelectedOptions: false,
  optionType: 'checkbox',
};

MultiSelectWithCheckbox.story = {
  parameters: {
    info: {
      text: `
### Notes

This is a MultiSelect, based on the [react-select](https://github.com/JedWatson/react-select) library.

###### Important

The version of **react-select** used is **version 2** and it introduces a number of changes from version 1.

For example, the *selectedOption* prop cannot accept any simple values such as strings.

The recommended implementation can be found [here](https://react-select.com/upgrade-guide#simple-value)

Review the [upgrade guide](https://react-select.com/upgrade-guide) on what to expect if coming from version 1.
      `,
    },
  },
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
    label: 'Colours',
    options: colorOptions,
  },
  {
    label: 'Flavours',
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
        onChange={e => handleSelect(e)}
        value={selectedOptions}
        closeMenuOnSelect={false}
        formatGroupLabel={formatGroupLabel}
        options={groupedOptions}
        {...args}
      />
      <Link onClick={() => setSelectedOptions([])}>Clear</Link>
    </FlexDiv>
  );
};
