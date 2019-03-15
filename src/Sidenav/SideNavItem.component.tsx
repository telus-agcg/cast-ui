import * as React from 'react';
import styled from 'styled-components';

export type Props = {
  children: any;
  /**
   * Set SideNavItem as active
   *
   * @default false
   **/
  activeSideNavItem?: boolean;
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
  display: inline-flex;
  align-items: center;
  color: ${(props: Props) =>
    props.theme.sidenav[`${props.activeSideNavItem ? 'active' : ''}navItem`]
      .color};
  font-weight: ${(props: Props) =>
    props.theme.sidenav[`${props.activeSideNavItem ? 'active' : ''}navItem`]
      .fontWeight};
  cursor: ${(props: Props) =>
    props.theme.sidenav[`${props.activeSideNavItem ? 'active' : ''}navItem`]
      .cursor};
  background: ${(props: Props) =>
    props.theme.sidenav[`${props.activeSideNavItem ? 'active' : ''}navItem`]
      .background};
  &:before {
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: ${(props: Props) =>
      props.theme.sidenav[`${props.activeSideNavItem ? 'active' : ''}navItem`]
        .leftBorderWidth};
    background-color: ${(props: Props) =>
      props.theme.sidenav[`${props.activeSideNavItem ? 'active' : ''}navItem`]
        .leftBorderColor};
  }
`;

export const SideNavItem: React.FunctionComponent<Props> = ({
  children,
  ...props
}) => {
  const itemChildren = children.filter((child: any) =>
    child.props ? !child.props.secondary : true,
  );
  let itemSecondaryChildren: any = [];
  children.map((child: any) => {
    if (props.activeSideNavItem) {
      if (child.props) {
        if (child.props.secondary) {
          itemSecondaryChildren = child.props.children;
        }
      }
    }
  });
  console.log('Item children ', itemChildren, itemSecondaryChildren, children);
  return (
    <SSideNavItem role="side-nav-item" {...props}>
      {itemChildren}
    </SSideNavItem>
  );
};

SideNavItem.defaultProps = {
  activeSideNavItem: false,
};
