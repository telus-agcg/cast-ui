import * as React from 'react';
import styled from 'styled-components';
import Icon from 'react-icons-kit';
import { ic_keyboard_arrow_left as IKAL } from 'react-icons-kit/md/ic_keyboard_arrow_left';
import { ic_keyboard_arrow_right as IKAR } from 'react-icons-kit/md/ic_keyboard_arrow_right';

import { Themes } from '../themes';

export type Props = {
  /**
   * Show/Hide toggle button
   *
   * @default 'false'
   **/
  isToggleVisible?: boolean;
  /**
   * Is it the current item?
   *
   * @default 'false'
   **/
  isToggleOpen?: boolean;
  /**
   * Custom content for the itemToggleButton on open mode
   *
   * @default '>'
   **/
  openContent?: JSX.Element | React.Component | string;
  /**
   * Custom content for the itemToggleButton on close mode
   *
   * @default '<'
   **/
  closeContent?: JSX.Element | React.Component | string;
  /**
   * Click the Toggle Button
   *
   * @default 'void'
   **/
  onClick?(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};
const SSideNavItemToggle = styled.div`
  position: ${(props: Props) => props.theme.sidenav.itemToggle.position};
  right: ${(props: Props) => props.theme.sidenav.itemToggle.right};
  background: ${(props: Props) => props.theme.sidenav.itemToggle.background};
  height: ${(props: Props) => props.theme.sidenav.itemToggle.height};
  width: ${(props: Props) => props.theme.sidenav.itemToggle.width};
  display: ${(props: Props) => props.theme.sidenav.itemToggle.display};
  align-items: center;
  justify-content: center;
`;

export const SideNavItemToggle: React.FunctionComponent<Props> = ({
  isToggleVisible,
  isToggleOpen,
  onClick = () => {},
  openContent,
  closeContent,
  children,
  ...props
}) => {
  const handleClick = (e: any) => {
    onClick(e);
  };
  return isToggleVisible ? (
    <SSideNavItemToggle
      role="side-nav-toggle"
      {...props}
      onClick={(e: any) => handleClick(e)}
    >
      {children}
      {!isToggleOpen && (openContent || <Icon icon={IKAR} size={24} />)}
      {isToggleOpen && (closeContent || <Icon icon={IKAL} size={24} />)}
    </SSideNavItemToggle>
  ) : null;
};

SideNavItemToggle.defaultProps = {
  theme: Themes.defaultTheme,
  isToggleVisible: false,
  isToggleOpen: false,
  openContent: '',
  closeContent: '',
};
