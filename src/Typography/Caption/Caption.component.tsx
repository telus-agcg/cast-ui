import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '@themes';

export type CaptionProps = React.PropsWithChildren<{
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

const SCaption = styled.p<CaptionProps>`
  font-family: ${(props) =>
    props.theme.typography.caption[props.size!].fontFamily};
  color: ${(props) => props.theme.typography.color};
  font-weight: ${(props) =>
    props.theme.typography.caption[props.size!].fontWeight};
  font-size: ${(props) => props.theme.typography.caption[props.size!].fontSize};
  line-height: ${(props) =>
    props.theme.typography.caption[props.size!].lineHeight};
`;

const defaultProps = {
  size: 10,
  theme: Themes.canopyTheme,
} satisfies Partial<CaptionProps>;

export const Caption: React.FunctionComponent<CaptionProps> = (props) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { theme, children, ...rest } = propsWithDefaults;
  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <SCaption {...rest}>{children}</SCaption>
    </ThemeProvider>
  );
};
