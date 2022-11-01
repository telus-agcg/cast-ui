import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../themes';
import { nameSpace } from '../utils/constants';
import Icon from 'react-icons-kit';
import { ic_keyboard_arrow_left as IKAL } from 'react-icons-kit/md/ic_keyboard_arrow_left';
import { ic_keyboard_arrow_right as IKAR } from 'react-icons-kit/md/ic_keyboard_arrow_right';

import { ic_close } from 'react-icons-kit/md/ic_close';

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
  margin-left: 2px;
  padding-right: 5px;
  font-size: 2rem;
  height: 50px;
  display: flex;
  justify-content: ${props => (props.isOpen ? 'end' : 'center')};
  align-items: center;
  > *:hover {
    background: ${props => props.theme.sidenav['activenavItem'].background};
    border-radius: 15px;
    transition: all 0.3s;
  }
`;
const SSideNav = styled.nav`
  float: left;
  clear: both;
  list-style: none;
  width: 100%;
  height: ${props => (props.elementType === 'list' ? '90%' : 'auto')};

  padding: ${props => props.theme.sidenav.nav.padding};
  margin-bottom: ${props => (props.top || props.center ? 'auto' : '0')};
  margin-top: ${props => (props.bottom || props.center ? 'auto' : '0')};
  display: flex;
  flex-direction: column;

 
`;

const SSideNavbar = styled.div`
  font-family: ${(props: any) => props.theme.typography.fontFamily};
  font-size: ${(props: any) => props.theme.sidenav.fontSize};
  color: ${(props: any) => props.theme.sidenav.color};
  /* height: ${(props: any) => props.height || props.theme.sidenav.height}; */
  padding: ${(props: any) => props.theme.sidenav.padding};

  margin: ${(props: any) => props.theme.sidenav.margin};
  height:92vh;
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
  /* left: ${({ sidebar }) => (sidebar ? 0 : '-100%')}; */
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

  transition: ${(props: any) => props.theme.sidenav.secondaryNavbar.transition};

  display: flex;
  flex-direction: column;
  .closeIcon {
    position: absolute;
    cursor: pointer;
    color: ${(props: any) => props.theme.colors.drk800};
    top: 5px;
    right: 5px;
  }
`;
const SSecondarySideNavbarLabel = styled.h3`
  padding-left: 1.25rem;
  color: ${props => props.theme.sidenav.secondaryNavbarLabel.color};
  margin-block-start: 6px;
  margin-block-end: 10px;
`;
const SideNavbar = props => {
  const { isSideNavbarOpen, toggleSideNavbar, top, inputSideNavData,onSelect} = props;
  const [sidebar, setSidebar] = useState(false);
  const [sideNavData, setSideNavData] = useState([]);
  const [secondarySidebar, setSecondarySidebar] = useState(false);
  const [currentActiveItem, setCurrentActiveItem] = useState({ label: '' });
  const [currentActiveSubnav, setCurrentActiveSubnav] = useState([]);
  const [hoverActiveItem, setHoverActiveItem] = useState(false);
  const showSidebar = () => {
    setSecondarySidebar(false);
    if (toggleSideNavbar !== undefined) toggleSideNavbar();
    else setSidebar(!sidebar);
  };
  useEffect(() => {
    setSidebar(isSideNavbarOpen);
  }, [isSideNavbarOpen]);
  useEffect(() => {
    
    setSideNavData(inputSideNavData);
   
  }, [inputSideNavData]);
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
                      onSelect={onSelect}
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
            // onMouseLeave={()=>setSecondarySidebar(false)}
          >
            <a onClick={() => setSecondarySidebar(false)}>
              <Icon className={'closeIcon'} icon={ic_close} />
            </a>
            <SSecondarySideNavbarLabel>
              {currentActiveItem?.label}
            </SSecondarySideNavbarLabel>
            {currentActiveSubnav?.map((item, index) => {
              return <CollapsedSubMenu item={item} key={index} onSelect={onSelect} setSecondarySidebar={setSecondarySidebar}/>;
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
