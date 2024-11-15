import React, { useEffect } from 'react';
import styled from 'styled-components';
import Icon from 'react-icons-kit';
import { ic_search as icSearch } from 'react-icons-kit/md';
import { Input } from '../Input';
import { SelectComponents } from './index';

const SInput = styled(Input)`
  box-shadow: none;
  border: none;
  &.focused {
    box-shadow: none;
  }
`;

const SHr = styled.hr`
  border-top: 1px solid ${props => props.theme.colors.lt400};
`;

export const SelectMenuList = props => {
  const { selectProps } = props;
  const { onInputChange, inputValue, onMenuInputFocus } = selectProps;

  useEffect(() => {
    onMenuInputFocus();
  }, [onMenuInputFocus]);

  return (
    <div>
      <SInput
        icon={<Icon size={20} icon={icSearch} />}
        iconPosition={'left'}
        value={inputValue}
        onChange={e => {
          onInputChange(e.currentTarget.value, {
            action: 'input-change',
          });
        }}
        onMouseDown={e => {
          e.stopPropagation();
          e.target.focus();
        }}
        onTouchEnd={e => {
          e.stopPropagation();
          e.target.focus();
        }}
      />
      <SHr />
      <SelectComponents.MenuList {...props} />
    </div>
  );
};
