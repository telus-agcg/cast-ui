import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { SideNavContext, propsDeepSearch } from './context';
import { Themes } from '../themes';

export type Props = {
  /**
   * Set the sidebar as Expanded/collapsed
   *
   * @default false
   **/
  isOpen?: boolean;
  /**
   * Before Expand/collapse the sidebar
   *
   * @default false
   **/
  beforeToggle?(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void;
  /**
   * Expand/collapse the sidebar
   *
   * @default false
   **/
  onToggle?(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void;
  /**
   * After Expand/collapse the sidebar
   *
   * @default false
   **/
  afterToggle?(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void;
  /**
   * Handle select SideNavItem
   *
   * @default false
   **/
  onSelect?(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    selectItemPath: any,
    itemSecondaryChildren: any,
  ): void;
  /**
   * A  CSS color code
   *
   * @default ''
   **/
  background?: string;
  /**
   * The shorthand string for setting element border-top
   *
   * @default ''
   **/
  borderLeft?: string;
  /**
   * The shorthand string for setting element border-bottom
   *
   * @default ''
   **/
  borderRight?: string;
  /**
   * Adjust SideNavbar height.
   *
   * @default ''
   **/
  height?: string;
  /**
   * Adjust SideNavbar width.
   *
   * @default '50px'
   **/
  width?: string;
  /**
   * Set position of SideNavbar
   *
   * @default ''
   **/
  position?: 'absolute' | 'sticky' | 'fixed';
  /**
   * Set SideNavbar's distance from top of viewport
   *
   * @default ''
   **/
  top?: number | string;
  /**
   * Set SideNavbar's distance from bottom of viewport
   *
   * @default ''
   **/
  bottom?: number | string;
  /**
   * Expand/collapse the secondary sidebar
   *
   * @default false
   **/
  isSecondaryNavbarOpen?: boolean;
  /**
   * Adjust width of Secondary SideNavbar.
   *
   * @default '170px'
   **/
  secondaryNavbarWidth?: string;
  /**
   * Adjust height of Secondary SideNavbar.
   *
   * @default ''
   **/
  secondaryNavbarHeight?: string;
  /**
   * A CSS color code
   *
   * @default ''
   **/
  secondaryNavbarBackground?: string;
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

const SSideNavbar = styled.div`
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.sidenav.fontSize};
  color: ${(props: Props) => props.theme.sidenav.color};
  height: ${(props: Props) => props.height || props.theme.sidenav.height};
  padding: ${(props: Props) => props.theme.sidenav.padding};
  margin: ${(props: Props) => props.theme.sidenav.margin};
  z-index: ${(props: Props) => props.theme.sidenav.zIndex};
  background: ${(props: Props) =>
    props.background || props.theme.sidenav.background};
  border-left: ${(props: Props) =>
    props.borderLeft!.toString() || props.theme.sidenav.borderLeft};
  border-right: ${(props: Props) =>
    props.borderRight!.toString() || props.theme.sidenav.borderRight};
  position: ${(props: Props) => props.position || props.theme.sidenav.position};
  top: ${(props: Props) => props.top || props.theme.sidenav.top};
  bottom: ${(props: Props) => props.bottom || props.theme.sidenav.bottom};
  left: ${(props: Props) => props.theme.sidenav.left};
  right: ${(props: Props) => props.theme.sidenav.right};
  min-width: ${(props: Props) =>
    props.width ||
    (props.isOpen ? props.theme.sidenav.openWidth : props.theme.sidenav.width)};
  transition: ${(props: Props) => props.theme.sidenav.transition};
  display: flex;
  flex-direction: column;
`;
const SSecondarySideNavbar = styled.div`
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.sidenav.fontSize};
  color: ${(props: Props) => props.theme.sidenav.color};
  height: ${(props: Props) =>
    props.secondaryNavbarHeight || props.theme.sidenav.secondaryNavbar.height};
  padding: ${(props: Props) => props.theme.sidenav.secondaryNavbar.padding};
  margin: ${(props: Props) => props.theme.sidenav.secondaryNavbar.margin};
  z-index: ${(props: Props) => props.theme.sidenav.secondaryNavbar.zIndex};
  background: ${(props: Props) =>
    props.secondaryNavbarBackground ||
    props.theme.sidenav.secondaryNavbar.background};
  border-left: ${(props: Props) =>
    props.borderLeft || props.theme.sidenav.secondaryNavbar.borderLeft};
  border-right: ${(props: Props) =>
    props.borderRight || props.theme.sidenav.secondaryNavbar.borderRight};
  position: ${(props: Props) =>
    props.position || props.theme.sidenav.secondaryNavbar.position};
  top: ${(props: Props) =>
    props.top || props.theme.sidenav.secondaryNavbar.top};
  bottom: ${(props: Props) =>
    props.bottom || props.theme.sidenav.secondaryNavbar.bottom};
  right: ${(props: Props) => props.theme.sidenav.secondaryNavbar.right};
  left: ${(props: Props) =>
    props.width ||
    (props.isOpen ? props.theme.sidenav.openWidth : props.theme.sidenav.width)};
  width: ${(props: Props) =>
    props.secondaryNavbarWidth ||
    (props.isSecondaryNavbarOpen
      ? props.theme.sidenav.secondaryNavbar.openWidth
      : props.theme.sidenav.secondaryNavbar.width)};
  transition: ${(props: Props) =>
    props.theme.sidenav.secondaryNavbar.transition};
  visibility: ${(props: any) =>
    props.isSecondaryNavbarOpen ? 'visible' : 'hidden'};
  display: flex;
  flex-direction: column;
`;

export const SideNavbar: React.FunctionComponent<Props> = ({
  isOpen = false,
  isSecondaryNavbarOpen = false,
  beforeToggle = () => {},
  onToggle = () => {},
  afterToggle = () => {},
  onSelect = () => {},
  itemToggleOpenContent,
  itemToggleCloseContent,
  children,
  ...props
}) => {
  const newProps = {
    ...props,
    isOpen,
    beforeToggle,
    onToggle,
    afterToggle,
    isSecondaryNavbarOpen,
  };

  // Perform deep search through sidenavbar props
  // Select the 'activeSideNavItem' and search through its children.
  // If a child has a SideNav with the 'secondary' prop set to true,
  // its children will automatically be displayed in the secondary SideNavbar
  const activeSideNavItems: any = [];
  propsDeepSearch(children, 'activeSideNavItem', true, activeSideNavItems);
  let activeSideNavItemsChildren: any = [];
  activeSideNavItems.map((child: any) => {
    activeSideNavItemsChildren = [
      ...activeSideNavItemsChildren,
      ...child.children.filter((child: any) =>
        child.props ? child.props.secondary : false,
      ),
    ];
  });

  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || newProps.theme}>
      <SideNavContext.Provider
        value={{
          baseProps: {
            ...newProps,
            isOpen,
            beforeToggle,
            onToggle,
            afterToggle,
            itemToggleOpenContent,
            itemToggleCloseContent,
            isSecondaryNavbarOpen,
            onItemSelect: onSelect,
          },
        }}
      >
        <SSideNavbar
          className="cui-sidenavbar"
          role="side-nav-bar"
          {...newProps}
        >
          {children}
        </SSideNavbar>
        <SSecondarySideNavbar
          className="cui-secondary-sidenavbar"
          role="secondary-side-nav-bar"
          {...newProps}
        >
          {activeSideNavItemsChildren}
        </SSecondarySideNavbar>
      </SideNavContext.Provider>
    </ThemeProvider>
  );
};

SideNavbar.defaultProps = {
  theme: Themes.defaultTheme,
  isOpen: false,
  width: '',
  borderLeft: '',
  borderRight: '',
  isSecondaryNavbarOpen: false,
  secondaryNavbarWidth: '',
  secondaryNavbarHeight: '',
  itemToggleOpenContent: '',
  itemToggleCloseContent: '',
};
