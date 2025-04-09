import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { getPropsWithDefaults } from '@utils';
import { Themes } from '@themes';

export type NavbarProps = React.PropsWithChildren<{
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
}>;

const SNavbar = styled.div<NavbarProps>`
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.typography.fontSize};
  color: ${(props) => props.theme.navbar.color};
  height: ${(props) => props.theme.navbar.height};
  padding: ${(props) => props.theme.navbar.padding};
  background: ${(props) => props.theme.navbar.background};
  border-top: ${(props) => props.theme.navbar.borderTop};
  border-bottom: ${(props) => props.theme.navbar.borderBottom};
  display: flex;
  align-items: center;
`;

const defaultProps = {
  theme: Themes.canopyTheme,
} satisfies Partial<NavbarProps>;

export const Navbar: React.FunctionComponent<NavbarProps> = (props) => {
  const propsWithDefaults = getPropsWithDefaults(defaultProps, props);
  const { theme, children, ...rest } = propsWithDefaults;
  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <SNavbar {...rest}>{children}</SNavbar>
    </ThemeProvider>
  );
};
