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
  data?: {
    disabled: boolean;
    icon: any;
    label: string;
    path: string;
    subNav: {
      label: string;
      path: string;
      disabled: boolean;
      to: any;
      icon: any;
    }[];
    to: any;
  }[];
  /**
   * Controls whether the Sidenav is open
   *
   * @default true
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
   * sets top of Sidenav
   *
   * @default 0
   **/
  top?: string;
};

const NavIcon = styled(Link)`
  display: flex;
  justify-content: ${(props) => (props.isOpen ? 'end' : 'center')};
  color: ${(props: any) => props.theme.sidenav.label.color};
  align-items: center;
  i {
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
const SSideNav = styled.div`
  height: ${(props) => (props.elementType === 'list' ? '90%' : 'auto')};
  padding: ${(props) => props.theme.sidenav.nav.padding};
  margin-bottom: ${(props) => (props.center ? 'auto' : '1px')};
  margin: 4px;
  display: flex;
  flex-direction: column;
`;

const SSideNavbar = styled.div`
  font-family: ${(props: any) => props.theme.typography.fontFamily};
  font-size: ${(props: any) => props.theme.sidenav.fontSize};
  color: ${(props: any) => props.theme.sidenav.color};
  padding: ${(props: any) => (props.isOpen ? props.theme.sidenav.padding : 0)};
  height: 92vh;
  z-index: ${(props: any) => props.theme.sidenav.zIndex};
  background: ${(props: any) => props.theme.sidenav.background};
  border-left: ${(props: any) => props.theme.sidenav.borderLeft};
  border-right: ${(props: any) => props.theme.sidenav.borderRight};
  position: ${(props: any) => props.theme.sidenav.position};
  top: ${(props: any) => (props.top ? props.top : props.theme.sidenav.top)};
  bottom: ${(props: any) => props.theme.sidenav.bottom};
  width: ${(props: any) =>
    props.isOpen ? props.theme.sidenav.openWidth : props.theme.sidenav.width};
  display: flex;
  flex-direction: column;
`;
const SSecondarySideNavbar = styled.div`
  font-family: ${(props: any) => props.theme.typography.fontFamily};
  font-size: ${(props: any) => props.theme.sidenav.fontSize};
  color: ${(props: any) => props.theme.sidenav.color};
  height: 100vh;
  padding: ${(props: any) => props.theme.sidenav.secondaryNavbar.padding};
  margin: ${(props: any) => props.theme.sidenav.secondaryNavbar.margin};
  z-index: ${(props: any) => props.theme.sidenav.secondaryNavbar.zIndex};
  background: ${(props: any) => props.theme.sidenav.secondaryNavbar.background};
  border-left: ${(props: any) =>
    props.theme.sidenav.secondaryNavbar.borderLeft};
  border-right: ${(props: any) =>
    props.theme.sidenav.secondaryNavbar.borderRight};
  position: ${(props: any) => props.theme.sidenav.secondaryNavbar.position};
  top: ${(props: any) => props.theme.sidenav.secondaryNavbar.top};
  bottom: ${(props: any) => props.theme.sidenav.secondaryNavbar.bottom};
  right: ${(props: any) => props.theme.sidenav.secondaryNavbar.right};
  left: ${(props: any) => props.theme.sidenav.width};
  min-width: ${(props: any) =>
    props.isSecondaryNavbarOpen
      ? props.theme.sidenav.secondaryNavbar.openWidth
      : props.theme.sidenav.secondaryNavbar.width};
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  .closeIcon {
    position: absolute;
    right: 0;
    top: 0;
    padding: 6px 10px;
    margin: 2px;
    line-height: 20px;
    font-weight: 200;
    font-size: 20px;
    color: ${(props: any) => props.theme.sidenav.secondaryNavbarLabel.color};
    background-color: transparent;
    border: 0;
    appearance: none;
    cursor: pointer;
    border-radius: 50%;
    transition: all 0.3s;
    &:hover {
      background-color: ${(props) => props.theme.modal.button.hoverBackground};
      color: ${(props) => props.theme.pagination.hoverTextColor};
    }
  }
