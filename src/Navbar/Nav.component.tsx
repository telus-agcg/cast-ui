import * as React from 'react';
import styled from 'styled-components';

export type Props = {
  /**
   * Float the Nav container to the left of the Navbar
   *
   * @default false
   **/
  left?: boolean;
  /**
   * Float the Nav container to the center of the Navbar
   *
   * @default false
   **/
  center?: boolean;
  /**
   * Float the Nav container to the right of the Navbar
   *
   * @default false
   **/
  right?: boolean;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};
const SNav = styled.nav`
  height: auto;
  margin-left: ${(props: Props) =>
    props.right || props.center ? 'auto' : '0'};
  margin-right: ${(props: Props) =>
    props.left || props.center ? 'auto' : '0'};
  display: flex;
  align-items: center;
`;

export const Nav: React.FunctionComponent<Props> = ({ children, ...props }) => (
  <SNav {...props}>{children}</SNav>
);

Nav.defaultProps = {
  left: false,
  center: false,
  right: false,
};
