import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { SideNavContext } from './context';
import { Themes } from '../themes';
import { SideNavItemToggle } from '../Sidenav/SideNavItemToggle.component';

export type Props = {
  children: any;
  /**
   * Highlight the navigation item as active
   *
   * @default false
   **/
  activeSideNavItem?: boolean;
  /**
   * Disable the navigation item, making it unselectable
   *
   * @default false
   **/
  disabled?: boolean;
  /**
   * Set SideNavItem path.
   * This Value is passed to the onSelect handler,
   * Useful for identifying the selected navigation item
   *
   * @default ''
   **/
  path?: any;
  /**
   * Callback fired when a navigation item is selected.
   *
   * @default false
   **/
  onSelect?(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    selectItemPath: string,
  ): void;
  /**
   * Custom content for the itemToggleButton on open mode
   *
   * @default '>'
   **/
  itemToggleOpenContent?: JSX.Element | React.Component | string;
  /**
   * Custom content for the itemToggleButton on close mode
   *
   * @default '<'
   **/
  itemToggleCloseContent?: JSX.Element | React.Component | string;
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
  transition: ${(props: Props) => props.theme.sidenav.navItem.transition};
  color: ${(props: Props) =>
    props.theme.sidenav[`${props.activeSideNavItem ? 'active' : ''}navItem`]
      .color};
  font-weight: ${(props: Props) =>
    props.theme.sidenav[`${props.activeSideNavItem ? 'active' : ''}navItem`]
      .fontWeight};
  cursor: ${(props: Props) =>
    props.disabled
      ? 'not-allowed'
      : props.theme.sidenav[`${props.activeSideNavItem ? 'active' : ''}navItem`]
          .cursor};
  background: ${(props: Props) =>
    props.theme.sidenav[`${props.activeSideNavItem ? 'active' : ''}navItem`]
      .background};
  opacity: ${(props: Props) =>
    props.disabled
      ? '.6'
      : props.theme.sidenav[`${props.activeSideNavItem ? 'active' : ''}navItem`]
          .opacity};
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
  onSelect,
  path = '',
  theme,
  children,
  ...props
}) => {
  const {
    baseProps: {
      isOpen,
      isSecondaryNavbarOpen,
      onItemSelect,
      itemToggleCloseContent,
      itemToggleOpenContent,
    },
  } = React.useContext(SideNavContext);

  const itemChildren =
    children instanceof Array
      ? children.filter((child: any) =>
          child.props ? !child.props.secondary : true,
        )
      : children;
  const itemSecondaryChildren =
    children instanceof Array
      ? children.filter((child: any) =>
          child.props ? child.props.secondary : false,
        )
      : [];

  const noop = () => {};

  const handleSelect = (e: any) => {
    if (onSelect) {
      onSelect(e, path);
    } else {
      onItemSelect ? onItemSelect(e, path) : noop;
    }
  };

  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <SSideNavItem
        role="side-nav-item"
        {...props}
        onClick={props.disabled ? noop : handleSelect}
      >
        {itemChildren}
        <SideNavItemToggle
          isToggleVisible={itemSecondaryChildren.length > 0 && isOpen}
          isToggleOpen={props.activeSideNavItem && isSecondaryNavbarOpen}
          openContent={props.itemToggleOpenContent || itemToggleOpenContent}
          closeContent={props.itemToggleCloseContent || itemToggleCloseContent}
        />
      </SSideNavItem>
    </ThemeProvider>
  );
};

SideNavItem.defaultProps = {
  theme: Themes.defaultTheme,
  activeSideNavItem: false,
  disabled: false,
  path: '',
};
