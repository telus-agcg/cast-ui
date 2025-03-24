import React from 'react';
import { ThemeProvider } from 'styled-components';

export type TextDisplayProps = React.PropsWithChildren<{
  /**
   * Font size of text
   *
   * @default '16px'
   **/
  fontSize?: string;
  /**
   * Weight of font
   *
   * @default 'bold'
   **/
  fontWeight?: string | number;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
}>;

const defaultProps = {
  fontSize: '16px',
  fontWeight: 'bold',
} satisfies Partial<TextDisplayProps>;

export const TextDisplay = (props: TextDisplayProps) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { theme, fontSize, fontWeight, children, ...rest } = propsWithDefaults;
  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <span style={{ fontSize, fontWeight }} {...rest}>
        {children}
      </span>
    </ThemeProvider>
  );
};
