import * as React from 'react';
import styled from 'styled-components';

type Props = {
  /**
   * Select Badge Size
   *
   * @default 'default'
   **/
  badgeSize: string;
  /**
   * Select Badge Style
   *
   * @default 'default'
   **/
  badgeStyle: string;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

const SBadge = styled.div`
  background: ${(props: Props) => props.theme.styles[props.badgeStyle].flood};
  border-radius: ${(props: Props) => props.theme.badge[props.badgeSize].borderRadius};
  padding: ${(props: Props) => props.theme.badge[props.badgeSize].padding};
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.badge[props.badgeSize].fontSize};
  font-weight: bold;
  color: ${(props: Props) => props.theme.styles[props.badgeStyle].reverseText};
  display: inline-block;
`;

export const Badge: React.FunctionComponent<Props> = ({
  children,
  badgeSize = 'md',
  badgeStyle = 'primary',
  theme,
}) => (
  <SBadge
    badgeSize={badgeSize}
    badgeStyle={badgeStyle}
    theme={theme}
  >
    {children}
  </SBadge>
);
