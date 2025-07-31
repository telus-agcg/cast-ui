import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '@themes';

export type TextDisplayProps = React.PropsWithChildren<{
  /**
   * Font size of text
   *
   * @default '16px'
   **/
  fontSize?: string;
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
  /**
   * font family of Text 
   *
   * @default defaultTheme
   **/
  fontFamily?: string
}>;

const defaultProps = {
  fontSize: '16px',
  fontFamily: Themes.canopyTheme.typography.fontFamily,
  theme: Themes.canopyTheme,
} satisfies Partial<TextDisplayProps>;

const StyledSpan = styled.span<{
  fontSize: string;
  fontFamily: string;
}>`
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize};
`;

export const TextDisplay = (props: TextDisplayProps) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { theme, fontSize, fontFamily, children, ...rest } = propsWithDefaults;
  return (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <StyledSpan fontSize={fontSize} fontFamily={fontFamily} {...rest}>
        {children}
      </StyledSpan>
    </ThemeProvider>
  );
};
