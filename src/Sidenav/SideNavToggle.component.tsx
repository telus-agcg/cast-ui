import * as React from 'react';
import styled from 'styled-components';

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
  children,
  ...props
}) => (
  <SSideNavToggle role="side-nav-toggle" {...props}>
    {children}
  </SSideNavToggle>
);

SideNavToggle.defaultProps = {};
