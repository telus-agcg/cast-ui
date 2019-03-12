import * as React from 'react';
import styled from 'styled-components';

export type Props = {
  /**
   * Set body background color. A CSS color code or a color defined in theme colors
   *
   * @default 'lightGray'
   **/
  backgroundColor?: string;
  /**
   * Adjust Navbar height.
   *
   * @default '60px'
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
  background-color: ${(props: Props) =>
    props.theme.colors[props.backgroundColor!] ||
    props.backgroundColor!.toString()};
  display: flex;
  align-items: center;
`;

export const Navbar: React.FunctionComponent<Props> = ({
  children,
  ...props
}) => <SNavbar {...props}>{children}</SNavbar>;

Navbar.defaultProps = {
  backgroundColor: 'white',
};
