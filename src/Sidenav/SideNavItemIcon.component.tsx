import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../themes';
import { nameSpace } from '../utils/constants';

export type Props = {
  children?: any;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
  isOpen?: any;
  item?: any;
};
const SSideNavItemIcon = styled.div`
  padding: ${(props: Props) => props.theme.sidenav.navText.padding};
  margin-left: 6px;
  :hover {
    background: ${props =>
      props.isOpen || props.item.disabled
        ? ''
        : props.theme.sidenav['activenavItem'].background};
    border-radius: ${props => (props.isOpen ? '' : '4px')};
    transition: all 0.3s;
  }
`;

export const SideNavItemIcon: React.FunctionComponent<Props> = ({
  theme,
  children,
  isOpen,
  item,
  ...props
}) => (
  <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
    <SSideNavItemIcon
      className={`${nameSpace}-sidenav-item-icon`}
      role="side-nav-icon"
      isOpen={isOpen}
      item={item}
      {...props}
    >
      {children}
    </SSideNavItemIcon>
  </ThemeProvider>
);

SideNavItemIcon.defaultProps = {
  theme: Themes.defaultTheme,
};
