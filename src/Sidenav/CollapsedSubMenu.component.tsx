import React from 'react';
import Link from '../Typography/Link';
import styled from 'styled-components';
import _ from 'lodash';

const SidebarLink = styled(Link)`
  text-decoration: none;
  display: inline-flex;
  padding-left: ${(props) => (props.level === 1 ? '1rem' : '0rem')};
  padding-right: 18px;
  color: ${(props) =>
    props.theme.sidenav[`${props.isActiveSubMenuItem ? 'active' : ''}navItem`]
      .color};
  font-weight: ${(props) =>
    props.theme.sidenav[`${props.isActiveSubMenuItem ? 'active' : ''}navItem`]
      .fontWeight};
  cursor: ${(props) =>
    props.disabled
      ? 'not-allowed'
      : props.theme.sidenav[`${props.activeSideNavItem ? 'active' : ''}navItem`]
          .cursor};
  background: ${(props) =>
    props.theme.sidenav[`${props.activeSideNavItem ? 'active' : ''}navItem`]
      .background};
  opacity: ${(props) =>
    props.disabled
      ? '.6'
      : props.theme.sidenav[`${props.activeSideNavItem ? 'active' : ''}navItem`]
          .opacity};
  :hover {
    background: ${(props) => props.theme.sidenav['activenavItem'].background};
    border-radius: 7px;
    transition: background-color 0.3s;
  }
  :hover,
  :visited,
  :active,
  :link {
    text-decoration: none;
  }
`;

const SidebarLabel = styled.span`
  padding: ${(props) => props.theme.sidenav.navLabel.padding};
  margin-left: 16px;
  display: 'block';
`;

const CollapsedSubMenu = ({
  item,
  onSelect,
  setSecondarySidebarOpen,
  currentSelectedSubnavItem,
  setCurrentActiveSubnavItem,
  setCurrentActiveItem,
  parentItem,
  theme,
  toggleSecondarySideNav,
}) => {
  const newProps = { theme, disabled: item.disabled };
  const collapsedItemClick = (e, item) => {
    toggleSecondarySideNav
      ? toggleSecondarySideNav(false)
      : setSecondarySidebarOpen(false);
    setCurrentActiveItem(parentItem);
    setCurrentActiveSubnavItem(item.label);
    if (onSelect) {
      onSelect(e, item, []);
    }
  };
  return (
    <>
      <SidebarLink
        to={item.path}
        isActiveSubMenuItem={item.label === currentSelectedSubnavItem}
        {...newProps}
        onClick={(e) => collapsedItemClick(e, item)}
        data-testid={_.kebabCase(item.label)}
      >
        <SidebarLabel {...newProps}>{item.label}</SidebarLabel>
      </SidebarLink>
    </>
  );
};

export default CollapsedSubMenu;
