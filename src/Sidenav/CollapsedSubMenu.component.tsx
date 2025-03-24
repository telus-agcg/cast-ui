import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import _ from 'lodash';
import { Link, LinkProps } from '../Typography/Link/Link.component';

const SidebarLink = styled(Link)<LinkProps & { isActiveSubMenuItem: boolean }>`
  text-decoration: none;
  display: inline-flex;
  padding-right: 18px;
  color: ${(props) =>
    props.theme.sidenav[`${props.isActiveSubMenuItem ? 'active' : ''}navItem`]
      .color};
  font-weight: ${(props) =>
    props.theme.sidenav[`${props.isActiveSubMenuItem ? 'active' : ''}navItem`]
      .fontWeight};
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
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <>
        <SidebarLink
          href={item.path}
          isActiveSubMenuItem={item.label === currentSelectedSubnavItem}
          {...newProps}
          onClick={(e) => collapsedItemClick(e, item)}
          data-testid={_.kebabCase(item.label)}
        >
          <SidebarLabel {...newProps}>{item.label}</SidebarLabel>
        </SidebarLink>
      </>
    </ThemeProvider>
  );
};

export default CollapsedSubMenu;
