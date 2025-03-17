import * as React from 'react';
import styled from 'styled-components';

export type Props = React.PropsWithChildren<{
  /**
   * Set Title Size
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

const STitle = styled.h1`
  font-family: ${(props: Props) =>
    props.theme.typography.title[props.size!].fontFamily};
  color: ${(props: Props) => props.theme.typography.color};
  font-weight: ${(props: Props) =>
    props.theme.typography.title[props.size!].fontWeight};
  font-size: ${(props: Props) =>
    props.theme.typography.title[props.size!].fontSize};
  line-height: ${(props: Props) =>
    props.theme.typography.title[props.size!].lineHeight};
  margin: ${(props: Props) => props.theme.typography.title[props.size!].margin};
`;

const defaultProps = {
  size: 10,
} satisfies Partial<Props>;

export const Title: React.FunctionComponent<Props> = (props) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { children, ...rest } = propsWithDefaults;
  return <STitle {...rest}>{children}</STitle>;
};
