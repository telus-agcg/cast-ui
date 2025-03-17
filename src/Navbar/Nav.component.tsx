import * as React from "react";
import styled from "styled-components";
import { getPropsWithDefaults } from "@utils";

export type Props = React.PropsWithChildren<{
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
const SNav = styled.nav`
  height: auto;
  margin-left: ${(props: Props) =>
    props.right || props.center ? "auto" : "0"};
  margin-right: ${(props: Props) =>
    props.left || props.center ? "auto" : "0"};
  display: flex;
  align-items: center;
`;

const defaultProps = {
  left: false,
  center: false,
  right: false,
} satisfies Partial<Props>;

export const Nav: React.FunctionComponent<Props> = (props) => {
  const propsWithDefaults = getPropsWithDefaults(defaultProps, props);
  const { children } = propsWithDefaults;
  return <SNav {...propsWithDefaults}>{children}</SNav>;
};
