import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
  text-decoration: none;
  display: inline-flex;
  align-items: center;
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
  &:before {
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: ${(props) =>
      props.theme.sidenav[`${props.activeSideNavItem ? 'active' : ''}navItem`]
        .leftBorderWidth};
    background-color: ${(props) =>
      props.theme.sidenav[`${props.activeSideNavItem ? 'active' : ''}navItem`]
        .leftBorderColor};
  }
  :hover {
    background: ${(props) => props.theme.sidenav['activenavItem'].background};
    border-radius: 7px;
    transition: background-color 0.3s;
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
  setSecondarySidebar,
  currentActiveSubNavItem,
  setCurrentActiveSubNavItem,
  setCurrentActiveItem,
  parentItem,
  ...props
}) => {
  const newProps = { disabled: item.disabled, ...props };
  const collapsedItemClick = (e, item) => {
    setSecondarySidebar(false);
    setCurrentActiveItem(parentItem);
    setCurrentActiveSubNavItem(item.label);
    if (onSelect) {
      onSelect(e, item, []);
    }
  };
  return (
    <>
      <SidebarLink
        to={item.path}
        isActiveSubMenuItem={item.label === currentActiveSubNavItem}
        {...newProps}
        onClick={(e) => collapsedItemClick(e, item)}
      >
        <SidebarLabel {...newProps}>{item.label}</SidebarLabel>
      </SidebarLink>
    </>
  );
};

export default CollapsedSubMenu;
