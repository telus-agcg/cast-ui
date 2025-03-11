import * as React from "react";
import styled from "styled-components";
import { getPropsWithDefaults } from "@utils";

export type Props = React.PropsWithChildren<{
  /**
   * Set Badge Size
   *
   * @default 'md'
   **/
  badgeSize?: "sm" | "md" | "lg";
  /**
   * Set Badge Style
   *
   * @default 'primary'
   **/
  badgeStyle?: "primary" | "secondary" | "success" | "warning" | "danger";
  /**
   * Toggle Alert Light Mode
   *
   * @default false
   **/
  lightMode?: boolean;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
}>;

const SBadge = styled.div`
  background: ${(props: Props) =>
    props.lightMode
      ? props.theme.styles[props.badgeStyle!]["light"].badgeBackground
      : props.theme.styles[props.badgeStyle!].badgeBackground};
  border: ${(props: Props) =>
    props.lightMode
      ? props.theme.styles[props.badgeStyle!]["light"].badgeBorder
      : props.theme.styles[props.badgeStyle!].badgeBorder};
  border-radius: ${(props: Props) =>
    props.theme.badge[props.badgeSize!].borderRadius};
  color: ${(props: Props) =>
    props.lightMode
      ? props.theme.styles[props.badgeStyle!]["light"].badgeColor
      : props.theme.styles[props.badgeStyle!].badgeColor};
  display: inline-block;
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.badge[props.badgeSize!].fontSize};
  font-weight: ${(props: Props) => props.theme.badge.fontWeight};
  padding: ${(props: Props) => props.theme.badge[props.badgeSize!].padding};
`;

const defaultProps = {
  badgeSize: "md",
  badgeStyle: "primary",
  lightMode: false,
} satisfies Partial<Props>;

export const Badge: React.FunctionComponent<Props> = (props: Props) => {
  const propsWithDefaults = getPropsWithDefaults(defaultProps, props);
  const { children } = propsWithDefaults;
  return <SBadge {...propsWithDefaults}>{children}</SBadge>;
};
