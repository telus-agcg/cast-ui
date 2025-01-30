import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../themes';
import { nameSpace } from '../utils/constants';
import Tooltip from '../Tooltip';

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
  height: 24px;
  :hover {
    background: ${props =>
      props.isOpen || props.item.disabled
        ? ''
        : props.theme.sidenav['activenavItem'].background};
    border-radius: ${props => (props.isOpen ? '' : '4px')};
    transition: color 0.3s;
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
      {isOpen ? (
        children
      ) : (
        <Tooltip
          content={
            <span data-testid={`sidenav-item-icon-${item.label}`}>
              {item.label}
            </span>
          }
          placement="right"
        >
          <span>{children}</span>
        </Tooltip>
      )}
    </SSideNavItemIcon>
  </ThemeProvider>
);

SideNavItemIcon.defaultProps = {
  theme: Themes.canopyTheme,
};
