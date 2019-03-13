import * as React from 'react';
import styled from 'styled-components';

export type Props = {
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};
const SSideNavItem = styled.nav`
  float: left;
  clear: both;
  list-style: none;
  width: 100%;
  height: auto;
`;

export const SideNavItem: React.FunctionComponent<Props> = ({
  children,
  ...props
}) => <SSideNavItem {...props}>{children}</SSideNavItem>;

SideNavItem.defaultProps = {};
