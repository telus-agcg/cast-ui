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

const SSubTitle = styled.h2`
  font-weight: ${(props: Props) => props.theme.typography.subTitle.fontWeight};
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.typography.subTitle.fontSize};
  color: ${(props: Props) => props.theme.typography.color}
  line-height: ${(props: Props) => props.theme.typography.subTitle.lineHeight};
`;

export const SubTitle: React.FunctionComponent<Props> = ({
  theme,
  children,
  ...props
}) => (
  <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
    <SSubTitle {...props}>{children}</SSubTitle>
  </ThemeProvider>
);
SubTitle.defaultProps = { theme: Themes.defaultTheme };
