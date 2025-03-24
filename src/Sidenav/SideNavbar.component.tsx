import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { getPropsWithDefaults, nameSpace } from '@utils';
import { KeyboardArrowLeftIcon, KeyboardArrowRightIcon } from '@icons';
import SubMenu from './SubMenu.component';
import CollapsedSubMenu from './CollapsedSubMenu.component';
import { Link, LinkProps } from '../Typography/Link/Link.component';

export type SideNavItem = {
  disabled: boolean;
  icon?: any;
  customIcon?: any;
  label: string;
  subNav?: {
    label: string;
  }[];
};

export type SideNavProps = {
  /**
   * Controls whether the Sidenav allows hovering over submenu items
   *
   * @default false
   **/
  allowHover?: boolean;
  /**
   * An array of objects.
   * Each object defines a menuItem in sidenav.
   * If an object has property subNav<Array>, then
   * it will appear either under that menu item if sidenav is open
   * or in secondary sidenav if sidenav is closed
   *
   * @default []
   **/
  data?: SideNavItem[];
  /**
   * Controls whether the Sidenav is open
   *
   * @default false
   **/
  isOpen?: boolean;
  /**
   * Callback when a Sidenav item is clicked
   *
   * @default void
   **/
  onSelect?(): void;
  /**
   * Callback when the Sidenav is toggled
   *
   * @default void
   **/
  toggleSideNavbar?(): void;
  /**
   * represents the current active menu item
   * it allows setting current active menu item from outside cast
   *
   **/
  currentActiveMenuItem?: SideNavItem;
  /**
   * Callback when the Secondary Sidenav is toggled
   *
   * @default void
   **/
  toggleSecondarySideNav?(): void;
  /**
   * Controls whether the Secondary Sidenav is open
   *
   * @default false
   **/
  isSecondaryNavOpen?: boolean;
  /**
   * Controls height of sidenav
   *
   * @default '92vh'
   **/
  sideNavHeight?: string;
  /**
   * From ThemeProvider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

const NavIcon = styled(Link)<SideNavProps & LinkProps>`
  display: flex;
  z-index: ${(props: any) => props.theme.sidenav.zIndex + 1};
  justify-content: ${(props) => (props.isOpen ? 'end' : 'center')};
  color: ${(props: any) => props.theme.sidenav.label.color};
  align-items: center;
  svg {
    padding: 6px;
    margin: 2px;
    border-radius: 50%;
  }
  > *:hover {
    background: ${(props) => props.theme.sidenav['activenavItem'].background};
    color: ${(props) => props.theme.pagination.hoverTextColor};
    transition: all 0.3s;
  }
`;

const SideNavbarWrapper = styled.div`
  display: flex;
`;
const SSideNavbar = styled.div<SideNavProps>`
  font-family: ${(props: any) => props.theme.typography.fontFamily};
  font-size: ${(props: any) => props.theme.sidenav.fontSize};
  color: ${(props: any) => props.theme.sidenav.color};
  padding: ${(props: any) => (props.isOpen ? props.theme.sidenav.padding : 0)};

  height: ${(props: any) =>
    props.sideNavHeight ? props.sideNavHeight : '92vh'};

  z-index: ${(props: any) => props.theme.sidenav.zIndex};
  background: ${(props: any) => props.theme.sidenav.background};
  border-left: ${(props: any) => props.theme.sidenav.borderLeft};
  border-right: ${(props: any) => props.theme.sidenav.borderRight};
  width: ${(props: any) =>
    props.isOpen ? props.theme.sidenav.openWidth : props.theme.sidenav.width};
  display: flex;
  flex-direction: column;
`;
const SSideNav = styled.div<SideNavProps>`
  height: auto;
  padding: ${(props) => props.theme.sidenav.nav.padding};
  margin-bottom: 1px;
  margin: 4px;
  display: flex;
  flex-direction: column;
`;
const SSecondarySideNavbar = styled.div<
  SideNavProps & { isSecondaryNavbarOpen: boolean }
>`
  font-family: ${(props: any) => props.theme.typography.fontFamily};
  font-size: ${(props: any) => props.theme.sidenav.fontSize};
  color: ${(props: any) => props.theme.sidenav.color};
  height: 92vh;
  margin: ${(props: any) => props.theme.sidenav.secondaryNavbar.margin};
  z-index: ${(props: any) => props.theme.sidenav.secondaryNavbar.zIndex};
  background: ${(props: any) => props.theme.sidenav.secondaryNavbar.background};
  border-right: ${(props: any) =>
    props.theme.sidenav.secondaryNavbar.borderRight};
  min-width: ${(props: any) =>
    props.isSecondaryNavbarOpen
      ? props.theme.sidenav.secondaryNavbar.openWidth
      : props.theme.sidenav.secondaryNavbar.width};
  display: flex;
  flex-direction: column;
`;
const CloseIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const CloseIcon = styled.button`
  padding: 4px 10px;
  margin: 1px 2px;
  font-size: 20px;
  color: ${(props: any) => props.theme.sidenav.secondaryNavbarLabel.color};
  background-color: transparent;
  border: 0;
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.3s;
  &:hover {
    background-color: ${(props) =>
      props.theme.modal.closeButton.hoverBackground};
    color: ${(props) => props.theme.pagination.hoverTextColor};
  }
`;
const SSecondarySideNavbarWrapper = styled.div`
  padding: 0px 8px;
  display: flex;
  flex-direction: column;
`;
const SSecondarySideNavbarLabel = styled.h3`
  padding-left: 1.25rem;
  color: ${(props) => props.theme.sidenav.secondaryNavbarLabel.color};
  margin-block-start: 6px;
  margin-block-end: 10px;
  padding-top: 4px;
`;

const defaultProps = {
  allowHover: false,
  data: [],
} satisfies Partial<SideNavProps>;

export const SideNavbar = (props: SideNavProps) => {
  const propsWithDefaults = getPropsWithDefaults(defaultProps, props);
  const {
    theme,
    allowHover,
    data,
    isOpen,
    isSecondaryNavOpen,
    onSelect,
    toggleSideNavbar,
    toggleSecondarySideNav,
    currentActiveMenuItem,
    sideNavHeight,
    ...rest
  } = propsWithDefaults;

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [secondarySidebarOpen, setSecondarySidebarOpen] = useState(false);
  const [currentActiveItem, setCurrentActiveItem] = useState({ label: '' });
  const [currentActiveSubnav, setCurrentActiveSubnav] = useState({
    subNav: [],
    label: '',
  });
  const [currentSelectedSubnavItem, setCurrentActiveSubnavItem] = useState('');

  const [hoverActiveItem, setHoverActiveItem] = useState(false);

  useEffect(() => {
    setSidebarOpen(Boolean(isOpen));
  }, [isOpen]);

  useEffect(() => {
    setSecondarySidebarOpen(Boolean(isSecondaryNavOpen));
  }, [isSecondaryNavOpen]);

  useEffect(() => {
    if (currentActiveMenuItem) setCurrentActiveItem(currentActiveMenuItem);
  }, [currentActiveMenuItem]);

  const showSidebar = () => {
    toggleSecondarySideNav
      ? toggleSecondarySideNav()
      : setSecondarySidebarOpen(false);
    if (typeof toggleSideNavbar === 'undefined') {
      setSidebarOpen(!sidebarOpen);
    } else {
      toggleSideNavbar();
    }
  };

  const getIcon = () => {
    const iconDimesions = { height: 24, width: 24 };
    const iconDataTestId = sidebarOpen ? 'close-sidebar' : 'open-sidebar';
    const icon = sidebarOpen ? (
      <KeyboardArrowLeftIcon
        {...iconDimesions}
        onClick={showSidebar}
        data-testid={iconDataTestId}
      />
    ) : (
      <KeyboardArrowRightIcon
        {...iconDimesions}
        onClick={showSidebar}
        data-testid={iconDataTestId}
      />
    );
    return icon;
  };

  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <SideNavbarWrapper>
        <SSideNavbar isOpen={sidebarOpen} sideNavHeight={sideNavHeight}>
          <SSideNav>
            {data?.map((item, index) => {
              return (
                <SubMenu
                  item={item}
                  key={index}
                  allowHover={allowHover}
                  currentActiveItem={currentActiveItem}
                  currentActiveSubnav={currentActiveSubnav}
                  currentSelectedSubnavItem={currentSelectedSubnavItem}
                  hoverActiveItem={hoverActiveItem}
                  hoverDelay={400}
                  isOpen={sidebarOpen}
                  onSelect={onSelect}
                  secondarySidebarOpen={secondarySidebarOpen}
                  setCurrentActiveItem={setCurrentActiveItem}
                  setCurrentActiveSubnav={setCurrentActiveSubnav}
                  setHoverActiveItem={setHoverActiveItem}
                  setSecondarySidebarOpen={setSecondarySidebarOpen}
                  toggleSecondarySideNav={toggleSecondarySideNav}
                  setCurrentActiveSubnavItem={setCurrentActiveSubnavItem}
                  isSecondaryNavOpen={isSecondaryNavOpen}
                />
              );
            })}
          </SSideNav>
          <SSideNav>
            <NavIcon isOpen={sidebarOpen}>{getIcon()}</NavIcon>
          </SSideNav>
        </SSideNavbar>
        {secondarySidebarOpen ? (
          <SSecondarySideNavbar
            className={`${nameSpace}-secondary-sidenavbar`}
            role="secondary-side-nav-bar"
            isSecondaryNavbarOpen={secondarySidebarOpen}
            theme={theme}
          >
            <CloseIconWrapper>
              <CloseIcon
                aria-label="Close"
                onClick={() => {
                  toggleSecondarySideNav
                    ? toggleSecondarySideNav()
                    : setSecondarySidebarOpen(false);
                }}
                data-testid="close-secondary-sidenav"
              >
                <span>&times;</span>
              </CloseIcon>
            </CloseIconWrapper>

            <SSecondarySideNavbarWrapper>
              <SSecondarySideNavbarLabel>
                {currentActiveSubnav ? currentActiveSubnav.label : null}
              </SSecondarySideNavbarLabel>
              {currentActiveSubnav &&
                currentActiveSubnav.subNav &&
                currentActiveSubnav.subNav.map((item, index) => {
                  return (
                    <CollapsedSubMenu
                      item={item}
                      key={index}
                      onSelect={onSelect}
                      setSecondarySidebarOpen={setSecondarySidebarOpen}
                      currentSelectedSubnavItem={currentSelectedSubnavItem}
                      setCurrentActiveSubnavItem={setCurrentActiveSubnavItem}
                      parentItem={currentActiveSubnav}
                      setCurrentActiveItem={setCurrentActiveItem}
                      theme={theme}
                      toggleSecondarySideNav={toggleSecondarySideNav}
                    />
                  );
                })}
            </SSecondarySideNavbarWrapper>
          </SSecondarySideNavbar>
        ) : (
          ''
        )}
      </SideNavbarWrapper>
    </ThemeProvider>
  );
};
