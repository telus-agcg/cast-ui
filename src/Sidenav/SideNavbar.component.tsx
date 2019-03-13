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
  borderLeft?: string;
  /**
   * The shorthand string for setting element border-bottom
   *
   * @default ''
   **/
  borderRight?: string;
  /**
   * Adjust SideNavbar height.
   *
   * @default ''
   **/
  height?: string;
  /**
   * Adjust SideNavbar width.
   *
   * @default '80px'
   **/
  width?: string;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

const SSideNavbar = styled.div`
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.typography.fontSize};
  color: ${(props: Props) => props.theme.navbar.color};
  height: ${(props: Props) => props.height || props.theme.navbar.height};
  width: ${(props: Props) => props.width || props.theme.navbar.width};
  padding: ${(props: Props) => props.theme.navbar.padding};
  background: ${(props: Props) =>
    props.theme.colors[props.background!] ||
    props.background!.toString() ||
    props.theme.navbar.background};
  border-top: ${(props: Props) =>
    props.borderLeft!.toString() || props.theme.navbar.borderLeft};
  border-bottom: ${(props: Props) =>
    props.borderRight!.toString() || props.theme.navbar.borderRight};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1006;
  min-width: 64px;
  -webkit-transition: min-width 0.15s;
  -o-transition: min-width 0.15s;
  transition: min-width 0.15s;
`;

export const SideNavbar: React.FunctionComponent<Props> = ({
  children,
  ...props
}) => <SSideNavbar {...props}>{children}</SSideNavbar>;

SideNavbar.defaultProps = {
  background: '',
  borderLeft: '',
  borderRight: '',
};
