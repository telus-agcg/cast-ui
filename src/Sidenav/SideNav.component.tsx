import * as React from 'react';
import styled from 'styled-components';

export type Props = {
  /**
   * Float the SideNav container to the left of the SideNavbar
   *
   * @default false
   **/
  left?: boolean;
  /**
   * Float the SideNav container to the center of the SideNavbar
   *
   * @default false
   **/
  center?: boolean;
  /**
   * Float the SideNav container to the right of the SideNavbar
   *
   * @default false
   **/
  right?: boolean;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};
const SSideNav = styled.nav`
  height: auto;
  margin-left: ${(props: Props) =>
    props.right || props.center ? 'auto' : '0'};
  margin-right: ${(props: Props) =>
    props.left || props.center ? 'auto' : '0'};
  display: flex;
  align-items: center;
`;

export const SideNav: React.FunctionComponent<Props> = ({
  children,
  ...props
}) => <SSideNav {...props}>{children}</SSideNav>;

SideNav.defaultProps = {
  left: false,
  center: false,
  right: false,
};
