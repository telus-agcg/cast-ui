import { Themes } from '@themes';
import * as React from 'react';
import styled from 'styled-components';

export type Props = React.PropsWithChildren<{
  /**
   * Set Caption Size
   *
   * @default 10
   **/
  size?: 10 | 20;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
}>;

const SCaption = styled.p`
  font-family: ${(props: Props) =>
    props.theme.typography.caption[props.size!].fontFamily};
  color: ${(props: Props) => props.theme.typography.color};
  font-weight: ${(props: Props) =>
    props.theme.typography.caption[props.size!].fontWeight};
  font-size: ${(props: Props) =>
    props.theme.typography.caption[props.size!].fontSize};
  line-height: ${(props: Props) =>
    props.theme.typography.caption[props.size!].lineHeight};
`;

const defaultProps = {
  size: 10,
} satisfies Partial<Props>;

export const Caption: React.FunctionComponent<Props> = (props) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { children } = propsWithDefaults;
  return <SCaption {...propsWithDefaults}>{children}</SCaption>;
};
