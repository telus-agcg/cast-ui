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
  height: auto;
  position: relative;
  margin: 0;
  display: ${(props: Props) =>
    props.theme.sidenav[`${props.active ? 'active' : ''}navItem`].display};
  cursor: ${(props: Props) =>
    props.theme.sidenav[`${props.active ? 'active' : ''}navItem`].cursor};
  padding: ${(props: Props) =>
    props.theme.sidenav[`${props.active ? 'active' : ''}navItem`].padding};
  background: ${(props: Props) =>
    props.theme.sidenav[`${props.active ? 'active' : ''}navItem`].background};
  &:before {
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: ${(props: Props) =>
      props.theme.sidenav[`${props.active ? 'active' : ''}navItem`]
        .leftBorderWidth};
    background-color: ${(props: Props) =>
      props.theme.sidenav[`${props.active ? 'active' : ''}navItem`]
        .leftBorderColor};
  }
`;

export const SideNavItem: React.FunctionComponent<Props> = ({
  children,
  ...props
}) => <SSideNavItem {...props}>{children}</SSideNavItem>;

SideNavItem.defaultProps = {
  active: false,
};
