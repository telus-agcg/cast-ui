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
  const inputRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    onMenuInputFocus();
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 0);
  }, [onMenuInputFocus]);

  return (
    <div>
      <div>
        <SInput
          icon={<SearchIcon height={18} width={18} />}
          iconPosition={'left'}
          ref={inputRef}
          value={inputValue}
          onChange={(e) => {
            onInputChange(e.target.value, {
              action: 'input-change',
            });
          }}
          onMouseDown={(e: any) => {
            e.stopPropagation();
          }}
           onTouchEnd={(e: any) => {
          e.stopPropagation();
        }}
        />
      </div>
      <SHr />
      <SelectComponents.MenuList {...props} />
    </div>
  );
};
