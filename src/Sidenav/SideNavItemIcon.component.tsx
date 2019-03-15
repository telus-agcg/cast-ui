import * as React from 'react';
import styled from 'styled-components';
import { SecondarySideNavContext } from './context';

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
}) => {
  const { secondaryNavChildren } = React.useContext(SecondarySideNavContext);
  console.log('children can see children ', secondaryNavChildren);
  return (
    <SSideNavItemIcon role="side-nav-icon" {...props}>
      {children}
    </SSideNavItemIcon>
  );
};

SideNavItemIcon.defaultProps = {};
