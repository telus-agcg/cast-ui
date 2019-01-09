import * as React from 'react';
import SButton from './SButton';

type Props = {
  /** this dictates what the button will do  */
  onClick(e: React.MouseEvent<HTMLElement>): void;
  /**
   * Select Button Style
   *
   * @default 'default'
   **/
  btnStyle: string;
  /**
   * Select Button Size
   *
   * @default 'md'
   **/
  btnSize: string;
  /**
   * Disables onclick
   *
   * @default false
   **/
  disabled?: boolean;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

const noop = () => {}; // tslint:disable-line

export const Button: React.FunctionComponent<Props> = ({
  onClick,
  disabled,
  children,
  btnStyle = 'default',
  btnSize = 'md',
  theme,
}) => (
  <SButton
    btnSize={btnSize}
    btnStyle={btnStyle}
    theme={theme}
    disabled={disabled}
    onClick={!disabled ? onClick : noop}
  >
    {children}
  </SButton>
);
