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
   * Specify the common name of the group of radio buttons
   *
   * @default null
   **/
  name?: string;
  /**
   * Specify if the radio button is checked
   *
   * @default false
   **/
  checked?: boolean;
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
  rbSize: 'sm' | 'md' | 'lg';
  /**
   * Specify the style of the button (primary, default, success, etc.)
   **/
  rbStyle: string;
  /**
   * Specify the value of the radio button group when the current button is selected
   **/
  value: string;
  /**
   * Specify the function to fire when the radiobutton is checked or unchecked
   *
   * @default null
   **/
  onChange?: any;
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
  font-size: ${(props: Props) => props.theme.common[props.rbSize].fontSize};
`;

const SInput = styled.input`
  display: none;
  + label:before {
    content: "";
    display: inline-block;
    width: ${(props: Props) => props.theme.radioButton[props.rbSize].size};
    height: ${(props: Props) => props.theme.radioButton[props.rbSize].size};
    background-clip: content-box;
    background-color: ${(props: Props) =>
      props.theme.radioButton.unselectedColor};
    border-color: ${(props: Props) => props.theme.radioButton.borderColor};
    border-style: ${(props: Props) => props.theme.radioButton.borderStyle};
    border-radius: 50%;
    border-width ${(props: Props) => props.theme.radioButton.borderWidth};
    margin-right: 5px;
    padding: 3px;
  }
  &:disabled + label {
    color: ${(props: Props) => props.theme.radioButton.disabledText};
    cursor: not-allowed;
  }
  &:checked + label:before {
    background-color: ${(props: Props) =>
      props.theme.styles[props.rbStyle].flood};
  }
  &:disabled + label:before {
    background-color: ${(props: Props) =>
      props.theme.input.disabled.background};
    border-color: ${(props: Props) => props.theme.input.disabled.borderColor};
  }
`;

export default class RadioButton extends React.Component<Props> {
  handleChange = (evt: any) => {
    this.props.onChange(this.props.value, this.props.name, evt);
  }

  render() {
    return (
      <SDiv data-radiobutton="">
        <SInput
          type="radio"
          name={this.props.name}
          rbStyle={this.props.rbStyle}
          rbSize={this.props.rbSize}
          disabled={this.props.disabled}
          id={this.props.id}
          value={this.props.value}
          checked={this.props.checked}
          onChange={this.handleChange}
        />
        <SLabel htmlFor={this.props.id} rbSize={this.props.rbSize}>
          {this.props.children}
        </SLabel>
      </SDiv>
    );
  }
}
