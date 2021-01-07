import * as React from 'react';
import styled from 'styled-components';
import Checkbox from '../Checkbox';
import { Select, SelectComponents, SelectProps } from '../Select';

const SCheckbox = styled(Checkbox)`
  padding-bottom: 0px;
`;

const SDiv = styled.div`
  margin-right: 5px;
`;

type SelectOption = {
  value: string;
  label: string;
  isDisabled?: boolean;
};

type Props = SelectProps & {
  options: SelectOption[];
  selectedOptions: SelectOption[];
  handleSelectOptions: (val: SelectOption[]) => any;
};

export class MultiSelectCheckbox extends React.Component<Props, any> {
  constructor(props: any) {
    super(props);
  }

  canEnable = option => !!option.isDisabled;

  toggleDisabled(val) {
    const { options } = this.props;
    const selectedOption = options.find(o => o.value === val);
    if (!!selectedOption && this.canEnable(selectedOption)) {
      selectedOption.isDisabled = !selectedOption.isDisabled;
    }
  }

  handleCheck(val) {
    this.toggleDisabled(val);

    const isSelectedOption = this.props.selectedOptions.find(
      o => o.value === val,
    );
    let res: any[] = [];
    if (isSelectedOption) {
      res = this.props.selectedOptions.filter(option => option.value !== val);
    } else {
      res = [
        ...this.props.selectedOptions,
        this.props.options.find(o => o.value === val),
      ];
    }
    this.props.handleSelectOptions(res);
  }

  findNewOption(selectedOptions, existingOptions) {
    let option: SelectOption = { value: '', label: '' };
    selectedOptions.forEach(o => {
      let matches = false;
      existingOptions.forEach(j => {
        if (o.value === j.value) {
          matches = true;
        }
      });
      if (!matches) {
        option = o;
        return;
      }
    });
    return option;
  }

  handleSelect(e) {
    const addedOption = this.findNewOption(e, this.props.selectedOptions);
    if (this.canEnable(addedOption)) {
      this.toggleDisabled(addedOption.value);
    }
    this.props.handleSelectOptions(e);
  }

  MenuList = (props: any) => {
    return (
      <>
        <div className={'menuListHeader'}>
          {this.props.selectedOptions.length} items selected
        </div>
        {props.children}
      </>
    );
  };

  MultiValue = (props: any) => {
    const withComma = `${props.data.label}, `;
    return (
      <div>
        {this.props.selectedOptions[this.props.selectedOptions.length - 1]
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
        isMulti
        value={this.props.selectedOptions}
        components={{
          Option: this.Option,
          MultiValue: this.MultiValue,
          MenuList: this.MenuList,
        }}
        {...this.props}
      />
    );
  }
}
