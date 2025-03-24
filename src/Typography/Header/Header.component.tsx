import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

export type HeaderProps = React.PropsWithChildren<{
  /**
   * Set Header Size
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

const SHeader = styled.h2<HeaderProps>`
  font-family: ${(props) =>
    props.theme.typography.header[props.size!].fontFamily};
  color: ${(props) => props.theme.typography.color};
  font-weight: ${(props) =>
    props.theme.typography.header[props.size!].fontWeight};
  font-size: ${(props) => props.theme.typography.header[props.size!].fontSize};
  line-height: ${(props) =>
    props.theme.typography.header[props.size!].lineHeight};
  margin: ${(props) => props.theme.typography.header[props.size!].margin};
`;

const defaultProps = {
  size: 10,
} satisfies Partial<HeaderProps>;

export const Header: React.FunctionComponent<HeaderProps> = (
  props: HeaderProps,
) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { theme, children, ...rest } = propsWithDefaults;
  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <SHeader {...rest}>{children}</SHeader>
    </ThemeProvider>
  );
};
