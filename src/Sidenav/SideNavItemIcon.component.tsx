import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../themes';

export type Props = {
  children?: any;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};
const SSideNavItemIcon = styled.div`
  padding: ${(props: Props) => props.theme.sidenav.navText.padding};
`;

export const SideNavItemIcon: React.FunctionComponent<Props> = ({
  theme,
  children,
  ...props
}) => (
  <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
    <SSideNavItemIcon role="side-nav-icon" {...props}>
      {children}
    </SSideNavItemIcon>
  </ThemeProvider>
);

SideNavItemIcon.defaultProps = {
  theme: Themes.defaultTheme,
};
