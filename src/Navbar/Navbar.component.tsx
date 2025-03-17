import * as React from "react";
import styled from "styled-components";
import { getPropsWithDefaults } from "@utils";

export type Props = React.PropsWithChildren<{
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
}>;

const SNavbar = styled.div`
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.typography.fontSize};
  color: ${(props: Props) => props.theme.navbar.color};
  height: ${(props: Props) => props.theme.navbar.height};
  padding: ${(props: Props) => props.theme.navbar.padding};
  background: ${(props: Props) => props.theme.navbar.background};
  border-top: ${(props: Props) => props.theme.navbar.borderTop};
  border-bottom: ${(props: Props) => props.theme.navbar.borderBottom};
  display: flex;
  align-items: center;
`;

const defaultProps = {} satisfies Partial<Props>;

export const Navbar: React.FunctionComponent<Props> = (props) => {
  const propsWithDefaults = getPropsWithDefaults(defaultProps, props);
  const { children } = propsWithDefaults;
  return <SNavbar {...propsWithDefaults}>{children}</SNavbar>;
};
