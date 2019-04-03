import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../../themes';

export type Props = {
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

const SDisplay = styled.h1`
  font-weight: ${(props: Props) => props.theme.typography.display.fontWeight};
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.typography.display.fontSize};
  line-height: ${(props: Props) => props.theme.typography.display.lineHeight};
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
Display.defaultProps = { theme: Themes.defaultTheme };
