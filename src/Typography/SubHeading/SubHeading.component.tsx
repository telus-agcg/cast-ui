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

const SSubHeading = styled.h2`
  font-weight: ${(props: Props) =>
    props.theme.typography.subHeading.fontWeight};
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.typography.subHeading.fontSize};
  color: ${(props: Props) => props.theme.colors.primary}
  line-height: ${(props: Props) =>
    props.theme.typography.subHeading.lineHeight};
`;

export const SubHeading: React.FunctionComponent<Props> = ({
  theme,
  children,
  ...props
}) => (
  <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
    <SSubHeading {...props}>{children}</SSubHeading>
  </ThemeProvider>
);
SubHeading.defaultProps = { theme: Themes.defaultTheme };