`;
const SSecondarySideNavbarLabel = styled.h3`
  padding-left: 1.25rem;
  color: ${(props) => props.theme.sidenav.secondaryNavbarLabel.color};
  margin-block-start: 6px;
  margin-block-end: 10px;
  padding-top: 4px;
`;
const SideNavbar = (props) => {
  const {
    allowHover = false,
    data,
    isOpen,
    top,
    onSelect,
    toggleSideNavbar,
  } = props;
  useEffect(() => {
    setSidebarOpen(isOpen);
  }, [isOpen]);
  useEffect(() => {
    setSideNavData(data);
  }, [data]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sideNavData, setSideNavData] = useState([]);
  const [secondarySidebarOpen, setSecondarySidebarOpen] = useState(false);
  const [currentActiveItem, setCurrentActiveItem] = useState({ label: '' });
  const [currentActiveSubnav, setCurrentActiveSubnav] = useState({
    subNav: [],
    label: '',
  });
  const [currentActiveSubNavItem, setCurrentActiveSubNavItem] = useState('');

  const [hoverActiveItem, setHoverActiveItem] = useState(false);
  const showSidebar = () => {
    setSecondarySidebarOpen(false);
    if (typeof toggleSideNavbar !== 'undefined') {
      toggleSideNavbar();
    } else {
      setSidebarOpen(!sidebarOpen);
    }
  };

  return (
    <ThemeProvider
      theme={(outerTheme: any) => outerTheme || Themes.defaultTheme}
    >
      <SSideNavbar top={top} {...props} isOpen={sidebarOpen}>
        {
          <>
            <SSideNav {...props} elementType={'list'}>
              {sideNavData?.map((item, index) => {
                return (
                  <SubMenu
                    {...props}
                    item={item}
                    key={index}
                    isOpen={sidebarOpen}
                    currentActiveItem={currentActiveItem}
                    setCurrentActiveItem={setCurrentActiveItem}
                    setSecondarySidebarOpen={setSecondarySidebarOpen}
                    setCurrentActiveSubNav={setCurrentActiveSubnav}
                    hoverActiveItem={hoverActiveItem}
                    setHoverActiveItem={setHoverActiveItem}
                    currentActiveSubNavItem={currentActiveSubNavItem}
                    setCurrentActiveSubNavItem={setCurrentActiveSubNavItem}
                    onSelect={onSelect}
                    allowHover={allowHover}
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
                />
              </NavIcon>
            </SSideNav>
          </>
        }
      </SSideNavbar>
      {secondarySidebarOpen ? (
        <SSecondarySideNavbar
          className={`${nameSpace}-secondary-sidenavbar`}
          role="secondary-side-nav-bar"
          isSecondaryNavbarOpen={secondarySidebarOpen}
          {...props}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setSecondarySidebarOpen(false)}
            className={'closeIcon'}
          >
            <span>&times;</span>
          </button>
          <SSecondarySideNavbarLabel>
            {currentActiveSubnav?.label}
          </SSecondarySideNavbarLabel>
          {currentActiveSubnav?.subNav?.map((item, index) => {
            return (
              <CollapsedSubMenu
                item={item}
                key={index}
                onSelect={onSelect}
                setSecondarySidebarOpen={setSecondarySidebarOpen}
                currentActiveSubNavItem={currentActiveSubNavItem}
                setCurrentActiveSubNavItem={setCurrentActiveSubNavItem}
                parentItem={currentActiveSubnav}
                setCurrentActiveItem={setCurrentActiveItem}
              />
            );
          })}
        </SSecondarySideNavbar>
      ) : (
        ''
      )}
    </ThemeProvider>
  );
};

SideNavbar.defaultProps = {
  isOpen: true,
};

export default SideNavbar;
