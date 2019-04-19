import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../themes';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Specify the ID of the individual toggle
   *
   * @default null
   **/
  id: string;
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
  disabled: boolean;
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
  }

  label {
    cursor: pointer;
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
    transition: 0.3s;
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
    onChange: () => {},
    theme: Themes.defaultTheme,
  };

  render() {
    const {
      theme,
      children,
      checked,
      disabled,
      onChange,
      label,

      ...props
    } = this.props;
    return (
      <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
        <SDiv disabled={!!disabled} {...props}>
          <input
            checked={checked}
            disabled={!!disabled}
            onChange={onChange}
            type="checkbox"
            id="switch"
          />
          <label htmlFor="switch">{label}</label>
        </SDiv>
      </ThemeProvider>
    );
  }
}

export default Toggle;
