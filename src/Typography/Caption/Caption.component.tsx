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

const SCaption = styled.p`
  font-weight: ${(props: Props) => props.theme.typography.caption.fontWeight};
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.typography.caption.fontSize};
  color: ${(props: Props) => props.theme.colors.primary}
  line-height: ${(props: Props) => props.theme.typography.caption.lineHeight};
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
Caption.defaultProps = { theme: Themes.defaultTheme };
