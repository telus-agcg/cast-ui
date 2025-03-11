import { Themes } from "@themes";
import * as React from "react";
import styled, { ThemeProvider } from "styled-components";

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
  theme: Themes.canopyTheme,
  size: 10,
} satisfies Partial<Props>;

export const Display: React.FunctionComponent<Props> = (props) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { theme, children } = propsWithDefaults;
  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <SDisplay {...propsWithDefaults}>{children}</SDisplay>
    </ThemeProvider>
  );
};
