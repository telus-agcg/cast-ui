import * as React from 'react';
import styled from 'styled-components';

export type Props = {
  /**
   * Expand/collapse the sidebar
   *
   * @default false
   **/
  isOpen?: boolean;
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
   * @default '50px'
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
  color: ${(props: Props) => props.theme.sidenav.color};
  height: ${(props: Props) => props.height || props.theme.sidenav.height};
  padding: ${(props: Props) => props.theme.sidenav.padding};
  margin: ${(props: Props) => props.theme.sidenav.margin};
  z-index: ${(props: Props) => props.theme.sidenav.zIndex};
  background: ${(props: Props) =>
    props.theme.colors[props.background!] ||
    props.background!.toString() ||
    props.theme.sidenav.background};
  border-left: ${(props: Props) =>
    props.borderLeft!.toString() || props.theme.sidenav.borderLeft};
  border-right: ${(props: Props) =>
    props.borderRight!.toString() || props.theme.sidenav.borderRight};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  min-width: ${(props: Props) =>
    props.width ||
    (props.isOpen ? props.theme.sidenav.openWidth : props.theme.sidenav.width)};
  transition: min-width 0.15s;
  display: flex;
  flex-direction: column;
`;

export const SideNavbar: React.FunctionComponent<Props> = ({
  children,
  ...props
}) => <SSideNavbar {...props}>{children}</SSideNavbar>;

SideNavbar.defaultProps = {
  isOpen: false,
  width: '',
  background: '',
  borderLeft: '',
  borderRight: '',
};
