import * as React from 'react';
import styled from 'styled-components';
import { SideNavContext } from './context';

export type Props = {
  /**
   * Toggle Button content
   *
   * @default '>|<'
   **/
  content?: JSX.Element | React.Component | string;
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
const SSideNavToggle = styled.div`
  height: ${(props: Props) => props.theme.sidenav.toggle.height};
  cursor: ${(props: Props) => props.theme.sidenav.toggle.cursor};
  padding: ${(props: Props) => props.theme.sidenav.toggle.padding};
  border-bottom: ${(props: Props) => props.theme.sidenav.toggle.borderBottom};
`;

export const SideNavToggle: React.FunctionComponent<Props> = ({
  onClick,
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
    <SSideNavToggle
      role="side-nav-toggle"
      {...props}
      onClick={(e: any) => handleClick(e)}
    >
      {children}
    </SSideNavToggle>
  );
};

SideNavToggle.defaultProps = {};
