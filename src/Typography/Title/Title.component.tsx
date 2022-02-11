import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../../themes';

export type Props = {
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
};

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
`;

export const Title: React.FunctionComponent<Props> = ({
  theme,
  children,
  ...props
}) => (
  <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
    <STitle {...props}>{children}</STitle>
  </ThemeProvider>
);
Title.defaultProps = {
  theme: Themes.defaultTheme,
  size: 10,
};
