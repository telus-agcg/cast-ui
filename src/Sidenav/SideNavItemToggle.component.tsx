import * as React from 'react';
import styled from 'styled-components';
import { SideNavContext } from './context';

export type Props = {
  /**
   * Open toggle Button content
   *
   * @default '>'
   **/
  openContent?: JSX.Element | React.Component | string;
  /**
   * Close toggle Button content
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
  height: ${(props: Props) => props.theme.sidenav.toggle.height};
  cursor: ${(props: Props) => props.theme.sidenav.toggle.cursor};
  border-bottom: ${(props: Props) => props.theme.sidenav.toggle.borderBottom};
  display: ${(props: Props) => props.theme.sidenav.toggle.display};
  align-items: center;
  justify-content: right;
  position: absolute;
  right: 12px;
  > * {
    padding: ${(props: Props) => props.theme.sidenav.toggle.padding};
  }
`;

export const SideNavItemToggle: React.FunctionComponent<Props> = ({
  onClick,
  openContent,
  closeContent,
  children,
  ...props
}) => {
  const {
    baseProps: { setPrimaryToggle, primaryToggle, isOpen },
  } = React.useContext(SideNavContext);

  const handleClick = (e: any) => {
    onClick ? onClick(e) : setPrimaryToggle(!(primaryToggle || isOpen));
  };
  return (
    <SSideNavItemToggle
      role="side-nav-toggle"
      {...props}
      onClick={(e: any) => handleClick(e)}
    >
      {children}
      {!(primaryToggle || isOpen) && (openContent || <div>{'>'}</div>)}
      {(primaryToggle || isOpen) && (closeContent || <div>{'<'}</div>)}
    </SSideNavItemToggle>
  );
};

SideNavItemToggle.defaultProps = {
  openContent: '',
  closeContent: '',
};
