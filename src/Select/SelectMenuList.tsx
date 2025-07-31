import React, { useEffect } from 'react';
import styled from 'styled-components';
import { components as SelectComponents } from 'react-select';
import { SearchIcon } from '@icons';
import { Input } from '../Input/Input.component';

const SInput = styled(Input)`
  box-shadow: none;
  border: none;
  &.focused {
    box-shadow: none;
  }
`;

const SHr = styled.hr`
  border-top: 1px solid ${(props) => props.theme.colors.lt400};
`;

export const SelectMenuList = (props) => {
  const { selectProps } = props;
  const { onInputChange, inputValue, onMenuInputFocus } = selectProps;

  useEffect(() => {
    onMenuInputFocus();
  }, [onMenuInputFocus]);

  return (
    <div>
      <SInput
        icon={<SearchIcon height={18} width={18} />}
        iconPosition={'left'}
        value={inputValue}
        onChange={(e) => {
          onInputChange(e.currentTarget.value, {
            action: 'input-change',
          });
        }}
        onMouseDown={(e: any) => {
          e.stopPropagation();
          e.target.focus();
        }}
        onTouchEnd={(e: any) => {
          e.stopPropagation();
          e.target.focus();
        }}
      />
      <SHr />
      <SelectComponents.MenuList {...props} />
    </div>
  );
};
