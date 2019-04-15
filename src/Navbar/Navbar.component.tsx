import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../themes';

export type Props = {
  /**
   * A CSS color code
   *
   * @default ''
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
    props.background || props.theme.navbar.background};
  border-top: ${(props: Props) =>
    props.borderTop || props.theme.navbar.borderTop};
  border-bottom: ${(props: Props) =>
    props.borderBottom || props.theme.navbar.borderBottom};
  display: flex;
  align-items: center;
`;

export const Navbar: React.FunctionComponent<Props> = ({
  theme,
  children,
  ...props
}) => (
  <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
    <SNavbar {...props}>{children}</SNavbar>
  </ThemeProvider>
);

Navbar.defaultProps = {
  borderTop: '',
  borderBottom: '',
  theme: Themes.defaultTheme,
};
