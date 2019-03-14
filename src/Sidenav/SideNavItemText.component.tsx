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
const SSideNavItemText = styled.div`
  padding: ${(props: Props) => props.theme.sidenav.navIcon.padding};
`;

export const SideNavItemText: React.FunctionComponent<Props> = ({
  children,
  ...props
}) => <SSideNavItemText {...props}>{children}</SSideNavItemText>;

SideNavItemText.defaultProps = {};
