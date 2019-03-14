import * as React from 'react';
import styled from 'styled-components';

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
  padding: ${(props: Props) => props.theme.sidenav.navIcon.padding};
`;

export const SideNavItemIcon: React.FunctionComponent<Props> = ({
  children,
  ...props
}) => <SSideNavItemIcon {...props}>{children}</SSideNavItemIcon>;

SideNavItemIcon.defaultProps = {};
