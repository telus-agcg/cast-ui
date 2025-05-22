import React from 'react';
import styled, { ThemeProvider, DefaultTheme } from 'styled-components';
import { Themes } from '@themes';

export type TextDisplayProps = React.PropsWithChildren<{
  /**
   * Font size of the text.
   * @default '16px'
   */
  fontSize?: string;

  /**
   * Font family of the text.
   * @default theme.typography.fontFamily
   */
  fontFamily?: string;

  /**
   * Theme from styled-components ThemeProvider.
   * @default Themes.canopyTheme
   */
  theme?: DefaultTheme;
}>;

const defaultTheme = Themes.canopyTheme;

const StyledSpan = styled.span<{
  fontSize: string;
  fontFamily: string;
}>`
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize};
`;

export const TextDisplay: React.FC<TextDisplayProps> = ({
  fontSize = '16px',
  fontFamily = defaultTheme.typography.fontFamily,
  theme = defaultTheme,
  children,
  ...rest
}) => {
  return (
    <ThemeProvider theme={(outerTheme: DefaultTheme) => outerTheme || theme}>
      <StyledSpan fontSize={fontSize} fontFamily={fontFamily} {...rest}>
        {children}
      </StyledSpan>
    </ThemeProvider>
  );
};