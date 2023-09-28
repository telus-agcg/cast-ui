import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../../themes';

export type Props = {
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
};

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

export const Display: React.FunctionComponent<Props> = ({
  theme,
  children,
  ...props
}) => (
  <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
    <SDisplay {...props}>{children}</SDisplay>
  </ThemeProvider>
);
Display.defaultProps = {
  theme: Themes.canopyTheme,
  size: 10,
};
