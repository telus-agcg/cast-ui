import * as React from 'react';
import styled from 'styled-components';
import { Themes } from '../themes';

export type Props = {
  /**
   * Specify the ID of the individual checkbox
   *
   * @default null
   **/
  id: string;
  /**
   * Specify the size of the checkbox (sm | md | lg)
   *
   * @default 'md'
   **/
  cbSize?: 'sm' | 'md' | 'lg';
  /**
   * Specify if the checkbox is checked
   *
   * @default false
   **/
  checked?: boolean;
  /**
   * Specify if the default state of the checkbox is checked
   *
   * @default false
   **/
  defaultChecked?: boolean;
  /**
   * Specify if the checkbox should be disabled
   *
   * @default false
   **/
  disabled?: boolean;
  /**
   * Specify the function to fire when the checkbox is changed
   *
   * @default void
   **/
  onChange?: any;
  /**
   * Specify the value of the checkbox group when the current button is selected
   *
   * @default ''
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
  font-size: ${(props: Props) => props.theme.common[props.cbSize!].fontSize};
`;

const SInput = styled.input`
  display: none;
  + label:before {
    content: "";
    display: inline-block;
    width: ${(props: Props) => props.theme.checkbox[props.cbSize!].size};
    height: ${(props: Props) => props.theme.checkbox[props.cbSize!].size};
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
      height:  ${(props: Props) => (props.cbSize === 'lg' ? '8px' : '6px')};
      border-style: solid;
      border-color: ${(props: Props) => props.theme.styles.primary.borderColor};
      border-width: ${(props: Props) =>
        props.cbSize === 'lg' ? '0 4px 4px 0' : '0 3px 3px 0'};
      transform: rotate(45deg) translateX(-1px) translateY(-1px);
      -webkit-transform: rotate(45deg) translateX(-1px) translateY(-1px);
      -ms-transform: rotate(45deg) translateX(-1px) translateY(-1px);
      margin-left: ${(props: Props) =>
        props.cbSize === 'lg' ? '6.5px' : '6px'};
    }
    &:checked&:disabled + label:after {
      opacity: 0.5;
    }
`;

export class Checkbox extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  input: any;

  render() {
    const {
      id = '',
      cbSize = 'md',
      onChange = () => {},
      theme = { ...Themes.defaultTheme },
      children,
      ...props
    } = this.props;
    return (
      <SDiv data-radiobutton="" theme={theme} {...props}>
        <SInput
          type="checkbox"
          onChange={(evt: any) => {
            onChange(this.input.checked, id, evt);
          }}
          ref={(el: any) => {
            this.input = el;
          }}
          id={id}
          cbSize={cbSize}
          disabled={this.props.disabled}
          value={this.props.value}
          checked={this.props.checked}
          defaultChecked={this.props.defaultChecked}
        />
        <SLabel htmlFor={id} cbSize={cbSize} theme={theme}>
          {children}
        </SLabel>
      </SDiv>
    );
  }
}

export default Checkbox;
