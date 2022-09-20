import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SideNavItemIcon } from './SideNavItemIcon.component';
import Icon from 'react-icons-kit';
import { iosPaperOutline } from 'react-icons-kit/ionicons/iosPaperOutline';
import { ThemeProvider } from 'themes';

const SidebarLink = styled(Link)`
  float: left;
  text-decoration: none;
  list-style: none;
  height: auto;
  position: relative;
  margin: 0;
  display: inline-flex;
  align-items: center;
  padding-left: ${props => (props.level === 1 ? '3rem' : '0rem')};
  transition: ${props => props.theme.sidenav.navItem.transition};
  color: ${props =>
    props.theme.sidenav[`${props.activeItem ? 'active' : ''}navItem`].color};
  font-weight: ${props =>
    props.theme.sidenav[`${props.activeItem ? 'active' : ''}navItem`]
      .fontWeight};
  cursor: ${props =>
    props.disabled
      ? 'not-allowed'
      : props.theme.sidenav[`${props.activeSideNavItem ? 'active' : ''}navItem`]
          .cursor};
  background: ${props => props.theme.sidenav[`navItem`].background};
  opacity: ${props =>
    props.disabled
      ? '.6'
      : props.theme.sidenav[`${props.activeItem ? 'active' : ''}navItem`]
          .opacity};
  > *:hover {
    background: ${props =>
      props.level === 1 ? props.theme.sidenav['activenavItem'].background : ''};
    border-radius: 7px;
    transition: all 0.3s;
  }
  &:before {
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: ${props =>
      props.theme.sidenav[`${props.activeItem ? 'active' : ''}navItem`]
        .leftBorderWidth};
  }
`;

const SidebarLabel = styled.span`
  padding: ${props =>
    props.level === 1
      ? props.theme.sidenav.navLabel.padding
      : props.theme.sidenav.navIcon.padding};
  margin-left: 0px;
  display: ${props => (props.isOpen ? 'block' : 'none')};
  color: ${props => props.theme.sidenav.label.color};
`;

const SubMenu = ({
  item,
  isOpen,
  setCurrentActiveSubNav,
  setSecondarySidebar,
  currentActiveItem,
  setCurrentActiveItem,
  hoverActiveItem,
  setHoverActiveItem,
  ...props
}) => {
  const [subnav, setSubnav] = useState(false);
  const [openFromHover, setOpenFromHover] = useState(false);

  // resetting all subnav to close state when navigation bar is collapsed
  useEffect(() => {
    if (!isOpen) setSubnav(false);
  }, [isOpen]);
  const showSubnav = () => setSubnav(!subnav);
  const newProps = {
    isOpen,
    activeItem: currentActiveItem.label === item.label ? true : false,
    disabled: item.disabled,
    ...props,
  };
  useEffect(() => {
    if (item.label !== currentActiveItem.label) setSubnav(false);
  }, [currentActiveItem]);
  useEffect(() => {
    if (item.label !== hoverActiveItem.label) setSubnav(false);
    else setSubnav(true);
  }, [hoverActiveItem]);

  const handleItemClick = () => {
    if (item.subNav && isOpen) showSubnav();
    else handleSubMenuClick();
  };
  const handleSubMenuClick = () => {
    if (!item.disabled) {
      setSecondarySidebar(false);
      setCurrentActiveSubNav([]);
      setCurrentActiveItem(item);
    }

    if (item.subNav && !isOpen && !item.disabled) {
      setSecondarySidebar(true);
      setCurrentActiveSubNav(item.subNav);
    }
  };
  const handleItemHover = () => {
    if (item.subNav && isOpen) {
      setSubnav(true);
      setHoverActiveItem(item);
      setOpenFromHover(true); // additional parameter to check if subnav is open from hover
    }
  };
  const handleItemHoverOver = () => {
    if (item.subNav && isOpen && item.label !== currentActiveItem.label) {
      setSubnav(false);
      setOpenFromHover(true);
    }
  };
  return (
    <>
      <SidebarLink
        to={item.path}
        onClick={handleItemClick}
        onMouseEnter={handleItemHover}
        // onMouseLeave={handleItemHoverOver}
        {...newProps}
      >
        <SideNavItemIcon isOpen={isOpen} item={item}>
          <Icon icon={item.icon} size={24} />
        </SideNavItemIcon>
        <SidebarLabel {...newProps}>{item.label}</SidebarLabel>

        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {isOpen &&
        subnav &&
        item.subNav.map((item, index) => {
          return (
            <SidebarLink
              to={item.path}
              key={index}
              level={1}
              style={{ paddingRight: '1rem' }}
              onClick={handleSubMenuClick}
            >
              <SidebarLabel level={1} {...newProps}>
                {item.label}
              </SidebarLabel>
            </SidebarLink>
          );
        })}
    </>
  );
};

export default SubMenu;
