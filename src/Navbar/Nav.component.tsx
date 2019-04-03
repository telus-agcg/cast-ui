import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../themes';

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

export const Nav: React.FunctionComponent<Props> = ({
  theme,
  children,
  ...props
}) => (
  <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
    <SNav {...props}>{children}</SNav>
  </ThemeProvider>
);

Nav.defaultProps = {
  left: false,
  center: false,
  right: false,
  theme: Themes.defaultTheme,
};
