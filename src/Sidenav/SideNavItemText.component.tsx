import * as React from 'react';
import styled from 'styled-components';
import SideNavContext from './context';

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
  display: ${(props: any) => (props.isOpen ? 'block' : 'none')};
`;

export const SideNavItemText: React.FunctionComponent<Props> = ({
  children,
  ...props
}) => {
  const { baseProps } = React.useContext(SideNavContext);
  return (
    <SSideNavItemText role="side-nav-text" {...baseProps} {...props}>
      {children}
    </SSideNavItemText>
  );
};

SideNavItemText.defaultProps = {};
