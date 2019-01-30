import * as React from 'react';
import styled from 'styled-components';

type Props = {
  /**
   * Specify the ID of the individual radio button
   *
   * @default null
   **/
  id: string;
  /**
   * Specify if the radio button is checked
   *
   * @default false
   **/
  checked: boolean;
  /**
   * Specify if the radio button should be disabled
   *
   * @default false
   **/
  disabled: boolean;
  /**
   * Specify the size of the radio button (sm | md | lg)
   *
   * @default 'md'
   **/
  cbSize: 'sm' | 'md' | 'lg';
  /**
   * Specify the style of the button (primary, default, success, etc.)
   *
   * @default 'default'
   **/
  cbStyle: string;
  /**
   * Specify the value of the radio button group when the current button is selected
   *
   * @default 'default'
   **/
  value: string;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

const SDiv = styled.div`
  display: inline-block;
  + div[data-radiobutton] {
    padding-left: 20px;
  }
`;

const SLabel = styled.label`
  align-items: center;
  display: inline-flex;
  font-family: ${(props: any) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.common[props.cbSize].fontSize};
`;

const SInput = styled.input`
  display: none;
  + label:before {
    content: "";
    display: inline-block;
    width: ${(props: Props) => props.theme.checkbox[props.cbSize].size};
    height: ${(props: Props) => props.theme.checkbox[props.cbSize].size};
    background-clip: content-box;
    background-color: ${(props: Props) => props.theme.checkbox.unselectedColor};
    border-color: ${(props: Props) => props.theme.checkbox.borderColor};
    border-style: ${(props: Props) => props.theme.checkbox.borderStyle};
    border-radius: 1px;
    border-width ${(props: Props) => props.theme.checkbox.borderWidth};
    margin-right: 5px;
    padding: 3px;
  }
  &:disabled + label {
    color: ${(props: Props) => props.theme.checkbox.disabledText};
    cursor: not-allowed;
  }
  &:checked + label:before {
  }
  &:checked + label:after {
      content: "";
      padding: 2px;
      text-align: center;
      position: absolute;
      height: 5px;
      border-style: solid;
      border-color: ${(props: Props) => props.theme.styles[props.cbStyle].flood};
      border-width: 0 3px 3px 0;
      transform: rotate(45deg) translateX(-1px) translateY(-1px);
      -webkit-transform: rotate(45deg) translateX(-1px) translateY(-1px);
      -ms-transform: rotate(45deg) translateX(-1px) translateY(-1px);
      margin-left: 6px;
  }
`;

export const Checkbox: React.FunctionComponent<Props> = (inputProps) => {
  return (
    <SDiv data-radiobutton="">
      <SInput
        type="checkbox"
        cbStyle={inputProps.cbStyle}
        cbSize={inputProps.cbSize}
        disabled={inputProps.disabled}
        id={inputProps.id}
        value={inputProps.value}
        checked={inputProps.checked}
      />
      <SLabel htmlFor={inputProps.id} cbSize={inputProps.cbSize}>
        {inputProps.children}
      </SLabel>
    </SDiv>
  );
};
