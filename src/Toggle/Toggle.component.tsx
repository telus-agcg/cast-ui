import * as React from 'react';
import uuid from 'uuid';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../themes';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Specify the ID of the individual toggle
   *
   * @default uuid.v4
   **/
  id?: string;
  /**
   * Specify the size of the toggle (sm | md | lg)
   *
   * @default 'md'
   **/
  toggleSize?: 'sm' | 'md' | 'lg';
  /**
   * Specify if the toggle is checked
   *
   * @default false
   **/
  checked?: boolean;
  /**
   * Specify if the default state of the toggle is checked
   *
   * @default false
   **/
  defaultChecked?: boolean;
  /**
   * Label to show before the toggle
   */
  label?: string;
  /**
   * Specify if the toggle should be disabled
   *
   * @default false
   **/
  disabled?: boolean;
  /**
   * Specify the function to fire when the toggle is changed
   *
   * @default void
   **/
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
  /**
   * Specify the value of the toggle group when the current button is selected
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
}

const getCSSCalc: (str: string) => string = str => `calc(100% - ${str})`;

const SDiv = styled.div`
  input[type='checkbox'] {
    height: 0;
    width: 0;
    visibility: hidden;
    display: none;
  }

  label {
    cursor: ${(props: Props) => (props.disabled ? 'not-allowed' : 'pointer')};
    text-indent: -9999px;
    width: ${(props: Props) =>
      props.theme.toggle[props.toggleSize!].backgroundWidth};
    height: ${(props: Props) =>
      props.theme.toggle[props.toggleSize!].backgroundHeight};
    background: ${(props: Props) =>
      props.disabled
        ? props.theme.toggle.background.disabled
        : props.theme.toggle.background.inactiveColor};
    border-color: ${(props: Props) =>
      props.disabled
        ? props.theme.toggle.background.disabled
        : props.theme.toggle.background.disabledBorderColor};
    display: block;
    border-radius: 100px;
    position: relative;
  }

  label:after {
    content: '';
    position: absolute;
    top: ${(props: Props) =>
      props.theme.toggle[props.toggleSize!].toggleOffsetTop};
    left: ${(props: Props) =>
      props.theme.toggle[props.toggleSize!].toggleOffsetLeft};
    width: ${(props: Props) =>
      props.theme.toggle[props.toggleSize!].toggleSize};
    height: ${(props: Props) =>
      props.theme.toggle[props.toggleSize!].toggleSize};
    background: ${(props: Props) =>
      props.disabled
        ? props.theme.toggle.inactiveDisabledColor
        : props.theme.toggle.inactiveColor};
    border-color: ${(props: Props) =>
      props.disabled
        ? props.theme.toggle.inactiveDisabledBorderColor
        : props.theme.toggle.inactiveBorderColor};
    border-radius: 50px;
    transition: all 0.3s;
  }

  input:checked + label {
    background: ${(props: Props) =>
      props.disabled
        ? props.theme.toggle.background.disabled
        : props.theme.toggle.background.activeColor};
  }

  input:checked + label:after {
    left: ${(props: Props) =>
      getCSSCalc(props.theme.toggle[props.toggleSize!].activeOffset)};
    transform: translateX(-100%);
    background: ${(props: Props) =>
      props.disabled
        ? props.theme.toggle.activeDisabledColor
        : props.theme.toggle.activeColor};
    border-color: ${(props: Props) =>
      props.disabled
        ? props.theme.toggle.activeDisabledBorderColor
        : props.theme.toggle.activeBorderColor};
  }

  input:checked + label:hover:after {
    background: ${(props: Props) =>
      props.disabled
        ? props.theme.toggle.activeDisabledColor
        : props.theme.colors.primaryHover};
    transition: all 0.3s;
  }

  input:not(:checked) + label:hover:after {
    background: ${(props: Props) =>
      props.disabled
        ? props.theme.toggle.activeDisabledColor
        : props.theme.colors.drk800};
    transition: all 0.3s;
  }

  label:active:after {
    width: ${(props: Props) =>
      props.theme.toggle[props.toggleSize!].toggleSize};
  }
`;

export class Toggle extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  static defaultProps = {
    toggleSize: 'md',
    theme: Themes.defaultTheme,
    id: uuid.v4(),
  };

  onChange = event =>
    this.props.onChange
      ? this.props.onChange(event)
      : alert(`Toggle with id ${this.props.id} was clicked!`);

  render() {
    const {
      theme,
      children,
      checked,
      disabled,
      label,
      id,

      ...props
    } = this.props;
    return (
      <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
        <SDiv disabled={!!disabled} {...props}>
          <input
            checked={checked}
            disabled={!!disabled}
            onChange={this.onChange}
            type="checkbox"
            id={id}
          />
          <label htmlFor={id}>{label}</label>
        </SDiv>
      </ThemeProvider>
    );
  }
}

export default Toggle;
