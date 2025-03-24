import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

export type DisplayProps = React.PropsWithChildren<{
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

const SDisplay = styled.h1<DisplayProps>`
  font-family: ${(props) =>
    props.theme.typography.display[props.size!].fontFamily};
  font-weight: ${(props) =>
    props.theme.typography.display[props.size!].fontWeight};
  font-size: ${(props) => props.theme.typography.display[props.size!].fontSize};
  line-height: ${(props) =>
    props.theme.typography.display[props.size!].lineHeight};
  margin: ${(props) => props.theme.typography.display[props.size!].margin};
`;

const defaultProps = {
  size: 10,
} satisfies Partial<DisplayProps>;

export const Display: React.FunctionComponent<DisplayProps> = (props) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { theme, children, ...rest } = propsWithDefaults;
  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <SDisplay {...rest}>{children}</SDisplay>
    </ThemeProvider>
  );
};
