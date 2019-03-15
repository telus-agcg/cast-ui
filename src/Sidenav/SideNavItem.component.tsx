import * as React from 'react';
import styled from 'styled-components';
import { SecondarySideNavContext } from './context';

export type Props = {
  children: any;
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
  display: inline-flex;
  align-items: center;
  color: ${(props: Props) =>
    props.theme.sidenav[`${props.active ? 'active' : ''}navItem`].color};
  font-weight: ${(props: Props) =>
    props.theme.sidenav[`${props.active ? 'active' : ''}navItem`].fontWeight};
  cursor: ${(props: Props) =>
    props.theme.sidenav[`${props.active ? 'active' : ''}navItem`].cursor};
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
}) => {
  const itemChildren = children.filter((child: any) =>
    child.props ? !child.props.secondary : true,
  );
  let secondaryNavChildren: any = [];
  children.map((child: any) => {
    if (props.active) {
      if (child.props) {
        if (child.props.secondary) {
          secondaryNavChildren = child.props.children;
        }
      }
    }
  });
  console.log('Item children ', itemChildren, secondaryNavChildren, children);
  return (
    <SecondarySideNavContext.Provider value={{ secondaryNavChildren }}>
      <SSideNavItem role="side-nav-item" {...props}>
        {itemChildren}
      </SSideNavItem>
    </SecondarySideNavContext.Provider>
  );
};

SideNavItem.defaultProps = {
  active: false,
};
