import * as React from 'react';
import styled from 'styled-components';
import { SideNavContext } from './context';

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
  children,
  ...props
}) => {
  const {
    baseProps: { isOpen, beforeToggle, onToggle, afterToggle },
  } = React.useContext(SideNavContext);

  const handleClick = (e: any) => {
    beforeToggle(e);
    onToggle(e);
    afterToggle(e);
  };
  return (
    <SSideNavToggle
      role="side-nav-toggle"
      {...props}
      onClick={(e: any) => handleClick(e)}
    >
      {children}
      {!isOpen && (openContent || <div>{'>'}</div>)}
      {isOpen && (closeContent || <div>{'<'}</div>)}
    </SSideNavToggle>
  );
};

SideNavToggle.defaultProps = {
  openContent: '',
  closeContent: '',
};
