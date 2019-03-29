import * as React from 'react';
import styled from 'styled-components';
import { Themes } from '../themes';

export type Props = {
  /**
   * A color defined in theme colors or a CSS color code
   * or shorthand string for setting element background
   *
   * @default 'white'
   **/
  background?: string;
  /**
   * The shorthand string for setting element border-top
   *
   * @default ''
   **/
  borderTop?: string;
  /**
   * The shorthand string for setting element border-bottom
   *
   * @default ''
   **/
  borderBottom?: string;
  /**
   * Adjust Navbar height.
   *
   * @default '80px'
   **/
  height?: string;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

const SNavbar = styled.div`
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.typography.fontSize};
  color: ${(props: Props) => props.theme.navbar.color};
  height: ${(props: Props) => props.height || props.theme.navbar.height};
  padding: ${(props: Props) => props.theme.navbar.padding};
  background: ${(props: Props) =>
    props.theme.colors[props.background!] ||
    props.background!.toString() ||
    props.theme.navbar.background};
  border-top: ${(props: Props) =>
    props.borderTop!.toString() || props.theme.navbar.borderTop};
  border-bottom: ${(props: Props) =>
    props.borderBottom!.toString() || props.theme.navbar.borderBottom};
  display: flex;
  align-items: center;
`;

export const Navbar: React.FunctionComponent<Props> = ({
  children,
  ...props
}) => <SNavbar {...props}>{children}</SNavbar>;

Navbar.defaultProps = {
  background: '',
  borderTop: '',
  borderBottom: '',
  theme: Themes.defaultTheme,
};
