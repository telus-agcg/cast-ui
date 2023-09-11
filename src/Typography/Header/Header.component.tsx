import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../../themes/index';

export type Props = {
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
};

const Sheader = styled.h2`
  font-family: ${(props: Props) =>
    props.theme.typography.header[props.size!].fontFamily};
  color: ${(props: Props) => props.theme.typography.color};
  font-weight: ${(props: Props) =>
    props.theme.typography.header[props.size!].fontWeight};
  font-size: ${(props: Props) =>
    props.theme.typography.header[props.size!].fontSize};
  line-height: ${(props: Props) =>
    props.theme.typography.header[props.size!].lineHeight};
`;

export const Header: React.FunctionComponent<Props> = ({
  theme,
  children,
  ...props
}) => (
  <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
    <Sheader {...props}>{children}</Sheader>
  </ThemeProvider>
);
Header.defaultProps = { theme: Themes.canopyTheme, size: 10 };
