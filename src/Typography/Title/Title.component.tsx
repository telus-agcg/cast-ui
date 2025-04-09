import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '@themes';

export type TitleProps = React.PropsWithChildren<{
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

const STitle = styled.h1<TitleProps>`
  font-family: ${(props) =>
    props.theme.typography.title[props.size!].fontFamily};
  color: ${(props) => props.theme.typography.color};
  font-weight: ${(props) =>
    props.theme.typography.title[props.size!].fontWeight};
  font-size: ${(props) => props.theme.typography.title[props.size!].fontSize};
  line-height: ${(props) =>
    props.theme.typography.title[props.size!].lineHeight};
  margin: ${(props) => props.theme.typography.title[props.size!].margin};
`;

const defaultProps = {
  size: 10,
  theme: Themes.canopyTheme,
} satisfies Partial<TitleProps>;

export const Title: React.FunctionComponent<TitleProps> = (props) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { theme, children, ...rest } = propsWithDefaults;
  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <STitle {...rest}>{children}</STitle>
    </ThemeProvider>
  );
};
