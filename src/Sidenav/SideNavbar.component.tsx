import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { SideNavContext, propsDeepSearch } from './context';
import { Themes } from '../themes';
import { nameSpace } from '../utils/constants';
import Icon from 'react-icons-kit';
import { ic_close } from 'react-icons-kit/md/ic_close';

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
   * Before Expand/collapse the secondary sidebar
   *
   * @default false
   **/
  beforeSecondaryToggle?(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ): void;
  /**
   * Expand/collapse the secondary sidebar
   *
   * @default false
   **/
  onSecondaryToggle?(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void;
  /**
   * After Expand/collapse the secondary sidebar
   *
   * @default false
   **/
  afterSecondaryToggle?(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ): void;
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
};

const SSideNavbar = styled.div`
  font-family: ${(props: any) => props.theme.typography.fontFamily};
  font-size: ${(props: any) => props.theme.sidenav.fontSize};
  color: ${(props: any) => props.theme.sidenav.color};
  height: ${(props: any) => props.height || props.theme.sidenav.height};
  padding: ${(props: any) => props.theme.sidenav.padding};
  margin: ${(props: any) => props.theme.sidenav.margin};
  z-index: ${(props: any) => props.theme.sidenav.zIndex};
  background: ${(props: any) =>
    props.background || props.theme.sidenav.background};
  border-left: ${(props: any) =>
    props.borderLeft!.toString() || props.theme.sidenav.borderLeft};
  border-right: ${(props: any) =>
    props.borderRight!.toString() || props.theme.sidenav.borderRight};
  position: ${(props: any) => props.position || props.theme.sidenav.position};
  top: ${(props: any) => props.top || props.theme.sidenav.top};
  bottom: ${(props: any) => props.bottom || props.theme.sidenav.bottom};
  left: ${(props: any) => props.theme.sidenav.left};
  right: ${(props: any) => props.theme.sidenav.right};
  min-width: ${(props: any) =>
    props.isOpen ? props.theme.sidenav.openWidth : props.theme.sidenav.width};
  transition: ${(props: any) => props.theme.sidenav.transition};
  display: flex;
  flex-direction: column;
`;
const SSecondarySideNavbar = styled.div`
  font-family: ${(props: any) => props.theme.typography.fontFamily};
  font-size: ${(props: any) => props.theme.sidenav.fontSize};
  color: ${(props: any) => props.theme.sidenav.color};
  height: ${(props: any) =>
    props.secondaryNavbarHeight || props.theme.sidenav.secondaryNavbar.height};
  padding: ${(props: any) => props.theme.sidenav.secondaryNavbar.padding};
  margin: ${(props: any) => props.theme.sidenav.secondaryNavbar.margin};
  z-index: ${(props: any) => props.theme.sidenav.secondaryNavbar.zIndex};
  background: ${(props: any) =>
    props.secondaryNavbarBackground ||
    props.theme.sidenav.secondaryNavbar.background};
  border-left: ${(props: any) =>
    props.borderLeft || props.theme.sidenav.secondaryNavbar.borderLeft};
  border-right: ${(props: any) =>
    props.borderRight || props.theme.sidenav.secondaryNavbar.borderRight};
  position: ${(props: any) =>
    props.position || props.theme.sidenav.secondaryNavbar.position};
  top: ${(props: any) => props.top || props.theme.sidenav.secondaryNavbar.top};
  bottom: ${(props: any) =>
    props.bottom || props.theme.sidenav.secondaryNavbar.bottom};
  right: ${(props: any) => props.theme.sidenav.secondaryNavbar.right};
  left: ${(props: any) =>
    props.isOpen ? props.theme.sidenav.openWidth : props.theme.sidenav.width};
  width: ${(props: any) =>
    props.secondaryNavbarWidth ||
    (props.isSecondaryNavbarOpen
      ? props.theme.sidenav.secondaryNavbar.openWidth
      : props.theme.sidenav.secondaryNavbar.width)};
  transition: ${(props: any) => props.theme.sidenav.secondaryNavbar.transition};
  visibility: ${(props: any) =>
    props.isSecondaryNavbarOpen ? 'visible' : 'hidden'};
  display: flex;
  flex-direction: column;
  .closeIcon {
    position: absolute;
    color: ${(props: any) => props.theme.colors.drk800};
    top: 5px;
    right: 5px;
  }
`;

export const SideNavbar: React.FunctionComponent<Props> = ({
  isOpen = false,
  isSecondaryNavbarOpen = false,
  beforeToggle = () => {},
  onToggle = () => {},
  afterToggle = () => {},
  beforeSecondaryToggle = () => {},
  onSecondaryToggle = () => {},
  afterSecondaryToggle = () => {},
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

  const handleClick = async (e: any) => {
    e.preventDefault();
    await beforeSecondaryToggle(e);
    await onSecondaryToggle(e);
    await afterSecondaryToggle(e);
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
    <ThemeProvider
      theme={(outerTheme: any) => outerTheme || Themes.defaultTheme}
    >
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
          className={`${nameSpace}-sidenavbar`}
          role="side-nav-bar"
          {...newProps}
        >
          {children}
        </SSideNavbar>
        <SSecondarySideNavbar
          className={`${nameSpace}-secondary-sidenavbar`}
          role="secondary-side-nav-bar"
          {...newProps}
        >
          <a onClick={(e: any) => handleClick(e)} href="#">
            <Icon className={'closeIcon'} icon={ic_close} />
          </a>
          {activeSideNavItemsChildren}
        </SSecondarySideNavbar>
      </SideNavContext.Provider>
    </ThemeProvider>
  );
};

SideNavbar.defaultProps = {
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
