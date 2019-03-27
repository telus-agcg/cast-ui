import * as React from 'react';
import SButton from './SButton';
import { defaultTheme } from '../themes/default';

export type Props = Partial<React.ButtonHTMLAttributes<HTMLButtonElement>> & {
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
   * @default 'default'
   **/
  btnStyle?: string;
  /**
   * Select Button Size
   *
   * @default 'md'
   **/
  btnSize?: string;
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
};

const noop = () => {}; // tslint:disable-line

export const Button: React.FunctionComponent<Props> = ({
  onClick = noop,
  disabled,
  children,
  ...props
}) => (
  <SButton disabled={disabled} onClick={!disabled ? onClick : noop} {...props}>
    {children}
  </SButton>
);
Button.defaultProps = {
  theme: { ...defaultTheme },
  btnStyle: 'default',
  btnSize: 'md',
};
