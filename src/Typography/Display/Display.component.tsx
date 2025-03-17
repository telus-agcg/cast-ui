import * as React from 'react';
import styled from 'styled-components';

export type Props = React.PropsWithChildren<{
  /**
   * Set Display Size
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

const SDisplay = styled.h1`
  font-family: ${(props: Props) =>
    props.theme.typography.display[props.size!].fontFamily};
  font-weight: ${(props: Props) =>
    props.theme.typography.display[props.size!].fontWeight};
  font-size: ${(props: Props) =>
    props.theme.typography.display[props.size!].fontSize};
  line-height: ${(props: Props) =>
    props.theme.typography.display[props.size!].lineHeight};
  margin: ${(props: Props) =>
    props.theme.typography.display[props.size!].margin};
`;

const defaultProps = {
  size: 10,
} satisfies Partial<Props>;

export const Display: React.FunctionComponent<Props> = (props) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { children, ...rest } = propsWithDefaults;
  return <SDisplay {...rest}>{children}</SDisplay>;
};
