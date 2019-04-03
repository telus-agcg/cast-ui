import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Icon from 'react-icons-kit';
import { ic_keyboard_arrow_left as IKAL } from 'react-icons-kit/md/ic_keyboard_arrow_left';
import { ic_keyboard_arrow_right as IKAR } from 'react-icons-kit/md/ic_keyboard_arrow_right';

import { SideNavContext } from './context';
import { Themes } from '../themes';

export type Props = {
  /**
   * Custom content for the ToggleButton on open mode
   *
   * @default '>'
   **/
  openContent?: JSX.Element | React.Component | string;
  /**
   * Custom content for the ToggleButton on close mode
   *
   * @default '<'
   **/
  closeContent?: JSX.Element | React.Component | string;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};
const SSideNavToggle = styled.div`
  height: ${(props: Props) => props.theme.sidenav.toggle.height};
  cursor: ${(props: Props) => props.theme.sidenav.toggle.cursor};
  border-bottom: ${(props: Props) => props.theme.sidenav.toggle.borderBottom};
  display: ${(props: Props) => props.theme.sidenav.toggle.display};
  align-items: center;
  justify-content: right;
  > * {
    padding: ${(props: Props) => props.theme.sidenav.toggle.padding};
  }
`;

export const SideNavToggle: React.FunctionComponent<Props> = ({
  openContent,
  closeContent,
  theme,
  children,
  ...props
}) => {
  const {
    baseProps: { isOpen, beforeToggle, onToggle, afterToggle },
  } = React.useContext(SideNavContext);

  const noop = () => {};
  const handleClick = (e: any) => {
    beforeToggle ? beforeToggle(e) : noop;
    onToggle ? onToggle(e) : noop;
    afterToggle ? afterToggle(e) : noop;
  };
  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <SSideNavToggle
        role="side-nav-toggle"
        {...props}
        onClick={(e: any) => handleClick(e)}
      >
        {children}
        {!isOpen && (openContent || <Icon icon={IKAR} size={24} />)}
        {isOpen && (closeContent || <Icon icon={IKAL} size={24} />)}
      </SSideNavToggle>
    </ThemeProvider>
  );
};

SideNavToggle.defaultProps = {
  theme: Themes.defaultTheme,
  openContent: '',
  closeContent: '',
};
