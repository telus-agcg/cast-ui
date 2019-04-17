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

const SHeadline = styled.h2`
  font-weight: ${(props: Props) => props.theme.typography.headline.fontWeight};
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.typography.headline.fontSize};
  color: ${(props: Props) => props.theme.typography.color}
  line-height: ${(props: Props) => props.theme.typography.headline.lineHeight};
`;

export const Headline: React.FunctionComponent<Props> = ({
  theme,
  children,
  ...props
}) => (
  <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
    <SHeadline {...props}>{children}</SHeadline>
  </ThemeProvider>
);
Headline.defaultProps = { theme: Themes.defaultTheme };
