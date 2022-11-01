import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
  float: left;
  text-decoration: none;
  list-style: none;
  height: auto;
  position: relative;
  margin: 0;
  margin-top: 0.5rem;
  display: inline-flex;
  align-items: center;
  padding-left: ${props => (props.level === 1 ? '1rem' : '0rem')};
  padding-right: 18px;
  transition: ${props => props.theme.sidenav.navItem.transition};
  color: ${props =>
    props.theme.sidenav[`${props.activeSideNavItem ? 'active' : ''}navItem`]
      .color};
  font-weight: ${props =>
    props.theme.sidenav[`${props.activeSideNavItem ? 'active' : ''}navItem`]
      .fontWeight};
  cursor: ${props =>
    props.disabled
      ? 'not-allowed'
      : props.theme.sidenav[`${props.activeSideNavItem ? 'active' : ''}navItem`]
          .cursor};
  background: ${props =>
    props.theme.sidenav[`${props.activeSideNavItem ? 'active' : ''}navItem`]
      .background};
  opacity: ${props =>
    props.disabled
      ? '.6'
      : props.theme.sidenav[`${props.activeSideNavItem ? 'active' : ''}navItem`]
          .opacity};
  &:before {
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: ${props =>
      props.theme.sidenav[`${props.activeSideNavItem ? 'active' : ''}navItem`]
        .leftBorderWidth};
    background-color: ${props =>
      props.theme.sidenav[`${props.activeSideNavItem ? 'active' : ''}navItem`]
        .leftBorderColor};
  }
  :hover {
    background: ${props => props.theme.sidenav['activenavItem'].background};
    border-radius: 7px;
    transition: all 0.3s;
  }
`;

const SidebarLabel = styled.span`
  padding: ${props => props.theme.sidenav.navLabel.padding};
  margin-left: 16px;
  display: 'block';
`;

const CollapsedSubMenu = ({
  item,
  onSelect,
  setSecondarySidebar,
  ...props
}) => {
  const newProps = { disabled: item.disabled, ...props };
  const collapsedItemClick = (e, item) => {
    if (onSelect) {
      setSecondarySidebar(false);
      onSelect(e, item, []);
    }
  };
  return (
    <>
      <SidebarLink
        to={item.path}
        {...newProps}
        onClick={e => collapsedItemClick(e, item)}
      >
        <SidebarLabel {...newProps}>{item.label}</SidebarLabel>
      </SidebarLink>
    </>
  );
};

export default CollapsedSubMenu;
