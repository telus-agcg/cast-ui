import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs/react';
import { Select, SelectComponents } from '../';
import { action } from '@storybook/addon-actions';
import Checkbox from '../Checkbox';
import styled from 'styled-components';

const SCheckbox = styled(Checkbox)`
  padding-bottom: 0px;
`;

const SDiv = styled.div`
  margin-right: 5px;
`;

storiesOf('Select', module)
  .add(
    'Select',
    () => (
      <>
        <Select
          id="mySelect1"
          isMulti={boolean('isMulti', false)}
          isDisabled={boolean('isDisabled', false)}
          selectSize={select('selectSize', ['sm', 'md', 'lg'], 'md')}
          invalid={boolean('invalid', false)}
          invalidText={text('invalidText', 'A valid value is required')}
          onChange={action('onChange')}
          options={[
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' },
          ]}
        />
      </>
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
          id="mySelect2"
          isMulti={boolean('isMulti', true)}
          isDisabled={boolean('isDisabled', false)}
          selectSize={select('selectSize', ['sm', 'md', 'lg'], 'md')}
          invalid={boolean('invalid', false)}
          invalidText={text('invalidText', 'A valid value is required')}
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

const colorOptions: any[] = [
  { value: 'ocean', label: 'Ocean', color: '#00B8D9' },
  { value: 'blue', label: 'Blue', color: '#0052CC' },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630' },
  { value: 'orange', label: 'Orange', color: '#FF8B00', isDisabled: true },
];

const formatGroupLabel = data => (
  <div>
    <span>{data.label} </span>
    <span>{data.options.length}</span>
  </div>
);

type Props = {};

type State = Readonly<any>;

class MultiSelectCheckbox extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
  }

  state: State = {
    selectedOptions: [],
  };

  handleOceanClick() {
    const redOption = colorOptions.find(o => o.value === 'red');
    redOption.isDisabled = !redOption.isDisabled;
  }

  handleCheck(val) {
    if (val === 'ocean') {
      this.handleOceanClick();
    }

    const isSelectedOption = this.state.selectedOptions.find(
      o => o.value === val,
    );
    let res: any[] = [];
    if (isSelectedOption) {
      res = this.state.selectedOptions.filter(option => option.value !== val);
    } else {
      res = [
        ...this.state.selectedOptions,
        colorOptions.find(o => o.value === val),
      ];
    }
    this.setState(state => ({
      selectedOptions: res,
    }));
  }

  handleSelect(e) {
    const newOceanOption = e.find(o => o.value === 'ocean');
    const oldOceanOption = this.state.selectedOptions.find(
      o => o.value === 'ocean',
    );
    if (
      (newOceanOption && !oldOceanOption) ||
      (!newOceanOption && oldOceanOption)
    ) {
      this.handleOceanClick();
    }
    this.setState(state => ({
      selectedOptions: e,
    }));
  }

  MenuList = (props: any) => {
    return (
      <>
        <div className={'menuListHeader'}>
          {this.state.selectedOptions.length} items selected
        </div>
        {props.children}
      </>
    );
  };

  MultiValue = (props: any) => {
    const withComma = `${props.data.label}, `;
    return (
      <div>
        {this.state.selectedOptions[this.state.selectedOptions.length - 1]
          .value !== props.data.value ? (
          <SDiv>{withComma} &#32;</SDiv>
        ) : (
          <SDiv>{props.data.label}</SDiv>
        )}
      </div>
    );
  };

  Option = (props: any) => {
    return (
      <SelectComponents.Option {...props}>
        <SCheckbox
          id={props.value}
          defaultChecked={props.isSelected}
          checked={props.isSelected}
          disabled={props.isDisabled}
          value={props.value}
          onChange={() => this.handleCheck(props.value)}
        >
          <span>{props.data.label}</span>
        </SCheckbox>
      </SelectComponents.Option>
    );
  };

  render() {
    return (
      <Select
        id="mySelect3"
        isMulti
        components={{
          Option: this.Option,
          MultiValue: this.MultiValue,
          MenuList: this.MenuList,
        }}
        isDisabled={boolean('isDisabled', false)}
        selectSize={select('selectSize', ['sm', 'md', 'lg'], 'md')}
        hideSelectedOptions={false}
        isClearable={boolean('isClearable', true)}
        onChange={e => this.handleSelect(e)}
        value={this.state.selectedOptions}
        closeMenuOnSelect={false}
        formatGroupLabel={formatGroupLabel}
        options={colorOptions}
      />
    );
  }
}
