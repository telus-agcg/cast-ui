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
const SSideNavToggle = styled.div`
  padding: ${(props: Props) => props.theme.sidenav.navText.padding};
`;

export const SideNavToggle: React.FunctionComponent<Props> = ({
  children,
  ...props
}) => (
  <SSideNavToggle role="side-nav-icon" {...props}>
    {children}
  </SSideNavToggle>
);

SideNavToggle.defaultProps = {};
