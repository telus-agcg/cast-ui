import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../../themes';

export type Props = {
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
};

const SCaption = styled.p`
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  color: ${(props: Props) => props.theme.typography.color}
  font-weight: ${(props: Props) =>
    props.theme.typography.caption[props.size!].fontWeight};
  font-size: ${(props: Props) =>
    props.theme.typography.caption[props.size!].fontSize};
  line-height: ${(props: Props) =>
    props.theme.typography.caption[props.size!].lineHeight};
`;

export const Caption: React.FunctionComponent<Props> = ({
  theme,
  children,
  ...props
}) => (
  <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
    <SCaption {...props}>{children}</SCaption>
  </ThemeProvider>
);
Caption.defaultProps = { theme: Themes.defaultTheme, size: 10 };
