import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../themes';
import { nameSpace } from '../utils/constants';

export type Props = {
  /**
   * Align the SideNav container at the top of the SideNavbar
   *
   * @default false
   **/
  top?: boolean;
  /**
   * Align the SideNav container at the center of the SideNavbar
   *
   * @default false
   **/
  center?: boolean;
  /**
   * Align the SideNav container at the bottom of the SideNavbar
   *
   * @default false
   **/
  bottom?: boolean;
  /**
   * Assign SideNav as a child of secondary navbar
   *
   * @default false
   **/
  secondary?: boolean;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};
const SSideNav = styled.nav`
  float: left;
  clear: both;
  list-style: none;
  width: 100%;
  height: auto;
  padding: ${(props: Props) => props.theme.sidenav.nav.padding};
  margin-bottom: ${(props: Props) =>
    props.top || props.center ? 'auto' : '0'};
  margin-top: ${(props: Props) =>
    props.bottom || props.center ? 'auto' : '0'};
  display: flex;
  flex-direction: column;
  > *:hover {
    color: ${(props: Props) =>
      props.theme.sidenav[`${props.secondary ? 'activeSec' : 'active'}navItem`]
        .color};
    background: ${(props: Props) =>
      props.theme.sidenav[`${props.secondary ? 'activeSec' : 'active'}navItem`]
        .background};
    font-weight: ${(props: Props) =>
      props.theme.sidenav[`${props.secondary ? 'activeSec' : 'active'}navItem`]
        .fontWeight};
  }
  > * {
    border-bottom: ${(props: Props) =>
      (props.top || props.center) && !props.secondary
        ? props.theme.sidenav.navItem.topNavBorderBottom
        : props.theme.sidenav.navItem.bottomNavBorderBottom};
  }
`;

export const SideNav: React.FunctionComponent<Props> = ({
  theme,
  children,
  ...props
}) => {
  const position = props.top ? 'top' : props.center ? 'center' : 'bottom';
  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <SSideNav
        className={`${nameSpace}-sidenav ${nameSpace}-sidenav--${position}`}
        role="side-nav"
        {...props}
      >
        {children}
      </SSideNav>
    </ThemeProvider>
  );
};

SideNav.defaultProps = {
  theme: Themes.defaultTheme,
  top: false,
  center: false,
  bottom: false,
  secondary: false,
};
