import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../../themes/index';

export type Props = {
  /**
   * Set BodyText Size
   *
   * @default '10'
   **/
  size?: '10' | '20';
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
};

const SBodyText = styled.p`
  font-weight: ${(props: Props) => props.theme.typography.bodyText.fontWeight};
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.typography.bodyText.fontSize};
  color: ${(props: Props) => props.theme.typography.color}
  line-height: ${(props: Props) => props.theme.typography.bodyText.lineHeight};
`;

export const BodyText: React.FunctionComponent<Props> = ({
  theme,
  children,
  ...props
}) => (
    <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
      <SBodyText {...props}>{children}</SBodyText>
    </ThemeProvider>
  );
BodyText.defaultProps = { theme: Themes.defaultTheme, size: '10' };
