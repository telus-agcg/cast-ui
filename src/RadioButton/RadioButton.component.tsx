import * as React from 'react';
import uuid from 'uuid';
import styled, { ThemeProvider } from 'styled-components';
import { Omit } from '../utils/castTypes';
import { lighten } from '../utils/colorUtils';
import { Themes } from '../themes';

type displayStyle = 'inline' | 'stacked';
type rbSize = 'sm' | 'md' | 'lg';
type displayType = 'inline-block' | 'block';

export interface Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  /**
   * Specify the ID of the individual radio button
   *
   * @default null
   **/
  id?: string;
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
  disabled?: boolean;
  /**
   * Specify the size of the radio button (sm | md | lg)
   *
   * @default 'md'
   **/
  rbSize?: rbSize;
  /**
   * Specify the value of the radio button group when the current button is selected
   **/
  value: string;
  /**
   * Specify the function to fire when the radiobutton is checked or unchecked
   *
   * @default void
   **/
  onChange?: (
    value: string,
    name: string,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  /**
   * Specify the display style the radio button will have
   *
   * @default 'stacked'
   **/
  displayStyle?: displayStyle;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
}

const displayStyleRules = (
  displayStyle: displayStyle,
  theme: any,
): {
  display: displayType;
  'padding-right'?: string;
  'padding-bottom'?: string;
} => {
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

const SDiv = styled.div<Partial<Props> & any>`
	cursor: pointer;
  ${(props: any) => displayStyleRules(props.displayStyle, props.theme)}
  }
`;

const SLabel = styled.label<Partial<Props>>`
  align-items: center;
  display: inline-flex;
  font-family: ${(props: Partial<Props>) => props.theme.typography.fontFamily};
  font-size: ${(props: Partial<Props>) =>
    props.theme.common[props.rbSize!].fontSize};
`;

const SInput = styled.input<Partial<Props>>`
  display: none;
  + label:before {
    content: "";
    display: inline-block;
    width: ${(props: Partial<Props>) =>
      props.theme.radioButton[props.rbSize!].size};
    height: ${(props: Partial<Props>) =>
      props.theme.radioButton[props.rbSize!].size};
    background-clip: content-box;
    background-color: ${(props: Partial<Props>) =>
      props.theme.radioButton.unselectedColor};
    border-color: ${(props: Partial<Props>) =>
      props.theme.radioButton.borderColor};
    border-style: ${(props: Partial<Props>) =>
      props.theme.radioButton.borderStyle};
    border-radius: 50%;
    border-width ${(props: Partial<Props>) =>
      props.theme.radioButton.borderWidth};
    cursor: pointer;
    margin-right: 5px;
    padding: 3px;
  }
  &:disabled + label {
    color: ${(props: Partial<Props>) => props.theme.radioButton.disabledText};
    cursor: not-allowed;
  }
  &:disabled + label:before {
    border-color: ${(props: Partial<Props>) =>
      props.theme.input.disabled.borderColor};
  }
  &:checked + label:before {
    background-color: ${(props: Partial<Props>) =>
      props.theme.styles.primary.flood};
  }
  &:disabled:checked + label:before {
    background-color:  ${(props: Partial<Props>) =>
      lighten(props.theme.styles.primary.flood, 15)};
  }
`;

export class RadioButton extends React.Component<Props> {
  static defaultProps = {
    rbSize: 'md',
    displayStyle: 'stacked',
    name: '',
    theme: Themes.defaultTheme,
    id: uuid.v4(),
    disabled: false,
    defaultChecked: false,
  };

  state = {
    checked: this.props.checked || this.props.defaultChecked,
  };

  onChange = (event: any) => {
    if (!this.props.disabled) {
      if (this.props.onChange instanceof Function) {
        this.props.onChange(this.props.value, this.props.name!, event);
        this.setState({
          checked: !this.state.checked,
        });
      }
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
      theme,
      children,
      onChange,
      ...props
    } = this.props;

    return (
      <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
        <SDiv data-radiobutton="" {...props}>
          <SInput
            type="radio"
            name={name}
            rbSize={rbSize}
            disabled={disabled}
            id={id}
            value={value}
            checked={checked}
            onChange={this.onChange}
          />
          <SLabel htmlFor={id} rbSize={this.props.rbSize}>
            {children}
          </SLabel>
        </SDiv>
      </ThemeProvider>
    );
  }
}
