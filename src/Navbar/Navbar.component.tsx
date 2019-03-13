import * as React from 'react';
import styled from 'styled-components';

export type Props = {
  /**
   * A color defined in theme colors or a CSS color code
   * or shorthand string for setting element background
   *
   * @default 'white'
   **/
  background?: string;
  /**
   * The shorthand string for setting element border-top
   *
   * @default ''
   **/
  borderTop?: string;
  /**
   * The shorthand string for setting element border-bottom
   *
   * @default ''
   **/
  borderBottom?: string;
  /**
   * Adjust Navbar height.
   *
   * @default '80px'
   **/
  height?: string;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

const SNavbar = styled.div`
  height: ${(props: Props) => props.height || props.theme.navbar.height};
  padding: ${(props: Props) => props.theme.navbar.padding};
  background: ${(props: Props) =>
    props.theme.colors[props.background!] || props.background!.toString()};
  border-top: ${(props: Props) => props.borderTop!.toString()};
  border-bottom: ${(props: Props) => props.borderBottom!.toString()};
  display: flex;
  align-items: center;
`;

export const Navbar: React.FunctionComponent<Props> = ({
  children,
  ...props
}) => <SNavbar {...props}>{children}</SNavbar>;

Navbar.defaultProps = {
  background: 'white',
  borderTop: '',
  borderBottom: '',
};
