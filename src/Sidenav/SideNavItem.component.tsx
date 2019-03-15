import * as React from 'react';
import styled from 'styled-components';
import { SideNavContext } from './context';

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
  const {
    baseProps: { setSecondaryToggle, secondaryToggle, isSecondaryNavbarOpen },
  } = React.useContext(SideNavContext);
  const itemChildren =
    children instanceof Array
      ? children.filter((child: any) =>
          child.props ? !child.props.secondary : true,
        )
      : children;

  const handleClick = (e: any) => {
    console.log(
      'We got clicked ',
      setSecondaryToggle,
      secondaryToggle,
      isSecondaryNavbarOpen,
    );
    setSecondaryToggle(!(secondaryToggle || isSecondaryNavbarOpen));
  };
  return (
    <SSideNavItem role="side-nav-item" {...props} onClick={e => handleClick(e)}>
      {itemChildren}
    </SSideNavItem>
  );
};

SideNavItem.defaultProps = {
  activeSideNavItem: false,
};
