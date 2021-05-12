import * as React from 'react';
import SButton from './SButton';
import { Themes } from '../themes';
import { ThemeProvider } from 'styled-components';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Specify if the button is outline
   *
   * @default false
   **/
  outline?: boolean;
  /**
   * This dictates what the button will do
   *
   * @default void
   * */
  onClick?(e: React.MouseEvent<HTMLElement>): void;
  /**
   * Set Button Style
   *
   * @default 'primary'
   **/
  btnStyle?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  /**
   * Select Button Size
   *
   * @default 'md'
   **/
  btnSize?: 'sm' | 'md' | 'lg';
  /**
   * Override default background color
   *
   * @default ''
   **/
  backgroundColor?: string;
  /**
   * Specify if the button is disabled
   *
   * @default false
   **/
  disabled?: boolean;
  /**
   * Specify if the button is selected
   *
   * @default false
   **/
  selected?: boolean;
  /**
   * The value of the button
   *
   * @default null
   **/
  value?: any;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
}

const noop = () => {}; // tslint:disable-line

export class Button extends React.Component<Props, any> {
  static defaultProps = {
    theme: Themes.defaultTheme,
    btnStyle: 'primary',
    btnSize: 'md',
  };
  render() {
    const {
      theme,
      onClick = noop,
      disabled,
      children,
      id,
      ...props
    } = this.props;
    return (
      <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
        <SButton
          disabled={disabled}
          onClick={!disabled ? onClick : noop}
          id={`${id}-Button`}
          {...props}
        >
          {children}
        </SButton>
      </ThemeProvider>
    );
  }
}
