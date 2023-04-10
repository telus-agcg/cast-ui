import React, { useState, useEffect } from 'react';
import { Link } from '../Typography/Link';
import styled from 'styled-components';
import { SideNavItemIcon } from './SideNavItemIcon.component';
import Icon from 'react-icons-kit';
import _ from 'lodash';

const SSubMenuItem = styled.div`
  display: flex;
  flex-direction: column;
`;
const SSubNavWrapper = styled.div`
  display: flex;
  height: ${(props) => (props.show ? 'auto' : 0)};
  opacity: ${(props) => (props.show ? 1 : 0)};
  flex-direction: column;
  &.fade-enter {
    transition: height 0.15s 0s ease-in;
  }
`;
const SidebarLink = styled(Link)`
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: ${(props) =>
    props.level === 1 ? '8px 0px 8px 46px' : props.isOpen ? '8px 0px' : '8px'};
  gap: 12px;
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
    transition: color 0.3s;
  }
  :hover,
  :visited,
  :active,
  :link {
    text-decoration: none;
  }
  .custom-icon-svg {
    path {
      fill: ${(props) =>
        props.theme.sidenav[`${props.activeItem ? 'active' : ''}navItem`]
          .color};
    }
    :hover {
      path {
        fill: ${(props) => props.theme.sidenav[`activenavItem`].color};
      }
    }
  }
`;

const SidebarLabel = styled.span`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

const SubMenu = ({
  allowHover,
  currentActiveItem,
  currentActiveSubnav,
  currentSelectedSubnavItem,
  hoverActiveItem,
  hoverDelay,
  isOpen,
  item,
  onSelect,
  secondarySidebarOpen,
  setCurrentActiveItem,
  setCurrentActiveSubnav,
  setHoverActiveItem,
  setSecondarySidebarOpen,
  toggleSecondarySideNav,
  setCurrentActiveSubnavItem,
  isSecondaryNavOpen,
  theme,
}) => {
  useEffect(() => {
    if (item.label !== currentActiveItem.label) setSubnav(false);
  }, [currentActiveItem]);
  useEffect(() => {
    if (item.label !== hoverActiveItem.label) setSubnav(false);
    else setSubnav(true);
  }, [hoverActiveItem]);
  // resetting all subnav to close state when navigation bar is collapsed
  useEffect(() => {
    if (!isOpen) setSubnav(false);
  }, [isOpen]);
  const [subnav, setSubnav] = useState(false);

  const newProps = {
    isOpen,
    theme,
    activeItem: currentActiveItem.label === item.label ? true : false,
    disabled: item.disabled,
  };

  const showSubnav = () => setSubnav(!subnav);
  const IconObj = item?.customIcon;
  const handleItemClick = (e) => {
    if (item.subNav && isOpen && !item.disabled) {
      showSubnav();
    } else {
      handleSubMenuClick(e, item, 0);
    }
  };
  const handleSubMenuClick = (e, selectedItem, level) => {
    if (!item.disabled && (isOpen || level === 1 || !item.subNav)) {
      setSecondarySidebarOpen(false);
      setCurrentActiveSubnav([]);
      setCurrentActiveItem(item);
      setCurrentActiveSubnavItem(selectedItem?.label);
    }
    if (item.subNav && !isOpen && !item.disabled) {
      if (
        (secondarySidebarOpen || isSecondaryNavOpen) &&
        currentActiveSubnav.label === selectedItem.label
      ) {
        toggleSecondarySideNav
          ? toggleSecondarySideNav(false)
          : setSecondarySidebarOpen(false);
        setCurrentActiveSubnav([]);
      } else {
        toggleSecondarySideNav
          ? toggleSecondarySideNav(true)
          : setSecondarySidebarOpen(true);
        setCurrentActiveSubnav(item);
      }
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
        onClick={handleItemClick}
        onMouseEnter={handleHoverDelay}
        data-testid={_.kebabCase(item.label)}
        {...newProps}
      >
        <SideNavItemIcon isOpen={isOpen} item={item}>
          {item.customIcon ? (
            <IconObj
              className={`custom-icon-svg`}
              style={{ width: '24px', height: '24px' }}
            />
          ) : (
            <Icon icon={item.icon} size={24} />
          )}
        </SideNavItemIcon>
        <SidebarLabel {...newProps}>{item.label}</SidebarLabel>
      </SidebarLink>
      <SSubNavWrapper
        show={isOpen && subnav}
        className={isOpen && subnav ? 'fade-enter' : ''}
      >
        {item.subNav?.map((subMenuItem, index) => {
          return (
            <SidebarLink
              key={index}
              level={1}
              onClick={(e) => handleSubMenuClick(e, subMenuItem, 1)}
              isActiveSubMenuItem={
                subMenuItem.label === currentSelectedSubnavItem
              }
              data-testid={_.kebabCase(subMenuItem.label)}
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
