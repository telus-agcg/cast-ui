import * as React from 'react';
import styled from 'styled-components';
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
  children,
  ...props
}) => (
  <SSideNavItemIcon role="side-nav-icon" {...props}>
    {children}
  </SSideNavItemIcon>
);

SideNavItemIcon.defaultProps = {
  theme: Themes.defaultTheme,
};
