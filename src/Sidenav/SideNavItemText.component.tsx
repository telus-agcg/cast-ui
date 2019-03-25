import * as React from 'react';
import styled from 'styled-components';
import { SideNavContext } from './context';
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
const SSideNavItemText = styled.div`
  padding: ${(props: Props) => props.theme.sidenav.navIcon.padding};
  display: ${(props: any) => (props.isOpen ? 'block' : 'none')};
`;

export const SideNavItemText: React.FunctionComponent<Props> = ({
  children,
  ...props
}) => {
  const {
    baseProps: { isOpen },
  } = React.useContext(SideNavContext);
  const newProps = { ...props, isOpen };
  return (
    <SSideNavItemText role="side-nav-text" {...newProps}>
      {children}
    </SSideNavItemText>
  );
};

SideNavItemText.defaultProps = {
  theme: { ...Themes.defaultTheme },
};
