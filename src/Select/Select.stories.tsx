import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs/react';
import { components } from 'react-select';
import { Select } from '../';
import { action } from '@storybook/addon-actions';
import Checkbox from '../Checkbox';

storiesOf('Select', module)
  .add(
    'Select',
    () => (
      <div>
        <Select
          id="mySelect"
          isMulti={boolean('isMulti', false)}
          isDisabled={boolean('isDisabled', false)}
          selectSize={select('selectSize', ['sm', 'md', 'lg'], 'md')}
          invalid={boolean('invalid', false)}
          invalidText={text('invalidText', 'A valid value is required')}
          invalidTextColor={text('invalidTextColor', '')}
          borderColor={text('borderColor', '')}
          borderRadius={text('borderRadius', '')}
          onChange={action('onChange')}
          options={[
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' },
          ]}
        />
      </div>
    ),
    {
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
  )
  .add(
    'Multiselect',
    () => (
      <div>
        <Select
          id="mySelect"
          isMulti={boolean('isMulti', true)}
          isDisabled={boolean('isDisabled', false)}
          selectSize={select('selectSize', ['sm', 'md', 'lg'], 'md')}
          invalid={boolean('invalid', false)}
          invalidText={text('invalidText', 'A valid value is required')}
          invalidTextColor={text('invalidTextColor', '')}
          borderColor={text('borderColor', '')}
          borderRadius={text('borderRadius', '')}
          onChange={action('onChange')}
          options={[
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' },
          ]}
        />
      </div>
    ),
    {
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
  )
  .add(
    'Multiselect Checkbox',
    () => (
      <div>
        <MultiSelectCheckbox />
      </div>
    ),
    {
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
  );

const colourOptions = [
  { value: 'ocean', label: 'Ocean', color: '#00B8D9' },
  { value: 'blue', label: 'Blue', color: '#0052CC' },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630' },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
];

const Option = (props: any) => (
  <components.Option {...props}>
    <input type="checkbox" checked={props.isSelected} onChange={() => null} />{' '}
    <Checkbox
      id={props.value}
      checked={props.isSelected}
      value={props.value}
      onChange={() => null}
    >
      <span>{props.data.label}</span>
    </Checkbox>
  </components.Option>
);

const MultiValue = (props: any) => (
  <components.MultiValue {...props}>{props.data.label}</components.MultiValue>
);

const formatGroupLabel = data => (
  <div>
    <span>{data.label} </span>
    <span>{data.options.length}</span>
  </div>
);

type Props = {};

const initialState = {
  options: [],
};

type State = Readonly<typeof initialState>;

class MultiSelectCheckbox extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
  }

  readonly state: State = initialState;

  handleSelect(e) {
    this.setState(state => ({
      options: e,
    }));
  }

  render() {
    return (
      <Select
        id="mySelect"
        isMulti={boolean('isMulti', true)}
        components={{ Option, MultiValue }}
        isDisabled={boolean('isDisabled', false)}
        selectSize={select('selectSize', ['sm', 'md', 'lg'], 'md')}
        borderColor={text('borderColor', '')}
        borderRadius={text('borderRadius', '')}
        hideSelectedOptions={false}
        isClearable={boolean('isClearable', false)}
        onChange={e => this.handleSelect(e)}
        handleCheck={this.handleSelect}
        value={this.state.options}
        closeMenuOnSelect={false}
        formatGroupLabel={formatGroupLabel}
        options={colourOptions}
      />
    );
  }
}
