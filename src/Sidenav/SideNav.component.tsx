import * as React from 'react';
import styled from 'styled-components';

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
  > *:not(:last-child) {
    border-bottom: ${(props: Props) =>
      props.top || props.center
        ? props.theme.sidenav.navItem.topNavBorderBottom
        : props.theme.sidenav.navItem.bottomNavBorderBottom};
  }
`;

export const SideNav: React.FunctionComponent<Props> = ({
  children,
  ...props
}) => <SSideNav {...props}>{children}</SSideNav>;

SideNav.defaultProps = {
  top: false,
  center: false,
  bottom: false,
};
