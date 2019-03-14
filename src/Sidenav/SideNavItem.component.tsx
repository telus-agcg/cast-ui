import * as React from 'react';
import styled from 'styled-components';

export type Props = {
  /**
   * Set SideNavItem as active
   *
   * @default false
   **/
  active?: boolean;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};
const SSideNavItem = styled.div`
  float: left;
  list-style: none;
  width: 100%;
  height: auto;
  position: relative;
  margin: 0;
  cursor: ${(props: Props) => props.theme.sidenav.navItem.cursor};
  padding: ${(props: Props) => props.theme.sidenav.navItem.padding};
  &:before {
    content: '';
    display: block;
    width: ${(props: Props) => (props.active ? '4px' : '0')};
    background-color: ${(props: Props) =>
      props.theme.sidenav.activeNavItem.leftBorderColor};
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const SideNavItem: React.FunctionComponent<Props> = ({
  children,
  ...props
}) => <SSideNavItem {...props}>{children}</SSideNavItem>;

SideNavItem.defaultProps = {
  active: false,
};
