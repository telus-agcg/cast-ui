import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../themes';

export type Props = {
  /**
   * Select Alert Style
   *
   * @default 'primary'
   **/
  alertStyle?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  /**
   * Toggle Alert Light Mode
   *
   * @default false
   **/
  lightMode?: boolean;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

const SAlert = styled.div`
  background: ${(props: Props) =>
    props.lightMode
      ? props.theme.styles[props.alertStyle!]['light'].alertBackground
      : props.theme.styles[props.alertStyle!].alertBackground};
  border-radius: ${(props: Props) => props.theme.common.borderRadius};
  color: ${(props: Props) =>
    props.lightMode
      ? props.theme.styles[props.alertStyle!]['light'].alertColor
      : props.theme.styles[props.alertStyle!].alertColor};
  border: 1px solid
    ${(props: Props) =>
      props.lightMode
        ? props.theme.styles[props.alertStyle!].alertBackground
        : props.theme.styles[props.alertStyle!].alertBackground};
  display: ${(props: Props) => props.theme.alert.display};
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.alert.fontSize};
  padding: ${(props: Props) => props.theme.alert.padding};
  font-weight: ${(props: Props) =>
    props.lightMode
      ? props.theme.alert.lightFontWeight
      : props.theme.alert.fontWeight};
  line-height: ${(props: Props) => props.theme.alert.lineHeight};
`;

export const Alert: React.FunctionComponent<Props> = ({
  children,
  theme,
  ...props
}) => (
  <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
    <SAlert {...props}>{children}</SAlert>
  </ThemeProvider>
);

Alert.defaultProps = {
  theme: Themes.defaultTheme,
  alertStyle: 'primary',
  lightMode: false,
};
