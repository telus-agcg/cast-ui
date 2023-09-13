import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../themes';
import { nameSpace } from '../utils/constants';
import Icon from 'react-icons-kit';
import { ic_keyboard_arrow_left as IKAL } from 'react-icons-kit/md/ic_keyboard_arrow_left';
import { ic_keyboard_arrow_right as IKAR } from 'react-icons-kit/md/ic_keyboard_arrow_right';
import SubMenu from './SubMenu.component';
import Link from '../Typography/Link';
import CollapsedSubMenu from './CollapsedSubMenu.component';

type SideNavItem = {
  disabled: boolean;
  icon?: any;
  customIcon?: any;
  label: string;
  subNav?: {
    label: string;
  }[];
};

export type Props = {
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
};

const NavIcon = styled(Link)`
  display: flex;
  z-index: ${(props: any) => props.theme.sidenav.zIndex + 1};
  justify-content: ${props => (props.isOpen ? 'end' : 'center')};
  color: ${(props: any) => props.theme.sidenav.label.color};
  align-items: center;
  i {
    padding: 6px;
    margin: 2px;
    border-radius: 50%;
  }
  > *:hover {
    background: ${props => props.theme.sidenav['activenavItem'].background};
    color: ${props => props.theme.pagination.hoverTextColor};
    transition: all 0.3s;
  }
`;

const SideNavbarWrapper = styled.div`
  display: flex;
`;
const SSideNavbar = styled.div`
  font-family: ${(props: any) => props.theme.typography.fontFamily};
  font-size: ${(props: any) => props.theme.sidenav.fontSize};
  color: ${(props: any) => props.theme.sidenav.color};
  padding: ${(props: any) => (props.isOpen ? props.theme.sidenav.padding : 0)};

  height: ${(props: any) =>
    props.sidenavHeight ? props.sidenavHeight : '92vh'};

  z-index: ${(props: any) => props.theme.sidenav.zIndex};
  background: ${(props: any) => props.theme.sidenav.background};
  border-left: ${(props: any) => props.theme.sidenav.borderLeft};
  border-right: ${(props: any) => props.theme.sidenav.borderRight};
  width: ${(props: any) =>
    props.isOpen ? props.theme.sidenav.openWidth : props.theme.sidenav.width};
  display: flex;
  flex-direction: column;
`;
const SSideNav = styled.div`
  height: ${props => (props.elementType === 'list' ? '90%' : 'auto')};
  padding: ${props => props.theme.sidenav.nav.padding};
  margin-bottom: 1px;
  margin: 4px;
  display: flex;
  flex-direction: column;
`;
const SSecondarySideNavbar = styled.div`
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
    background-color: ${props => props.theme.modal.button.hoverBackground};
    color: ${props => props.theme.pagination.hoverTextColor};
  }
`;
const SSecondarySideNavbarWrapper = styled.div`
  padding: 0px 8px;
  display: flex;
  flex-direction: column;
`;
const SSecondarySideNavbarLabel = styled.h3`
  padding-left: 1.25rem;
  color: ${props => props.theme.sidenav.secondaryNavbarLabel.color};
  margin-block-start: 6px;
  margin-block-end: 10px;
  padding-top: 4px;
`;
const SideNavbar = props => {
  const {
    allowHover = false,
    data,
    isOpen,
    isSecondaryNavOpen,
    onSelect,
    toggleSideNavbar,
    toggleSecondarySideNav,
    currentActiveMenuItem,
    sidenavHeight,
  } = props;

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
    setSidebarOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    setSecondarySidebarOpen(isSecondaryNavOpen);
  }, [isSecondaryNavOpen]);

  useEffect(() => {
    if (currentActiveMenuItem) setCurrentActiveItem(currentActiveMenuItem);
  }, [currentActiveMenuItem]);

  const showSidebar = () => {
    toggleSecondarySideNav
      ? toggleSecondarySideNav(false)
      : setSecondarySidebarOpen(false);
    if (typeof toggleSideNavbar === 'undefined') {
      setSidebarOpen(!sidebarOpen);
    } else {
      toggleSideNavbar();
    }
  };

  return (
    <ThemeProvider
      theme={(outerTheme: any) => outerTheme || Themes.canopyTheme}
    >
      <SideNavbarWrapper className={props.className}>
        <SSideNavbar
          theme={props.theme}
          isOpen={sidebarOpen}
          sidenavHeight={sidenavHeight}
        >
          <SSideNav theme={props.theme} elementType={'list'}>
            {data.map((item, index) => {
              return (
                <SubMenu
                  {...props}
                  item={item}
                  key={index}
                  allowHover={allowHover}
                  isOpen={sidebarOpen}
                  currentActiveItem={currentActiveItem}
                  currentActiveSubnav={currentActiveSubnav}
                  currentSelectedSubnavItem={currentSelectedSubnavItem}
                  hoverActiveItem={hoverActiveItem}
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
            <NavIcon to="#" isOpen={sidebarOpen}>
              <Icon
                icon={sidebarOpen ? IKAL : IKAR}
                size={24}
                onClick={showSidebar}
                data-testid={sidebarOpen ? 'close-sidebar' : 'open-sidebar'}
              />
            </NavIcon>
          </SSideNav>
        </SSideNavbar>
        {secondarySidebarOpen ? (
          <SSecondarySideNavbar
            className={`${nameSpace}-secondary-sidenavbar`}
            role="secondary-side-nav-bar"
            isSecondaryNavbarOpen={secondarySidebarOpen}
            theme={props.theme}
          >
            <CloseIconWrapper>
              <CloseIcon
                aria-label="Close"
                onClick={() => {
                  toggleSecondarySideNav
                    ? toggleSecondarySideNav(false)
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
                      theme={props.theme}
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

SideNavbar.defaultProps = {
  isOpen: true,
};

export default SideNavbar;
