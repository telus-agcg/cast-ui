import * as React from 'react';
import styled from 'styled-components';
import { lighten } from '../utils/colorUtils';

export type Props = React.InputHTMLAttributes<HTMLInputElement> & {
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
  name?: string | undefined;
  /**
   * Specify if the radio button is checked
   *
   * @default false
   **/
  checked?: boolean;
  /**
   * Specify if the radio button is checked by default
   *
   * @default false
   **/
  defaultChecked?: boolean;
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
   * Specify the value of the radio button group when the current button is selected
   **/
  value: string;
  /**
   * Specify the function to fire when the radiobutton is checked or unchecked
   *
   * @default void
   **/
  onChange?(
    value: string,
    name: string | undefined,
    event: React.MouseEvent<HTMLElement>,
  ): void;
  /**
   * Specify the display style the radio button will have
   *
   * @default 'stacked'
   **/
  displayStyle?: 'inline' | 'stacked';
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

const displayStyleRules: Function = (
  displayStyle: 'inline' | 'stacked',
  theme: any,
) => {
  if (displayStyle === 'inline') {
    return {
      display: 'inline-block',
      'padding-right': theme.radioButton.inlineSpacing,
    };
  }
  return {
    display: 'block',
    'padding-bottom': theme.radioButton.stackedSpacing,
  };
};

const SDiv = styled.div`
	cursor: pointer;
  ${(props: Props) => displayStyleRules(props.displayStyle, props.theme)}
  }
`;

const SLabel = styled.label`
  align-items: center;
  display: inline-flex;
  font-family: ${(props: any) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.common[props.rbSize!].fontSize};
`;

const SInput = styled.input`
  display: none;
  + label:before {
    content: "";
    display: inline-block;
    width: ${(props: Props) => props.theme.radioButton[props.rbSize!].size};
    height: ${(props: Props) => props.theme.radioButton[props.rbSize!].size};
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
  &:disabled + label:before {
    background-color: ${(props: Props) =>
      props.theme.input.disabled.background};
    border-color: ${(props: Props) => props.theme.input.disabled.borderColor};
  }
  &:checked + label:before {
    background-color: ${(props: Props) => props.theme.styles.primary.flood};
  }
  &:disabled:checked + label:before {
    background-color:  ${(props: Props) =>
      lighten(props.theme.styles.primary.flood, 15)};
  }
`;

export class RadioButton extends React.Component<Props> {
  handleChange = (evt: any) => {
    if (undefined !== this.props.onChange) {
      this.props.onChange(this.props.value, this.props.name, evt);
    }
  };

  render() {
    const {
      name,
      rbSize,
      disabled,
      id,
      value,
      checked,
      defaultChecked,
      children,
    } = this.props;
    return (
      <SDiv data-radiobutton="" displayStyle={this.props.displayStyle}>
        <SInput
          type="radio"
          name={name}
          rbSize={rbSize}
          disabled={disabled}
          id={id}
          value={value}
          checked={checked}
          defaultChecked={defaultChecked}
          onChange={this.handleChange}
        />
        <SLabel htmlFor={this.props.id} rbSize={this.props.rbSize}>
          {children}
        </SLabel>
      </SDiv>
    );
  }
}
