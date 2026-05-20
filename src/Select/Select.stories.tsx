import * as React from 'react';
import styled from 'styled-components';
import { Link } from '../Typography/Link/Link.component';
import { Meta, StoryObj } from '@storybook/react-vite';
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

export const SelectWithSubtitles: Story = {
  args: {
    creatable: false,
    isMulti: false,
    isDisabled: false,
    isClearable: true,
    isFilterable: false,
    selectSize: 'md',
    invalid: false,
    invalidText: 'A valid value is required',
    placeholder: 'Select a fruit...',
    options: [
      { value: 'apple', label: 'Apple', subtitle: 'A sweet red fruit' },
      { value: 'banana', label: 'Banana', subtitle: 'A yellow tropical fruit' },
      { value: 'orange', label: 'Orange', subtitle: 'A citrus fruit rich in vitamin C' },
      { value: 'grape', label: 'Grape', subtitle: 'Small round fruit, often purple or green' },
    ],
    optionType: 'default',
  },
};

export const SelectMixedOptions: Story = {
  args: {
    creatable: false,
    isMulti: false,
    isDisabled: false,
    isClearable: true,
    isFilterable: false,
    selectSize: 'md',
    invalid: false,
    invalidText: 'A valid value is required',
    placeholder: 'Select an option...',
    options: [
      { value: 'with-subtitle-1', label: 'Option with subtitle', subtitle: 'This option has a subtitle' },
      { value: 'without-subtitle-1', label: 'Option without subtitle' },
      { value: 'with-subtitle-2', label: 'Another with subtitle', subtitle: 'Additional context here' },
      { value: 'without-subtitle-2', label: 'Another without subtitle' },
    ],
    optionType: 'default',
  },
};

/**
 * Demonstrates automatic locale-aware "No options" message.
 *
 * The Select component reads the `lang` attribute on the `<html>` element and
 * automatically shows the "No options" message in the matching language — no
 * prop changes required in the consuming application.
 *
 * Use the buttons below to switch the document language and then type a search
 * term that yields no results to see the message update in real time.
 *
 * Supported out-of-the-box: en, fr-CA.
 *
 * If you need a custom message (e.g. from your own i18n library), pass it via
 * `controlSpecificProps.noOptionsMessage` — it will take precedence over the
 * built-in translation.
 */
export const LocaleAwareNoOptionsMessage = () => {
  const languages = [
    { code: 'en', label: 'English' },
    { code: 'fr-CA', label: 'Français (CA)' },
  ];

  // Initialise from the actual document lang so the UI stays in sync if
  // another story already changed it. Fall back to 'en' when unset.
  const [currentLang, setCurrentLang] = React.useState<string>(
    () => document.documentElement.lang || 'en',
  );

  // Capture the original lang on mount and restore it on unmount so this
  // story does not leak its global side-effect into other Storybook stories.
  React.useEffect(() => {
    const originalLang = document.documentElement.lang;
    return () => {
      document.documentElement.lang = originalLang;
    };
  }, []);

  const switchLanguage = (lang: string) => {
    document.documentElement.lang = lang;
    setCurrentLang(lang);
  };

  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <p style={{ marginBottom: 8, fontSize: 13, color: '#555' }}>
        Switch the document language, then type a search term that matches no
        options to see the built-in translated message.
      </p>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
        {languages.map(({ code, label }) => (
          <button
            key={code}
            type="button"
            onClick={() => switchLanguage(code)}
            style={{
              padding: '4px 10px',
              borderRadius: 4,
              border: '1px solid #ccc',
              background: currentLang === code ? '#4b286d' : '#fff',
              color: currentLang === code ? '#fff' : '#333',
              cursor: 'pointer',
              fontSize: 13,
            }}
          >
            {label}
          </button>
        ))}
      </div>
      <CustomSelect
        id="locale-aware-select"
        isFilterable={true}
        options={[
          { value: 'chocolate', label: 'Chocolate' },
          { value: 'strawberry', label: 'Strawberry' },
          { value: 'vanilla', label: 'Vanilla' },
        ]}
        placeholder="Search…"
      />
    </div>
  );
};
