import * as React from 'react';
import styled from 'styled-components';
import { Themes } from '../themes';

export type Props = {
  /**
   * Set Badge Size
   *
   * @default 'md'
   **/
  badgeSize?: string;
  /**
   * Set Badge Style
   *
   * @default 'primary'
   **/
  badgeStyle?: string;
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
  ...props
}) => <SBadge {...props}>{children}</SBadge>;

Badge.defaultProps = {
  theme: { ...Themes.defaultTheme },
  badgeSize: 'md',
  badgeStyle: 'primary',
};
