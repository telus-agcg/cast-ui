import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../themes';

export type Props = {
  /**
   * Set Badge Size
   *
   * @default 'md'
   **/
  badgeSize?: 'sm' | 'md' | 'lg';
  /**
   * Set Badge Style
   *
   * @default 'default'
   **/
  badgeStyle?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger';
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

const SBadge = styled.div`
  background: ${(props: Props) =>
    props.theme.styles[props.badgeStyle!].badgeBackground};
  border-radius: ${(props: Props) =>
    props.theme.badge[props.badgeSize!].borderRadius};
  color: ${(props: Props) => props.theme.styles[props.badgeStyle!].badgeColor};
  display: inline-block;
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.badge[props.badgeSize!].fontSize};
  font-weight: bold;
  padding: ${(props: Props) => props.theme.badge[props.badgeSize!].padding};
`;

export const Badge: React.FunctionComponent<Props> = ({
  children,
  theme,
  ...props
}) => (
  <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
    <SBadge {...props}>{children}</SBadge>
  </ThemeProvider>
);

Badge.defaultProps = {
  theme: Themes.defaultTheme,
  badgeSize: 'md',
  badgeStyle: 'default',
};
