import * as React from 'react';
import styled from 'styled-components';
import { getPropsWithDefaults } from '@utils';

export type NavBarProps = React.PropsWithChildren<{
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
}>;

const SNavbar = styled.div<NavBarProps>`
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

const defaultProps = {} satisfies Partial<NavBarProps>;

export const Navbar: React.FunctionComponent<NavBarProps> = (props) => {
  const propsWithDefaults = getPropsWithDefaults(defaultProps, props);
  const { children } = propsWithDefaults;
  return <SNavbar {...propsWithDefaults}>{children}</SNavbar>;
};
