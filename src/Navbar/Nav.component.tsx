import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { getPropsWithDefaults } from '@utils';

export type NavProps = React.PropsWithChildren<{
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
}>;
const SNav = styled.nav<NavProps>`
  height: auto;
  margin-left: ${(props) => (props.right || props.center ? 'auto' : '0')};
  margin-right: ${(props) => (props.left || props.center ? 'auto' : '0')};
  display: flex;
  align-items: center;
`;

const defaultProps = {
  left: false,
  center: false,
  right: false,
} satisfies Partial<NavProps>;

export const Nav: React.FunctionComponent<NavProps> = (props) => {
  const propsWithDefaults = getPropsWithDefaults(defaultProps, props);
  const { theme, children, ...rest } = propsWithDefaults;
  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <SNav {...rest}>{children}</SNav>
    </ThemeProvider>
  );
};
