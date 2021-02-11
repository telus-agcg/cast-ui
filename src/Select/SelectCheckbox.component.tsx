import * as React from 'react';
import styled from 'styled-components';
import { SelectComponents } from '..';
import Checkbox from '../Checkbox';

const isObject = val => {
  if (val === null) {
    return false;
  }
  return typeof val === 'object';
};

const isEmptyObject = val => {
  return isObject(val) && Object.keys(val).length === 0;
};

interface Props {
  options: any[];
  isMulti?: boolean;
  selectedOptions?: any;
  updateSelectedOptions: (any) => void;
}

const SCheckbox = styled(Checkbox)`
  padding-bottom: 0px;
`;

const Div = styled.div`
  margin-right: 5px;
`;

const MenuItemWrapper = styled.div`
  max-height: 300px;
  overflow-y: auto;
`;

export const SelectCheckboxProps = (res: Props) => {
  const { selectedOptions, options, updateSelectedOptions, isMulti } = res;

  const selectMulti = (val, updateSelectedOptions) => {
    const isSelectedOption = selectedOptions.find(o => o.value === val);
    let res: any[] = [];
    if (isSelectedOption) {
      res = selectedOptions.filter(option => option.value !== val);
    } else {
      res = [...selectedOptions, options.find(o => o.value === val)];
    }
    updateSelectedOptions(res);
  };

  const selectSingle = (val, updateSelectedOptions) => {
    const res: any[] = selectedOptions.filter(option => option.value !== val);
    updateSelectedOptions(res[0]);
  };

  const handleCheck = val => {
    if (isMulti) {
      selectMulti(val, updateSelectedOptions);
    } else {
      selectSingle(val, updateSelectedOptions);
    }
  };

  const formatGroupLabel = data => (
    <div>
      <span>{data.label} </span>
      <span>{data.options.length}</span>
    </div>
  );

  const components = {
    Option: (props: any) => {
      return (
        <SelectComponents.Option {...props}>
          <SCheckbox
            id={props.value}
            defaultChecked={props.isSelected}
            checked={props.isSelected}
            disabled={props.isDisabled}
            value={props.value}
            onChange={() => handleCheck(props.value)}
          >
            <span>{props.data.label}</span>
          </SCheckbox>
        </SelectComponents.Option>
      );
    },
    MultiValue: (props: any) => {
      const withComma = `${props.data.label}, `;

      const showCommas =
        isMulti &&
        selectedOptions &&
        selectedOptions[selectedOptions.length - 1].value !== props.data.value;
      return (
        <div>
          {showCommas ? (
            <Div>{withComma} &#32;</Div>
          ) : (
            <Div>{props.data.label}</Div>
          )}
        </div>
      );
    },
    MenuList: (props: any) => {
      const selectedCount = Array.isArray(selectedOptions)
        ? selectedOptions.length
        : !isEmptyObject(selectedOptions)
        ? 1
        : 0;
      return (
        <MenuItemWrapper>
          <div className={'menuListHeader'}>{selectedCount} items selected</div>
          {props.children}
        </MenuItemWrapper>
      );
    },
  };
  return { components, formatGroupLabel };
};
