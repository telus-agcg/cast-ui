import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../themes';
import { nameSpace } from '../utils/constants';
import Icon from 'react-icons-kit';
import { ic_keyboard_arrow_left as IKAL } from 'react-icons-kit/md/ic_keyboard_arrow_left';
import { ic_keyboard_arrow_right as IKAR } from 'react-icons-kit/md/ic_keyboard_arrow_right';
import SubMenu from './SubMenu.component';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import CollapsedSubMenu from './CollapsedSubMenu.component';

export type Props = {
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

  inputSideNavData?: any;
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
  margin-bottom: ${(props) => (props.top || props.center ? 'auto' : '1px')};
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
  background: ${(props: any) =>
    props.background || props.theme.sidenav.background};
  border-left: ${(props: any) =>
    props.borderLeft!.toString() || props.theme.sidenav.borderLeft};
  border-right: ${(props: any) =>
    props.borderRight!.toString() || props.theme.sidenav.borderRight};
  position: ${(props: any) => props.position || props.theme.sidenav.position};
  top: ${(props: any) => props.top || props.theme.sidenav.top};
  bottom: ${(props: any) => props.bottom || props.theme.sidenav.bottom};
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
  min-width: ${(props: any) =>
    props.secondaryNavbarWidth ||
    (props.isSecondaryNavbarOpen
      ? props.theme.sidenav.secondaryNavbar.openWidth
      : props.theme.sidenav.secondaryNavbar.width)};
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
    isSideNavbarOpen,
    toggleSideNavbar,
    top,
    inputSideNavData,
    onSelect,
    allowHover = false,
  } = props;
  useEffect(() => {
    setSidebar(isSideNavbarOpen);
  }, [isSideNavbarOpen]);
  useEffect(() => {
    setSideNavData(inputSideNavData);
  }, [inputSideNavData]);
  const [sidebar, setSidebar] = useState(false);
  const [sideNavData, setSideNavData] = useState([]);
  const [secondarySidebar, setSecondarySidebar] = useState(false);
  const [currentActiveItem, setCurrentActiveItem] = useState({ label: '' });
  const [currentActiveSubnav, setCurrentActiveSubnav] = useState({
    subNav: [],
    label: '',
  });
  const [currentActiveSubNavItem, setCurrentActiveSubNavItem] = useState('');

  const [hoverActiveItem, setHoverActiveItem] = useState(false);
  const showSidebar = () => {
    setSecondarySidebar(false);
    if (toggleSideNavbar !== undefined) toggleSideNavbar();
    else setSidebar(!sidebar);
  };

  return (
    <Router>
      <ThemeProvider
        theme={(outerTheme: any) => outerTheme || Themes.defaultTheme}
      >
        <SSideNavbar isOpen={sidebar} top={top} {...props}>
          {
            <>
              <SSideNav {...props} elementType={'list'}>
                {sideNavData?.map((item, index) => {
                  return (
                    <SubMenu
                      item={item}
                      key={index}
                      isOpen={sidebar}
                      currentActiveItem={currentActiveItem}
                      setCurrentActiveItem={setCurrentActiveItem}
                      setSecondarySidebar={setSecondarySidebar}
                      setCurrentActiveSubNav={setCurrentActiveSubnav}
                      hoverActiveItem={hoverActiveItem}
                      setHoverActiveItem={setHoverActiveItem}
                      currentActiveSubNavItem={currentActiveSubNavItem}
                      setCurrentActiveSubNavItem={setCurrentActiveSubNavItem}
                      onSelect={onSelect}
                      allowHover={allowHover}
                      {...props}
                    />
                  );
                })}
              </SSideNav>
              <SSideNav>
                {sidebar ? (
                  <NavIcon to="#" isOpen={sidebar}>
                    <Icon icon={IKAL} size={24} onClick={showSidebar} />
                  </NavIcon>
                ) : (
                  <NavIcon to="#" isOpen={sidebar}>
                    <Icon icon={IKAR} size={24} onClick={showSidebar} />
                  </NavIcon>
                )}
              </SSideNav>
            </>
          }
        </SSideNavbar>
        {secondarySidebar ? (
          <SSecondarySideNavbar
            className={`${nameSpace}-secondary-sidenavbar`}
            role="secondary-side-nav-bar"
            isSecondaryNavbarOpen={secondarySidebar}
            {...props}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setSecondarySidebar(false)}
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
                  setSecondarySidebar={setSecondarySidebar}
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
    </Router>
  );
};

SideNavbar.defaultProps = {
  width: '',
  borderLeft: '',
  borderRight: '',
};

export default SideNavbar;
