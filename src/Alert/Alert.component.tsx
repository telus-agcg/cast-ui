import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { getPropsWithDefaults } from '@utils';
import { Themes } from '@themes';

export type AlertProps = React.PropsWithChildren<{
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
  /**
   * Toggle border visibility
   *
   * @default true
   **/
  displayWithBorder?: boolean;
}>;

const SAlert = styled.div<AlertProps>`
  background: ${(props) =>
    props.lightMode
      ? props.theme.styles[props.alertStyle!]['light'].alertBackground
      : props.theme.styles[props.alertStyle!].alertBackground};
  border-radius: ${(props) => props.theme.alert.borderRadius};
  color: ${(props) =>
    props.lightMode
      ? props.theme.styles[props.alertStyle!]['light'].alertColor
      : props.theme.styles[props.alertStyle!].alertColor};
  border: ${(props) =>
    props.displayWithBorder !== false
      ? `1px solid ${
          props.lightMode
            ? props.theme.styles[props.alertStyle!].alertBackground
            : props.theme.styles[props.alertStyle!].alertBackground
        }`
      : 'none'};
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.alert.fontSize};
  padding: ${(props) => props.theme.alert.padding};
  font-weight: ${(props) =>
    props.lightMode
      ? props.theme.alert.lightFontWeight
      : props.theme.alert.fontWeight};
  line-height: ${(props) => props.theme.alert.lineHeight};
`;

const defaultProps = {
  alertStyle: 'primary',
  lightMode: false,
  theme: Themes.canopyTheme,
} satisfies Partial<AlertProps>;

export const Alert: React.FunctionComponent<AlertProps> = (props) => {
  const propsWithDefaults = getPropsWithDefaults(defaultProps, props);
  const { theme, children, ...rest } = propsWithDefaults;
  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <SAlert {...rest}>{children}</SAlert>
    </ThemeProvider>
  );
};
