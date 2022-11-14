import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SideNavItemIcon } from './SideNavItemIcon.component';
import Icon from 'react-icons-kit';

const SSubMenuItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 3px 0px 4px;
`;
const SSubNavWrapper = styled.div`
  display: flex;
  height: ${(props) => (props.show ? 'auto' : 0)};
  opacity: ${(props) => (props.show ? 1 : 0)};
  flex-direction: column;
  &.fade-enter {
    transition: all 0.15s 0s ease-in;
  }
`;
const SidebarLink = styled(Link)`
  float: left;
  text-decoration: none;
  list-style: none;
  height: auto;
  position: relative;
  margin: 0;
  display: inline-flex;
  align-items: center;
  padding: ${(props) =>
    props.level === 1 ? '8px 0px 8px 46px' : props.isOpen ? '8px 0px' : '8px'};
  gap: 12px;
  border-bottom: '0px';
  color: ${(props) =>
    props.theme.sidenav[
      `${props.activeItem || props.isActiveSubMenuItem ? 'active' : ''}navItem`
    ].color};
  font-weight: ${(props) =>
    props.theme.sidenav[
      `${props.activeItem || props.isActiveSubMenuItem ? 'active' : ''}navItem`
    ].fontWeight};
  cursor: ${(props) =>
    props.disabled
      ? 'not-allowed'
      : props.theme.sidenav[`${props.activeSideNavItem ? 'active' : ''}navItem`]
          .cursor};
  opacity: ${(props) =>
    props.disabled
      ? '.6'
      : props.theme.sidenav[`${props.activeItem ? 'active' : ''}navItem`]
          .opacity};
  :hover {
    background: ${(props) =>
      props.level === 1 || (!props.isOpen && !props.disabled)
        ? props.theme.sidenav['activenavItem'].background
        : ''};
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
    width: ${(props) =>
      props.theme.sidenav[`${props.activeItem ? 'active' : ''}navItem`]
        .leftBorderWidth};
  }
  .custom-icon-svg {
    path {
      fill: ${(props) =>
        props.theme.sidenav[`${props.activeItem ? 'active' : ''}navItem`]
          .color};
    }
  }
`;

const SidebarLabel = styled.span`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
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
  onSelect,
  currentActiveSubNavItem,
  setCurrentActiveSubNavItem,
  allowHover,
  hoverDelay,
  ...props
}) => {
  const [subnav, setSubnav] = useState(false);
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

  const handleItemClick = (e) => {
    if (item.subNav && isOpen && !item.disabled) showSubnav();
    else handleSubMenuClick(e, item, 0);
  };
  const handleSubMenuClick = (e, selectedItem, level) => {
    if (!item.disabled && (isOpen || level === 1 || !item.subNav)) {
      setSecondarySidebar(false);
      setCurrentActiveSubNav([]);
      setCurrentActiveItem(item);
      setCurrentActiveSubNavItem(selectedItem?.label);
    }
    if (item.subNav && !isOpen && !item.disabled) {
      setSecondarySidebar(true);
      setCurrentActiveSubNav(item);
    } else if (onSelect && !item.disabled) {
      onSelect(e, selectedItem, item.subNav);
    }
  };
  const handleItemHover = () => {
    if (item.subNav && isOpen) {
      setSubnav(true);
      setHoverActiveItem(item);
    }
  };
  const IconObj = item?.icon;
  const handleHoverDelay = () => {
    if (allowHover) {
      setTimeout(() => {
        handleItemHover();
      }, hoverDelay ?? 400);
    }
  };
  return (
    <SSubMenuItem>
      <SidebarLink
        to={item.path}
        onClick={handleItemClick}
        onMouseEnter={handleHoverDelay}
        {...newProps}
      >
        <SideNavItemIcon isOpen={isOpen} item={item}>
          {/* keep one icon prop */}
          {item.reactIcon ? (
            <Icon icon={item.reactIcon} size={24} />
          ) : (
            <IconObj
              className={`custom-icon-svg`}
              style={{ width: '24px', height: '24px' }}
            />
          )}
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
      <SSubNavWrapper
        show={isOpen && subnav}
        className={isOpen && subnav ? 'fade-enter' : ''}
      >
        {item.subNav?.map((subMenuItem, index) => {
          return (
            <SidebarLink
              to={subMenuItem.path}
              key={index}
              level={1}
              onClick={(e) => handleSubMenuClick(e, subMenuItem, 1)}
              isActiveSubMenuItem={
                subMenuItem.label === currentActiveSubNavItem
              }
            >
              <SidebarLabel level={1} {...newProps}>
                {subMenuItem.label}
              </SidebarLabel>
            </SidebarLink>
          );
        })}
      </SSubNavWrapper>
    </SSubMenuItem>
  );
};
export default SubMenu;
