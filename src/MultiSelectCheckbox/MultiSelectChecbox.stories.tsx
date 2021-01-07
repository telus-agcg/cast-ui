import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs/react';
import { Link, MultiSelectCheckbox as MultiSelect } from '../';
import styled from 'styled-components';

const FlexDiv = styled.div`
  display: flex;
  align-items: center;

  .link {
    padding-left: 10px;
  }
`;

storiesOf('Select', module).add(
  'Multiselect with checkbox',
  () => (
    <div>
      <MultiSelectCheckbox />
    </div>
  ),
  {
    info: {
      text: `
### Notes

This is a MultiSelect component with options selectable through a dropdown.

import {MultiSelectCheckbox} from '@tkxs/cast-ui'

### Extra props.

selectedOptions: an array of selected options.

handleSelectOptions: a function taking in selected options.
(selectedOptions) => any

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
    this.handleSelect = this.handleSelect.bind(this);
  }

  state: State = {
    selectedOptions: [],
  };

  handleSelect(o) {
    this.setState({
      selectedOptions: o,
    });
  }

  render() {
    return (
      <FlexDiv>
        <MultiSelect
          creatable={boolean('creatable', true)}
          isDisabled={boolean('isDisabled', false)}
          selectSize={select('selectSize', ['sm', 'md', 'lg'], 'md')}
          hideSelectedOptions={false}
          isClearable={boolean('isClearable', false)}
          highlightFilled={boolean('highlightFilled', false)}
          closeMenuOnSelect={false}
          formatGroupLabel={formatGroupLabel}
          options={colorOptions}
          selectedOptions={this.state.selectedOptions}
          handleSelectOptions={this.handleSelect}
        />
        <Link
          className="link"
          onClick={() => this.setState({ selectedOptions: [] })}
        >
          Clear
        </Link>
      </FlexDiv>
    );
  }
}
