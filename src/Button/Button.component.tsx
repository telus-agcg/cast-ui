import * as React from 'react';
import SButton from './SButton';

export type Props = {
  /**
   * Specify if the button is outline
   *
   * @default false
   **/
  outline?: boolean;
  /** this dictates what the button will do  */
  onClick(e: React.MouseEvent<HTMLElement>): void;
  /**
   * Set a className for the button
   *
   * @default ''
   **/
  className?: string;
  /**
   * Select Button Style
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
  outline,
  onClick,
  disabled,
  selected,
  children,
  btnStyle = 'default',
  btnSize = 'md',
  className,
  theme,
}) => (
  <SButton
    outline={outline}
    btnSize={btnSize}
    btnStyle={btnStyle}
    className={className}
    theme={theme}
    disabled={disabled}
    selected={selected}
    onClick={!disabled ? onClick : noop}>
    {children}
  </SButton>
);
